import { Component } from '@angular/core';
import { BlogsService } from './blogs.service';

@Component({
    selector:'blog',
    templateUrl:'./blogTable.html'
})

export class BlogsComponent{
    blogsData:Array<any>;

  constructor(private _blogsService: BlogsService) {
    this.blogsData = _blogsService.blogsData;
  }
}