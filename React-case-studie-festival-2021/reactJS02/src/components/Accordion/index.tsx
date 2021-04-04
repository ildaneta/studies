import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import EStyleSheet from 'react-native-extended-stylesheet';
import { IButton } from '../../interfaces/button.type';

import { styles } from './styles';
import colors from '../../styles/colors';
import dimensions from '../../styles/dimensions';

export type AccordionProps = {
  title: string;
  description: string;
  iconPressActivedName?: string;
  iconPressDisabledName?: string;
  iconColor?: string;
  iconSize?: number;
  buttonChildren: React.ReactElement<IButton>;
  bottomLineColor?: string;
  bottomLineHeight?: string;
};

const Accordion = ({
  title,
  description,
  iconPressActivedName = 'keyboard-arrow-up',
  iconPressDisabledName = 'keyboard-arrow-down',
  iconColor = colors.neutralColorDarkest,
  iconSize = 30,
  buttonChildren,
  bottomLineColor = colors.neutralColorLighter,
  bottomLineHeight = dimensions.borderPrimary1,
}: AccordionProps): JSX.Element => {
  const [showText, setShowText] = useState(false);

  const internStyle = EStyleSheet.create({
    line: {
      backgroundColor: bottomLineColor,
      height: bottomLineHeight,
      marginHorizontal: dimensions.spacingXXXSmall16,
    },
  });

  const hasToRenderDisabledIcon = () =>
    !showText ? iconPressDisabledName : iconPressActivedName;

  const shouldRenderContent = (): JSX.Element => {
    if (showText) {
      return (
        <>
          <Text style={styles.description}>{description}</Text>
        </>
      );
    }

    return <></>;
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          testID="box"
          onPress={() => setShowText(state => !state)}
          style={styles.box}
        >
          <Text style={styles.title}>{title}</Text>

          <Icon
            name={hasToRenderDisabledIcon()}
            size={iconSize}
            color={iconColor}
          />
        </TouchableOpacity>
        {showText && (
          <>
            {shouldRenderContent()}
            <View style={styles.containerButton}>{buttonChildren}</View>
          </>
        )}
        <View style={internStyle.line} />
      </View>
    </>
  );
};

export default React.memo(Accordion);
