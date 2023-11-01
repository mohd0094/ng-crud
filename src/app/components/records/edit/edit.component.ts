import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { Employee } from '../records-list';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editUserForm:any = FormGroup;
  submitted = false;
  id:any;
  mydata:any
  getData: any;


  constructor(
    private fBuilder: FormBuilder, 
    private router:Router, 
    private activeRoute:ActivatedRoute,
    private toastr:ToastrService,
    private service:AuthService,
    ) {
      this.editUserForm = this.fBuilder.group({
        id:[''],
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
        mobile: ['', Validators.required],
        designation: ['', Validators.required],
      })
     }


  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.warn(this.id);
      this.getByid(this.id)
    });
  }
  getByid (id: any) {
    this.service.editUser(id).subscribe((editData)=>{

      this.mydata = editData;
      this.editUserForm.controls['id'].setValue(this.mydata.id)
      this.editUserForm.controls['fullName'].setValue(this.mydata.fullName);
      this.editUserForm.controls['email'].setValue(this.mydata.email);
      this.editUserForm.controls['mobile'].setValue(this.mydata.mobile);
      this.editUserForm.controls['designation'].setValue(this.mydata.designation);

    })
  }


  get f() { return this.editUserForm.controls; }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.editUserForm.invalid) {
      return;
    }else{
      this.service.updateUser(this.editUserForm.value).subscribe({
        next: () => { 
          this.toastr.success('This user updated successfull ', 'Toastr fun!');
          setTimeout(()=>{
            this.router.navigate(['records/list']);
          },800)
         
         },     // nextHandler
        error: (Error) => { 
          console.log(Error);
  
         },    // errorHandler 
        
      })
    }

    // this.service.GetAll().subscribe(res => {
    //   this.getData = res;

    //   for (let index = 0; index < this.getData.length; index++) {
    //       const element = this.getData[index];

    //         if(element.email === this.editUserForm.value.email || element.email !== this.editUserForm.value.email) {
    //             console.log(element.email);

               
    //         }
    //   }

    //  })

     
     


    // if(this.editUserForm.value.email !== this.getData.email){

    //   console.log(this.mydata.id);
    //   // console.log(this.editUserForm.value);

    // }
  }

}
