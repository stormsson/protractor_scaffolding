describe('Protractor Demo App', function() {
  it('should sum correctly', function() {
    browser.get('http://mongodb.aux/fableTest.php');

    firstInput = element(by.model('firstNumber'));
    secondInput = element(by.model('secondNumber'));

    result = element(by.model('result'));

    btn = element(by.buttonText('SUM'));

    firstInput.sendKeys("11");
    secondInput.sendKeys("22");

    btn.click();

    expect(result.getAttribute('value')).toBe('33');


  });
});
