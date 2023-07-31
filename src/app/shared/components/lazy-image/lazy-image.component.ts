import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.scss'],
})
export class LazyImageComponent implements OnInit {
  @Input({ required: true }) urlImage!: string;
  @Input({ required: true }) alt: string = '';
  hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.urlImage) throw new Error('ImageURL is required.');
  }

  onLoad(): void {
    this.hasLoaded = true;
  }
}
