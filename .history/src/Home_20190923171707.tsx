import React from "react";
import { observer } from "mobx-react-lite";
import { Layout, Text, Input, Button } from "react-native-ui-kitten";
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
        style={{ width: 95, height: 80, marginTop: 42 }}
        source={require("@src/assets/logo.png")}
      />
      <Layout style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            marginTop: 31,
            fontSize: 31,
            lineHeight: 42,
            color: "#52c1e6"
          }}
          children={"Kasih Ibu"}
          fontSize={23}
          color={"#d71313"}
        />
        <Text
          style={{
            marginTop: 31,
            fontSize: 31,
            lineHeight: 42,
            color: "#bece43"
          }}
          children={" Hospital"}
        />
      </Layout>
      <Input
        style={{ marginTop: 53, width: 365 }}
        placeholder={"No. Handphone"}
      />
      <Input style={{ marginTop: 13, width: 367 }} placeholder={"PRN"} />
      <Button style={{ marginTop: 27 }} children={"Submit"} size={"large"} />
    </Layout>
  );
});
