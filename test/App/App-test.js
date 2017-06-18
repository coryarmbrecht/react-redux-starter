import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import mockStore from '../../src/Store';
import App from '../../src/components/app';
import { exampleAction } from '../../src/actions/actions';
import { EXAMPLE_ACTION } from '../../src/actions/types';


describe('<App />', function() {


  describe('rendering', function() {
    it('should render', function() {
      const wrapper = mount(
        <Provider store={mockStore}>
          <App />
        </Provider>
      );
      expect(wrapper.contains(
        <p>Execute action creator to see example rendered.</p>
      )).to.equal(true);
    });
  });

  describe('actions', function() {
    const action = exampleAction();
    expect(action.type).to.equal(EXAMPLE_ACTION);
    expect(action.payload).to.equal('Here\'s an example action!');
  });

  describe('reducer', function() {
    
  });

});
