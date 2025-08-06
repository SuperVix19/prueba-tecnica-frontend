import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth';
import { DataService } from '../../services/data';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ImageModal } from '../../components/image-modal/image-modal';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,  RouterModule, MatCardModule, MatButtonModule, MatDialogModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnDestroy {
  selectedItem: any = null;
  private suscription: Subscription;

  //Agreamos imagenes de ejemplo
  cards = [
    {
      title: 'Proyecto Alpha',
      imageUrl: 'https://picsum.photos/id/1/300/200',
      description: 'Un proyecto innovador sobre machine learning.'
    },
    {
      title: 'Servicio Beta',
      imageUrl: 'https://picsum.photos/id/20/300/200',
      description: 'Un servicio en la nube para análisis de datos.'
    },
    {
      title: 'Plataforma Gamma',
      imageUrl: 'https://picsum.photos/id/35/300/200',
      description: 'Una nueva plataforma para desarrolladores web.'
    }
  ];

  //Cuando hacemos clic en el botón de listado, home mostrará la información de Listado
  constructor(public authService: AuthService,private dataService: DataService, public dialog: MatDialog){
    this.suscription = this.dataService.selectedItem.subscribe(item => this.selectedItem = item);
  }

  //Lo autilizamos para el modal de las tres cards
  openImageModal(imageUrl: string): void{

    this.dialog.open(ImageModal, {
      data: {imageUrl: imageUrl},
      panelClass: 'image-modal-panel'
    });
  }

  //Destruimos el componente de Home
  ngOnDestroy() {
    this.suscription.unsubscribe();
  }
}
