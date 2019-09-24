import React from "react";
import { observer, useObservable } from "mobx-react-lite";
import { Layout, Text, Button } from "react-native-ui-kitten";
import { Image } from "react-native";
import { Input } from "@src/libs";
import { useNavigation } from "react-navigation-hooks";
import { useEffect } from "react";

export default observer(() => {
  const nav = useNavigation();
  const meta = useObservable({
    timer: 90
  });
  const ef1 = useEffect(() => {
    setInterval(() => {
      meta.timer -= 1;
    }, 1000);
  }, []);
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
      <Layout style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            marginTop: 31,
            fontSize: 31,
            lineHeight: 42,
            color: "#52c1e6"
          }}
          children={"Kasih Ibu"}
          status={""}
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
      <Input style={{ marginTop: 72, width: 199 }} placeholder={"Kode OTP"} />
      <Text
        style={{ marginTop: 14, marginBottom: 32 }}
        children={meta.timer + " detik "}
      />
      <Button
        style={{ marginTop: 27 }}
        children={"Submit"}
        size={"large"}
        onPress={() => {
          nav.navigate("Home");
        }}
      />
    </Layout>
  );
});
