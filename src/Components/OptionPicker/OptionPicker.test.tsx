import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";
import { formatHTML } from '../../TestUtilities/htmlFormatter';
import OptionPicker from './OptionPicker';

describe('The App', () => {

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<OptionPicker />);
  });

  it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());
});