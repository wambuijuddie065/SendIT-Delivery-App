import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupInterface } from 'src/app/Interfaces/interfaces';
import { AuthService } from 'src/app/Services/auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm!:FormGroup
  name!:string
  email!:string
  contact!:string
  password!:string
  message!:string

  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.signUpForm=this.fb.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]],
      contact:[null,[Validators.required]],
      password:[null,[Validators.required,Validators.minLength(8)]],
    })
  }
  get f(){

    return this.signUpForm.controls;

  }
  onSignUp(){
    const user:SignupInterface=this.signUpForm.value
    console.log(this.signUpForm);
    
    this.authService.signUp(user).subscribe((response)=>{
      console.log(response);
      
    } , (error)=>{console.log(error)
    })

    this.signUpForm.reset()
    this.router.navigate(['/auth/login'])}
    

}
