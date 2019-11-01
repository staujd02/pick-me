import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// This, here. Little beauty, is why unit testing isn't worse 
// than jock rash on vacation - it removes the constant errors and 
// warning thrown by rendering components that use material-ui components
// under the hood.
jest.spyOn(React, 'useLayoutEffect').mockImplementation(() => true);