import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../../models/VideoGame';
import { VideoGameListService } from '../../services/video-game-list.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-video-game-list',
  templateUrl: './video-game-list.component.html',
  styleUrl: './video-game-list.component.css'
})
export class VideoGameListComponent implements OnInit{

  videoGames$: Observable<VideoGame[]>
  
  constructor(private videoGameListService: VideoGameListService) {}

  ngOnInit(): void {
    this.videoGames$ = this.fetchAll();
  }

  fetchAll(): Observable<VideoGame[]> {
    return this.videoGames$ = this.videoGameListService.fetchAll();
  }

  post(videoGameName: Partial<VideoGame>): void {
    const name = (<string>videoGameName).trim();
    if (!name) return;

    this.videoGames$ = this.videoGameListService
      .post({ name })
      .pipe(tap(() => this.videoGames$ = this.fetchAll()));
    
    console.log("added " + name)
  }

  put(id: number, videoGameName: Partial<VideoGame>): void {
    const name = (<string>videoGameName).trim();
    if (!name) return; 

    const newVideoGame: VideoGame = {
      id,
      name
    }

    this.videoGames$ = this.videoGameListService
      .put(newVideoGame)
      .pipe(tap(() => this.videoGames$ = this.fetchAll()));
    
    console.log("updated " + name)
  }

  delete(id: number): void {
    this.videoGames$ = this.videoGameListService
      .delete(id)
      .pipe(tap(() => this.videoGames$ = this.fetchAll()));
    
    console.log("deleted " + id)
  }
}
