import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listActive:boolean = false;
  id:any;
  hero = {
    name: 'I am Angular developer Akram'
  };
  constructor(private router:Router,private toastr:ToastrService, private activeRoute:ActivatedRoute) { }
  Logout(){
    this.toastr.success('Logged Out')
    sessionStorage.clear();
    setTimeout(() => {
      this.router.navigate([''])
    }, 1000);
  }
  ngOnInit(): void {
    // let editPage = this.router.navigateByUrl("/records/edit/**", { skipLocationChange: false });
    
   // navigate to /team/33/user/22
    // if(editPage){
    //   this.listActive = true;
    //   console.log(editPage);
    // }else{
    //   this.listActive = false;
    // }
    
     // ActivatedRoute
    }

    // this.activeRoute.paramMap.subscribe(parm=>{
    //   console.log(parm);
    // })
    // this.activeRoute.paramMap.subscribe(params => {
    //   this.id = params.get('id');
    //   console.log(this.id);

    // });


   
    
    

  }


