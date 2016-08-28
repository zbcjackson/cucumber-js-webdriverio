var chai = require("chai");
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {
  this.When(/^add (\d+) and (\d+)$/, function (first, second, next) {
    browser.url("http://juliemr.github.io/protractor-demo/");
    browser.setValue('[ng-model=first]', first);
    browser.setValue('[ng-model=second]', second);
    browser.click('#gobutton');
    next();
  });

  this.Then(/^result is (\d+)$/, function (result, next) {
    browser.waitUntil(function () {
      return !browser.getText('h2.ng-binding').match(/\.+/)
    }, 5000);

    expect(browser.getText('h2.ng-binding')).to.equal(result);
    next();
  });
}