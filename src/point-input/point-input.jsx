// @flow
import React from "react";
import TextField from "material-ui/TextField";
import "./point-input.css";

type InputPointPropsType = {
  addPoint: Function,
  map: Object
};

type InputPointStateType = {
  newLocation: string
};

export class InputPoint extends React.PureComponent<
  InputPointPropsType,
  InputPointStateType
> {
  state = { newLocation: "" };

  onChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      newLocation: event.currentTarget.value
    });
  };

  onKeyPress = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const { addPoint, map } = this.props;
      const { newLocation } = this.state;
      const coordinates = map.getCenter();

      addPoint(newLocation, coordinates);

      this.setState({ newLocation: "" });
    }
  };

  render() {
    return (
      <TextField
        className="input-point"
        value={this.state.newLocation}
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
        hintText="Новая точка маршрута"
      />
    );
  }
}
