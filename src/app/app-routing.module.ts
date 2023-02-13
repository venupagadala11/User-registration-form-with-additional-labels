import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { DispalyComponent } from './dispaly/dispaly.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';



const routes: Routes = [
  { path: '', component: RegistrationFormComponent },
  {path:'display', component: DispalyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
