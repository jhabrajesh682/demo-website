import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  constructor(
    private route: Router) { }


  logout() {
    console.log("logout called");

    localStorage.clear()
    this.route.navigate([`../login/`])
  }



}
