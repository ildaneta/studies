import React from 'react';
import { View } from 'react-native';

import Icon from '../components/Icon';
import MiniCardWithIcon from '../components/MiniCardWithIcon/index';
import { colors } from '../styles';

const Home = (): JSX.Element => {
  return (
    <View>
      <MiniCardWithIcon
        strongTitle="Recieve with QR Code"
        description="You can inite your payment with QR Code or using a Key"
        primaryIconChildren={
          <Icon
            name="qr-code-outline"
            size={26}
            color={colors.brandColorPrimaryDark}
            onPress={console.log('works')}
          />
        }
      />
    </View>
  );
};

export default Home;
