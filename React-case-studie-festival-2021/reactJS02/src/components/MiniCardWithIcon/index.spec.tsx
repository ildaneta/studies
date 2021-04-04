import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import MiniCardWithIcons from './index';

describe('MiniCardWithIcons', () => {
  it('should render', () => {
    const primaryIcon = <Text>1st icon</Text>;
    const secondaryIcon = <Text>2nd icon</Text>;
    const { getByText } = render(
      <MiniCardWithIcons
        description="description test"
        strongTitle="title test"
        primaryIconChildren={primaryIcon}
        secondaryIconChildren={secondaryIcon}
      />,
    );

    expect(getByText('description test')).toBeTruthy();
    expect(getByText('title test')).toBeTruthy();
    expect(getByText('1st icon')).toBeTruthy();
    expect(getByText('2nd icon')).toBeTruthy();
  });
  it('should rotate icon', () => {
    const primaryIcon = <Text>1st icon</Text>;
    const secondaryIcon = <Text>2nd icon</Text>;
    const { getByText } = render(
      <MiniCardWithIcons
        description="description test"
        strongTitle="title test"
        primaryIconChildren={primaryIcon}
        secondaryIconChildren={secondaryIcon}
        iconRotate
      />,
    );

    expect(getByText('description test')).toBeTruthy();
    expect(getByText('title test')).toBeTruthy();
    expect(getByText('1st icon')).toBeTruthy();
    expect(getByText('2nd icon')).toBeTruthy();
  });
});
