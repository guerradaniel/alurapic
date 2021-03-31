import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  title = 'alurapic';
  @Input()
  description = ''

  @Input()
  url = ''


  constructor() { }

  ngOnInit(): void {
  }

}
