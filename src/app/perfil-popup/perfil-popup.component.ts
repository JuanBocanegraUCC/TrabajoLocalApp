import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-perfil-popup',
  templateUrl: './perfil-popup.component.html',
  styleUrls: ['./perfil-popup.component.css']
})
export class PerfilPopupComponent {
  @Input() profile: any;
  @Output() close = new EventEmitter<void>();
  rating = 0;
  comment = '';

  setRating(star: number) {
    this.rating = star;
  }

  submitReview() {
    console.log('Calificación:', this.rating);
    console.log('Comentario:', this.comment);
    this.close.emit();
  }

  closePopup() {
    this.close.emit();
  }
}
