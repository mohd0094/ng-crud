import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private router:Router, private toastr:ToastrService, private service:AuthService ) { }
  value:any;
  getData:any;
  mydata: any;
  pageSize:any;
  p:number = 1;
  totalLenght:any;
  searchText:any;




  rundamId =  'id'+Math.floor(Math.random() * 10000)
  

// searchbox fillter function start



searchData() {
  if(this.searchText !== ''){
    this.service.GetAll().subscribe((res: any) => {
      let keyword = this.searchText.toUpperCase();
        this.getData = res.filter((key: {fullName: string; email: string; mobile: string; designation: string; })=> {
          return (key.fullName.toUpperCase().includes(keyword) || key.email.toUpperCase().includes(keyword) || key.mobile.toUpperCase().includes(keyword) || key.designation.toUpperCase().includes(keyword) );
      })
    }) 
  }else{
    this.loadData();
  }
 
  }


  searchInput(){
    if(this.searchText === ''){
      this.loadData();
    }
  }

  addNewUser(){
    this.toastr.info('You can create new user')
    setTimeout(() => {
      this.router.navigate(['records/create']);
    }, 400);
    
  }

  loadData(){
    this.service.GetAll().subscribe((res: any) => {
      this.getData = res;
     })
  }

  ngOnInit(): void {
    this.loadData();
  }

  editUser(id:any){
    if (confirm('Are you sure? you want to edit this user')) {
      this.toastr.info('Edit successfully')
      this.router.navigate(['/records/', 'edit', id]);
    }
  }

  deleteUser(id:any){
    if (confirm('Are you sure? you want to delete this user')) {
      this.toastr.warning('Deleted successfully')
      this.service.RemoveData(id).subscribe((res: any) =>{
        this.loadData();
      })
    }
  }


}
