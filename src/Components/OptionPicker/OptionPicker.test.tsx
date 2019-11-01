import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";
import { formatHTML } from '../../TestUtilities/htmlFormatter';
import OptionPicker from './OptionPicker';

describe('The App', () => {

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

  describe('given a list of three options', () => {
    it('renders an option for each card', () => {
      expect(wrapper.find(cardIdentifier).length).toEqual(3);
    });
  });

  describe('when the user picks an option', () => {

    beforeEach(() => {
      getFirst(cardActionAreaIdentifier).simulate('click');
    });

    it('adds it to the list', () => {
      expect(wrapper.state().selectedOptions[0]).toEqual(props.options[0]);
    });

    describe('when the user picks the same option', () => {
      beforeEach(() => {
        getFirst(cardActionAreaIdentifier).simulate('click');
      });
      it('removes it from the list', () => {
        expect(wrapper.state().selectedOptions).toEqual([props.options[0]]);
      });
    });

    describe('when the picks another option', () => {
      beforeEach(() => {
        getLast(cardActionAreaIdentifier).simulate('click');
      });
      it('appends it to the list', () => {
        expect(wrapper.state().selectedOptions.length).toEqual(2);
      });
    });
  });

  describe('when the first option is displayed', () => {
    it('shows the user the title of that option', () => {
      let firstRenderedOptionTitle = getFirst(typographyIdentifier);
      expect(
        firstRenderedOptionTitle.contains(props.options[0].title)
      ).toBeTruthy();
    });

    it('shows the user that options image', () => {
      let firstRenderedOptionImg = getFirst(imageIdentifier);
      expect(firstRenderedOptionImg.prop('src')).toEqual(props.options[0].image);
    });
  });

  describe('when the last image is displayed', () => {

    it('shows the user the title of that option', () => {
      let firstRenderedOptionTitle = getLast(typographyIdentifier);
      expect(
        firstRenderedOptionTitle.contains(props.options[2].title)
      ).toBeTruthy();
    });

    it('shows the user that options image', () => {
      let firstRenderedOptionImg = getLast(imageIdentifier);
      expect(firstRenderedOptionImg.prop('src')).toEqual(props.options[2].image);
    });
  });

  describe('given one option', () => {
    beforeEach(() => {
      wrapper.setProps({
        options: [props.options.pop()!]
      });
    });

    it('renders an option for each card', () => {
      expect(wrapper.find(cardIdentifier).length).toEqual(1);
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

  function getFirst(typographyIdentifier: string) {
    return wrapper.find(typographyIdentifier).first();
  }

  function getLast(typographyIdentifier: string) {
    return wrapper.find(typographyIdentifier).last();
  }

  const cardIdentifier = 'WithStyles(ForwardRef(Card))';
  const typographyIdentifier = 'WithStyles(ForwardRef(Typography))';
  const cardActionAreaIdentifier = 'WithStyles(ForwardRef(CardActionArea))';
  const imageIdentifier = 'img';
});