import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, this.matchPasswords]]
    });
  }

  matchPasswords = (control: FormControl): { [s: string]: boolean } | null => {
    if (this.registerForm && this.registerForm.get('password')) {
      return control.value === this.registerForm.get('password')?.value ? null : { passwordMismatch: true };
    }
    return null;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const userData = {
        username: this.registerForm.value.username,
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        password: this.registerForm.value.password,
        email: this.registerForm.value.email,
        role: 'USER'
      };

      this.http.post('http://localhost:8080/api/users', userData)
        .pipe(
          tap(response => {
            this.successMessage = 'Usuario registrado exitosamente';
            this.errorMessage = null;
            this.registerForm.reset();
          }),
          catchError(error => {
            this.errorMessage = 'Error al registrar el usuario';
            this.successMessage = null;
            return throwError(() => error);
          })
        )
        .subscribe();
    }
  }
}
