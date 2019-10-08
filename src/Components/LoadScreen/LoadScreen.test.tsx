import React from 'react';
import LoadScreen from './LoadScreen';
import { ShallowWrapper, shallow } from 'enzyme';
import { formatHTML } from '../../TestUtilities/htmlFormatter';

describe('The Load Screen', () => {
    
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<LoadScreen />)
    });

    it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());
});