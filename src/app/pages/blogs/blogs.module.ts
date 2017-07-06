import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { BlogsComponent } from './blogs.component';
import { BlogsService } from './blogs.service';

import { routing } from './blogs.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    BlogsComponent,
  ],
  providers: [
    BlogsService
  ]
})
export class BlogsModule {}
