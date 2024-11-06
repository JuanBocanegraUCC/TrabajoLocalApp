import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  searchQuery = { cargo: '', lugar: '' };
  
  @Output() searchEvent = new EventEmitter<{ cargo: string; lugar: string }>();

  constructor() {}

  ngOnInit(): void {}

  onSearch() {
    this.searchEvent.emit(this.searchQuery);
  }
}