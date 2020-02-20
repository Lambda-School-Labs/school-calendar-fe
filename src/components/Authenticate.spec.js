import React from 'react';
import { shallow } from 'enzyme';
import Redirect from './Redirect';

describe('Authenticate', () => {
  it('should render correctly', () => {
    const component = shallow(<Authenticate />);

    expect(component).toMatchSnapshot();
  });
});
