import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/service/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
  }

  public clickButton(from: number, to: number): void {
    return this.boardService.clickButton(from, to);
  }
}
