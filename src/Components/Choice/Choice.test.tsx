import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { formatHTML } from '../../TestUtilities/htmlFormatter';
import Choice from './Choice';

describe('The Choice', () => {

    let wrapper: ShallowWrapper<ChoiceProps, ChoiceState, Choice>;
    let props: ChoiceProps;

    let finishedChoosingOption: jest.Mock;

   beforeEach(() => {
      props ={
         finishedChoosingOption: (finishedChoosingOption = jest.fn()),
         optionsToChooseFrom: [{
            image: "aaa",
            title: "A Title"
         }]
      }
      wrapper = shallow(<Choice {...props} />); 
   });

  it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());
});