import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from 'src/app/entidades/usuario';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  form: FormGroup
  user: Usuario
  Data: number = Date.now()
  ListaHabilidades: string[]
  fileSelector: HTMLInputElement
  profilePhoto: HTMLImageElement
  name: any;
  path: string;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      "nome": new FormControl('', Validators.required),
      "sobrenome": new FormControl('', Validators.required),
      "email": new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      "confirmEmail": new FormControl('', Validators.required),
      "senha": new FormControl('', Validators.required),
      "confirmSenha": new FormControl('', Validators.required),
      "dia": new FormControl('', Validators.required),
      "mes": new FormControl('', Validators.required),
      "ano": new FormControl('', Validators.required),
      "sexo": new FormControl('', Validators.required),
      "tipoDeConta": new FormControl('', Validators.required),
      "habilidades": new FormControl('')
    }, {
      validator: [this.emailMatchValidation("email", "confirmEmail"), this.senhaMatchValidation("senha", "confirmSenha")]
    });

    this.user = this.usersService.getLocalUser()

    this.fillForm()

    document.getElementById("username").textContent = this.nome.value + " " + this.sobrenome.value

    document.getElementById("email").append("  " + this.email.value)
    document.getElementById("tipoDeConta").append("  " + this.tipoConta.value)

    this.fileSelector = <HTMLInputElement>document.getElementById('fileSelector')
    this.profilePhoto = <HTMLImageElement>document.getElementById('profilePicture')

    this.fileSelector.addEventListener('change', (event: Event) => {
      const file = this.fileSelector.files[0]

      if (file) {
        //var img = document.createElement("img")

        var reader = new FileReader()
        reader.onloadend = () => {
          //console.log(reader.result)

          this.loadImage(reader.result.toString())
        }

        reader.readAsDataURL(file);
        //$("input").after(img)
      }
    });
  }

  submit() {
    let updatedUser: Usuario

    if(this.tipoConta.value == "Contratante"){
      updatedUser = { id: this.user.id, nome: this.nome.value, sobrenome: this.sobrenome.value, email: this.email.value, senha: this.senha.value, dia: this.dia.value, mes: this.mes.value, ano: this.ano.value, sexo: this.sexo.value, tipoConta: this.tipoConta.value, habilidades: [], profilePicture: this.user.profilePicture}
    }
    else if(this.tipoConta.value == "Profissional"){
      if(this.habilidades.value.length != 0){
        this.ListaHabilidades = this.habilidades.value.split(",")
        this.user.habilidades = this.ListaHabilidades

        updatedUser = { id: this.user.id, nome: this.nome.value, sobrenome: this.sobrenome.value, email: this.email.value, senha: this.senha.value, dia: this.dia.value, mes: this.mes.value, ano: this.ano.value, sexo: this.sexo.value, tipoConta: this.tipoConta.value, habilidades: this.ListaHabilidades, profilePicture: this.user.profilePicture}
      }else{
        updatedUser = { id: this.user.id, nome: this.nome.value, sobrenome: this.sobrenome.value, email: this.email.value, senha: this.senha.value, dia: this.dia.value, mes: this.mes.value, ano: this.ano.value, sexo: this.sexo.value, tipoConta: this.tipoConta.value, habilidades: [], profilePicture: this.user.profilePicture}
      }
    }

    this.usersService.updateUser(updatedUser).subscribe()

    document.getElementById("username").textContent = this.nome.value + " " + this.sobrenome.value
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

  get confirmEmail() {
    return this.form.get('confirmEmail')
  }

  get senha() {
    return this.form.get('senha')
  }

  get confirmSenha() {
    return this.form.get('confirmSenha')
  }

  get dia() {
    return this.form.get('dia')
  }

  get mes() {
    return this.form.get('mes')
  }

  get ano() {
    return this.form.get('ano')
  }

  get sexo() {
    return this.form.get('sexo')
  }

  get tipoConta() {
    return this.form.get('tipoDeConta')
  }

  get habilidades() {
    return this.form.get('habilidades')
  }

  emailMatchValidation(email: string, confirmEmail: string) {
    return (formGroup: FormGroup) => {
      const controlToMatch = formGroup.controls[email];
      const control = formGroup.controls[confirmEmail];

      if (control.errors && !control.errors.mustMatch) {
        return;
      }

      if (controlToMatch.value !== control.value) {
        control.setErrors({ emailMatchValidationError: true });
      } else {
        control.setErrors(null);
      }
    }
  }

  senhaMatchValidation(senha: string, confirmSenha: string) {
    return (formGroup: FormGroup) => {
      const controlToMatch = formGroup.controls[senha];
      const control = formGroup.controls[confirmSenha];

      if (control.errors && !control.errors.mustMatch) {
        return;
      }

      if (controlToMatch.value !== control.value) {
        control.setErrors({ senhaMatchValidationError: true });
      } else {
        control.setErrors(null);
      }
    }
  }

  logout() {
    this.usersService.logout()
  }

  fillForm() {
    this.nome.setValue(this.user.nome)
    this.sobrenome.setValue(this.user.sobrenome)
    this.email.setValue(this.user.email)
    this.senha.setValue(this.user.senha)
    this.dia.setValue(this.user.dia)
    this.mes.setValue(this.user.mes)
    this.ano.setValue(this.user.ano)
    this.sexo.setValue(this.user.sexo)
    this.tipoConta.setValue(this.user.tipoConta)
    this.habilidades.setValue(this.user.habilidades)
  }

  loadImage(string: string) {
    let height = this.profilePhoto.height
    let width = this.profilePhoto.width
  
    this.profilePhoto.src = string
    this.profilePhoto.height = height
    this.profilePhoto.width = width
  
    //fileSelector.after(profilePhoto)
  
    let updatedUser: Usuario = { id: this.user.id, nome: this.user.nome, sobrenome: this.user.sobrenome, email: this.user.email, senha: this.user.senha, dia: this.user.dia, mes: this.user.mes, ano: this.user.ano, sexo: this.user.sexo, tipoConta: this.user.tipoConta, habilidades: this.user.habilidades, profilePicture: string}
    this.usersService.updateUser(updatedUser).subscribe()
  }
}

/*function loadImage(string: string, user: Usuario, usersService: UsersService) {
  var profilePhoto = <HTMLImageElement>document.getElementById('profilePicture')
  let fileSelector = <HTMLInputElement>document.getElementById('fileSelector')

  let height = profilePhoto.height
  let width = profilePhoto.width

  console.log(height + " " + width)

  profilePhoto.src = string
  profilePhoto.height = height
  profilePhoto.width = width

  //fileSelector.after(profilePhoto)

  let updatedUser: Usuario = { id: this.user.id, nome: this.nome.value, sobrenome: this.sobrenome.value, email: this.email.value, senha: this.senha.value, dia: this.dia.value, mes: this.mes.value, ano: this.ano.value, sexo: this.sexo.value, tipoConta: this.tipoConta.value, habilidades: this.ListaHabilidades, profilePicture: ""}
  usersService.updateUser(updatedUser).subscribe()
}*/

function loadImage2() {
  let fileSelector = <HTMLInputElement>document.getElementById('fileSelector')
  let profilePhoto = <HTMLImageElement>document.getElementById('profilePicture')

  fileSelector.addEventListener('change', (event: Event) => {
    const file = fileSelector.files[0]

    if (file) {
      var reader = new FileReader()
      reader.onloadend = function () {
        profilePhoto.src = reader.result.toString()
      }

      reader.readAsDataURL(file);
      fileSelector.after(profilePhoto)
    }
  });
}


