import { Component, OnInit } from '@angular/core';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../common.styles.less','./footer.component.less']
})
export class FooterComponent implements OnInit {
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }
}
