import {Component} from '@angular/core';

class Task {
  text: string | undefined;
  done: boolean | undefined;
  constructor(inputValue: string, done: boolean) {
    this.text = inputValue;
    this.done = done;
  }

}

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})

export class PlannerComponent {

  plannerTasks: Task[] = [
  ];
  inputValue = '';

  addTask(): void {
    const newTask: Task = new Task(this.inputValue, false);
    if (this.inputValue !== '') {
      this.plannerTasks.push(newTask);
    }
    this.inputValue = '';
  }

  deleteTask(index: number): void {
    this.plannerTasks.splice(index, 1);
    this.inputValue = '';
  }

  countTasksDone(): string {
    let countOfDoneTasks = this.plannerTasks.filter(task => task.done == true).length;
    let countOfAllTasks = this.plannerTasks.length;
    return "You have done " + countOfDoneTasks + " out of " + countOfAllTasks + " tasks!";
  }
}
