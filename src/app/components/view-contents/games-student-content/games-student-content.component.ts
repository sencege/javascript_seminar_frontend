import { Component, OnInit, Input, isDevMode } from '@angular/core';

@Component({
  selector: 'app-games-student-content',
  templateUrl: './games-student-content.component.html',
  styleUrls: ['./games-student-content.component.css']
})
export class GamesStudentContentComponent implements OnInit {

  constructor() { 
    
  }

  debugMessage: String = "";
  devMode = isDevMode();
  selectedGame : String = "quiz";
  gameJoined : boolean = false;
  taskId : string = "taskId";
  @Input() sessionId: String;
  @Input() username: String;


  ngOnInit(): void {
  }
  
  public onJoinGameButton() {
    this.debugMessage = "Joining Game as " + this.username + " in Session " + this.sessionId + this.selectedGame;
    this.gameJoined = true;
    
  }

  isSelected(game){
    return game == this.selectedGame;
  }

  onDisconnect() {
    this.gameJoined = false;
    this.debugMessage = "Disconnected";
  }

  onFinished() {
    console.log("Game Finished TODO");
  }

}