import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "src/app/models/Todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todoitem",
  templateUrl: "./todoitem.component.html",
  styleUrls: ["./todoitem.component.css"]
})
export class TodoitemComponent implements OnInit {
  @Input() todo: Todo;
  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  //Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    };
    return classes;
  }
  onToggle(todo) {
    //Toggle in UI
    todo.completed = !todo.completed;
    //Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }
  onDelete() {
    console.log("Deleted");
  }
}
