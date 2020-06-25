import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavParams, IonSlides, LoadingController } from "@ionic/angular";

@Component({
  selector: 'app-imagen-modal',
  templateUrl: './imagen-modal.page.html',
  styleUrls: ['./imagen-modal.page.scss'],
})
export class ImagenModalPage implements OnInit {
    index : number;
    @ViewChild('slides', {static: true}) slides : IonSlides;
    @ViewChild('slides', {read: ElementRef}) slide: ElementRef;

    options = {
      pager: "true",
      zoom : {
        maxRatio : 8
      }
    }

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
    
    constructor(private modalCtrl:ModalController, private navPara: NavParams, private loadingCtrl:LoadingController) {

        this.loadingCtrl.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...'
      }).then(loading => loading.present())


      this.index = this.navPara.get('index');
      console.log('esta es la imagen que llega',this.index);
      }

      
  ngOnInit() {
    console.log(this.slide);

    this.slides.slideTo(this.index,0).then(res =>{
      this.loadingCtrl.dismiss();
    });
    
  }

    back(){  this.modalCtrl.dismiss();   }
    zoom(zoom:boolean){  
      if(zoom){
        this.slide.nativeElement.swiper.zoom.in() 
      }else{
        this.slide.nativeElement.swiper.zoom.out()
      }
     }
}
