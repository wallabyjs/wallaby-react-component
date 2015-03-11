'use strict';

var testUtils = React.addons.TestUtils;

describe('User Profile', () => {

  var instance;

  beforeEach(() => {
    this.container = document.createElement('div');
    document.body.appendChild(this.container);
    instance = React.render(<UserProfile username='Homer' />, this.container);
  });

  afterEach(() => {
    document.body.removeChild(this.container);
  });

  describe('Follow button', () => {

    it('should display user name', () => {
      expect(instance.getDOMNode().textContent).toBe('Follow Homer');
    });

    it('should change its text to "Unfollow" when clicked', () => {
      testUtils.Simulate.click(testUtils.findRenderedDOMComponentWithTag(instance, 'p'));
      expect(instance.getDOMNode().textContent).toBe('Unfollow');
    });
  });

});