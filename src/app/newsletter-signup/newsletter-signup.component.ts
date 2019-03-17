import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-newsletter-signup',
  templateUrl: './newsletter-signup.component.html',
  styleUrls: ['./newsletter-signup.component.scss']
})
export class NewsletterSignupComponent implements OnInit {

  constructor(private elementRef:ElementRef) {};
  
  ngOnInit() {
    //mysterious MailChimp script... 
    //(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);
  }

  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    this.elementRef.nativeElement.appendChild(s);
  }
}
