import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-productlist',
  templateUrl: './admin-productlist.component.html',
  styleUrls: ['./admin-productlist.component.scss']
})
export class AdminProductlistComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
