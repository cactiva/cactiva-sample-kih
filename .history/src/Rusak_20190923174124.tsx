import React from "react";
import { observer, useObservable } from "mobx-react-lite";
import { Layout, Button, Text, List } from "react-native-ui-kitten";

export default observer(() => {
  const abc = useObservable({
    data: [
      { nama: "rizky" },
      { nama: "joni" },
      { nama: "asdas" },
      { nama: "dsa" },
      { nama: "rizasdky" },
      { nama: "rizkasdy" }
    ]
  });
  return (
    <Layout style={{ backgroundColor: "#a9b2e4", minHeight: 406, opacity: 1 }}>
      <List
        data={abc.data}
        renderItem={({item}: any) => {
          return (
            <>
              <Button children={item.item.nama} />
              <Text children={item.nama} />
            </>
          );
        }}
      />
    </Layout>
  );
});
