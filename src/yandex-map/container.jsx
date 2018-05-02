// @flow
import * as React from "react";
import { MapContext } from "./map-context";
import { createMap, load } from "./api";

type mapOptionsType = {
  center: Array<number>,
  zoom: number
};

type ContainerMapPropsType = {
  children: React.Node,
  getMap?: Function,
  className?: string,
  mapOptions?: mapOptionsType
};

type ContainerMapStateType = {
  isLoadApi: boolean,
  map: ?Object,
  mapApi: ?Object
};

export class ContainerMap extends React.Component<
  ContainerMapPropsType,
  ContainerMapStateType
> {
  static defaultProps = {
    mapOptions: {
      center: [55.76, 37.64],
      zoom: 10
    }
  };
  state = {
    isLoadApi: false,
    map: null,
    mapApi: null
  };

  withRefContainer = (element: ?HTMLElement) => {
    if (element) {
      load()
        .then(mapApi => {
          // закомментировано потому что в начале функции есть проверка на
          // существование элемента контейнера
          // $FlowFixMe
          const map = createMap(mapApi, element, this.props.mapOptions);
          this.setState({ isLoadApi: true, map, mapApi });
          if (this.props.getMap) {
            this.props.getMap(map);
          }
        })
        .catch(error => console.error(`error load map api: ${error.message}`));
    } else {
      console.error("map container not have the instance");
    }
  };

  render() {
    const { isLoadApi, map, mapApi } = this.state;
    const { className, children } = this.props;
    return (
      <div className={className} ref={this.withRefContainer}>
        {isLoadApi &&
          map &&
          mapApi && (
            <MapContext.Provider value={{ map, mapApi }}>
              {children}
            </MapContext.Provider>
          )}
      </div>
    );
  }
}
