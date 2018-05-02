// @flow
import React, { PureComponent } from "react";

type PolylinePropsType = {
  mapApi: Object,
  map: Object,
  coordinates: Array<number>
};

export class Polyline extends PureComponent<PolylinePropsType> {
  polyline = new this.props.mapApi.Polyline(this.props.coordinates);

  componentDidMount() {
    const { map } = this.props;
    map.geoObjects.add(this.polyline);
  }

  componentWillUpdate(props: PolylinePropsType) {
    this.polyline.geometry.setCoordinates(props.coordinates);
  }

  componentWillUnmount() {
    this.props.map.geoObjects.remove(this.polyline);
  }

  render() {
    return null;
  }
}
