import { Platform, ToastAndroid } from "react-native";

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';

export const showShortToast = (message) => {
    isAndroid && ToastAndroid.show(message, ToastAndroid.SHORT);
}