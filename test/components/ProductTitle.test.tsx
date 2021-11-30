import React from 'react';
import renderer from 'react-test-renderer';
import { product1 } from '../data/products';
import { ProductCard, ProductTitle } from '../../src/components/';

describe('ProductTitle', () => {
  test('Must show the title right', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom Product" />);
    console.log(wrapper.toJSON());

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Send title to product Card ', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
