import React from "react";
import { observer } from "mobx-react-lite";
import { Layout, Text, Button } from "react-native-ui-kitten";
import { Image } from "react-native";
import { Input } from "@src/libs";
import { useNavigation } from "react-navigation-hooks";

export default observer(() => {
  const nav = useNavigation();
  return (
    <Layout
      style={{
        backgroundColor: "",
        minHeight: 0,
        opacity: 0.9,
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Image
        style={{ width: 95, height: 80, marginTop: 42 }}
        source={require("@src/assets/images/logo.png")}
      />
      <Layout
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 12
        }}
      >
        <Text
          style={{
            marginTop: 31,
            fontSize: 31,
            lineHeight: 42,
            color: "#52c1e6",
            fontFamily: "regular"
          }}
          children={"Kasih Ibu"}
        />
        <Text
          style={{
            marginTop: 31,
            fontSize: 31,
            lineHeight: 42,
            color: "#bece43",
            fontFamily: "semibold"
          }}
          children={" Hospital"}
        />
      </Layout>
      <Input
        style={{ marginTop: 53, width: 365 }}
        placeholder={"No. Handphone"}
      />
      <Input style={{ marginTop: 13, width: 367 }} placeholder={"PRN"} />
      <Button
        style={{ marginTop: 27 }}
        children={"Sign in"}
        size={"large"}
        onPress={() => {
          nav.navigate("OTP");
        }}
      />
    </Layout>
  );
});
