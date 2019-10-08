import React from 'react';
import { formatHTML } from '../../TestUtilities/htmlFormatter';
import { shallow, ShallowWrapper } from 'enzyme';
import Configuration from './Configuration';

describe('The Configuration Component', () => {

    let wrapper: ShallowWrapper<{},{},Configuration>

    beforeEach(() => {
        wrapper = shallow(<Configuration />);
    });

    it('renders correctly', 
        () => expect(formatHTML(wrapper.html())).toMatchSnapshot());

});