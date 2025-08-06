import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;
  currentStep = 1;
  multiStepForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.multiStepForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  submitForm() {
    if (this.multiStepForm.valid) {
      console.log('Formulario enviado:', this.multiStepForm.value);
      alert('¡Formulario enviado con éxito!');
    }
  }


  ngAfterViewInit(){
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
       if(entry.isIntersecting){
        entry.target.classList.add('visible');
        this.observer.unobserve(entry.target);
       }
      });
    }, {threshold: 0.1});

    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');

    elementsToReveal.forEach(element => {
    this.observer.observe(element);
  });
  }

  onAnimateSubmit(event: Event) {
    // Obtenemos el botón al que se le hizo clic
    const button = event.currentTarget as HTMLElement;
    
    // Añadimos la clase 'success' para activar la animación CSS
    button.classList.add('success');

    // Después de 2 segundos, quitamos la clase para que el botón
    // vuelva a su estado original y se pueda volver a animar.
    setTimeout(() => {
      button.classList.remove('success');
    }, 2000);
  }

  ngOnDestroy() {
    if(this.observer){
      this.observer.disconnect();
    }
  }
}
