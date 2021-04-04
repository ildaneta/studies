import React from 'react';
import { render } from '@testing-library/react-native';
import Icon from './index';

describe('Icon', () => {
  it('should render', () => {
    const { getByTestId } = render(<Icon name="skull" />);

    expect(getByTestId('icon')).toBeTruthy();
  });
});
