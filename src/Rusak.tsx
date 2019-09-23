import React from "react";
import { observer, useObservable } from "mobx-react-lite";
import { Layout, Button, Text, List } from "react-native-ui-kitten";
import { Icon } from "@src/libs";

export default observer(() => {
  const abc = useObservable({
    data: [
      { nama: "rizky", icon: "up" },
      { nama: "joni", icon: "up" },
      { nama: "asdas", icon: "right" },
      { nama: "dsa", icon: "home" },
      { nama: "rizasdky", icon: "down" },
      { nama: "rizkasdy" }
    ]
  });
  return (
    <Layout style={{ backgroundColor: "#ffffff", minHeight: 406, opacity: 1 }}>
      <List
        data={abc.data}
        renderItem={({ item }: any) => {
          return (
            <>
              <Layout style={{ flexDirection: "row" }}>
                <Icon
                  source={"AntDesign"}
                  size={57}
                  color={"#1a11c0"}
                  name={item.icon}
                />
                <Button children={item.nama} />
                <Text children={item.nama} />
              </Layout>
            </>
          );
        }}
      />
    </Layout>
  );
});
