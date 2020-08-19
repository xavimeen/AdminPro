import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Download Sales1', 'In-Store Sales1', 'Mail-Order Sales1'];
  public data1 = [
    [250, 450, 50],
  ];

}
