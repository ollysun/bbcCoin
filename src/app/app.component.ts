import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coin Project';

  coinsValue = [
    { "moneyVal": 200, "moneySymbol": '£2' },
    { "moneyVal": 100, "moneySymbol": '£1' },
    { "moneyVal": 50, "moneySymbol": '50 pence' },
    { "moneyVal": 2, "moneySymbol": '2 pence' },
    { "moneyVal": 1, "moneySymbol": '1 pence' }
  ];

  moneyVal: any;
  amountVal: any = this.moneyVal;

  getRootArray() {
    var valM = this.moneyVal;
    return this.coinsValue.map(function (coin, i) {
      return [Math.floor(valM / coin.moneyVal), valM %= coin.moneyVal][0];
    });
  }

  getResult = function () {
    var arrayN = this.getRootArray();
    var result = [];
    var coinVal=[];
    coinVal = this.coinsValue;
    arrayN.forEach(function(value,index,result) {
        this.push({coinVal: coinVal[index].moneySymbol, amountVal:value})
    }, result);

    return result;
  };

  
  coinsCalc: any;
  Submit() {
    this.coinsCalc = this.getResult();
  }

}
