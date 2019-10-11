import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { formatHTML } from '../../TestUtilities/htmlFormatter';
import Choice, { ChoiceProps, ChoiceState } from './Choice';

describe('The Choice', () => {

    let wrapper: ShallowWrapper<ChoiceProps, ChoiceState, Choice>;

   beforeEach(() => {
      wrapper = shallow(<Choice />); 
   });

  it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());
});