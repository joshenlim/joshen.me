import {
  trigger,
  group,
  style,
  state,
  animate,
  transition,
  query,
  animateChild
} from '@angular/animations';

export const enterLeaveAnimation = trigger('enterLeave', [
  transition(':enter', [
    style({
      transform: 'translateY(100%)',
      opacity: 0,
      visibility: 'hidden',
    }),
    animate('0.3s 4.0s ease'),
  ]),
  transition(':leave', [
    style({
      transform: 'translateY(-100%)',
      opacity: 0,
    }),
    animate('0.3s ease')
  ])
])

export const shiftHeaderAnimation = trigger('shiftHeader', [
  transition(':enter', [
    style({
      transform: 'translateY(50px)'
    }),
    animate('0.3s 4.0s ease')
  ])
])

export const cardAnimation = trigger('openClose', [
  state('open', style({
    opacity: 1,
  })),
  state('closed', style({
    opacity: 0.5,
  })),
  transition('open <=> closed', [
    animate('0.2s ease'),
  ]),
])

export const slideInAnimation = trigger('routeAnimations', [
  transition('HomePage => WorksPage',  [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        padding: '20px',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ right: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease', style({ right: '100%'}))
      ]),
      query(':enter', [
        animate('300ms ease', style({ right: 'calc(0% - 40px)'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
  transition('WorksPage => HomePage',  [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        padding: '20px',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease', style({ left: 'calc(100%)'}))
      ]),
      query(':enter', [
        animate('300ms ease', style({ left: '0%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]) 
])