import { Component } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { PickerOptions} from '@ionic/core'





const circleR = 80;
const circleDasharray = 2 * Math.PI * circleR;



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  

  time: BehaviorSubject<string> = new BehaviorSubject('00:00');
  percent: BehaviorSubject<number> = new BehaviorSubject(100);

  timer: number;
  interval;
  startDuration = 1;



  circleR = circleR;
  circleDasharray = circleDasharray;

  state: 'start' | 'stop' = 'stop';


  framework ='';
  constructor(private pickerCtrl: PickerController ) {}
  
  async showBasicPicker() {
  

    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done'
        }
        
        
      ],
      columns: [
        {
          name: 'framework',
          options: [
            {text: '10', value: '10'},
            {text: '15', value: '15'},
            {text: '20', value: '20'},
            {text: '25', value: '25'},
            {text: '30', value: '30'},
            {text: '35', value: '35'},
            {text: '40', value: '40'},
            {text: '45', value: '45'},
            {text: '50', value: '50'},
            {text: '55', value: '55'},
            {text: '60', value: '60'}
          ]
        }

      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('framework');
      console.log('col:',col);
      this.framework = col.options[col.selectedIndex].text;
      this.startDuration = col.options[col.selectedIndex].value;
    })

  
    
}

  startTimer(duration: number){
    this.state = 'start';
    clearInterval(this.interval);
    this.timer = duration * 60;
    this.updateTimeValue();
    this.interval = setInterval(()=>{
      this.updateTimeValue();
    },1000);
  }

  stopTimer(){
    clearInterval(this.interval);
    this.time.next('00:00');
    this.state = 'stop';
  }

  percentageOffset(percent){
    const percentFloat = percent /100;
    return circleDasharray * (1 - percentFloat);

  }

  swapDuration(){
    this.startDuration = this.startDuration === 1 ? 0/5 : 1;

  }

  updateTimeValue(){
    let minutes: any = this.timer / 60;
    let seconds: any = this.timer % 60;

    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);

    const text = minutes + ':' + seconds;
    this.time.next(text);

    const totalTime = this.startDuration * 5;
    const percentage = ((totalTime - this.timer)/ totalTime) * 100;
    this.percent.next(percentage);

    --this.timer;

    if (this.timer < -1 ) {
      this.startTimer(this.startDuration);
    }
  }

}