import EStyleSheet from 'react-native-extended-stylesheet';
import {
  dimensions,
  fontsSizes,
  colors,
  fontsFamily,
} from '../../styles/index';

export const styles = EStyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: dimensions.spacingXXSmall24,
    paddingLeft: dimensions.spacingXXXSmall16,
    paddingRight: dimensions.spacingXSmall32,
    paddingBottom: dimensions.spacingXXSmall24,
  },

  title: {
    fontFamily: fontsFamily.fontWeight.bold,
    fontWeight: 'bold',
    fontSize: fontsSizes.medium16,
    lineHeight: dimensions.spacingXXSmall24,
    color: colors.neutralColorDarkest,
  },

  description: {
    paddingHorizontal: dimensions.spacingXXXSmall16,
    paddingBottom: dimensions.spacingXXSmall24,
    fontFamily: fontsFamily.fontWeight.regular,
    fontSize: fontsSizes.medium16,
    color: colors.neutralColorDark,
    lineHeight: dimensions.spacingXXSmall24,
  },

  containerButton: {
    marginLeft: dimensions.spacingXXXSmall16,
    width: dimensions.widthPrimary,
    marginBottom: dimensions.spacingXXSmall24,
  },

  container: {
    backgroundColor: colors.neutralColorWhite,
  },
});
