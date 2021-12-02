import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { NewComponent } from './components/new/new.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarCustomerComponent } from './customer/navbar-customer/navbar-customer.component';
import { FooterCustomerComponent } from './customer/footer-customer/footer-customer.component';
import { ProfilComponent } from './customer/profil/profil.component';
import { RendezVousComponent } from './customer/rendez-vous/rendez-vous.component';
import { RegisterComponent } from './customer/register/register.component';
import { NavbarCoachComponent } from './coach/navbar-coach/navbar-coach.component';

import { ExerciceComponent } from './coach/exercice/exercice.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { ContactMarketingComponent } from './admin/contact-marketing/contact-marketing.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { MedecinComponent } from './admin/medecin/medecin.component';
import { CoachComponent } from './admin/coach/coach.component';
import { PatientComponent } from './admin/patient/patient.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DoctorsComponent,
    NewComponent,
    ContactComponent,
    LoginComponent,
    HeaderComponent,
    NavbarCustomerComponent,
    FooterCustomerComponent,
    ProfilComponent,
    RendezVousComponent,
    RegisterComponent,
    NavbarCoachComponent,
    ExerciceComponent,
    SidebarComponent,
    ContactMarketingComponent,
    DashbordComponent,
    MedecinComponent,
    CoachComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
