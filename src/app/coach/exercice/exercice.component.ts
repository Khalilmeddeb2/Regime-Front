import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ElementRef, OnInit } from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Exercice } from 'src/app/models/exercice';
import { ExerciceService } from 'src/app/services/exercice.service';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent  implements OnInit  {
  @ViewChild('fileInput', { static: false })
  fileInput!: ElementRef; 
  exercices: Exercice[] = []; 
  exercice :Exercice = new Exercice();
  
  
  constructor(private exerciceService :ExerciceService,private sanitization: DomSanitizer,private router: Router) { }

  ngOnInit(): void {
   this.getExercices();
  }

  getExercices(){
    
    console.log("imed")
    this.exerciceService.getExercices().subscribe(e=>{
      this.exercices=e.map(p=>{
        p.filename=this.sanitization.bypassSecurityTrustResourceUrl("http://localhost:5000/"+p.filename);
        console.log(p)
      return p;
     
      })
          })  
}

deleteExercice(exercice:Exercice)
{
this.exerciceService.deleteProduct(exercice._id).subscribe(e=>
  {
    console.log("e")
    this.getExercices();
  })
}

saveExercice(){
  
   
  
  const imagBlob =this.fileInput.nativeElement.files[0];
  
  const form =new FormData();
  form.set('image',imagBlob);
  form.set('nom',this.exercice.nom);
  //form.set('type',this.product.type);
  form.set('description',this.exercice.description);
  //form.set('url',this.product.url);
  
  this.exerciceService.createExercice(form).subscribe(data=>{
    console.log(data);
    this.getExercices();
    this.exercice = new Exercice();
    this.router.navigate(['/exercices'])

  
},
 );

}

onSubmit(){
  console.log(this.exercice);
  this.saveExercice();
}

}
