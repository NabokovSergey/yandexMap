// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { YaMap } from "./yandex-map";
import { GeoObject, Placemark, Polyline } from "./yandex-map/geo-objects";
import { ContainerList } from "./points-list";
import { InputPoint } from "./point-input";
import { addPoint, deletePoint, movePoint, relocatePoint } from "./actions";
import "./app.css";

import type { pointType } from "./reducers/points";

type AppStateType = {
  map: Object | null
};

type AppPropsType = {
  addPointAction: Function,
  deletePointAction: Function,
  movePointAction: Function,
  points: Array<pointType>,
  pointsCoordinates: Array<number>,
  relocatePointAction: Function
};

class App extends Component<AppPropsType, AppStateType> {
  state = {
    map: null
  };

  handleGetMap = map => {
    this.setState({ map });
  };

  renderPoints = points =>
    points.map(point => {
      const dragend = event => {
        this.props.movePointAction(
          point.id,
          event.get("target").geometry.getCoordinates()
        );
      };
      const getEventsPlacemark = events => {
        events.add("dragend", dragend);
      };
      return (
        <GeoObject
          key={point.id}
          type={Placemark}
          coordinates={point.coordinates}
          properties={{ balloonContent: point.text }}
          options={{ draggable: true }}
          getEvents={getEventsPlacemark}
        />
      );
    });

  render() {
    const {
      addPointAction,
      deletePointAction,
      points,
      pointsCoordinates,
      relocatePointAction
    } = this.props;
    const { map } = this.state;
    return (
      <div className="container">
        {map && (
          <div className="list">
            <InputPoint map={map} addPoint={addPointAction} />
            <ContainerList
              items={points}
              deletePoint={deletePointAction}
              relocatePoint={relocatePointAction}
            />
          </div>
        )}
        <YaMap getMap={this.handleGetMap} className="map">
          {this.renderPoints(points)}
          <GeoObject type={Polyline} coordinates={pointsCoordinates} />
        </YaMap>
      </div>
    );
  }
}

const ContainerApp = connect(
  state => {
    const points = state.points;
    const pointsCoordinates = points.reduce(function(coordinates, point) {
      return [...coordinates, [...point.coordinates]];
    }, []);
    return { points, pointsCoordinates };
  },
  {
    addPointAction: addPoint,
    deletePointAction: deletePoint,
    movePointAction: movePoint,
    relocatePointAction: relocatePoint
  }
)(App);
export default ContainerApp;
