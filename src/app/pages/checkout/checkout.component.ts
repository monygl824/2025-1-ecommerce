import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombres: [''],
      apellidos: [''],
      telefono: [''],
      quienRecibe: [''],
      direccion: [''],
      ciudad: [''],
      estado: [''],
      cp: [''],
      metodoPago: [''],
      aceptaTerminos: [false],
    });
    this.cargarDatosGuardados();
  }

  guardar(): void {
    if (this.formulario.valid) {
      const datos = this.formulario.value;
      localStorage.setItem('datosFormulario', JSON.stringify(datos));
      this.resumenCompra = { ...datos };
      this.formulario.reset();
    } else {
      alert('Completar todos los campos');
    }
  }

  cargarDatosGuardados(): void {
    const datos = localStorage.getItem('datosFormulario');
    if (datos) {
      this.formulario.setValue(JSON.parse(datos));
    }
  }

  resumenCompra: any = {
    nombres: '',
    apellidos: '',
    telefono: '',
    quienRecibe: '',
    direccion: '',
    ciudad: '',
    estado: '',
    cp: '',
    metodoPago: '',
    aceptaTerminos: false,
  };
}
