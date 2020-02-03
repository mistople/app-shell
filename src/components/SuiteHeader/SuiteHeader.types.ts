import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface ISuiteHeaderProps {
  styles?: IStyleFunctionOrObject<ISuiteHeaderStyleProps, ISuiteHeaderStyles>;
  className: string;
}

export interface ISuiteHeaderStyleProps {
  // className: string;
}

export interface ISuiteHeaderStyles {
  root: IStyle;
  waffle: IStyle;
  title: IStyle;
  spacerLeft: IStyle;
  search: IStyle;
  spacerRight: IStyle;
  actions: IStyle;
}