import React from 'react';
import App from './App';
import { ShallowWrapper, shallow } from 'enzyme';
import { formatHTML } from '../../TestUtilities/htmlFormatter';

describe('The App', () => {

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());

  xdescribe("given the browser support going fullscreen", () => {
    describe("when the user clicks on the App", () => {
      it("goes fullscreen", () => {
        // ?      
      });
    });
  });

});