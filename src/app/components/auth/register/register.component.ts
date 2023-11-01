import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {



  constructor (private fBuilder: FormBuilder, 
    private service:AuthService, 
    private router:Router, 
    private toastr:ToastrService) { }
  ngOnInit (): void {
   
  }


  signupForm:any = this.fBuilder.group({
    id:this.fBuilder.control('',  Validators.required),
    fullName:this.fBuilder.control('',  Validators.required),
    password:this.fBuilder.control('', Validators.required),
    isActive:this.fBuilder.control(false)
  })

  proceedregisteration(){
    if (this.signupForm.valid) {
      this.service.proceedSingup(this.signupForm.value).subscribe(res=>{

        this.toastr.success('This singup user successfull ', 'Toastr fun!');
        this.router.navigate(['login']);
      })  
    }else{
      this.toastr.error('Hello this is wrong ', 'Toastr fun!');
    }
  }

  // singUp () {
  //   this._http.post<any>("http://localhost:3000/signup", this.signupForm.value).subscribe({
  //     next: (result: any) => {
  //     alert("Sign up successFull ")
  //     this.signupForm.reset();
  //     this.router.navigate([ 'login' ])
  //     },
  //     error: (err: any) => {
  //       alert('server arror throgh')
  //     }
  //   })
  // }



}
