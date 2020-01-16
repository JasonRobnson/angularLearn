import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/Todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  constructor() {}

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: "Todo One",
        completed: false
      },
      {
        id: 2,
        title: "Todo One",
        completed: true
      },
      {
        id: 3,
        title: "Todo One",
        completed: false
      },
      {
        id: 4,
        title: "Todo One",
        completed: true
      },
      {
        id: 5,
        title: "Todo One",
        completed: false
      },
      {
        id: 6,
        title: "Todo One",
        completed: false
      }
    ];
  }
}
