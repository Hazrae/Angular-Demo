import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  items: NbMenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {link : '/home', title:'Home', icon:'home-outline'},
      {link : '/about', title:'About', icon:'arrow-circle-right-outline'},
      {title : 'Demo', icon:'arrow-circle-right-outline',children: [
        {link:'/demo/demo1', title:'Bindings', icon:'arrow-circle-right-outline'},
        {link:'/demo/demo2', title:'Event', icon:'arrow-circle-right-outline'},
        {link:'/demo/demo3', title:'Pipe', icon:'arrow-circle-right-outline'},
        {link:'/demo/demo4', title:'Binding Two Way', icon:'arrow-circle-right-outline'},
        {link:'/demo/demo5', title:'Structural Directives', icon:'arrow-circle-right-outline'},
        {link:'/demo/demo6', title:'Services and Promises', icon:'arrow-circle-right-outline'},
        {link:'/demo/demo7', title:'Forms', icon:'arrow-circle-right-outline'},
        {link:'/demo/demo7/new-user', title:'Forms-New User', icon:'arrow-circle-right-outline'},
        {link:'/demo/demo8', title:'Custom Validators', icon:'arrow-circle-right-outline'},
        {link:'/demo/demo9', title:'Guards', icon:'arrow-circle-right-outline'},
        {link:'/demo/demo10', title:'Input - Output', icon:'arrow-circle-right-outline'},
        {link:'/demo/demo11/pokedex', title:'Pokedex', icon:'arrow-circle-right-outline'},
        
      ]},
      {title : 'Exercices', icon:'arrow-circle-right-outline',children: [
        {link:'/exercices/exo1', title:'Chronomètre', icon:'arrow-circle-right-outline'},  
        {link:'/exercices/exo2', title:'Liste de courses', icon:'arrow-circle-right-outline'}
      ]}  

    ]
  }

}
