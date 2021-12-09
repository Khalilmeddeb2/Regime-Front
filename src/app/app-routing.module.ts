import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutCoachComponent } from './admin/ajout-coach/ajout-coach.component';
import { AjoutMedecinComponent } from './admin/ajout-medecin/ajout-medecin.component';
import { CoachComponent } from './admin/coach/coach.component';
import { ContactMarketingComponent } from './admin/contact-marketing/contact-marketing.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { MedecinComponent } from './admin/medecin/medecin.component';
import { PatientComponent } from './admin/patient/patient.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { ActiviteComponent } from './coach/activite/activite.component';
import { AjoutActiviteComponent } from './coach/ajout-activite/ajout-activite.component';
import { ExerciceComponent } from './coach/exercice/exercice.component';
import { PatientsComponent } from './coach/patients/patients.component';
import { ProfilCoachComponent } from './coach/profil-coach/profil-coach.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewComponent } from './components/new/new.component';
import { DemandeCoachComponent } from './customer/demande-coach/demande-coach.component';
import { ProfilComponent } from './customer/profil/profil.component';
import { RegisterComponent } from './customer/register/register.component';
import { RendezVousComponent } from './customer/rendez-vous/rendez-vous.component';
import { ConfirmRdvComponent } from './medecin/confirm-rdv/confirm-rdv.component';
import { MedecinHomeComponent } from './medecin/medecin-home/medecin-home.component';
import { NonValidRdvComponent } from './medecin/non-valid-rdv/non-valid-rdv.component';
import { ValidRdvComponent } from './medecin/valid-rdv/valid-rdv.component';
import { ContactMarketing } from './models/contact-marketing';
import { DemandeCoach } from './models/demande-coach';

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
  { path: 'profilCoach', component: ProfilCoachComponent },
  { path: 'exercices', component: ExerciceComponent },
  { path : 'medecinHome', component : MedecinHomeComponent},
  { path: 'sidebar', component: SidebarComponent },
  { path: 'admin-contacts', component: ContactMarketingComponent },
  { path: 'admin-dashbord', component: DashbordComponent },
  { path: 'admin-medecins', component: MedecinComponent },
  { path: 'admin-coachs', component: CoachComponent },
  { path: 'admin-patients', component: PatientComponent },
  { path : 'NonValidRdv',component : NonValidRdvComponent },
  {path : 'ValidRdv' , component : ValidRdvComponent },
  {path : 'confirmRdv/:id', component : ConfirmRdvComponent},
  { path: 'admin-ajoutCoach', component: AjoutCoachComponent },
  { path: 'admin-ajoutMedecin', component: AjoutMedecinComponent },
  { path: 'coach-patients', component: PatientsComponent },
  { path: 'demande-coach', component: DemandeCoachComponent },
  { path: 'listesActivites', component: ActiviteComponent },
  { path: 'ajoutActivite', component: AjoutActiviteComponent },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
