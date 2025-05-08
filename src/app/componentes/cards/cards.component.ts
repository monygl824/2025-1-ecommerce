import { Component, Input } from '@angular/core';
import { ArracadasInterface } from '../../arracadas';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cards',
  imports: [CurrencyPipe],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  @Input() a!:ArracadasInterface;

  

}
