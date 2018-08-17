import * as React from "react";
import SFC = React.SFC;
import { View, StyleSheet } from "react-native";

import WrappedComponent from "./WrappedComponent";

interface IProps {
  // @ts-ignore
  theme: ITheme;
  // revisit
  style: any;
}

const Box: SFC<IProps> = props => {
  const _space = spaceUtils(props);

  const styles = StyleSheet.create({
    box: {
      ..._space
    }
  });

  return <View style={[style, props.style]}>{props.children}</View>;
};

export default WrappedComponent(Box);
