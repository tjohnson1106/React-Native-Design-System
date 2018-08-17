import * as React from "react";
import Component = React.Component;
import createContext = React.createContext;

const theme = {};

export const UtilityThemeContext = createContext({});

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
