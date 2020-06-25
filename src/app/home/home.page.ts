import { ImagenModalPage } from './../imagen-modal/imagen-modal.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl: ModalController) {}

  imagenes = [
    'assets/galeria/1 (1).jpg',
    'assets/galeria/1 (1).png',
    'assets/galeria/1 (2).jpg',
    'assets/galeria/1 (3).jpg',
    'assets/galeria/1 (4).jpg',
    'assets/galeria/1 (5).jpg',
    'assets/galeria/1 (6).jpg',
    'assets/galeria/1 (7).jpg',
    'assets/galeria/1 (8).jpg',
    'assets/galeria/1 (9).jpg'
  ]

  openModal(item:any){
    console.log(item);

    this.modalCtrl.create({
      component : ImagenModalPage,
      componentProps : {
        index: item
      }
    }).then(modal => modal.present())
  }
}
