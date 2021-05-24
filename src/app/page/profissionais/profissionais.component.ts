import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/entidades/usuario';
import { ProfissionaisService } from 'src/app/services/profissionais.service';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css']
})
export class ProfissionaisComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  user: Usuario
  public profissionais: Usuario[]

  constructor(private profissionaisService: ProfissionaisService) { 
    this.profissionais = []
  }

  ngOnInit(): void {
    //this.isLoggedIn$ = this.usersService.isLoggedIn();

    /*if (this.usersService.getLocalUser() != null) {
      this.user = this.usersService.getLocalUser()

      this.updateUserPlaylists()
    }*/

    this.profissionaisService.getProfissionais().subscribe((profissionais: Usuario[]) => {
      this.profissionais = profissionais
    })
  }
}
