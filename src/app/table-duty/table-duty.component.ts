import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-duty',
  template: `
    <div class="table">
      <table>
        <thead>
          <th>Superhero</th>
          <th>On Duty?</th>
        </thead>
        <tr *ngFor="let item of heroes">
        <td>{{ item.heroe }}</td>
        <td [ngClass]="{task: false}">{{ item.duty ? 'On Duty' : 'Available' }}</td>
        </tr>
      </table>
    </div>
  `,
  styleUrls: ['./table-duty.component.sass']
})
export class TableDutyComponent implements OnInit {
@Input() heroes !: any;
@Input() task!: object;

  constructor() { }

  ngOnInit(): void {
  }

}
