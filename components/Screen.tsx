import React from "react";
import { View } from "react-native";
import { ViewProps } from "react-native/Libraries/Components/View/ViewPropTypes";

interface Props extends ViewProps {
  children: React.ReactElement | React.ReactElement[];
}

export default function Screen({ children, ...rest }: Props): JSX.Element {
  return (
    <>
      <View className="bg-black flex-1" {...rest}>
        {children}
      </View>
    </>
  );
}
