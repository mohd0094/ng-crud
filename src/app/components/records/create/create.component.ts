import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createUserForm!: FormGroup;
  submitted = false;
  rundamId =  'id'+Math.floor(Math.random() * 10000)
  userData:any;
  constructor(
    private fBuilder:FormBuilder, 
    private toastr:ToastrService,
    private router:Router,
    private service:AuthService
    ) {
      this.service.GetAll().subscribe(key=> {
    
        console.log(key);
        return true;
   
     });
   
      
     }

  ngOnInit(): void {
    this.createUserForm = this.fBuilder.group({
      id: [this.rundamId],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      mobile: ['', Validators.required],
      designation: ['', Validators.required],
    })

    
   
  }

  get f() { return this.createUserForm.controls; }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.createUserForm.invalid) {
      return;
  }else{
    
    this.service.CreateUser(this.createUserForm.value).subscribe({
      next: () => { 
        this.toastr.success('This user updated successfull ', 'Toastr fun!');
        this.router.navigate(['records/list']);
       },     // nextHandler
      error: () => { 
        this.toastr.error('This user cant not upated server error ', 'Toastr fun!');

       },    // errorHandler 
      
    })
  }
 
  }



 

  // const userExists = this.users.some(user => user.name === newUser.name);
// if(userExists) {
//     return new Error({error:'User exists'})
// }



}
