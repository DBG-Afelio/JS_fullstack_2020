import { Injectable } from '@angular/core';
import { Board } from '../model/Board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private board: Board;

  constructor() {
    this.board = new Board();
  }

  public clickButton(from: number, to: number): void {
    this.board.move(from, to);
  }
}
