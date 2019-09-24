import React from 'react';
import { observer, useObservable } from 'mobx-react-lite';
import { Layout, Button, Text, List } from 'react-native-ui-kitten';
import { Icon } from '@src/libs';
import Calendar from 'react-native-calendars';
import { TouchableOpacity } from 'react-native';

export default observer(() => {
  const abc = useObservable({
    data: [
      { nama: 'rizky', icon: 'up' },
      { nama: 'joni', icon: 'up' },
      { nama: 'asdas', icon: 'right' },
      { nama: 'dsa', icon: 'home' },
      { nama: 'rizasdky', icon: 'down' },
      { nama: 'rizkasdy' }
    ]
  });
  return (
    <Layout style={{ backgroundColor: '#ffffff', minHeight: 406, opacity: 1 }}>
      <List
        data={abc.data}
        renderItem={({ item }: any) => {
          return (
            <>
              <Layout style={{ flexDirection: 'row' }}>
                <Icon
                  source={'AntDesign'}
                  size={57}
                  color={'#1a11c0'}
                  name={item.icon}
                />
                <Button children={item.nama} />
                <Text children={item.nama} />
              </Layout>
            </>
          );
        }}
      />
      <Calendar
        markedDates={{
          '2017-12-14': {
            periods: [
              { startingDay: false, endingDay: true, color: '#5f9ea0' },
              { startingDay: false, endingDay: true, color: '#ffa500' },
              { startingDay: true, endingDay: false, color: '#f0e68c' }
            ]
          },
          '2017-12-15': {
            periods: [
              { startingDay: true, endingDay: false, color: '#ffa500' },
              { color: 'transparent' },
              { startingDay: false, endingDay: false, color: '#f0e68c' }
            ]
          }
        }}
        markingType={'multi-period'}
      />
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      />
    </Layout>
  );
});
