import { Component, ElementRef, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, AfterViewInit } from '@angular/core';
import { map, pipe } from 'rxjs';
import { CONTACTTITLE, DASHBOARD_TITLE, DASHBOARD_TITLE2 } from '../constant';

import { DataService } from '../data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  cardsDetailsInDashboard: ICardsDetailsInDashboard[] | any;
  techDetails: ITechnologyDetails[] = [];
  canvasboarddata: IIntroData[] = [];
  todaysBanner: string = ""
  imageload: boolean = true
  imageArr = [
    "./../../assets/images/titles/a1.jpg",
    "./../../assets/images/titles/a2.jpg",
    "./../../assets/images/titles/a3.jpg",
    "./../../assets/images/titles/a4.jpg",
    "./../../assets/images/1709407293036.jpg"
  ]

  title = CONTACTTITLE;
  pageTitleHello: string = DASHBOARD_TITLE2;
  pageTitle: string = DASHBOARD_TITLE;
  blockqotetxt = `<p>Our customers available form global places like Virginia, Lowa, Washington, Wyoming, Texas, California, Kansas, Florida, Oregon, Des Moines, Boydton, Moses Lake, San Antonio, San Jose, Coffeyville in United States, Singapore, Busan, Inchean in South Korea, Amsterdam, in Netherlands, Helsinki in Finland, Paris in France, London, Manchester, Cardiff, in United Kingdom, Dublin in Ireland, Sydney in Australia and India
</p>`;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getBannerCanvas();
    this.dataService.dashbaordTechnical().subscribe((res: any) => {
      this.techDetails = res[0].data;
    });
    this.dataService.dashbaordcards().subscribe((res: any) => {
      this.cardsDetailsInDashboard = res[0].data;
    })

    this.setbannerContinue();
  }

  private setbannerContinue() {
    let currentImage: number = 0;
    const interval  = setInterval(() => {
      if(currentImage < this.imageArr.length) {
        this.todaysBanner = this.imageArr[currentImage];
        currentImage = currentImage + 1;
      } else {
        currentImage = 0;
        //clearInterval(interval)
      }
    }, 5000)
  }


  private getBannerCanvas(): any[] {
    let localData = [];
    this.dataService.introDataBanner().subscribe((res: any) => {
      this.canvasboarddata = res;
      //this.canvasboarddata.map()
      //Math.round(Math.random()*100);
      console.log(11, res, this.canvasboarddata)
    })
    return this.canvasboarddata;
  }


  private iterateFromArray(arr: any[], emptyArry: any[]) {
    arr.forEach(ele => {
      pipe((ele) => {
        map(arr => emptyArry.push(arr))
      })
    })
  }


  ngAfterViewInit(): void {
      const imageArr = [
        "./../../assets/images/banner1.svg",
        "./../../assets/images/banner2.svg",
        "./../../assets/images/banner3.svg",
        "./../../assets/images/banner4.svg",
        "./../../assets/images/banner1.svg",
      ]

      const currDate = new Date();
      const number = currDate.getMinutes()
      setTimeout(() => {
        for(var i = 0; i<imageArr.length; i++) {
          this.todaysBanner = imageArr[i]
        }
    })

  }




}


export interface ICardsDetailsInDashboard {
  title: string,
  starts: string,
  description: string,
  imagePath: string,
  nameOfAuthor: string
}

export interface ITechnologyDetails {
  value: string;
  label?: string;
  description?: string;
  image?: string;
}

export interface IIntroData {
  idTitle: string;
  backgroundColor?: string;
  size?: string;
  color?: string;
  xCordinate?: string;
  yCordinate?: string;
  title:  string;
  textColor?: string;
  textSize?:  string;
  yCordinateHover?: string;
}
