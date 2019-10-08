import React from 'react';
import TimeDisplay from './TimeDisplay';
import { ShallowWrapper, shallow } from 'enzyme';

describe("The time display", () => {

    let wrapper: ShallowWrapper;
    let onClick = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<TimeDisplay onClick={onClick} time={getTime()}/>);
    });

    it('renders correctly', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    describe("when the user clicks the time display", () => {

        beforeEach(() => {
            wrapper.find('.time-display').simulate('click');
        });

        it("fires the interaction handler", () => {
            expect(onClick).toHaveBeenCalled();
        });
    });

    function getTime() {
        let sixtyMinutesInMilli = 60 * 60 * 1000;
        let thirtySecondsInMilli = 3 * 1000;
        return sixtyMinutesInMilli + thirtySecondsInMilli;
    }

});