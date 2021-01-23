import React from 'react';
import { mount, shallow } from 'enzyme';

import ProviderMock from '../../__mocks__/ProviderMock';
import Product from '../../components/Product';
import ProductMock from '../../__mocks__/ProductMock';

describe('<Product />', () => {
  test('Render of Product component', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );
    expect(product.length).toEqual(1);
  });

  test('test Buy button click', () => {
    const handleAddtoCartTest = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product
          product={ProductMock}
          handleAddToCart={handleAddtoCartTest}
        />
      </ProviderMock>,
    );
    wrapper.find('button').simulate('click');
    expect(handleAddtoCartTest).toHaveBeenCalledTimes(1);
  });
});

