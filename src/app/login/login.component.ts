import { Component, OnInit } from '@angular/core';
import { faLockOpen, faUser} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less','../common.styles.less']
})
export class LoginComponent implements OnInit {

  faLockOpen = faLockOpen;
  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
