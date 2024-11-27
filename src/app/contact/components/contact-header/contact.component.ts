import { Component, Input } from '@angular/core';
import { CONTACTTITLE } from 'src/app/constant';
import { DASHBOARD_CLIENTS_PREVIEW } from 'src/app/constants/constant';
import { IClientsLogo } from 'src/app/dashboard/sectiontwo/sectiontwo.component';
import { DataService } from 'src/app/data-service.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent  {
  title = CONTACTTITLE;
  cardsDetailsInContact: any[] | any;
  constructor(private dataService: DataService) {
    this.dataService.contactcards().subscribe((res: any) => {
      this.cardsDetailsInContact = res[0].data;
    })
   }


  downloadCV() {
    let text: string | null = prompt("Please enter skill/s to download CV:", "");
    let txt = text?.toString().toLowerCase();
    if(txt) {
      if (txt.includes("python") || txt.includes("python javascript") || txt.includes("react node")) {
        window.open('./../../../assets/cv/fs/resume.pdf');
      } else if (txt.includes("angular") || txt.includes("react")) {
        window.open('./../../../assets/cv/fe/resume.pdf');
      } else if (txt.includes("data science")) {
        window.open('./../../../assets/cv/aiml/resume.pdf');
      } else {
        window.alert("Please raise request to w3earth@outlook.com for download resume")
      }
    }
  }

}
