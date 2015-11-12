'use strict';

var testUtils = React.addons.TestUtils;

describe('User Profile', function () {

  var instance;

  beforeEach(function () {
    this.container = document.createElement('div');
    document.body.appendChild(this.container);
    instance = React.render(<UserProfile username='Homer' />, this.container);
  });

  afterEach(function () {
    this && document.body.removeChild(this.container);
  });

  describe('Follow button', function () {

    it('should display user name', function () {
      expect(instance.getDOMNode().textContent).toBe('Follow Homer');
    });

    it('should change its text to "Unfollow" when clicked', function () {
      testUtils.Simulate.click(testUtils.findRenderedDOMComponentWithTag(instance, 'p'));
      expect(instance.getDOMNode().textContent).toBe('Unfollow');
    });
  });

});
