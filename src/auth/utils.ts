import AsyncStorage from '@react-native-async-storage/async-storage';
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';
import {Alert, PermissionsAndroid} from 'react-native';

export interface BarcodeData {
  code: string;
  sizeS: string;
  sizeM: string;
  sizeL: string;
  sizeXL: string;
  sizeXXL: string;
  sizeXXXL: string;
}

const TOKEN_STORAGE_KEY = 'dashboardAuth';
const SAVE_DATA = 'saveData';

export const getAuthToken = () => AsyncStorage.getItem(TOKEN_STORAGE_KEY);

export const setAuthToken = (token: string) =>
  AsyncStorage.setItem(TOKEN_STORAGE_KEY, token);

export const removeAuthToken = () => {
  AsyncStorage.removeItem(TOKEN_STORAGE_KEY).then();
};

export const getSaveData = () => AsyncStorage.getItem(SAVE_DATA);

export const setSaveData = (saveData: string) =>
  AsyncStorage.setItem(SAVE_DATA, saveData);

export const handleGetSavedData = (
  code: string,
  setDataToEdit: (data: BarcodeData) => void,
) => {
  if (code) {
    getSaveData().then(savedData => {
      let findData;

      if (savedData && savedData !== '[null]' && code) {
        findData = JSON.parse(savedData).find(data => data.code === code);
      }

      if (findData) {
        setDataToEdit(findData);
      } else {
        setDataToEdit({
          code: code,
          sizeS: '0',
          sizeM: '0',
          sizeL: '0',
          sizeXL: '0',
          sizeXXL: '0',
          sizeXXXL: '0',
        });
      }
    });
  }
};

export const handleSaveData = (code: string, dataToEdit: BarcodeData) => {
  getSaveData().then(savedData => {
    let dataToSave = [];

    if (savedData && savedData !== '[null]') {
      dataToSave = JSON.parse(savedData).filter(data => data.code !== code);
    }

    dataToSave.push(dataToEdit);
    setSaveData(JSON.stringify(dataToSave)).then();
  });
};

const exportDataToExcel = () => {
  getSaveData().then(savedData => {
    if (savedData && savedData !== '[null]') {
      const dataToSave = JSON.parse(savedData);

      let wb = XLSX.utils.book_new();
      let ws = XLSX.utils.json_to_sheet(dataToSave);
      XLSX.utils.book_append_sheet(wb, ws, 'S???n ph???m');
      const wbout = XLSX.write(wb, {type: 'binary', bookType: 'xlsx'});

      RNFS.writeFile(
        RNFS.DownloadDirectoryPath + '/san_pham.xlsx',
        wbout,
        'ascii',
      )
        .then(() => {
          Alert.alert('???? xu???t file');
        })
        .catch(e => {
          Alert.alert('L???i', JSON.stringify(e));
        });
    }
  });
};
export const handleExportFile = async () => {
  try {
    let hasPermissionExternalStorage = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );

    if (!hasPermissionExternalStorage) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'C???n c???p quy???n truy c???p b??? nh???',
          buttonNeutral: '????? sau',
          buttonNegative: 'Kh??ng cho ph??p',
          buttonPositive: '?????ng ??',
          message: '',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        exportDataToExcel();
      } else {
        Alert.alert('Kh??ng c?? quy???n truy c???p b??? nh???');
      }
    } else {
      exportDataToExcel();
    }
  } catch (e) {
    Alert.alert('L???i x???y ra khi ki???m tra quy???n');
    Alert.alert(e);
    return;
  }
};
