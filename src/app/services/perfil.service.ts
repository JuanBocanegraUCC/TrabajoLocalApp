import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Perfil {
  id?: number;
  name: string;
  jobTitle: string;
  description: string;
  phone: string;
  location: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private apiUrl = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient) {}

  getProfiles(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(this.apiUrl);
  }

  createProfile(profile: Perfil): Observable<Perfil> {
    return this.http.post<Perfil>(this.apiUrl, profile);
  }

  getProfile(id: number): Observable<Perfil> {
    return this.http.get<Perfil>(`${this.apiUrl}/${id}`);
  }

  updateProfile(id: number, profile: Perfil): Observable<Perfil> {
    return this.http.put<Perfil>(`${this.apiUrl}/${id}`, profile);
  }

  deleteProfile(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
