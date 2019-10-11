import React from 'react';
import App from './App';
import { ShallowWrapper, shallow } from 'enzyme';
import { formatHTML } from '../../TestUtilities/htmlFormatter';
import Picker from '../Picker/Picker';

describe('The App', () => {

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());

  it('contains a picker', () => {
    expect(wrapper.contains(<Picker />)).toEqual(true);
  });
});