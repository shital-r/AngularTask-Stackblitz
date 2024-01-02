import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css'],
})
export class EmplistComponent implements OnInit {
  emplist: any[] = [];
  // employeelist: employee[] = [];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  getdataFromChild(data: any) {
    this.emplist.push(data);
  }

  delet(index: number) {
    this.emplist.splice(index, 1);
  }
}
