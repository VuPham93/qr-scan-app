import React from 'react';
import {ScrollView} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {Button, Colors, Text, View} from 'react-native-ui-lib';
import {handleExportFile} from '../auth';

const Home = ({navigation}) => {
  const barcodeReceived = e => {
    navigation.navigate('CheckListSelect', {
      code: e.data,
      page: 'CheckListSelect',
    });
  };

  return (
    <View flex useSafeArea>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text h1 marginB-30>
          Scan
        </Text>
        <QRCodeScanner
          reactivate={true}
          reactivateTimeout={300}
          onRead={barcodeReceived}
          flashMode={RNCamera.Constants.FlashMode.auto}
        />
        <Button
          label={'Xem danh sách'}
          size={Button.sizes.medium}
          backgroundColor={Colors.black}
          onPress={() => navigation.navigate('ListView')}
          marginL-20
          marginR-20
          marginB-10
          marginT-80
        />
        <Button
          label={'Xuất excel'}
          size={Button.sizes.medium}
          backgroundColor={Colors.green30}
          onPress={handleExportFile}
          marginL-20
          marginR-20
          marginB-10
        />
      </ScrollView>
    </View>
  );
};
export default Home;
