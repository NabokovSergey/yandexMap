// @flow
import React from "react";

type PlacemarkPropsType = {
  mapApi: Object,
  map: Object,
  coordinates: Array<number>,
  properties?: Object,
  options?: Object,
  getEvents?: Function
};

export class Placemark extends React.Component<PlacemarkPropsType> {
  static defaultProps = {
    properties: {},
    options: {},
    getEvents: null
  };

  marker = new this.props.mapApi.Placemark(
    this.props.coordinates,
    this.props.properties,
    this.props.options
  );

  componentDidMount() {
    this.props.map.geoObjects.add(this.marker);
    if (this.props.getEvents) {
      this.props.getEvents(this.marker.events);
    }
  }

  componentWillUpdate(props: PlacemarkPropsType) {
    this.marker.geometry.setCoordinates(props.coordinates);
  }
  componentWillUnmount() {
    this.props.map.geoObjects.remove(this.marker);
  }

  render() {
    return null;
  }
}
