import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-additional-data',
  templateUrl: './additional-data.component.html',
  styleUrls: ['./additional-data.component.css']
  
})
export class AdditionalDataComponent {
@Output() labelDataToParent= new EventEmitter;
@Input() additionalLabelForAdditionalData:string='';

constructor(private formService:FormServiceService){

  

}


// variable decleration
valid:boolean=true;
reference:string='';
dataLabel:string='';
labelData:string='';

additionalData:any[]=[];

// form group and form control data
additionalDataValidation =new FormGroup({
  dropDownData : new FormControl(""),
  dropDownoptinalType : new FormControl(""),
  additionalDataLabel: new FormControl("")
})

sendData(){
this.dataLabel=this.additionalDataValidation.value.additionalDataLabel as string;
console.log("hii")
}
labelDataToDisplay()
{

  // required pattetrns declerations and assined specific regex patterns
  let stringPattern = /^[A-Za-z]+$/;
  let numberPattern = /^[0-9]+$/;
  let booleanPattern = /^(?:tru|fals)e$/;
  let hexadecimalPattern = /^[#][0-9A-Fa-f]+$/;
  let binaryPattern = /^[0-1]+$/;
  let dropDownOption = this.additionalDataValidation.value.dropDownoptinalType;
  this.labelData= this.additionalDataValidation.value.dropDownData as string;

    this.labelDataToParent.emit(this.labelData)
    this.additionalData.push({dataLabel:this.dataLabel,labelData:this.labelData});
    this.formService.addAditionalDetails({dataLabel:this.dataLabel,labelData:this.labelData});
    console.log("data",this.additionalData);

  // checking the label data type add store it i na reference 
  if (booleanPattern.test(this.labelData as string))
  {
      console.log('The value is a string.') ;
      this.reference = "boolean";
  }
   else if (binaryPattern.test(this.labelData as string))
  {
      this.reference = "binary";
  } 
  else if (stringPattern.test(this.labelData as string)) 
  {
    this.reference = "string";
  } 
  else if (numberPattern.test(this.labelData as string))
  {
    this.reference = "number";
  } 
  else if (hexadecimalPattern.test(this.labelData as string))
  {
    this.reference = "hexa-decimal";
  } 
  console.log("drop",dropDownOption,this.reference)

  // checking the types of both option and label data type and retrun value to the alert
  if (this.reference==dropDownOption)
  {
    this.valid = true;
  }
  else
  {
      this.valid = false;
      this.labelData="";
  }
  
}
}
