import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";
import { formatHTML } from '../../TestUtilities/htmlFormatter';
import OptionPicker from './OptionPicker';

describe('The App', () => {

  let wrapper: ShallowWrapper;
  let finishedPickingOptionsCallback: jest.Mock;
  let options = getOptions();

  beforeEach(() => {
    wrapper = shallow(<OptionPicker finishedPickingOptionsCallback={(finishedPickingOptionsCallback = jest.fn())} />);
  });

  it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());

  describe('when a user picks an option', () => {

    it('is added to the list', () => {

    });
    
  });

  describe('when the user clicks the done button', () => {

    beforeEach(() => {
      wrapper.find('button').simulate('click');
    });

    it('locks in those options for the user', () => {
      expect(finishedPickingOptionsCallback).toHaveBeenCalled();
    });
  });

  function getOptions(): Option[] {
    return [
      {
        title: "Option 1",
        image: "image/1"
      },
      {
        title: "Option 2",
        image: "image/2"
      },
      {
        title: "Option 3",
        image: "image/3"
      }
    ];
  }

});