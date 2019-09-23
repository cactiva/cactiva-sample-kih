import React from 'react';
import { Input, InputProps } from 'react-native-ui-kitten';

export default (props: InputProps) => {
  return (
    <Input
      className='halo'
      textStyle={{
        minHeight: 32
      }}
      style={{
        padding: 4
      }}
      {...props}
    />
  );
};
