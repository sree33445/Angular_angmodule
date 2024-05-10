import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pwa',
  templateUrl: './pwa.component.html',
  styleUrl: './pwa.component.css',
})
export class PwaComponent implements OnInit {
  posts: any = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((f) => (this.posts = f));
  }
}
