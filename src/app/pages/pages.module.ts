import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { Pages } from './pages.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing, InMemoryWebApiModule.forRoot(InMemoryDataService,{ passThruUnknownUrl: true}),],
  declarations: [Pages]
})
export class PagesModule {
}
