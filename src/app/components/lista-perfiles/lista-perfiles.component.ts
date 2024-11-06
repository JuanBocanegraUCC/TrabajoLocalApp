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
  selectedProfile: any = null;

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

  onSearch(query: { jobTitle: string; location: string }) {
    this.filteredProfiles = this.profiles.filter(profile =>
      (profile.jobTitle?.toLowerCase() || '').includes(query.jobTitle.toLowerCase()) &&
      (profile.location?.toLowerCase() || '').includes(query.location.toLowerCase())
    );
  }

  deleteProfile(id: number) {
    this.perfilService.deleteProfile(id).subscribe(() => {
      this.loadProfiles();
    });
  }

  openProfilePopup(profile: any) {
    this.selectedProfile = profile;
  }

  closeProfilePopup() {
    this.selectedProfile = null;
  }
}
