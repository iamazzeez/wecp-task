import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId = '';
  userActions =  [];
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params.id;
  }

  sendData(data) {
    this.http.post('http://localhost:8080/event', data).subscribe(() => {
      console.log('sent!!');
    });
  }

  hoverEvent(image) {
    this.sendData({
      eventType: 'hover',
      image,
      userId: this.userId
    });
  }

  clickEvent(image) {
    this.sendData({
      eventType: 'clicked',
      image,
      userId: this.userId
    });
  }


}
