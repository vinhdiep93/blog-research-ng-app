import { Injectable } from '@angular/core';

@Injectable()
export class BlogsService {

  smartTablePageSize = 10;

  blogsData = [
    {
      id: 1,
      title:'This is title of blog 1',
      author:'Vinh Diep'
    },
    {
      id: 2,
      title:'This is title of blog 2',
      author:'Viet Pham'
    },
    {
      id: 3,
      title:'This is title of blog 3',
      author:'Oai Le'
    },
    {
      id: 4,
      title:'This is title of blog 4',
      author:'Vinh Diep'
    },
    {
      id: 5,
      title:'This is title of blog 5',
      author:'Viet Pham'
    },
    {
      id: 6,
      title:'This is title of blog 6',
      author:'Viet Pham'
    },
    {
      id: 7,
      title:'This is title of blog 7',
      author:'Oai Le'
    },
    {
      id: 8,
      title:'This is title of blog 8',
      author:'Oai Le'
    },
    {
      id: 9,
      title:'This is title of blog 9',
      author:'Oai Le'
    },
    {
      id: 10,
      title:'This is title of blog 10',
      author:'Vinh Diep'
    }
  ];
}
