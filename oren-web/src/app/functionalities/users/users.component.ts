import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/components/radio/radio-option.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public sexo_opts = [
    new RadioOption('M', 'M'),
    new RadioOption('F', 'F')
  ];

  constructor() { }

  ngOnInit() {
  }

}
