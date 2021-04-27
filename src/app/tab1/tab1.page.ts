import { Component, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  


  constructor(/*private renderer: Renderer2*/) {}
 
 
  toggleTheme(event)
  {
        

  if(event.detail.checked)
    {
      document.body.setAttribute('color-theme','dark');
      //this.renderer.setAttribute(document.body,"color-theme", "light");
      console.log(event.detail.checked);
    }else
    {
      //this.renderer.setAttribute(document.body, "color-theme", "dark");
       document.body.setAttribute('color-theme','light');
       console.log(event.detail.checked);
    }
  }

}
