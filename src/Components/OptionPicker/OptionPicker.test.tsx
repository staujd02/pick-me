import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";
import { formatHTML } from '../../TestUtilities/htmlFormatter';
import OptionPicker from './OptionPicker';

describe('The Option Picker', () => {

  let wrapper: ShallowWrapper<OptionPickerProps, OptionPickerState>;
  let props: OptionPickerProps;

  let finishedPickingOptionsCallback: jest.Mock;

  beforeEach(() => {
    props = {
      options: getOptions(),
      finishedPickingOptionsCallback: (finishedPickingOptionsCallback = jest.fn())
    }
    wrapper = shallow(<OptionPicker {...props} />);
  });

  it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());

  it('disables the done button by default', () => {
    expect(wrapper.find('button').prop('disabled')).toEqual(true);
  });

  describe('given a list of three options', () => {
    it('renders an option for each card', () => {
      expect(inList().find(optionIdentifier)).toHaveLength(3);
    });
  });

  describe('when the user picks an option', () => {

    beforeEach(() => {
      simulateClick(getFirst(inList(), optionIdentifier));
    });

    it('adds it to the list', () => {
      expect(wrapper.state().selectedOptions[0]).toEqual(props.options[0]);
    });

    it('renders the option in the selected list', () => {
      expect(inSelectionArea().find(optionIdentifier)).toHaveLength(1);
    });

    describe('when the user picks the same option', () => {
      beforeEach(() => {
        simulateClick(getFirst(inList(), optionIdentifier));
      });
      it('removes it from the list', () => {
        expect(wrapper.state().selectedOptions).toEqual([props.options[0]]);
      });
    });

    describe('when the picks another option', () => {
      beforeEach(() => {
        simulateClick(getLast(inList(), optionIdentifier));
      });
      it('appends it to the list', () => {
        expect(wrapper.state().selectedOptions).toHaveLength(2);
      });
      it('enables the button', () => {
        expect(wrapper.find('button').prop('disabled')).toEqual(false);
      });

      describe('when the user clicks the done button', () => {
        beforeEach(() => {
          wrapper.find('button').simulate('click');
        });
        it("informs the parent of the user's selection", () => {
          expect(props.finishedPickingOptionsCallback).toHaveBeenLastCalledWith([
            getOptions()[0],
            getOptions()[2],
          ]);
        });
      });
    });
  });

  describe('when the first option is displayed', () => {
    it('shows that option to the user', () => {
      let firstRenderedOptionTitle = getFirst(inList(), optionIdentifier);
      expect(
        firstRenderedOptionTitle.prop('option')
      ).toEqual(props.options[0]);
    });
  });

  describe('when the last option is displayed', () => {

    it('shows that option to the user', () => {
      let firstRenderedOptionTitle = getLast(inList(), optionIdentifier);
      expect(
        firstRenderedOptionTitle.prop('option')
      ).toEqual(props.options[2]);
    });
  });

  describe('given one option', () => {
    beforeEach(() => {
      wrapper.setProps({
        options: [props.options.pop()!]
      });
    });

    it('renders an option for each card', () => {
      expect(inList().find(optionIdentifier)).toHaveLength(1);
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
    return ['1', '2', '3'].map(id => ({
      title: "Option " + id,
      image: "image/" + id
    }));
  }

  function simulateClick(wrapper: ShallowWrapper) {
    (wrapper.prop('handleClick') as () => void)();
  }

  function getFirst(wrapper: ShallowWrapper, identifier: string) {
    return wrapper.find(identifier).first();
  }

  function getLast(wrapper: ShallowWrapper, identifier: string) {
    return wrapper.find(identifier).last();
  }
  
  function inSelectionArea() {
    return wrapper.find('.selected-list');
  }

  function inList() {
    return wrapper.find('.option-list');
  }

  const optionIdentifier = 'OptionCard';
});