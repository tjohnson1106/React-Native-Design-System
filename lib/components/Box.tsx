import * as React from "react";
import SFC = React.SFC;
import { View } from "react-native";

import WrappedComponent from "./WrappedComponent";

interface IProps {
  theme: ITheme;
}

const Box: SFC<IProps> = props => {
  return <View>{props.children}</View>;
};

export default WrappedComponent(Box);
