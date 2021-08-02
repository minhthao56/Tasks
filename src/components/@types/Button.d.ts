import {IBlock} from './Block';

interface IButton extends IBlock {
  onPress?: () => void;
  activeOpacity?: number;
}
