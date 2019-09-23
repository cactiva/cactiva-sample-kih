import React from "react";
import { observer } from "mobx-react-lite";
import { Layout } from "react-native-ui-kitten";
import { Image } from "react-native";

export default observer(() => {
  return (
    <Layout
      style={{
        backgroundColor: "",
        minHeight: 1000,
        opacity: 0.9,
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Image
        style={{ width: 95, height: 80 }}
        source={require("@src/assets/1569229918235-logo.png")}
      />
    </Layout>
  );
});
