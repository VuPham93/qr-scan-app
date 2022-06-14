import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Platform,
  Alert,
  TextInput,
} from 'react-native';
import {useMutation} from '@apollo/client';
import {TokenAuth, TokenAuthVariables} from '../auth/types/TokenAuth';
import {tokenAuthMutation} from '../auth/mutations';

const Login = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  //
  // const [login] = useMutation<TokenAuth, TokenAuthVariables>(tokenAuthMutation);

  // const handleLogin = () => {
  //   login({
  //     variables: {
  //       email: email,
  //       password: password,
  //     },
  //   })
  //     .then(r => {
  //       if (r.data.tokenCreateStaff.errors.length === 0) {
  //         navigation.navigate('Home');
  //       } else {
  //         Alert.alert(r.data.tokenCreateStaff.errors.toString());
  //       }
  //     })
  //     .catch(reason => console.log(reason));
  // };

  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <Text>Log in</Text>
        {/* <Stack spacing={2} style={{margin: 16}}>*/}
        {/*  <TextInput lab="Label" variant="standard" onChangeText={setEmail} />*/}
        {/*  <TextInput*/}
        {/*    label="Label"*/}
        {/*    variant="standard"*/}
        {/*    onChangeText={setPassword}*/}
        {/*  />*/}
        {/*  <Button variant="outlined" title="Outlined" onPress={handleLogin} />*/}
        {/* </Stack>*/}
      </View>
    </ScrollView>
  );
};
export default Login;

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: '#FFFFFF',
    padding: 40,
    width: '100%',
    height: Platform.OS === 'ios' ? '90%' : '100%',
  },
});
