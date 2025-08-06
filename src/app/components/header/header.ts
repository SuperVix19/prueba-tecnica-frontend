import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormField } from '@angular/material/form-field';
import { MatDivider } from "@angular/material/divider";
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatFormField, MatDivider, MatInputModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})

export class HeaderComponent {
  mobileSearchActive = false;

  constructor(public authService: AuthService){}

  logout() {
    this.authService.logout();
  }

  //Función para controlar la visibilidad del buscador en móviles
  toggleMobileSearch(){
    this.mobileSearchActive = !this.mobileSearchActive;
  }
}
