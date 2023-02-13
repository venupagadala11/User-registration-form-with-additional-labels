import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  sendData:any;
  sendFirstName:string="siiitaa";
  sendLastname:string='';
  sendAge:number=0;
  sendMobileNumber:number=0;
  sendUserName:string='';
  sendAdditionalDataLabel:Array<string>=[];
  sendLabelData:string='';
  sendLabelOption='';
  labelDataFromChild:string="";
  arr:any=[1];
  sendLabelToAdditionalComponent:string='';
  dataId:number=1;

  // creating a fromgroup to add form controls na dadded different validations to them
  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.compose([Validators.pattern("^[A-Za-z]+"),Validators.maxLength(256),Validators.minLength(3)])),
    lastName: new FormControl('',Validators.compose([Validators.pattern("^[A-Za-z]+")])),
    age: new FormControl('',Validators.compose([Validators.required,Validators.min(0),Validators.max(999),Validators.pattern("^[0-9]+$")])),

    mobileNumber: new FormControl('',Validators.compose([Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]+$")])),
    email: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]),
    userName : new FormControl('',[Validators.pattern("^[A-Za-z][A-Za-z0-9_]{7,29}$")]),
    additionalData : new FormControl('',[]),
  });

  
  additionalDataLabel:any|null;
  get firstName()
  {
    return this.profileForm.get('firstName')
  }

  get lastName()
  {
    return this.profileForm.get('lastName')
  }

  get age()
  {
    return this.profileForm.get('age')
  }
  
  get mobileNumber()
  {
    return this.profileForm.get('mobileNumber')
  }
  
  get email()
  {
    return this.profileForm.get('email')
  }
  
  get getUserName()
  {
    return this.profileForm.get('userName')
  }

  
  // assigning additional data label to a variable to send it to the common component
  get additionalData(){
  // this.additionalDataLabel.push(this.profileForm.value.additionalData);
  this.sendLabelToAdditionalComponent=this.profileForm.value.additionalData as string;
  return this.profileForm.get('additionalData');
  console.log("label")
}

// accessing label data from the common component
getLabelDataFromChild(event:string)
{
  this.labelDataFromChild=event;
}

constructor(private router: Router, private formService: FormServiceService) {}

  // sending complete form data to the display component along with the additional data and
  //  navigating to the display component oon clicking the submit button
  onSubmit()
  {
      console.log(this.profileForm); //console form data to verification on console
      this.sendData = this.profileForm.value; 
      this.router.navigate(['display'],{
      state: { sendDataToDisplay : this.sendData, id : this.dataId }
      

  })

  this.formService.userDetails(this.sendData).subscribe((data: any) => {
    console.log("Subscribe id",data.id);
    this.dataId=data.id;


  });

  }
  fun(){
    this.arr.push(1)
  }
}
