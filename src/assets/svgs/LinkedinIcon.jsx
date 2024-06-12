import * as React from 'react';
import Svg, {G, Circle, Rect, Path} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    enableBackground="new 0 0 32 32"
    height={props.size}
    width={props.size}
    id="Layer_1"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <G>
      <Circle
        clipRule="evenodd"
        cx={16}
        cy={16}
        fill="#007BB5"
        fillRule="evenodd"
        r={16}
      />
      <G>
        <Rect fill="#FFFFFF" height={14} width={4} x={7} y={11} />
        <Path
          d="M20.499,11c-2.791,0-3.271,1.018-3.499,2v-2h-4v14h4v-8c0-1.297,0.703-2,2-2c1.266,0,2,0.688,2,2v8h4v-7    C25,14,24.479,11,20.499,11z"
          fill="#FFFFFF"
        />
        <Circle cx={9} cy={8} fill="#FFFFFF" r={2} />
      </G>
    </G>
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
  </Svg>
);
export default SVGComponent;
