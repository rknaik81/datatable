import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts:any = [];
 constructor(private apiService : ApiService) {}

  ngOnInit() {
    this.getContacts();
  }

 public  getContacts(){
    this.contacts = [];
    this.apiService.getContacts().subscribe((data: {}) => {
          this.contacts = data;
        });
  }
}
