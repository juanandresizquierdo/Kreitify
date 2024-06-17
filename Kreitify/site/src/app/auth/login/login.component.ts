import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { UserService, AppUser } from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient, private userService: UserService) {}

  onLogin(): void {
    this.http.get<AppUser>(`http://localhost:8080/api/users/username/${this.username}`)
      .pipe(
        catchError(error => {
          console.error('Error al autenticar el usuario', error);
          alert('Error en la autenticación, por favor verifica tus credenciales.');
          return throwError(error);
        })
      )
      .subscribe(user => {
        if (user && user.password === this.password) {
          this.userService.setUser(user);
          this.router.navigate(['/home']);
        } else {
          alert('Nombre de usuario o contraseña incorrectos.');
        }
      });
  }
}
