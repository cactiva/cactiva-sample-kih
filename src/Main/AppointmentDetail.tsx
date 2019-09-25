import React from "react";
import { observer } from "mobx-react-lite";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import { Icon } from "@src/libs";
import { TopNavigation, Text } from "react-native-ui-kitten";
import { useNavigation } from "react-navigation-hooks";
import { useDimensions } from "react-native-hooks";

export default observer(() => {
  const nav = useNavigation();
  const dim = useDimensions().window;
  return (
    <ImageBackground
      style={{
        flexGrow: 1,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "flex-start",
        height: dim.height
      }}
      source={require("@src/assets/images/bg.png")}
    >
      <TopNavigation
        title={"Appointment"}
        leftControl={
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(51, 102, 255, 0)",
              padding: 10,
              borderRadius: 6
            }}
            onPress={() => nav.goBack()}
          >
            <Icon source={"AntDesign"} name={"arrowleft"} size={24} />
          </TouchableOpacity>
        }
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "flex-start",
          paddingTop: 15,
          paddingRight: 15,
          paddingLeft: 15,
          paddingBottom: 15
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            marginBottom: 10
          }}
        >
          <Icon
            style={{ marginRight: 10 }}
            source={"AntDesign"}
            name={"calendar"}
            size={24}
            color={"#ff6e6e"}
          />
          <Text
            style={{
              fontFamily: "bold",
              fontSize: 24,
              paddingBottom: 0,
              color: "#37A2FF"
            }}
            children={"Friday, 26 Sep 2019"}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginBottom: 35
          }}
        >
          <Icon
            style={{ marginRight: 13, marginLeft: 3 }}
            source={"AntDesign"}
            name={"clockcircleo"}
            size={18}
            color={"#ff6e6e"}
          />
          <Text
            style={{ fontFamily: "bold", fontSize: 18, color: "#37A2FF" }}
            children={"09.30 - 12.30"}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginBottom: 20
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start"
            }}
          >
            <Icon
              style={{ marginRight: 13 }}
              source={"AntDesign"}
              name={"user"}
              size={18}
              color={"#ff6e6e"}
            />
            <Text
              style={{
                fontFamily: "regular",
                fontSize: 14,
                paddingBottom: 0,
                color: "#6c6c6c"
              }}
              children={"Nama Doctor"}
            />
          </View>
          <Text
            style={{ fontFamily: "bold", fontSize: 18, color: "#37A2FF" }}
            children={"dr. Purnomo, Sp.S"}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginBottom: 20
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start"
            }}
          >
            <Icon
              style={{ marginRight: 13 }}
              source={"AntDesign"}
              name={"enviromento"}
              size={18}
              color={"#ff6e6e"}
            />
            <Text
              style={{
                fontFamily: "regular",
                fontSize: 14,
                paddingBottom: 0,
                color: "#6c6c6c"
              }}
              children={"Lokasi"}
            />
          </View>
          <Text
            style={{ fontFamily: "bold", fontSize: 18, color: "#37A2FF" }}
            children={"Poliklinik Umum"}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start"
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start"
            }}
          >
            <Icon
              style={{ marginRight: 13 }}
              source={"AntDesign"}
              name={"layout"}
              size={18}
              color={"#ff6e6e"}
            />
            <Text
              style={{
                fontFamily: "regular",
                fontSize: 14,
                paddingBottom: 0,
                color: "#6c6c6c"
              }}
              children={"Keterangan"}
            />
          </View>
          <Text
            style={{
              fontFamily: "regular",
              fontSize: 16,
              textAlign: "justify",
              color: "#454545"
            }}
            children={
              "Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad, tapi juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan apapun. Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum."
            }
          />
        </View>
      </View>
    </ImageBackground>
  );
});
