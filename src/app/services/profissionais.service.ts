import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../entidades/usuario';

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {
  urlPublic

  constructor(private httpClient: HttpClient) {
    this.urlPublic = "http://localhost:3000/users"
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getProfissionais(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.urlPublic).pipe(map(items =>
      items.filter(item => item.tipoConta == "Profissional")))
  }

  /*getPublicPlaylists(): Observable<any> {
    return this.httpClient.get<Usuario[]>(this.urlPublic)
  }*/

  /*getPublicPlaylistsById(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.urlPublic + '/' + id)
  }*/

  /*addPublicPlaylists(playlist: Playlist): Observable<Playlist> {
    return this.httpClient.post<Playlist>(this.urlPublic, JSON.stringify(playlist), this.httpOptions)
  }*/
}
