import { Component, OnInit } from '@angular/core';
import { UserService, AppUser } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: AppUser | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    console.log('UserService:', this.userService);
    console.log('User loaded in ProfileComponent:', this.user);
  }

  editProfile(): void {
    console.log('Editar Perfil');
  }

  changePassword(): void {
    console.log('Cambiar Contraseña');
  }
}


