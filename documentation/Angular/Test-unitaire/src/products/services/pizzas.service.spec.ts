import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';
import { PizzasService } from './pizzas.service';
import { Pizza } from '../models/pizza.model';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';

/*
  Règles:
  - L'information ne doit pas être altérée entre le retour du serveur et le retour de la fonction
*/

describe('Pizza service', () => {
  let service: PizzasService;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PizzasService]
    });

    service = TestBed.get(PizzasService);
    backend = TestBed.get(HttpTestingController);
  })

  it ('test Get', () => {
    service.getPizzas().subscribe((pizzas) => {
      console.log('Pizzas', pizzas);
     
    })

    const req = backend.expectOne(`${environment.baseUrl}/pizzas`)
    expect(req.request.method).toBe('GET')
  })

  it ('test PUT', () => {
    const pizza = {
      id: 19,
      name: 'pizza test',
      toppings: ['anchois', 'poivrons']
    }
    service.updatePizza(pizza).subscribe()

    const req = backend.expectOne(`${environment.baseUrl}/pizzas/${pizza.id}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(pizza);

  })

  afterEach(() => {
    backend.verify();
  })
});
