import {Component} from '@angular/core';
import {Task} from "../../models/planner-model";

@Component({
    selector: 'app-planner',
    templateUrl: './planner.component.html',
    styleUrls: ['./planner.component.scss']
})

export class PlannerComponent {
    plannerTasks: Task[] = [];
    inputValue = '';

    addTask(): void {
        const newTask = {text: this.inputValue, done: false};
        //const newTask: {text: string; done: boolean} [] = [];
        if (this.inputValue) {
            this.plannerTasks.push(newTask);
        }
        this.inputValue = '';
    }

    deleteTask(index: number): void {
        this.plannerTasks.splice(index, 1);
        this.inputValue = '';
    }

    get countTasksDone(): string {
        let countOfDoneTasks = this.plannerTasks.filter(task => task.done == true).length;
        let countOfAllTasks = this.plannerTasks.length;
        return "You have done " + countOfDoneTasks + " out of " + countOfAllTasks + " tasks!";
    }
}
