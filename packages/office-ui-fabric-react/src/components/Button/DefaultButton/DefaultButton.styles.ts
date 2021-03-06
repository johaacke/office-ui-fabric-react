import { IButtonStyles } from '../Button.Props';
import {
  ITheme,
  concatStyleSets,
  FontWeights
} from '../../../Styling';
import { memoizeFunction } from '../../../Utilities';
import {
  getStyles as getBaseButtonStyles
} from '../BaseButton.styles';
import {
  getStyles as getSplitButtonStyles
} from '../SplitButton/SplitButton.styles';

import {
  primaryStyles,
  standardStyles
} from '../ButtonThemes';

const DEFAULT_BUTTON_HEIGHT = '32px';
const DEFAULT_BUTTON_MINWIDTH = '80px';

export const getStyles = memoizeFunction((
  theme: ITheme,
  customStyles?: IButtonStyles,
  primary?: boolean
): IButtonStyles => {
  let baseButtonStyles: IButtonStyles = getBaseButtonStyles(theme);
  let splitButtonStyles: IButtonStyles = getSplitButtonStyles(theme);
  let defaultButtonStyles: IButtonStyles = {
    root: {
      minWidth: DEFAULT_BUTTON_MINWIDTH,
      height: DEFAULT_BUTTON_HEIGHT,
    },
    label: {
      fontWeight: FontWeights.semibold
    }
  };

  return concatStyleSets(
    baseButtonStyles,
    defaultButtonStyles,
    primary ? primaryStyles(theme) : standardStyles(theme),
    splitButtonStyles,
    customStyles
  )!;
});
