import { SESSION_STORAGE_KEYS } from '../constants/local-storage-keys';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment';

export const getToken = (): string => {
  return decryptDetailParam(sessionStorage.getItem(SESSION_STORAGE_KEYS.Token));
};
export let decryptDetailParam = (msg: string | null): string => {
  if (msg != null) {
    var decryptedMessage = CryptoJS.AES.decrypt(
      msg,
      environment.appKEY1
    ).toString(CryptoJS.enc.Utf8);
    // if (
    //   decryptedMessage == null ||
    //   decryptedMessage == NaN ||
    //   decryptedMessage == ''
    // ) {
    //   this.router.navigate(['/no-data-found']);
    // }
  
    return decryptedMessage;
  }
  return '';
};
// getting user Detail from Token----------------------------
export const getUserDetail = (): string => {
  if (getToken()) {
    const user = window.atob(getToken().split('.')[1]);
    return JSON.parse(user);
  }
  return '';
};
// End ----------------------------------------------
export const encryptData = (msg: string): string => {
  var keySize = 256;
  var salt = CryptoJS.lib.WordArray.random(16);
  var key = CryptoJS.PBKDF2(environment.appKEY1, salt, {
    keySize: keySize / 32,
    iterations: 100,
  });

  var iv = CryptoJS.lib.WordArray.random(128 / 8);

  var encrypted = CryptoJS.AES.encrypt(msg, key, {
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  });

  var result = CryptoJS.enc.Base64.stringify(
    salt.concat(iv).concat(encrypted.ciphertext)
  );

  return result;
};

export const decryptData = (ciphertextB64: string): string => {
  var key = CryptoJS.enc.Utf8.parse(environment.appKEY2);
  var iv = CryptoJS.lib.WordArray.create([0x00, 0x00, 0x00, 0x00]);

  var decrypted = CryptoJS.AES.decrypt(ciphertextB64, key, { iv: iv });
  return decrypted.toString(CryptoJS.enc.Utf8);
};

export const encryptDetail = (msg: string): string => {
  var encryptedMessage = CryptoJS.AES.encrypt(
    msg.trim(),
    environment.appKEY1
  ).toString();

  return encryptedMessage;
};

decryptDetailParam = (msg: string | null): string => {
  if (msg != null) {
    var decryptedMessage = CryptoJS.AES.decrypt(
      msg,
      environment.appKEY1
    ).toString(CryptoJS.enc.Utf8);
    if (
      decryptedMessage != null ||
      decryptedMessage != ''
    )

    return decryptedMessage;
  }
  return '';
};
