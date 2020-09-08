import { Injectable } from '@angular/core';
import { Tower } from '../model/Tower';

@Injectable({
  providedIn: 'root'
})
export class TowerService {
  private tower: Tower;
  
  constructor(id: number) { 
    this.tower = new Tower(id);
  }
  
}
