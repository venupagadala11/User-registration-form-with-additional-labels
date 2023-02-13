import { Component } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-dispaly',
  templateUrl: './dispaly.component.html',
  styleUrls: ['./dispaly.component.css']
})
export class DispalyComponent {

  // declerations
  dataToDisplay:any;
  labelData;
  userAdditionalData:any[]=[];
  userDetails:any[]=[];

  constructor(private router: Router, private route:ActivatedRoute, private formService:FormServiceService){

    // Get data from the app component in the local variables to print them in this component
    this.dataToDisplay = this.router.getCurrentNavigation()?.extras.state?.['sendDataToDisplay'];
    this.labelData = this.router.getCurrentNavigation()?.extras.state?.['AdditionalValue'];
    // console.log("dis",this.dataToDisplay, this.router.getCurrentNavigation()); //just for debugging purpose
    this.userAdditionalData=this.formService.additionalDetails;
    // console.log("display",this.userAdditionalData);
  }


  ngOnInit(): void {
    this.formService.getUsers().subscribe(data => 
      {
      this.userDetails = data;
      console.log("userDetails",data);
      });
  }


}
