import { Component, OnInit } from '@angular/core';
import { Dropdown, Collapse, initMDB } from 'mdb-ui-kit';
import { UserService, AppUser } from '../../service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: AppUser | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    initMDB({ Dropdown, Collapse });
    this.user = this.userService.getUser();
    console.log('User loaded in ProfileComponent:', this.user);
  }

  search(query: string): void {
    console.log('Buscando:', query);
  }
}

