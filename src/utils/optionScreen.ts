import {StackNavigationOptions} from '@react-navigation/stack';
import {widthScreen} from './scales';

export const TransitionScreenOptions: StackNavigationOptions = {
  cardStyleInterpolator: ({current: {progress}}: any) => ({
    cardStyle: {
      transform: [
        {
          translateX: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [widthScreen, 0],
          }),
        },
      ],
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    },
  }),
};
