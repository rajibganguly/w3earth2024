import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from './../../data-service.service';

@Component({
  selector: 'app-astrology',
  templateUrl: './astrology.component.html',
  styleUrls: ['./astrology.component.scss']
})
export class AstrologyComponent implements OnInit {
  @ViewChild('selectRashi', {static: true}) selectRashi!: ElementRef;

  predictionsOfNumber: string = "";
  coutseyLink: string = ""

  randomUsers: any;
  userInfo: any;
  userResults: any[] = [];

  dataDetails: any;
  homeReturn = true;
  loader = false;
  @ViewChild('firstName', { static: false }) firstName!: ElementRef;
  finding: string = 'No number';

  constructor(
    private service: DataService
    ) { }

  ngOnInit() {
    console.log('loading')
  }

  public myLuckyNumber() {
    const value = this.firstName.nativeElement.value;
    // Regular expression to match letters (a-z, A-Z)
    const letterRegex = /[a-zA-Z]/g;

    // Extract letters using the regular expression
    const letters = value.match(letterRegex).join('').toLowerCase();

    // Count the number of letters
    const letterCount = letters.length;

    const mapObj = [
        { letters: 'ajs', value: 1 },
        { letters: 'bkt', value: 2 },
        { letters: 'clu', value: 3 },
        { letters: 'dmv', value: 4 },
        { letters: 'enw', value: 5 },
        { letters: 'fox', value: 6 },
        { letters: 'gpy', value: 7 },
        { letters: 'hqz', value: 8 },
        { letters: 'ir', value: 9 }
    ];

    let totalValue = 0;

    for (let letter of letters) {
        for (const { letters: mapLetters, value: mapValue } of mapObj) {
            if (mapLetters.includes(letter)) {
                totalValue += mapValue;
                break;
            }
        }
    }

    // Add digits if totalValue is greater than 9
    while (totalValue > 9) {
        totalValue = totalValue.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        this.finding = totalValue.toString()
        this.predictionsOfNum(this.finding);
    }

}


private predictionsOfNum(num: string) {
  switch (num) {
    case "1":
      this.predictionsOfNumber = "THE PRIMAL FORCE: Among the nine single-digit numbers, the 1 holds a special place. From a spiritual perspective, it is the number of creation, the primal force from which all other numbers spring forth.";
      this.coutseyLink = "read more in https://www.worldnumerology.com/numerology-single-digit-numbers/numerology-meaning-of-1/"
      break;
    case "2":
      this.predictionsOfNumber = "THE ALL-KNOWING: The most feminine among all numbers, the 2 is also the most underestimated -- at least, when it comes to power and strength. It is almost always gentle, tactful, diplomatic, forgiving and understanding.";
      this.coutseyLink = "read more in https://www.worldnumerology.com/numerology-single-digit-numbers/numerology-meaning-of-2/"
      break;
    case "3":
      this.predictionsOfNumber = "THE CREATIVE CHILD: The number 3 is like a gifted teenager who is still under the protection of their parents: a bit spoiled, scattered and perpetually in need of guidance. However, the most obvious traits of the 3 are in the creative field.";
      this.coutseyLink = "read more in https://www.worldnumerology.com/numerology-single-digit-numbers/numerology-meaning-of-3/"
      break;
    case "4":
      this.predictionsOfNumber = "THE SALT OF THE EARTH: The 4 is without a doubt the most stable, grounded number, reflecting strength and stability. It's chief characteristics are dependability, productivity, punctuality and obedience. It is trustworthy, patient, conventional and detail oriented.";
      this.coutseyLink = "read more in https://www.worldnumerology.com/numerology-single-digit-numbers/numerology-meaning-of-4/"
      break;
    case "5":
      this.predictionsOfNumber = "A DYNAMIC FORCE: The number 5 is the most dynamic and energetic of all the single-digit numbers. It is unpredictable, always in motion and constantly in need of change. Although it is molded from an almost equal mix of masculine and feminine qualities.";
      this.coutseyLink = "read more in https://www.worldnumerology.com/numerology-single-digit-numbers/numerology-meaning-of-5/"
      break;
    case "6":
      this.predictionsOfNumber = "THE CARETAKER: While the 6 is considered the most harmonious of all single-digit numbers, it is not without its flaws and upsets. The most important influence of the 6 is its loving and caring nature. It is properly nicknamed the motherhood number.";
      this.coutseyLink = "read more in https://www.worldnumerology.com/numerology-single-digit-numbers/numerology-meaning-of-6/"
      break;
    case "7":
      this.predictionsOfNumber = "THE PHILOSOPHER: The number 7 is the seeker, thinker, the searcher of Truth (notice the capital 'T'). The 7 doesn't take anything at face value - always trying to understand the underlying hidden truths. The 7 intuitively knows nothing is what it seems.";
      this.coutseyLink = "read more in https://www.worldnumerology.com/numerology-single-digit-numbers/numerology-meaning-of-7/"
      break;
    case "8":
      this.predictionsOfNumber = "BALANCE & POWER: The number 8 is perhaps the most misunderstood of all single-digit numbers, as novices and numerology professionals alike seem to hammer on the 'money and power' image of the 8.";
      this.coutseyLink = "read more in https://www.worldnumerology.com/numerology-single-digit-numbers/numerology-meaning-of-8/"
      break;
    case "9":
      this.predictionsOfNumber = "GLOBAL AWARENESS: A different, but no less distinctive attribute of the 9 happens when you add it to any other number, then reduce that number to a single digit. In this case, it always comes back to itself as if nothing was added at all - it doesn’t change anything from the initial single digit value.";
      this.coutseyLink = "read more in https://www.worldnumerology.com/numerology-single-digit-numbers/numerology-meaning-of-9/"
      break;
    default:
      this.predictionsOfNumber = "No any matched calculation";
      break;
  }

}


public getRandomUser() {
        this.service.getRandomuserList().subscribe((data) => {
          console.log(data);
          this.randomUsers = data
          // if(data.results) {
          //   this.userResults = data?.results;
          // }
          // if(data.info) {
          //   this.userInfo = data?.info;
          // }
        })
}



}
