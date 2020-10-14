import { Component, OnInit } from '@angular/core';
import { GamesApiService } from '@app/services/custom/games/games-api.service';
import { Question } from '@app/models/game-models/question';
import { Quiz } from '@app/models/game-models/quiz';

@Component({
  selector: 'app-quiz-game-config',
  templateUrl: './quiz-game-config.component.html',
  styleUrls: ['./quiz-game-config.component.less']
})
export class QuizGameConfigComponent implements OnInit {
  quizzes: Quiz[];
  questions: Question[];

  newQuiz: Quiz = {
    _id: "-1",
    name: "",
    description: "",
    questions: []
  };

  newQuestion: Question = {
    _id: "-1",
    type: "select",
    name: "",
    question: "",
    options: [],
    answer: []
  };

  constructor(private api: GamesApiService) { }

  ngOnInit(): void {
    this.api.getQuestions().subscribe(data => {
      console.log("fetch questions", data)
      this.questions = data;
    });
    this.api.getQuizzes().subscribe(data => {
      console.log("fetch quizzes", data)
      this.quizzes = data;
    });
  }

  deleteQuestion(question: Question) {
    this.api.deleteQuestion(question).subscribe(data => {
      console.log("delete question", data)
      // TODO handle true response
      this.questions = this.questions.filter(elem => elem._id !== question._id)
    });
  }

  deleteQuiz(quiz: Quiz) {
    this.api.deleteQuiz(quiz).subscribe(data => {
      console.log("delete quiz", data)
      // TODO handle true response
      this.quizzes = this.quizzes.filter(elem => elem._id !== quiz._id)
    });
  }

  onCreateQuestion(question: Question) {
    this.api.createQuestion(question).subscribe(data => {
      // TODO handle true response
      this.questions.push(question);
      //this.resetNewQuestion();
    });
  }

  onCreateQuiz(quiz: Quiz){
    this.api.createQuiz(quiz).subscribe(data => {
      // TODO handle true response
      this.quizzes.push(quiz);
      //this.resetNewQuestion();
    });
  }

  onQuestionChange(question: Question) {
    this.api.updateQuestion(question).subscribe(data => {
      console.log("changed question", data)
      this.questions[this.questions.findIndex(g => {
        return g._id === question._id
      })] = question;
    });
  }

  onQuizChange(quiz: Quiz) {
    this.api.updateQuiz(quiz).subscribe(data => {
      console.log("changed quiz", data)
      this.quizzes[this.quizzes.findIndex(g => {
        return g._id === quiz._id
      })] = quiz;
    });
  }
}
