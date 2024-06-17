import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OneSignal } from 'onesignal-ngx';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl:'./app.component.html',
})
export class AppComponent implements OnInit {
  data: { [key: string]: any } = {};
  constructor(private http: HttpClient, private oneSignal: OneSignal) {
    this.oneSignal.init({
      appId: "7bb3c888-1958-46dc-b92b-1214692ed5b5",
    });
  }

  ngOnInit(): void {
    this.http.get('https://api-medicina-abf75-default-rtdb.firebaseio.com/Data.json?_=' + new Date().getTime()).subscribe(response => {
      this.data = response;
      console.log("Conexion Exitosa")
    })
  }
}