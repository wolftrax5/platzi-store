import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer.jsx'

describe('<Footer />', () => {
    const footer = mount(<Footer />);
    
    test('footer successfully mounted', () => {
        expect(footer.length).toEqual(1);
    });
  });
