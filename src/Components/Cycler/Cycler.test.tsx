import React from 'react';
import Cycler from './Cycler';
import { mount, ReactWrapper } from 'enzyme';
import { formatHTML } from '../../TestUtilities/htmlFormatter';

describe('The Cycler', () => {
    
    const SourceList = getSourceList() as Source[];
    const cycleTime = 1500;
    const google = getSource1();
    const facebook = getSource2();

    let wrapper: ReactWrapper<CyclerProps, CyclerState>;

    beforeEach(() => {
        wrapper = mount(<Cycler sourceList={SourceList} cycleTime={cycleTime} />)
    });

    it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());
        
    it("doesn't have the cycler controls open by default", () => {
        expect((wrapper.instance().state as CyclerState).controlsVisible).toEqual(false);
    });

    describe("given the cycler time has ticked by", () => {

        beforeEach(done => setTimeout(done, cycleTime / 2));

        it("correctly displays the time left", () => {
            expect(
                (wrapper.instance().state as CyclerState)
                    .millisecondsRemaining
            );
        });
    });

    describe("given the cycler has reached then end of the list", () => {

        beforeEach(done => setTimeout(done, cycleTime * 2));

        it("cycles around to the first stream", () => {
            expect(
                (wrapper.find('Stream')
                    .getElement().props as StreamProps)
                    .source
                    .title
            ).toEqual(google.title);
        });
    });

    describe("when the time display is clicked", () => {

        beforeEach(() =>
            wrapper.find('TimeDisplay').simulate('click')
        );

        it("opens the cycler controls", () => {
            expect(wrapper.find('.cycler-controls').length).toEqual(1);
            expect((wrapper.instance().state as CyclerState).controlsVisible).toEqual(true);
        });
    
        describe("when the time display is clicked again", () => {

            beforeEach(() =>
                wrapper.find('TimeDisplay').simulate('click')
            );

            it("opens the cycler controls", () => {
                expect((wrapper.instance().state as CyclerState).controlsVisible).toEqual(false);
            });

        });

        describe("when the skip button is clicked", () => {

            beforeEach(() => {
                wrapper.find('#skip-control').first().simulate('click');
            });
            
            it('cycles to the next stream', () => {
                expect(
                    (wrapper.find('Stream')
                        .getElement().props as StreamProps)
                        .source
                        .title
                ).toEqual(facebook.title);
            });

            it('hides the controls', () => {
                expect((wrapper.instance().state as CyclerState).controlsVisible).toEqual(false);
            });
        });
        
        describe("when the playback button is clicked", () => {

            beforeEach(done => {
                wrapper.find('#playback-control').first().simulate('click');
                setTimeout(done, cycleTime + cycleTime / 2);
            });
            
            it('pauses the stream', () => {
                expect(
                    (wrapper.find('Stream')
                        .getElement().props as StreamProps)
                        .source
                        .title
                ).toEqual(google.title);
            });

            it('hides the controls', () => {
                expect((wrapper.instance().state as CyclerState).controlsVisible).toEqual(false);
            });
        });
        
        describe("when the skip button is clicked", () => {

            beforeEach(() => {
                wrapper.find('#skip-control').first().simulate('click');
            });
            
            it('cycles to the next stream', () => {
                expect(
                    (wrapper.find('Stream')
                        .getElement().props as StreamProps)
                        .source
                        .title
                ).toEqual(facebook.title);
            });

            it('hides the controls', () => {
                expect((wrapper.instance().state as CyclerState).controlsVisible).toEqual(false);
            });
        });
    });

    describe("given the load time has elapsed", () => {

        beforeEach(done => setTimeout(done, cycleTime + cycleTime/2))

        it('cycles to the next stream', () => {
            expect(
                (wrapper.instance()
                    .state as CyclerState)
                    .activeSource
            ).toEqual(1);
        });

    });

    function getSourceList(): Source[] {
        return [
            getSource1(),
            getSource2(),
            getSource3()
        ];
    }

    function getSource1(): Source {
        return {
            source: "https://www.google.com",
            title: "Google"
        } as Source
    }

    function getSource2(): Source {
        return {
            source: "https://www.facebook.com",
            title: "Facebook"
        }
    }

    function getSource3(): Source {
        return {
            source: "https://www.twitter.com",
            title: "Twitter"
        }
    }

});