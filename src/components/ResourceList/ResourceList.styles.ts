import { classNamesFunction, AnimationStyles, getTheme } from 'office-ui-fabric-react';
import { IResourceListStyleProps, IResourceListStyles } from './ResourceList.types';

export const getStyles = (props: IResourceListStyleProps): IResourceListStyles => {
  const theme = getTheme();

  return {
    root: {
      ...AnimationStyles.slideUpIn10,
      borderRadius: '4px',
      boxShadow: '0px 2px 4px rgba(0,0,0,0.15)'
    },
    fileIconHeaderIcon: {
      padding: 0,
      fontSize: '16px'
    },
    fileIconCell: {
      textAlign: 'center',
      selectors: {
        '&:before': {
          content: '.',
          display: 'inline-block',
          verticalAlign: 'middle',
          height: '100%',
          width: '0px',
          visibility: 'hidden'
        }
      }
    },
    fileIconImg: {
      verticalAlign: 'middle',
      maxHeight: '16px',
      maxWidth: '16px'
    },
    link: {
      textDecoration: 'none',
      selectors: {
        '&:hover': {
          textDecoration: 'underline'
        },
        '&:link': {
          color: theme.semanticColors.bodyText
        },
        '&:visited': {
          color: theme.semanticColors.bodyText
        },
        '&:focus': {
          outline: 'none'
        }
      }
    }
  }
}

export const getClassNames = classNamesFunction<IResourceListStyleProps, IResourceListStyles>();
