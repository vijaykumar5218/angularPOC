import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
  })
export class LoginService {
  
    userDetails;
    constructor(private http:HttpClient) { 
      console.log('Invoked Reg Service method...')
    }
    logInDetails={};

    fetchByCategory(emailPassword:FormGroup){
     
      console.log('invoked reg... from service');
      console.log(emailPassword);
      console.log(emailPassword.value);
  
      var json={"VijayAppstore":emailPassword.value}
      this.http.get("http://x-workz.mj.milesweb.cloud/x-workz-api/v2/fetchData/VijayAppstore").subscribe(data => {
              console.log('Response data is:' + data);
              console.log(data);
              this.userDetails==<[]> data['storedDataList'];
              console.log(data['storedDataList']);

              console.log(data['storedDataList']['0']);

              console.log(data['storedDataList']['0'][ 'firstName']);

          }, error => {
              console.log('error in http');
          }, () => {
              console.log('no more data');
          });
  
    }
  }
  