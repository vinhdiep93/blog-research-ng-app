import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BlogsService {

  private blogsUrl = 'api/blogs';

  constructor(private http: Http){

  }
  getBlogs(): Promise<Blog[]>{
    var a = this.http.get(this.blogsUrl)
              .toPromise();

    var b = a.then(response => response.json().data as Blog[]);
    
    return this.http.get(this.blogsUrl)
              .toPromise()
              .then(response => response.json().data as Blog[])
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
