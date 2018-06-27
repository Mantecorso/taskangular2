import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //anyadir el json de los objetos
  lists = [{
    "listId": "1",
    "name": "Backlog",
    "tasks": [{
        "taskId": "1",
        "text": "Aprender Express",
        "completed": false,
        "color": "tomato"
    }, {
        "taskId": "2",
        "text": "Aprender JS",
        "completed": true,
        "color": "grey"
    }, {
        "taskId": "task-1527004083098-28",
        "text": "asda",
        "completed": false,
        "color": "tomato"
    }]
 }, {
    "listId": "2",
    "name": "To Do",
    "tasks": [{
        "taskId": "3",
        "text": "Aprender Node.js",
        "completed": false,
        "color": "tomato"
    }, {
        "taskId": "task-1527004086049-42",
        "text": "asdas",
        "completed": false,
        "color": "tomato"
    }]
 }, {
    "listId": "3",
    "name": "Doing",
    "tasks": [{
        "taskId": "task-1527004088681-52",
        "text": "asdasd",
        "completed": false,
        "color": "tomato"
    }]
 }]
}
