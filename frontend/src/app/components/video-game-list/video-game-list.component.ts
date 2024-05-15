import { Component, OnInit } from '@angular/core';
import {VideoGame} from '../../models/VideoGame';

@Component({
  selector: 'app-video-game-list',
  templateUrl: './video-game-list.component.html',
  styleUrl: './video-game-list.component.css'
})
export class VideoGameListComponent implements OnInit{

  videogames: VideoGame[];
  constructor() {}

  ngOnInit(): void {
    this.videogames = [
      {
        id: 1,
        name: 'First Game'
      },
      {
        id: 2,
        name: 'Second Game'
      }
    ]
  }
}
