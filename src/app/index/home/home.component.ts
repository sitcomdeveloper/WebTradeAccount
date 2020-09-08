import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // allowcrtaccount = true;
  // notallowcrtaccount = false;
  
  constructor(private router: Router) {
    // console.log('home load');
   }

  ngOnInit(): void {
  //   if (localStorage.getItem('project')) {
  //     this.allowcrtaccount = false;
  //     this.notallowcrtaccount = true;
  //   }
  }
}
