import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  searchQuery = { jobTitle: '', location: '' };
  
  @Output() searchEvent = new EventEmitter<{ jobTitle: string; location: string }>();

  constructor() {}

  ngOnInit(): void {}

  onSearch() {
    this.searchEvent.emit(this.searchQuery);
  }
}