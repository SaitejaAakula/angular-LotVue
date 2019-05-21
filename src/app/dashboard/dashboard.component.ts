import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  responseArray: PostDetails[];
  message: string;
  edit: number;
  userId: number;
  title: string;
  body: string;
  showMessagelbl: boolean = false;
  displayFields: boolean = false;
  save = {
    userId: 0,
    title: '',
    body: ''
  }
  constructor(private service : DashboardService, private router: Router){

  }
  ngOnInit(){
    if(localStorage.getItem("userId") !== "lotvue"){
      this.router.navigateByUrl('login');
    }
    this.service.getDetails().then((res:PostDetails[]) => {
      this.responseArray = res;
    });
  }
  delete(id){
    this.service.deleteDetails(id).then((res => {
      this.message = "Record Deleted Successfully..!";
    }))
  };
  update(updatedRecord){
    console.log('updatedRecord -> ', this.userId, this.title, this.body);
    const obj = {
      id: updatedRecord.id,
      userId: this.userId,
      title: this.title,
      body: this.body
    }
    this.service.putDetails(obj).then((res =>{
      this.edit = 0;
      this.message = "Record Updated Successfully..!"
      this.showMessagelbl = true;
    }))
  }
  addRecordBtn(){
    this.displayFields = true;
    this.showMessagelbl = false;
  }
  cancelRecordBtn(){
    this.displayFields = false;
  }
  saveRecordBtn(){
    this.displayFields = false;
        this.service.postDetails(this.save).then((res => {
      this.message = "Record Inserted Successfully..!";
            this.showMessagelbl = true;
    }))
  }

}
interface PostDetails{
userId: number,
id: number,
title: string,
body: string
}