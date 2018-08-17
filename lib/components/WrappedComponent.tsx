import * as React from "react";
import Component = React.Component;

import { UtilityThemeContext } from "../Provider";

export interface IProps {
  // @ts-ignore
  theme: ITheme;
}

const WrappedComponent = (Cp: React.ComponentType<IProps>) => {
  return class extends Component {
    render() {
      return (
        <UtilityThemeContext.Consumer>
          {val => <Cp theme={val} {...this.props} />}
        </UtilityThemeContext.Consumer>
      );
    }
  };
};

export default WrappedComponent;
