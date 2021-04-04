import React from 'react';
import { Text } from 'react-native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import Accordion from './index';

describe('Accordion', () => {
  const button = <Text testID="button-mock">button test</Text>;
  it('should render', () => {
    const { getByText } = render(
      <Accordion
        buttonChildren={button}
        title="title test"
        description="description test"
      />,
    );

    expect(getByText('title test')).toBeTruthy();
  });

  it('should render description properly after click on show button', async () => {
    const { getByText, queryByText, getByTestId } = render(
      <Accordion
        buttonChildren={button}
        title="title test"
        description="description test"
      />,
    );
    let description = queryByText('description test');
    expect(description).toBeFalsy();
    const box = getByTestId('box');
    fireEvent.press(box);
    description = await waitFor(() => queryByText('description test'));
    expect(description).toBeTruthy();
  });
  it.only('should render button children properly', async () => {
    const { getByTestId, queryByTestId } = render(
      <Accordion
        buttonChildren={button}
        title="title test"
        description="description test"
      />,
    );
    let buttonShown = queryByTestId('button-mock');
    expect(buttonShown).toBeFalsy();
    const box = getByTestId('box');
    fireEvent.press(box);
    buttonShown = await waitFor(() => queryByTestId('button-mock'));
    expect(buttonShown).toBeTruthy();
  });
});
