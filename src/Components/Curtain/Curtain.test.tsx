import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Curtain from './Curtain';

describe("The Curtain", () => {

    const children = <div>Now you see me!</div>;
    let wrapper: ReactWrapper<CurtainProps, CurtainState>;

    beforeEach(() => {
        wrapper = mount(
            <Curtain open={true}>
                {children}
            </Curtain>);
    });

    it('renders correctly', () => expect(wrapper.html()).toMatchSnapshot());
});