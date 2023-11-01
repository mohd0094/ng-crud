import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent  {
 

  constructor (
    private fBuilder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private toastr: ToastrService) { 

      sessionStorage.clear();
    }


  userData: any;

  loginForm: any = this.fBuilder.group({
    id: this.fBuilder.control('', Validators.required),
    password: this.fBuilder.control('', Validators.required)
  })

  proceedLoginForm () {
    if (this.loginForm.valid) {
      this.service.Getbycode(this.loginForm.value.id).subscribe(res => {
        this.userData = res;

        if (this.userData.password === this.loginForm.value.password) {
          if (this.userData.isActive) {
            sessionStorage.setItem('userName', this.userData.id);
            this.toastr.success('You have Logged in Successfully', 'In Active user');
            setTimeout(()=>{  
              this.router.navigate(['records/list'])
             },1000)
            
          } else {
            this.toastr.error('Please contact to admin', 'In Active user');
          }
        } else {
          this.toastr.error('Invaild credentials');
        }
      })
    } else {
      this.toastr.error('Invaild credentials');
    }
  }


}
