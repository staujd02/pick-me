import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";
import { formatHTML } from '../../../TestUtilities/htmlFormatter';
import OptionCard from './OptionCard';

describe('The Option Picker', () => {

    let wrapper: ShallowWrapper<OptionCardProps>;
    let props: OptionCardProps;

    let handleClick: jest.Mock;

    beforeEach(() => {
        props = {
            handleClick: (handleClick = jest.fn()),
            option: {
                image: "image",
                title: "title"
            }
        }
        wrapper = shallow(<OptionCard {...props} />);
    });

    it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());

    describe('when the option is displayed', () => {
        it('shows the user the title of that option', () => {
            let firstRenderedOptionTitle = getFirst(wrapper, typographyIdentifier);
            expect(
                firstRenderedOptionTitle.contains(props.option.title)
            ).toBeTruthy();
        });

        it('shows the user that options image', () => {
            let firstRenderedOptionImg = getFirst(wrapper, imageIdentifier);
            expect(firstRenderedOptionImg.prop('src')).toEqual(props.option.image);
        });
    });

    describe('when the user clicks on the card action area', () => {

        beforeEach(() => {
            wrapper.find(cardActionAreaIdentifier).simulate('click');
        });

        it('calls the registered onClick handler', () => {
            expect(handleClick).toHaveBeenCalled();
        });
    });

    function getFirst(wrapper: ShallowWrapper<OptionCardProps>, identifier: string) {
        return wrapper.find(identifier).first();
    }

    const typographyIdentifier = 'WithStyles(ForwardRef(Typography))';
    const cardActionAreaIdentifier = 'WithStyles(ForwardRef(CardActionArea))';
    const imageIdentifier = 'img';
});