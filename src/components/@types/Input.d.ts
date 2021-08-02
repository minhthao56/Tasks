import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import {ILable} from './Lable';

interface IInput extends ILable {
  placeholder?: any;
  placeholderTextColor?: any;
  numberOfLines?: any;
  multiline?: any;
  maxLength?: any;
  secureTextEntry?: boolean;
  value?: any;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}
