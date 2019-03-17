import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations'; 
import { EmailValidator } from '@angular/forms';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
declare var jQuery:any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
  /*animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],*/
})

export class HomePageComponent implements OnInit {

  firstName:String;
  firstNameError:String = "";

  lastName:String;
  lastNameError:String = "";

  email:String;
  emailError:String = "";

  videos = [
    //Change the Rules
    {
      "src":"assets/videos/hero/rules-video.m4v",
      "title":"Brooklyn offal retro drinking vinegar officia mixtape meggings literally bicycle rights. Duis before they sold out ugh, kitsch wayfarers shaman affogato twee synth chia laboris subway tile post-ironic air plant salvia. 3 wolf moon jean shorts pok pok man braid la croix PBR&B artisan deserunt nulla asymmetrical nisi messenger bag air plant snackwave keffiyeh.",
      "image":"assets/videos/hero/rules-mobile.png",
      "poster":"assets/videos/hero/rules-poster.png"
    },

    //Culture Hack Lab
    {
      "src":"assets/videos/hero/chl-video.mov",
      "title":"The CHL is the space where we work to better understand what stories are shaping culture. We seek to answer questions such as: what are the stories we believe and share about how the world works? How do these stories help sustain the way human beings or the environment are defined by the economy? The CHL test the ways of effectively changing those stories over time, so as to change our culture.",
      "image":"assets/videos/hero/chl-mobile.gif",
      "poster":"assets/videos/hero/chl-poster.png"
    },
    
    //Aurora
    {
      "src":"assets/videos/hero/aurora-video.mp4",
      "title":"Brooklyn offal retro drinking vinegar officia mixtape meggings literally bicycle rights. Duis before they sold out ugh, kitsch wayfarers shaman affogato twee synth chia laboris subway tile post-ironic air plant salvia. 3 wolf moon jean shorts pok pok man braid la croix PBR&B artisan deserunt nulla asymmetrical nisi messenger bag air plant snackwave keffiyeh.",
      "image":"assets/videos/hero/aurora-mobile.gif",
      "poster":"assets/videos/hero/aurora-poster.png"
    }
  ];

  activeVideoId = 0;
  videoTitle:String = "";
  videoObject:HTMLVideoElement;
  hideVideo = true;
  isVideo = true;

  //video resizing stuff...
  min_w = 300; // minimum video width allowed
  vid_w_orig;  // original video dimensions
  vid_h_orig;

  slideShowTimer;

  constructor(private ref: ChangeDetectorRef) {
  }

  ngOnInit():void{
    console.log("ngOnInit");

    //is it mobile?
    var isMobile:Boolean
    if (typeof window.orientation !== 'undefined')
      isMobile = true;
    else
      isMobile = false;

    //force mobile for testing
   // isMobile = true;

    this.videoObject =  document.getElementById('hero-video') as HTMLVideoElement;
    //detect mobile?
    if (isMobile) {
      //mobile
      ////add timer for triggering slideshow here...
      clearInterval(this.slideShowTimer);
      this.slideShowTimer = setInterval(this.goToNextSlide.bind(this), 5000);
    }
    else{
      //desktop
      ////add video listeners
      this.videoObject.addEventListener('ended',this.onVideoEnded.bind(this),false);
      this.videoObject.addEventListener('loadeddata',this.onVideoLoaded.bind(this),false);
    }

    //add window resize listeners
    this.vid_w_orig = parseInt(jQuery('#hero-video').attr('width'));
    this.vid_h_orig = parseInt(jQuery('#hero-video').attr('height'));
    console.log("this.vid_w_orig:", this.vid_w_orig);
    console.log("this.vid_h_orig:", this.vid_h_orig);

    jQuery(window).resize(this.resizeToCover.bind(this));
    jQuery(window).trigger('resize');
   }

   onVideoLoaded():void{
      this.videoTitle = this.videos[this.activeVideoId].title;
      this.hideVideo = false;
   }

   onVideoEnded():void{
     console.log("onVideoEnded");
     //show the next video...
      this.goToNextSlide();

      this.videoObject.currentTime = 0;
      this.videoTitle = "";
      this.hideVideo = true;
      this.ref.detectChanges();
   }


   resizeToCover():void {
    console.log("resizeToCover");
    var h = .8; //video height as percentage of window height
    // set the video viewport to the window size
    jQuery('#video-viewport').width(jQuery(window).width());
    jQuery('#video-viewport').height(jQuery(window).height()-80);

    console.log("this.vid_w_orig:", this.vid_w_orig);
    console.log("this.vid_h_orig:", this.vid_h_orig);
    console.log("scale_h:", scale_h);
    console.log("scale_v:", scale_v);
    console.log("scale:", scale);

    // use largest scale factor of horizontal/vertical
    var scale_h = (jQuery(window).width() / this.vid_w_orig);
    var scale_v = (jQuery(window).height() / this.vid_h_orig);
    var scale = scale_h > scale_v ? scale_h : scale_v;

    // don't allow scaled width < minimum video width
    if (scale * this.vid_w_orig < this.min_w) {scale = this.min_w / this.vid_w_orig;};

    console.log("scale:", scale);

    // now scale the video
    jQuery('#hero-video').width(scale * this.vid_w_orig);
    jQuery('#hero-video').height(scale * this.vid_h_orig);
    // and center it by scrolling the video viewport
    jQuery('#video-viewport').scrollLeft((jQuery('#hero-video').width() - jQuery(window).width()) / 2);
    jQuery('#video-viewport').scrollTop((jQuery('#hero-video').height() - jQuery(window).height()*h) / 2);
  };

  goToNextSlide():void{
    if(this.activeVideoId >= this.videos.length-1)
      this.activeVideoId = 0;
    else
      this.activeVideoId = this.activeVideoId + 1;
  }

  
  formIsValid:Boolean = false;
  onClickSignUp(){
    this.formIsValid = true;

    //validate the form
    var emailIsValid:Boolean = this.validateEmail(this.email);
    
    if(!this.firstName){
      this.formIsValid = false;
      this.firstNameError = "Please enter a first name."
    }
    else{
      this.firstNameError = "";
    }

    if(!this.lastName){
      this.formIsValid = false;
      this.lastNameError = "Please enter a last name."
    }
    else{
      this.lastNameError = "";
    }

    if(emailIsValid){
      this.emailError = "";
    }
    else{
      this.emailError = "Email is invalid, please fix."
      this.formIsValid = false;
    }


  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  ngOnDestroy(){
    //stop the slide timer when we leave the home page
    clearInterval(this.slideShowTimer);
  }

}
