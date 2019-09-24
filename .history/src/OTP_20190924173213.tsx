import React, { useEffect } from "react";
import { observer, useObservable } from "mobx-react-lite";
import { Layout, Text, Button } from "react-native-ui-kitten";
import { Image } from "react-native";
import { Input } from "@src/libs";
import { useNavigation } from "react-navigation-hooks";

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
            color: "#52c1e6",
            fontFamily: "regular"
          }}
          children={"Kasih Ibu"}
          status={""}
        />
        <Text
          style={{
            marginTop: 31,
            fontSize: 31,
            lineHeight: 42,
            color: "#bece43",
            fontFamily: "regular"
          }}
          children={" Hospital"}
        />
      </Layout>
      <Text
        style={{
          marginTop: 46,
          marginBottom: 15,
          fontFamily: "regular",
          fontSize: 17,
          textAlign: "center",
          color: "#393939"
        }}
        children={"Please enter OTP Code"}
      />
      <Input style={{ marginTop: 0, width: 199 }} placeholder={"Kode OTP"} />
      <Text
        style={{
          marginTop: 14,
          marginBottom: 32,
          fontFamily: "regular",
          fontSize: 13,
          textAlign: "center",
          color: "#7a7a7a"
        }}
        children={`OTP Code has been send to your phone number.
${meta.timer} seconds until expired...`}
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
