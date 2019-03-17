import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sharable-image',
  templateUrl: './sharable-image.component.html',
  styleUrls: ['./sharable-image.component.scss']
})
export class SharableImageComponent implements OnInit {

  @Input() url:string;
  @Input() title:string;
  @Input() description:string;
  @Input() tags:string;


  constructor() { }

  ngOnInit() {
  }

}
