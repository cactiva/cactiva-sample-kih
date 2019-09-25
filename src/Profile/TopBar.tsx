import { Icon } from "@src/libs";
import { observer } from 'mobx-react-lite';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { TopNavigation } from 'react-native-ui-kitten';
import { useNavigation } from 'react-navigation-hooks';


export default observer(({ title }: any): any => {
  const nav = useNavigation();
  return (
    <TopNavigation
      title={title}
      leftControl={
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            padding: 10,
            borderRadius: 6
          }}
          onPress={() => nav.goBack()}
        >
          <Icon source={'AntDesign'} name={'arrowleft'} size={24} />
        </TouchableOpacity>
      }
    />
  );
});
