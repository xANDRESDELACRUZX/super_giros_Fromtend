import { Component } from '@angular/core';
import { Login, User } from '../../Interfaces/Auth.interface';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(private authService:AuthService, private userService:UserService,private router: Router){}
  public pageRegister: boolean = false

  public User:User = {
    nombres:"",
    apellidos:"",
    email:"",
    password:""

  }

  public login:Login = {
    email:"",
    password:""
  }


  onActivatePageRegister(accion:boolean):void{
    this.clear()
    this.pageRegister = accion
  }

 // limpiar campos
  clear():void{
    this.User = {nombres:"",apellidos:"",email:"",password:""}
    this.login = {email:"",password:""}
  }

  onCurrentForm():void{

    if (!this.pageRegister) {
      this.login ={
        email: this.User.email,
        password: this.User.password
      }
      this.Login(this.login)
      return
    }

      this.Register(this.User)
  }

  Login(login:Login):void{
    this.authService.login(login).subscribe(
      (response) => {

        const{login,jwt,userID} = response
        if(login){

          this.userService.setToken(jwt)
          this.userService.setUserID(userID)

          this.router.navigate(['producto/lista']);

        }
      },
      (error) => {
        console.error('Error:', error);
      }

    )

  }

  Register(user:User):void{

    this.authService.register(user).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error('Error:', error);
      }
    )

  }


}
