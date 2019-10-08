import React from 'react';
import Stream from './Stream';
import { StreamState } from 'http2';
import { ShallowWrapper, shallow } from 'enzyme';
import { formatHTML } from '../../TestUtilities/htmlFormatter';

describe('The Stream', () => {

    const Source = {
        title: "Google",
        source: "https://www.google.com"
    } as Source;
    let wrapper: ShallowWrapper<StreamProps, StreamState>;

    beforeEach(() => {
        wrapper = shallow(<Stream source={Source} />)
    });

    it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());
});