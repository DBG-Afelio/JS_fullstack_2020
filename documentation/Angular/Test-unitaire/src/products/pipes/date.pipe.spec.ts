import { PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

/*
  Règles:
  - Le pipe date avec la locale "en" doit renvoyer une date au format "MMM dd, yyy" (exemple: Sep 21, 2019) par défaut
  - Si le pipe reçois un string de formatage en paramètren il soit retourner la date dans ce bon format (exemple de format: 'dd/MM/yyyy')
*/

describe('Date Pipe', () => {
  let pipe: PipeTransform;

  beforeEach(() => {
    pipe = new DatePipe('en');
  })

  xit ('Should return en date skipped', () => {
    const formatedDate = pipe.transform(new Date('2020-11-19'));
    expect(formatedDate).toBe('Nov 19, 2020');
  })

  it ('Should return en date', () => {
    const formatedDate = pipe.transform(new Date('2020-11-19'),'dd/MM/yyyy');
    expect(formatedDate).toBe('19/11/2020');
  })
});
