import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const blogs = [
      { id: 1, title: 'Zero' },
      { id: 2, title: 'Mr. Nice' },
      { id: 3, title: 'Narco' },
      { id: 4, title: 'Bombasto' },
      { id: 5, title: 'Celeritas' },
      { id: 6, title: 'Magneta' },
      { id: 7, title: 'RubberMan' },
      { id: 8, title: 'Dynama' },
      { id: 9, title: 'Dr IQ' },
      { id: 10, title: 'Magma' }
    ];
    return {blogs};
  }
}