import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as UIToolkit from '@zoom/videosdk-ui-toolkit'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent implements OnInit, AfterViewInit{
  ngAfterViewInit(): void {
  
    let UIToolKitConfig = {
      videoSDKJWT: '',
      sessionName: '',
      userName: '',
      sessionPasscode: '',
      features: ['video', 'audio', 'settings', 'users', 'chat']
    };
    
    UIToolkit.init(UIToolKitConfig);
    
  }
  ngOnInit(): void {
    let UIKit = document.createElement('app-uitoolkit');

    document.getElementById('UIToolkit')?.append(UIKit);

  }
  title = 'zoomkit';
}
