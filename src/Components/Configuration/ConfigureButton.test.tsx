import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { formatHTML } from '../../TestUtilities/htmlFormatter';
import ConfigureButton from './ConfigureButton';

describe('The Load Screen', () => {
    
    let wrapper: ShallowWrapper<ConfigureButtonProps,{},ConfigureButton>;

    beforeEach(() => {
        wrapper = shallow(<ConfigureButton buttonClickHandler={jest.fn()} />)
    });

    it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());
});