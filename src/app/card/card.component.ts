import { Component, Input } from '@angular/core';
import { Card } from '../_models/card';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrls: [
    './card.component.css',
    '/src/styles.css'
  ],
})

export class CardComponent {
  @Input() card = {} as Card;

  constructor() {
  }
}
