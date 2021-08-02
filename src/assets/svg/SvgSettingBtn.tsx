import React from 'react';
import Svg, {Rect} from 'react-native-svg';
import {heightScale, widthScale} from 'utils';

export const SvgSettingBtn: React.FC<ISvg> = ({isActived}) => {
  return (
    <Svg
      width={widthScale(27)}
      height={heightScale(16)}
      viewBox="0 0 25 14"
      fill="none">
      <Rect
        x={0.5}
        y={0.5}
        width={24}
        height={1}
        rx={0.5}
        stroke={isActived ? '#0065FF' : '#fff'}
      />
      <Rect
        x={0.5}
        y={6.5}
        width={24}
        height={1}
        rx={0.5}
        stroke={isActived ? '#0065FF' : '#fff'}
      />
      <Rect
        x={0.5}
        y={12.5}
        width={24}
        height={1}
        rx={0.5}
        stroke={isActived ? '#0065FF' : '#fff'}
      />
    </Svg>
  );
};
