import {
  trigger, state, style, animate,
  transition, animateChild, group, query
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('HomePage <=> AboutPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%' }))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%' }))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
  transition('* <=> FilterPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('200ms ease-out', style({ left: '100%' }))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%' }))
      ])
    ]),
    query(':enter', animateChild()),
  ])
]);

export const fadeAnimation = trigger('routeAnimations', [
  // The '* => *' will trigger the animation to change between any two states
  transition('* => *', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
  // here we apply a style and use the animate function to apply the style over 0.3 seconds
    query(':leave',
      [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(':enter',
      [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);

export const toggleLeft = trigger('toggleLeft', [
  transition(':enter', [
      style({ left: "-25%", opacity: 0 }),
      animate('0.25s linear', style({ left: "!", opacity: "!" }))
    ]
  ),
  transition(':leave', [
      animate('0.25s linear', style({ left: "-25%", opacity: 0 }))
    ]
  )
]);

export const toggleRight = trigger('toggleRight', [
  transition(':enter', [
      style({
        "min-width": "0px",
        "width": "0px",
        opacity: 0,
        overflow: "hidden"
      }),
      animate("0.25s linear", style({ width: "!", opacity: 1 }))
  ]),
  transition(':leave', [
    animate("0.25s ease-in",
      style({
      "min-width": "0px",
      width: "0px",
      opacity: 0,
      overflow: "hidden"
      })
    )
  ])
])