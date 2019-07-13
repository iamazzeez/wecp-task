import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userId = 'hello';
  userActions: [];
  constructor( private route: ActivatedRoute) {  }

  ngOnInit() {
    this.userId = this.route.snapshot.params.id;
  }

}
