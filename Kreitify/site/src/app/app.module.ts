import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovedadesComponent } from './home/novedades/novedades.component';
import { MasEscuchadasComponent } from './home/mas-escuchadas/mas-escuchadas.component';
import { GenreSelectorComponent } from './home/genre-selector/genre-selector.component';
import { AllSongsComponent } from './all-songs/all-songs.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SongDetailComponent,
    NovedadesComponent,
    MasEscuchadasComponent,
    GenreSelectorComponent,
    AllSongsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
