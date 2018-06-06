import { State, Store, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';

//Model
export class ExternalLink {
  constructor(public Text:string, public Url:string){}
}

//Actions


//State
@State<ExternalLink[]>({
  name: 'externalLinks',
  defaults: [
      new ExternalLink('Help Desk', 'https://its.uiowa.edu/contact'),
      new ExternalLink('Self Service', 'https://hris.uiowa.edu'),
  ]
})
export class ExternalLinksState  {

  constructor() {  }

}
