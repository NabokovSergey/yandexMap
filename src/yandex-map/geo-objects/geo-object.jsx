// @flow
import React from "react";
import { MapContext } from "../map-context";

export const GeoObject = ({ ...props }: Object) => {
  const { type: Type, ...rest } = props;
  return (
    <MapContext.Consumer>
      {({ map, mapApi }) => <Type {...rest} map={map} mapApi={mapApi} />}
    </MapContext.Consumer>
  );
};
