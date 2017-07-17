import { Component } from '@angular/core';
import { Blog } from './blog';
import { BlogsService } from './blogs.service';

@Component({
    selector: 'blog',
    templateUrl: './blogTable.html'
})

export class BlogsComponent {
    blogsData: Array<Blog>;

    constructor(private _blogsService: BlogsService) {
      this.getHeroes();
    }

    getHeroes(): void {
      this._blogsService.getBlogs().then(blogs => this.blogsData = blogs);
    }
}
