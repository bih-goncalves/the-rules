import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})

export class AboutPageComponent implements OnInit {

   badges = [
     {
       "id":"asha",
       "title":"The Culture Hack Lab",
       "text":"The CHL is the space where we work to better understand what stories are shaping culture. We seek to answer questions such as: what are the stories we believe and share about how the world works? How do these stories help sustain the way human beings or the environment are defined by the economy? The CHL test the ways of effectively changing those stories over time, so as to change our culture."
     },
     {
       "id":"activist_ashram",
       "title":"Activist Ashram",
       "text":"The Activist Ashram is a year-long fellowship for front-line organisers, with strong community ties. It provides a space for solidarity building for individuals facing up to oppression around the world. Combining both in-person and virtual sessions, fellows are able to examine how their various struggles are related, as well as share safe space, experiences, analysis, wisdom, and organising tactics. The programme, co-created with the fellows, focuses on the holistic aspects of activism and the spiritual aspects of the struggle."
     },
     {
       "id":"aurora",
       "title":"The Alternative Narrative Network",
       "text":"The media in all its forms is a powerful tool to explain the multiple crises of our age; to give hope by revealing alternative ways of seeing and being and to give voice to the people and communities working to change the world. The ANN is a resource and a community for those working in the media who wish to be part of the story of transition."
     }
   ];

   selectedBadge:Number = 0;
   badgeChanged:boolean = false;

   ngOnInit():void{

   }

   selectBadge(i:Number):void{

     if(i!=this.selectedBadge)
       this.badgeChanged = true;

     this.selectedBadge = i;
   }

   onMouseDown():void{
     this.badgeChanged = false;
   }
}
