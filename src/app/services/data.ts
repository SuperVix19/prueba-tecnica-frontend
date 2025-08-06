import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  //canal reactivo para compartir el item seleccionado entre componentes
  public selectedItem = new BehaviorSubject<any>(null);

  //Emite un nuevo item seleccionando a todos los suscriptores
  updateSelectedItem(Item: any){
    this.selectedItem.next(Item);
  }
}
