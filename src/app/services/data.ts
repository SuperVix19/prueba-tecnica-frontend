import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  public selectedItem = new BehaviorSubject<any>(null);

  updateSelectedItem(Item: any){
    this.selectedItem.next(Item);
  }
}
