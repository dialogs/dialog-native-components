import React, { PureComponent } from "react";
import Svg from "react-native-svg";
import glyphs from "./glyphs";

type Props = {
  fill: string,
  height: string | number,
  name: string,
  stroke?: string,
  strokeWidth?: string | number,
  width: string | number,
  viewBox: string,
  style: string
};

const defaultViewBox = '0 0 100 100';

class Icon extends PureComponent {
  props: Props;

  static defaultProps = {
    fill: '#000',
    height: '44',
    width: '44'
  };

  render() {
    if (!this.props.name || !glyphs[this.props.name]) {
      return null;
    }

    const height = this.props.height && this.props.height.toString();
    const width = this.props.width && this.props.width.toString();
    const strokeWidth =
      this.props.strokeWidth && this.props.strokeWidth.toString();

    const isSimple = React.isValidElement(glyphs[this.props.name]);
    const svgEl = isSimple
      ? glyphs[this.props.name]
      : glyphs[this.props.name].svg;

    let viewBox = defaultViewBox;

    if (this.props.viewBox) {
      viewBox = this.props.viewBox;
    } else if (!isSimple && glyphs[this.props.name].viewBox) {
      viewBox = glyphs[this.props.name].viewBox;
    }

    return (
      <Svg
        height={height}
        width={width}
        viewBox={viewBox}
        style={this.props.style}
      >
        {React.cloneElement(svgEl, {
          fill: this.props.fill,
          stroke: this.props.stroke,
          strokeWidth: strokeWidth
        })}
      </Svg>
    );
  }
}

export default Icon;
