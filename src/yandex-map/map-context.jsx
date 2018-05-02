// @flow
import React from "react";

export const MapContext = React.createContext(
  ({
    map: null,
    mapApi: null
  }: { map: ?Object, mapApi: ?Object })
);
