import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../../data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() bg = 'bg1';
  @Input() header = {
    text: '',
    img: '',
    title: ''
  };
  @Input() btn = true;

  constructor(private data: DataService) { }

  ngOnInit() {

  }
}