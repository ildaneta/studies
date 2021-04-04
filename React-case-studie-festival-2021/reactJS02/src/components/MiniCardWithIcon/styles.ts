import EStyleSheet from 'react-native-extended-stylesheet';
import {
  dimensions,
  fontsSizes,
  colors,
  fontsFamily,
} from '../../styles/index';

export const styles = EStyleSheet.create({
  container: {
    marginLeft: dimensions.spacingXXXSmall16,
    backgroundColor: colors.neutralColorWhite,
    width: `48% - ${dimensions.spacingXXXSmall16}`,
    height: '7.7rem',
    borderRadius: dimensions.spacingNano8,
    marginTop: dimensions.spacingXXXSmall16,
    padding: dimensions.spacingNano8,

    shadowColor: colors.neutralColorUltraDark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.24,
    shadowRadius: dimensions.spacingNano8,
    elevation: 4,
  },

  wrapperIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  titleMiniCard: {
    marginTop: dimensions.spacingNano8,
    fontFamily: fontsFamily.fontWeight.bold,
    fontSize: fontsSizes.medium16,
    color: colors.neutralColorDarkest,
  },

  subTitleMiniCard: {
    fontSize: fontsSizes.xSmall12,
    color: colors.neutralColorDark,
    fontFamily: fontsFamily.fontWeight.semiBold,
  },
});
