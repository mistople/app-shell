import { classNamesFunction, getTheme } from 'office-ui-fabric-react';
import { ISuiteHeaderTitleStyleProps, ISuiteHeaderTitleStyles } from './SuiteHeaderTitle.types';


export const getStyles = (props: ISuiteHeaderTitleStyleProps): ISuiteHeaderTitleStyles => {

  const theme = getTheme();

  return {
    root: {
      fontSize: '16px',
      fontWeight: '600',
      textOverflow: 'ellipsis',
      lineHeight: '40px',
      color: theme.palette.white,
      alignSelf: 'center',
      padding: '0 8px',
      textDecoration: 'none',
      border: 'none',
      whiteSpace: 'nowrap',
      selectors: {
        ':hover, :focus, :active': {
          textDecoration: 'none',
          color: '#FFFFFF'
        }
      }
    }
  }
}

export const getClassNames = classNamesFunction<ISuiteHeaderTitleStyleProps, ISuiteHeaderTitleStyles>();