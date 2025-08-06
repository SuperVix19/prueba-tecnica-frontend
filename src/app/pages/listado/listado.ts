import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';
import { DataService } from '../../services/data';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgxPaginationModule, CommonModule],
  templateUrl: './listado.html',
  styleUrl: './listado.css'
})

export class ListadoComponent implements OnInit {
  items: any[] = [];
  p: number = 1; // Variable para controlar la página actual

  constructor(private apiService: ApiService, private dataService: DataService, private router: Router){}

  ngOnInit(): void {
    // Llama al servicio para obtener los datos cuando el componente se inicia
    this.apiService.getPhotos().subscribe(data => {
      this.items = data.slice(0,50); //Limitamos
    });
  }

  selectItem(item: any){
    // Guarda el item seleccionado en el servicio de datos
    this.dataService.updateSelectedItem(item);
    // Redirige al home para mostrar los detalles
    this.router.navigate(['/home']);
  }
}
