import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { inject } from '@angular/core/primitives/di';

@Component({
  selector: 'app-image-modal',
  standalone: true,
  imports: [MatDialogModule, MatIconModule, MatButtonModule],
  templateUrl: './image-modal.html',
  styleUrl: './image-modal.css'
})
export class ImageModal {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {imageUrl: string}) {}
}
