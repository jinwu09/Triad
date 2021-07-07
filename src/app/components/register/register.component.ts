import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(    
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
    ) { }


  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      account_fname:['', Validators.required],
      account_lname:['', Validators.required],
      account_email:['', Validators.required],
      account_password:['', Validators.required],
      account_address:['', Validators.required]
    });
  }

  onSubmit(event: any){
    if(this.registrationForm.invalid){
      console.log("Invalid Input")
    }else{
      this.dataService.request('register', this.registrationForm.value).subscribe((res: any ) =>{
        if(res.data){    
          this.router.navigate(['']);
        }else if(res.error){
          alert('Account Already Exist')
        }
      })
    }
  }
}
