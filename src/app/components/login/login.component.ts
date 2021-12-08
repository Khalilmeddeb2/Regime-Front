import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userlog = new User()

  loginUserData = {
    login : '',
    password : '',
    //token : ''
  }

  constructor(private router:Router, private userService : UserServiceService) { }

  ngOnInit(): void {
  }
  

  go()
  {
    this.loginUser();
    console.log(this.loginUserData)
    
  }

  onSubmit(){
    this.go();
  }

  /* loginUser()
  {
    this.userService.loginUser(this.loginUserData).subscribe(data =>{
      console.log('login method')
      console.log(data)
      localStorage.setItem('token', data.token)
    })
  } */

  loginUser() {

    this.userService.loginUser(this.loginUserData).subscribe(data =>{
      console.log('login method')
      this.userlog = data[0]
      console.log(this.userlog)
      console.log('le token est :' +data[1])


      setitem(data)
      if(this.userlog.role == "admin")
    {
      this.router.navigate(['/admin-dashbord'])
    }
      if(this.userlog.role == "patient")
    {
      this.router.navigate(['/profilClient'])
    }
    if(this.userlog.role == "coach")
    {
      this.router.navigate(['/coach-patients'])
    }
    if(this.userlog.role == "medecin")
    {
      this.router.navigate(['/medecinHome'])
    }
    })

    async function setitem(data) {
      await localStorage.setItem('token',data[1])
      
    }
    
  }




}
