import { Component, OnInit } from '@angular/core';
import { User } from '@app/models';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClassesService } from 'src/app/services/swagger-api/classes.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { GamesApiService } from '@app/services/custom/games/games-api.service';
import { MessageService } from '@app/services/custom/messages/message.service';
import { MatDialog } from '@angular/material/dialog';
import { Quiz } from '@app/models/game-models/quiz';
import { Question } from '@app/models/game-models/question';
import { SimpleTask } from '@app/models/game-models/simpleTask';
import { Alias } from '@app/models/game-models/alias';
import { DrawIt } from '@app/models/game-models/drawIt';


@Component({
  selector: 'app-plan-meeting-content',
  templateUrl: './plan-meeting-content.component.html',
  styleUrls: ['./plan-meeting-content.component.less']
})
export class PlanMeetingContentComponent implements OnInit {
  list1 = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith'
  ];

  list2 = [
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - The Empire Strikes Back'
  ];

  quizzes: Quiz[];
  questions: Question[];
  aliasGames: Alias[];
  drawGames : DrawIt[];
  
  newTask: SimpleTask = {
    _id: "-1",
    name: "",
    description: ""
  };
  
  clsSelecForm: FormGroup;

  user: User;
  error = '';
  isSelected = false;
  selectedClass: any; // Type Class
  selectedTypeOfClass = ''
  selectedDuration: number;
  durations = [30, 45, 60, 90, 120];
  typeOfClasses = ['Quiz', 'Ice-Breaker Game', 'Others',]
  loading = false;
  selectedArrangement = '';

  user_classes = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private classService: ClassesService,
    private _snackBar: MatSnackBar,
    private api: GamesApiService,
    private messageService: MessageService,
    public deleteDialog: MatDialog
  ) { }
  
  ngOnInit() {
    this.selectedArrangement = 'tandem';
    this.clsSelecForm = this.fb.group({
      selectedClass: [null]
    });
    this.classService.classesGet().subscribe({
      next: (response) => {
        this.loading = false;
        this.user_classes = response;
        console.log(this.user_classes[0]);
      },
      error: (error) => {
        this.error = error;
        this._snackBar.open(this.error, 'Close', {
          duration: 3000
        });
        this.loading = false;
      },
    });
    this.api.getQuizzes().subscribe(data => {
      this.quizzes = data;
    });
    this.api.getQuestions().subscribe(data => {
      this.questions = data;
    });
    this.api.getAliasGames().subscribe(data => {
      this.aliasGames = data;
    });
    this.api.getDrawItGames().subscribe(data => {
      this.drawGames = data;
    });
  }

  onQuestionChange(question: Question) {
    this.api.updateQuestion(question).subscribe(data => {
      if (data) {
        //console.log("changed question", data)
        this.questions[this.questions.findIndex(g => {
          return g._id === question._id
        })] = data;
        this.messageService.add("Question '" + question.name + "' updated successfully.", "success");
      }
    });
  }

  onQuizChange(quiz: Quiz) {
    this.api.updateQuiz(quiz).subscribe(data => {
      if (data) {
        //console.log("changed quiz", data)
        this.quizzes[this.quizzes.findIndex(g => {
          return g._id === quiz._id
        })] = data;
        this.messageService.add("Quiz '" + quiz.name + "' updated successfully.", "success");
      }
    });
  }

  onGameChange(game: Alias) {
    this.api.updateAliasGame(game).subscribe(data => {
      if (data) {
        //console.log("changed game", data)
        this.aliasGames[this.aliasGames.findIndex(g => {
          return g._id === data._id
        })] = data;
        this.messageService.add("Game '" + game.name + "' updated successfully.", "success");
      }
    });
  }

  onCreateQuestion(question: Question) { //change to onCreateTask
    this.api.createQuestion(question).subscribe(data => {
      if (data) {
        this.questions = [...this.questions, data];
        this.resetNewTask();
        this.messageService.add("New Question created: " + question.name, "success");
      }
    });
  }

  resetNewTask() {
    this.newTask = {
      _id: "-1",
      name: "",
      description: ""
    }
  }

  classSelected() {
    this.selectedClass = this.clsSelecForm.value.selectedClass;
    this.isSelected = true;
  }

  typeSelected(event) {
    let type = this.stringFormatter(event.target.value);

    switch (type) {
      case "quiz": {
        this.selectedTypeOfClass = 'quiz'
        break
      }
      case "ice-breaker game": {
        this.selectedTypeOfClass = 'ice-breaker'
        break
      }
      default: {
        this.selectedTypeOfClass = 'other'
        break
      }
    }
  }

  stringFormatter(text: string) {
    return text.toLowerCase();
  }

  drop(event: CdkDragDrop<string[]>, list) {
    moveItemInArray(list, event.previousIndex, event.currentIndex);
  }

  saveArrangement() {
    console.log(this.list1)
    console.log(this.list2)
  }

  selectArrangement(arrangement: string) {
    this.selectedArrangement = arrangement;
  }
}
