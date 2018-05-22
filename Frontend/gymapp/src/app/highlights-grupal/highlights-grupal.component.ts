import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlights-grupal',
  templateUrl: './highlights-grupal.component.html',
  styleUrls: ['./highlights-grupal.component.css']
})
export class HighlightsGrupalComponent implements OnInit {

  itemsGrupal = [
    {title: 'Crossfit'},
    {title: 'Boxeo'},
    {title: 'Natacion'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
