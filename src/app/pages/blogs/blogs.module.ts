import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { HttpModule } from '@angular/http';
import { Blog } from './blog';

import { BlogsComponent } from './blogs.component';
import { BlogsService } from './blogs.service';

import { routing } from './blogs.routing';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../../in-memory-data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true}),
  ],
  declarations: [
    BlogsComponent,
  ],
  providers: [
    BlogsService
  ]
})
export class BlogsModule {}
