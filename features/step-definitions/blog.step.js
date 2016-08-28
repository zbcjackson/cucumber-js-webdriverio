var chai = require("chai");
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {
  this.Given(/^there are posts$/, function (table, callback) {
    var post = table.hashes()[0]
    this.server.get('/posts').persist().reply(200, [{cover:'', title:post.title, content:post.content}], {'Access-Control-Allow-Origin': '*'})
    callback();
  });

  this.When(/^check posts list$/, function (callback) {
    browser.url('/')
    callback()
  });

  this.Then(/^I can see$/, function (table, callback) {
    browser.waitForText('h2.ng-binding');
    var post = table.hashes()[0]
    expect(browser.getText('h2.ng-binding')).to.equal(post.title);
    expect(browser.getText('p.ng-binding')).to.equal(post.content);
  });
}