import { Icon } from '@src/libs';
import { observer, useObservable } from 'mobx-react-lite';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import { useDimensions } from 'react-native-hooks';
import { BottomNavigation, BottomNavigationTab } from 'react-native-ui-kitten';
import { useNavigation } from 'react-navigation-hooks';

export default observer(() => {
  const dim = useDimensions().window;
  const meta = useObservable({
    page: 0
  });
  const nav = useNavigation();
  
  return (
    <ImageBackground
      style={{ height: dim.height }}
      source={require('@src/assets/images/logo.png')}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexGrow: 1
        }}
      />
      <BottomNavigation
        style={{ height: 80 }}
        selectedIndex={meta.page}
        onSelect={e => {
          meta.page = e;
          switch (e) {
            case 0:
              nav.navigate('Main/Home');
              break;
            case 1:
              nav.navigate('Main/Appointment');
              break;
          }
        }}
      >
        <BottomNavigationTab
          selected={false}
          title={'Home'}
          titleStyle={{ color: '#3466FF' }}
          icon={() => {
            return (
              <Icon
                source={'AntDesign'}
                name={'home'}
                size={20}
                color={'#3466FF'}
              />
            );
          }}
        />
        <BottomNavigationTab
          selected={false}
          title={'Appointment'}
          titleStyle={{ color: '#3466FF' }}
          icon={() => {
            return (
              <Icon
                source={'AntDesign'}
                name={'calendar'}
                size={20}
                color={'#3466FF'}
              />
            );
          }}
        />
        <BottomNavigationTab
          selected={false}
          titleStyle={{ color: '#3466FF' }}
          title={'Prescription'}
          icon={() => {
            return (
              <Icon
                source={'AntDesign'}
                name={'medicinebox'}
                size={20}
                color={'#3466FF'}
              />
            );
          }}
        />
        <BottomNavigationTab
          selected={false}
          title={'Report'}
          titleStyle={{ color: '#3466FF' }}
          icon={() => {
            return (
              <Icon
                source={'AntDesign'}
                name={'linechart'}
                size={20}
                color={'#3466FF'}
              />
            );
          }}
        />
      </BottomNavigation>
    </ImageBackground>
  );
});
