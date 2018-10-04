import React from 'react';
import { shallow, mount } from 'enzyme';
import { HomeContainer } from './HomeContainer';

describe('HomeContainer', () => {
  let props = {
    loading: false,
    error: false,
    user: {}
  };
  let homeContainer = shallow(<HomeContainer {...props} />);
  it('should renders properly', () => {
    expect(homeContainer).toMatchSnapshot();
  });
});
