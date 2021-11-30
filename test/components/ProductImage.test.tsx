import React from 'react';
import renderer from 'react-test-renderer';
import { product2 } from '../data/products';
import { ProductCard, ProductImage } from '../../src/components/';

describe('ProductImage', () => {
  test('Must show the correct snapshot', () => {
    const wrapper = renderer.create(<ProductImage img={product2.img} />);
    console.log(wrapper.toJSON());

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Show correct image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
