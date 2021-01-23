import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('footer successfully mounted', () => {
    expect(footer.length).toEqual(1);
  });

  test('Render Title', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer snapshot', () => {
  test('Check UI of component Footer', () => {
    const footer = create(<Footer />).toJSON();
    expect(footer).toMatchSnapshot();
  });
});
