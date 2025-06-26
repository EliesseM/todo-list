import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from  '@angular/material/card' ;
import { STATUS, Todo } from '../../models/todo.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatCardModule, MatButtonModule, MatChipsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
   todos:Todo[] = [
    {
      id: 1,
      title: "Poulpe",
      content: 'Sa maman le poulpe',
      deadline: new Date(),
      status: STATUS.IN_PROGRESS,
    }
  ]

}
  
