import { Link } from "expo-router";
import { Pressable, Text } from "react-native";

export default function AboutPage() {
  return (
    <>
      <Link href={"/"} asChild>
        <Pressable>
          <Text className="text-white">Volver al inicio</Text>
        </Pressable>
      </Link>
      <Text className="text-white font-bold text-2xl mb-2">
        Acerca del proyecto
      </Text>
      <Text className="text-[#bbb]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas pariatur
        beatae ducimus rerum nam repellat distinctio vero quia. At, eveniet.
        Iure dolor delectus tenetur, ratione obcaecati voluptates odio eum
        nobis.
      </Text>
      <Text className="text-[#bbb]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas pariatur
        beatae ducimus rerum nam repellat distinctio vero quia. At, eveniet.
        Iure dolor delectus tenetur, ratione obcaecati voluptates odio eum
        nobis.
      </Text>
    </>
  );
}
