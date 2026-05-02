import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Activity4Api } from '../../services/activity4-api';

@Component({
  selector: 'app-activity4-user-list',
  imports: [CommonModule],
  templateUrl: './activity4-user-list.html',
  styleUrl: './activity4-user-list.css',
})
export class Activity4UserList implements OnInit {
  users: any[] = [];
  loading: boolean = true;

  constructor(private apiService: Activity4Api) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe((data: any) => {
      console.log('API Data:', data);
      this.users = data;
      this.loading = false;
    });
  }
}
