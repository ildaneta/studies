import React from 'react';
import { IconProps } from 'react-native-vector-icons/Icon';
import VectorIcon from 'react-native-vector-icons/Ionicons';

export type IIconProps = IconProps;

const Icon = ({ name, size, color }: IIconProps): JSX.Element => {
  return <VectorIcon testID="icon" name={name} size={size} color={color} />;
};

export default React.memo(Icon);
