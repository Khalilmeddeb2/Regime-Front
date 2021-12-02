import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ListeMedecinComponent } from './admin/liste-medecin/liste-medecin.component';
import { ExerciceComponent } from './coach/exercice/exercice.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewComponent } from './components/new/new.component';
import { ProfilComponent } from './customer/profil/profil.component';
import { RegisterComponent } from './customer/register/register.component';
import { RendezVousComponent } from './customer/rendez-vous/rendez-vous.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'news', component: NewComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profilClient', component: ProfilComponent },
  { path: 'RDvClient', component: RendezVousComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profilCoach', component: ProfilComponent },
  { path: 'exercices', component: ExerciceComponent },
  {path : 'adminHome', component : AdminHomeComponent},
  {path : 'listeMedecin', component : ListeMedecinComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
