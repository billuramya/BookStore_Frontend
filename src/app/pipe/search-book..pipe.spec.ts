import { SearchBookPipe} from './search.book.pipe';
describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchBookPipe();
    expect(pipe).toBeTruthy();
  });
});
