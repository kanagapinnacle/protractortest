// spec.js
describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
    var operator = element(by.model('operator'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));

  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    //element(by.cssContainingText('option', 'ADDITION')).click();
    operator.sendKeys("+");
    goButton.click();
  }
    
function multiply(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    operator.sendKeys("*");
   // element(by.cssContainingText('option', 'MULTIPLICATION')).click();
    goButton.click();
  }

    

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a history', function() {
    add(1, 2);
    add(3, 4);

    expect(history.count()).toEqual(2);

    add(5, 6);

    expect(history.count()).toEqual(3); 
  });
    
it('Check multiply', function() {
    multiply(2,4);
    expect(latestResult).toEqual(8);

    multiply(5, 6);

    expect(latestResult).toEqual(30);
  });
});