import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';

let Items: Item[] =  [] ;

for (let i=0;i<6;i++) {
  Items[i] = {
    id: i.toString(),
    name: 'Item'+i.toString(),
    image: 'https://picsum.photos/id/'+i.toString()+'/200/200',
    category: i<3?'Category1':'Category2',
    label: 'Label'+i.toString(),
    price: (Math.random()*10+i).toString(),
    description:'Simple description for Item'+i.toString(),
    featured:  i%2==0,
  };
}
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  titleCatalog = 'Catalog';

  items = Items;


  constructor() {}

  ngOnInit(): void {}
}
