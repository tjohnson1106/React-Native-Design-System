import * as React from "react";
import Component = React.Component;
import createContext = React.createContext;

import { theme } from "./theme";

export const UtilityThemeContext = createContext(theme);

export default class UtilityThemeProvider extends Component {
  state = {
    theme: theme
  };
  render() {
    return (
      <UtilityThemeContext.Provider value={this.state.theme}>
        {this.props.children}
      </UtilityThemeContext.Provider>
    );
  }
}
