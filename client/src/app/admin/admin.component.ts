import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userId = '';
  userActions: any;
  constructor( private route: ActivatedRoute, private http: HttpClient) {  }

  ngOnInit() {
    this.userId = this.route.snapshot.params.id;
    this.http.get(`http://localhost:8080/${this.userId}/admin`).subscribe(data => {
      this.userActions = data;
    });
  }

}
