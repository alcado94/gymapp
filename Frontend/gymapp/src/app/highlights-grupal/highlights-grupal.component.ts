import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlights-grupal',
  templateUrl: './highlights-grupal.component.html',
  styleUrls: ['./highlights-grupal.component.css']
})
export class HighlightsGrupalComponent implements OnInit {

  itemsGrupal = [
    {title: 'Crossfit',imageUrl: 'https://unsplash.it/800/600?image=82'},
    {title: 'Boxeo',imageUrl: 'https://unsplash.it/800/600?image=82'},
    {title: 'Natacion',imageUrl: 'https://unsplash.it/800/600?image=82'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
