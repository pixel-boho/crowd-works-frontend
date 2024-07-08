import { Component, OnInit ,ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @ViewChild('scrollTarget') scrollTarget: ElementRef;
  constructor(private router:Router) { }

  ngOnInit(): void {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }

  scrollToElement(selector) {
    //console.log(selector)
    const element = document.querySelector(selector)
    element ? element.scrollIntoView({behavior: "smooth"}): null;
  }
  // scrollToElement() {
  //   console.log()
  //   this.scrollTarget.nativeElement.scrollIntoView({ behavior: 'smooth' });
  // }
  vision(){
  //  window.location.href = "about-us#vision"
  
   //window.location.href = "http://localhost:4200/#/about-us#vision"
   window.location.reload();
   setTimeout(() => {
    $('html, body').animate({ scrollTop: 0 }, 'fast');

   }, 1000);


}

mission(){
  window.location.href = "about-us#mission"
  window.location.reload();
  $('html, body').animate({ scrollTop: 0 }, 'fast');


}
ourTeams(){
  window.location.href = "about-us#ourTerms"
  window.location.reload();
  $('html, body').animate({ scrollTop: 0 }, 'fast');

}
partners(){
  window.location.href = "about-us#partners"
  window.location.reload();
  $('html, body').animate({ scrollTop: 0 }, 'fast');

}
media(){
  window.location.href = "about-us#media"
  window.location.reload();
  $('html, body').animate({ scrollTop: 0 }, 'fast');

}
stratfundraiser(){
  window.location.href = "howItWorks#startfundraiser"
  window.location.reload();
  $('html, body').animate({ scrollTop: 0 }, 'fast');


}
donate(){
  window.location.href = "howItWorks#donate"
  window.location.reload();
  $('html, body').animate({ scrollTop: 0 }, 'fast');


}
pricing(){
  window.location.href = "howItWorks#pricing"
  window.location.reload();
  $('html, body').animate({ scrollTop: 0 }, 'fast');


}
faq(){
  window.location.href = "howItWorks#faq"
  window.location.reload();
  $('html, body').animate({ scrollTop: 0 }, 'fast');


}

}
