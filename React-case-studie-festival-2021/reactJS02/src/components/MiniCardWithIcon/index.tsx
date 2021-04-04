import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { IIconProps } from '../Icon';

import { styles } from './styles';

export interface IMiniCardWithIconProps extends TouchableOpacityProps {
  strongTitle: string;
  description: string;
  primaryIconChildren: React.ReactElement<IIconProps>;
}

const MiniCardWithIcon = ({
  strongTitle,
  description,
  primaryIconChildren,
  ...rest
}: IMiniCardWithIconProps): JSX.Element => {
  const { onPress } = rest;

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        key={strongTitle}>
        <View style={styles.wrapperIcons}>{primaryIconChildren}</View>

        <View>
          <Text style={styles.titleMiniCard}>{strongTitle}</Text>

          <Text style={styles.subTitleMiniCard}>{description}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default React.memo(MiniCardWithIcon);
