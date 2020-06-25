import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { enterLeaveAnimation, shiftHeaderAnimation } from '../animations'

@Component({
  selector: 'app-inbox',
  animations: [
    enterLeaveAnimation,
    shiftHeaderAnimation
  ],
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  constructor() { } 

  ngOnInit() {
    const options = {
      strings: ['Hey there!', 'Joshen here.'],
      typeSpeed: 50,
      backSpeed: 30,
      startDelay: 100,
      backDelay: 1000,
      showCursor: false,
      cursorChar: '',
    };
 
    const typed = new Typed('.typed', options);
  }

  socialMedia = [
    {
      'icon': 'assets/github.svg',
      'url': 'https://github.com/joshenlim/'
    },
    {
      'icon': 'assets/linkedin.svg',
      'url': 'https://www.linkedin.com/in/joshen-lim/'
    },
    {
      'icon': 'assets/email.svg',
      'url': 'mailto:joshenlimek@gmail.com'
    },
    {
      'icon': 'assets/instagram.svg',
      'url': 'https://www.instagram.com/joshen.lim/?hl=en'
    },
  ]
}
