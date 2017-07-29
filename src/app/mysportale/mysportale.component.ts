import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-mysportale',
  templateUrl: './mysportale.component.html',
  styleUrls: ['./mysportale.component.css']
})
export class MysportaleComponent implements OnInit {

  constructor(public router: Router ) { }

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/home']);
    }
  }
}
