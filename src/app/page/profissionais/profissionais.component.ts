import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  form: FormGroup

  constructor(private formBuilder: FormBuilder, private profissionaisService: ProfissionaisService) { 
    this.profissionais = []
  }

  ngOnInit(): void {
    //this.isLoggedIn$ = this.usersService.isLoggedIn();

    /*if (this.usersService.getLocalUser() != null) {
      this.user = this.usersService.getLocalUser()

      this.updateUserPlaylists()
    }*/

    this.form = this.formBuilder.group({
      "nome": new FormControl('', Validators.required),
      "sobrenome": new FormControl('', Validators.required),
      "email": new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      "cep": new FormControl('', Validators.required),
    });

    this.profissionaisService.getProfissionais().subscribe((profissionais: Usuario[]) => {
      this.profissionais = profissionais
    })
  }

  submit(){

  }

  get nome() {
    return this.form.get('nome')
  }

  get sobrenome() {
    return this.form.get('sobrenome')
  }

  get email() {
    return this.form.get('email')
  }

  get cep() {
    return this.form.get('cep')
  }
}
