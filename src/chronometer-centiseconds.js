class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback){
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/6000);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime/100) %60;
  }

  getCentiseconds() {
    // ... your code goes here
    return this.currentTime%100;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    this.stringValue = value.toString();
    if (this.stringValue.length === 1){
      this.stringValue = "0" + this.stringValue
    }
    return this.stringValue;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const splitMin = this.computeTwoDigitNumber(this.getMinutes());
    const splitSec = this.computeTwoDigitNumber(this.getSeconds());
    const splitCentiSec = this.computeTwoDigitNumber(this.getCentiseconds());

    return `${splitMin}:${splitSec}.${splitCentiSec}`
  }
}
