import { Component } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';

@Component({
  selector: 'app-perfil-completar',
  templateUrl: './perfil-completar.component.html',
  styleUrls: ['./perfil-completar.component.css']
})
export class PerfilCompletarComponent {
  loggedIn = false;
  username = '';
  password = '';
  profile = {
    name: '',
    jobTitle: '',
    description: '',
    phone: '',
    location: '',
    imageUrl: ''
  };

  constructor(private perfilService: PerfilService) {}

  login() {
    if (this.username === 'admin' && this.password === '1234') {
      this.loggedIn = true;
    } else {
      alert('Usuario o contraseña incorrecta');
    }
  }

  submitProfile() {
    const newProfile = { 
      ...this.profile,
      id: new Date().getTime()
    };
    
    this.perfilService.createProfile(newProfile).subscribe(response => {
      alert('Perfil guardado exitosamente');
      this.resetProfile();
    });
  }

  resetProfile() {
    this.profile = {
      name: '',
      jobTitle: '',
      description: '',
      phone: '',
      location: '',
      imageUrl: ''
    };
  }
}
