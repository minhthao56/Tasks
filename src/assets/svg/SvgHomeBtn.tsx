import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {heightScale, widthScale} from 'utils';

export const SvgHomeBtn: React.FC<ISvg> = ({isActived}) => {
  return (
    <Svg
      width={widthScale(32)}
      height={heightScale(28)}
      viewBox="0 0 32 28"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.843 12.206a.813.813 0 00-.176-1.136L16.83.204a.815.815 0 00-.961 0L1.032 11.07a.813.813 0 10.96 1.312l2.158-1.58v16.337c0 .449.364.813.813.813h8.133c.428 0 .778-.33.81-.75.002-.02.003-.04.003-.063v-7.88a2.443 2.443 0 012.44-2.44 2.443 2.443 0 012.44 2.44v7.88c0 .023.002.044.003.063.033.42.383.75.81.75h8.134a.814.814 0 00.813-.813V10.802l2.158 1.58a.808.808 0 001.136-.176zm-4.913-2.59l-.008 16.709h-6.506v-7.067a4.071 4.071 0 00-4.067-4.067 4.071 4.071 0 00-4.066 4.067v7.067H5.776L5.77 9.616l10.58-7.746 10.58 7.746z"
        fill={isActived ? '#0065FF' : 'white'}
      />
      <Path
        d="M26.93 9.616l-.008 16.709h-6.506v-7.067a4.071 4.071 0 00-4.067-4.067 4.071 4.071 0 00-4.066 4.067v7.067H5.776L5.77 9.616l10.58-7.746 10.58 7.746z"
        fill={isActived ? '#0065FF' : 'none'}
        stroke={isActived ? '#0065FF' : 'white'}
      />
    </Svg>
  );
};
