import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const blogs = [
      { id: 1, title: 'This is title 1' },
      { id: 2, title: 'This is title 2' },
      { id: 3, title: 'This is title 3' },
      { id: 4, title: 'This is title 4' },
      { id: 5, title: 'This is title 5' },
      { id: 6, title: 'This is title 6' },
      { id: 7, title: 'This is title 7' },
      { id: 8, title: 'This is title 8' },
      { id: 9, title: 'This is title 9' },
      { id: 10, title: 'This is title 10' }
    ];
    return {blogs};
  }
}
