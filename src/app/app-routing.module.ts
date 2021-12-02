import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachComponent } from './admin/coach/coach.component';
import { ContactMarketingComponent } from './admin/contact-marketing/contact-marketing.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { MedecinComponent } from './admin/medecin/medecin.component';
import { PatientComponent } from './admin/patient/patient.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
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
import { MedecinHomeComponent } from './medecin/medecin-home/medecin-home.component';
import { ContactMarketing } from './models/contact-marketing';

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
  { path : 'medecinHome', component : MedecinHomeComponent},
  { path: 'sidebar', component: SidebarComponent },
  { path: 'admin-contacts', component: ContactMarketingComponent },
  { path: 'admin-dashbord', component: DashbordComponent },
  { path: 'admin-medecins', component: MedecinComponent },
  { path: 'admin-coachs', component: CoachComponent },
  { path: 'admin-patients', component: PatientComponent },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
