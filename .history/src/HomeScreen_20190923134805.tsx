import { observer } from 'mobx-react-lite';
import React from 'react';
import { Layout } from 'react-native-ui-kitten';
export default observer(() => {
  return (
    <Layout>
      <Icon source='EvilIcons' name='archive'></Icon>
    </Layout>
  );
});
