import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: 'app-video-overlay',
  templateUrl: './video-overlay.component.html',
  styleUrls: ['./video-overlay.component.scss']
})
export class VideoOverlayComponent implements OnInit {

  @Input() ytid:string;
  @Input() noOverlay:Boolean = false;
  url: SafeResourceUrl;

  isOpen:Boolean = false;
  debug:Boolean = true;
  monitor;


  constructor(public sanitizer:DomSanitizer, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    //concat the id into the youtube src url
    var ytUrl = "https://www.youtube.com/embed/"+this.ytid+"?rel=0&amp;showinfo=0?ecver=1";
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(ytUrl);

    //init the yt player...
    /*var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }*/


    if(!this.noOverlay){
      this.monitor = setInterval(this.checkfocus.bind(this), 100);
    }

  }

  checkfocus(){
        var elem = document.activeElement;
        if(elem && elem.tagName == 'IFRAME'){
            clearInterval(this.monitor);
            //alert('clicked!');
            this.launch();
            this.isOpen = true;
        }
  }

  launch(){
    if(this.debug)
      console.log('launch video overlay');

   // this.isOpen = true;
  }

  close(){
    this.isOpen = false;
    this.monitor = setInterval(this.checkfocus.bind(this), 100);

    //stop the video
    this.url = "";
    this.ref.markForCheck();

    var ytUrl = "https://www.youtube.com/embed/"+this.ytid+"?rel=0&amp;showinfo=0?ecver=1";
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(ytUrl);


  }

}
