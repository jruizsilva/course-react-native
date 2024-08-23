import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

interface Props {
  size?: number;
  color?: string;
}

export const CircleInfoIcon = ({
  size = 24,
  color = "#fff",
}: Props): JSX.Element => {
  return <FontAwesome6 name="circle-info" size={size} color={color} />;
};
