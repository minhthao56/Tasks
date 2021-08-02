import {ColorValue, GestureResponderEvent} from 'react-native';
import {IBlock} from './Block';

interface ILable extends IBlock {
  onPress?: (event: GestureResponderEvent) => void;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  fontSize?: number;
  bold?: any;
  regular?: any;
  light?: any;
  underline?: any;
  color?: ColorValue;
  textAlign?: any;
  fontBlack?: any;
  h1?: any;
  h2?: any;
  h3?: any;
  h4?: any;
  italic?: any;
  bolditalic?: any;
}
