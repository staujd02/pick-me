import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { formatHTML } from '../../TestUtilities/htmlFormatter';
import Picker from './Picker';
import OptionPicker from '../OptionPicker/OptionPicker';
import Choice from '../Choice/Choice';
import ResultsOfDecision from '../ResultsOfDecision/ResultsOfDecision';

describe('The Picker', () => {

    let wrapper: ReactWrapper<PickerProps, PickerState, Picker>;

    beforeEach(() => {
        wrapper = mount(<Picker />);
    });

    it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());

    it('does not ask the user to set up an option by default', () => {
        let c = wrapper.instance().optionsPicked;
        expect(wrapper.contains(<OptionPicker finishedPickingOptionsCallback={c} />)).toEqual(false);
    });

    it('does not ask the user to make a choice by default', () => {
        let opts: Option[] = [];
        let c = wrapper.instance().optionChosen;
        expect(wrapper.contains(<Choice optionsToChooseFrom={opts} finishedChoosingOption={c} />)).toEqual(false);
    });

    it('does not show the user a choice has been made by default', () => {
        let opt: Option = { image: "", title: "" };
        expect(wrapper.contains(<ResultsOfDecision chosenOption={opt} />)).toEqual(false);
    });

    describe('when the user chooses to set up a choice', () => {
        beforeEach(() => {
            clickSetupChoices();
            wrapper.update();
        });

        it('no longer shows the option to set up a choice', () => {
            expect(wrapper.find('#setup-choice').length).toEqual(0);
        });

        it('should show a picker for those options', () => {
            let c = wrapper.instance().optionsPicked;
            expect(wrapper.contains(<OptionPicker finishedPickingOptionsCallback={c} />)).toEqual(true);
        });
    });

    describe('given the user has selected some options', () => {

        beforeEach(() => {
            clickSetupChoices();
            wrapper.update();
        });

        it('no longer shows the option to set up a choice', () => {
            expect(wrapper.find('#setup-choice').length).toEqual(0);
        });

        describe('and is now ready to make a choice', () => {

            beforeEach(() => {
                wrapper.instance().optionsPicked([]);
                wrapper.update()
            });

            it('does not show the option to pick different choices', () => {
                expect(wrapper.find('OptionPicker').length).toEqual(0);
            });

            describe('and is now ready to see the choice', () => {

                beforeEach(() => {
                    let option: Option = {
                        image: "base64",
                        title: "I am chosen"
                    }
                    wrapper.instance().optionChosen(option);
                    wrapper.update();
                });

                it('does not show the option to make a different decision', () => {
                    expect(wrapper.find('Choice').length).toEqual(0);
                });
            });
        });
    });

    describe('when the user has made their choice', () => {

        const option: Option = {
            image: "base64",
            title: "Chosen One"
        };

        beforeEach(() => {
            wrapper.instance().optionChosen(option);
            wrapper.update();
        });

        it('displays some results', () => {
            expect(wrapper.find('ResultsOfDecision').length).toEqual(1);
        });

        it('shows the option the user picked', () => {
            expect(wrapper.find('ResultsOfDecision').prop('chosenOption')).toEqual(option);
        });
    });

    describe('when the user has picked their options', () => {

        const options = [{
            image: "base64/string",
            title: "House"
        }, {
            image: "base64/string/other",
            title: "Or A Home"
        }];

        beforeEach(() => {
            wrapper.instance().optionsPicked(options);
            wrapper.update();
        });

        it('shows the menu for the next user to pick with', () => {
            let opts = wrapper.state().availableOptions;
            let c = wrapper.instance().optionChosen;
            expect(wrapper.contains(<Choice optionsToChooseFrom={opts} finishedChoosingOption={c} />)).toEqual(true);
        });

        it('gives the user the available options', () => {
            expect(wrapper.find('Choice').prop('optionsToChooseFrom')).toEqual(options);
        });
    });

    function clickSetupChoices() {
        wrapper.find('#setup-choice').simulate('click');
    }
});
