import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input({ required: true }) gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required');
  }
}
