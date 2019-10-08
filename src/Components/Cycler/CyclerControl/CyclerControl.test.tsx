import React from 'react';
import { ReactWrapper, mount } from "enzyme";
import { formatHTML } from '../../../TestUtilities/htmlFormatter';
import CyclerControl from './CyclerControl';

describe('The Cycler', () => {

    let wrapper: ReactWrapper<CyclerControlProps, CyclerControlState>;

    beforeEach(() => {
        wrapper = mount(<CyclerControl />)
    });

    it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());
});