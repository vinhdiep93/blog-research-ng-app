import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { UsersComponent } from './users.component';
import { UsersService } from './users.service';

import { routing } from './users.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    UsersComponent,
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule {}
