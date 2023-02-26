import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('should show movie from Cart', () => {
  const cart = new Cart();
  cart.add(new Movie(1005, 'Мстители', 2012, 'США', '"Avengers Assemble!"', ['фантастика','боевик', 'фэнтези', 'приключения'], '137 мин. / 2:17', 450));
  expect(cart.items).toEqual([{
    id: 1005,
    name: 'Мстители',
    year: 2012,
    country: 'США',
    slogan: '"Avengers Assemble!"',
    genre: ['фантастика','боевик', 'фэнтези', 'приключения'],
    duration: '137 мин. / 2:17',
    price: 450,
  }]);
});