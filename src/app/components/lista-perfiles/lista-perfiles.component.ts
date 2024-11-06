import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';

@Component({
  selector: 'app-lista-perfiles',
  templateUrl: './lista-perfiles.component.html',
  styleUrls: ['./lista-perfiles.component.css']
})
export class ListaPerfilesComponent implements OnInit {
  profiles: any[] = [];
  filteredProfiles: any[] = [];

  constructor(private perfilService: PerfilService) {}

  ngOnInit(): void {
    this.loadProfiles();
  }

  loadProfiles() {
    this.perfilService.getProfiles().subscribe((data) => {
      this.profiles = data;
      this.filteredProfiles = data;
    });
  }

  onFilter(query: { cargo: string; lugar: string }) {
    this.filteredProfiles = this.profiles.filter(profile =>
      profile.jobTitle.toLowerCase().includes(query.cargo.toLowerCase()) &&
      profile.location.toLowerCase().includes(query.lugar.toLowerCase())
    );
  }

  editProfile(id: number) {
  }
  
  deleteProfile(id: number) {
    this.perfilService.deleteProfile(id).subscribe(() => {
      this.loadProfiles();
    });
  }

  onSearch(query: { cargo: string, lugar: string }) {
  }
}
