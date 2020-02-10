import React from 'react';
import { SearchBox } from 'office-ui-fabric-react';
import { ISuiteHeaderSearchProps } from './SuiteHeaderSearch.types';
import { getClassNames } from './SuiteHeaderSearch.styles';

export const SuiteHeaderSearchBase: React.FC<ISuiteHeaderSearchProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles); // Not needed anymore?

  return (
    <SearchBox placeholder={'Search'} styles={styles} />
  );
}