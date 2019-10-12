import React from 'react';
import { ShallowWrapper, shallow, mount } from 'enzyme';
import { formatHTML } from '../../TestUtilities/htmlFormatter';
import Process, { ProcessProps, ProcessState } from './Process';

describe('The Process Component', () => {

    let wrapper: ShallowWrapper<ProcessProps, ProcessState, Process>;

    beforeEach(() => {
        createTasks();
        wrapper = shallow(<Process activeStep={0} steps={StepNodes} />);
    });

    it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());

    it('shows the first element in the process', () => {
        expect(wrapper.contains(StepNodes[0])).toEqual(true);
    });

    describe('when the user has finished with step 1', () => {

        beforeEach(() => {
            wrapper.setProps({
                activeStep: 1
            });
        });

        it('no longer displays step 1', () => {
            expect(wrapper.contains(StepNodes[0])).toEqual(false);
        });

        it('displays step 2', () => {
            expect(wrapper.contains(StepNodes[1])).toEqual(true);
        });

        describe('when the user has finished step 2', () => {

            beforeEach(() => {
                wrapper.setProps({
                    activeStep: 2
                });
            });

            it('displays step 3', () => {
                expect(wrapper.contains(StepNodes[2])).toEqual(true);
            });

            describe('given step 3 is the last step', () => {
                describe('when the user has finished step 3', () => {

                    beforeEach(() => {
                        wrapper.setProps({
                            activeStep: 0
                        });
                    });

                    it('displays step 1', () => {
                        expect(wrapper.contains(StepNodes[0])).toEqual(true);
                    });
                });
            });
        });
    });

    let StepNodes: React.ReactElement[];

    function createTasks() {
        StepNodes = [
            <div key={0}>Step One</div>,
            <div key={0}>Step Two</div>,
            <div key={0}>Step Three</div>
        ]
    }
});