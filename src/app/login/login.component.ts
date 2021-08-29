import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { HttpService } from '../services/http.service'
import { Router, ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  a: string
  name: string
  progressCount
  enteredText = ''
  newPost = ''
  
  loginObj: any = {}
  constructor(private snackBar: MatSnackBar,
    private http: HttpService,
    private route: Router) {
 
  }
 

  ngOnInit() {
  }

  userLogin() {
   
   
    let postObj = {
      username: this.loginObj.loginEmail,
      password: this.loginObj.loginPassword
    }
   
this.route.navigate([`../add-location/`])
  }

  
}
