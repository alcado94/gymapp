import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PresentationComponent } from './presentation/presentation.component';
import { HighlightsInfoComponent } from './highlights-info/highlights-info.component';
import { HighlightsGrupalComponent } from './highlights-grupal/highlights-grupal.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PresentationComponent,
    HighlightsInfoComponent,
    HighlightsGrupalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
