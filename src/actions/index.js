// @flow
import { createAction } from "redux-actions";

let nextPointId = 0;

export type addPointPayloadType = {
  id: number,
  text: string,
  coordinates: Array<number>
};

export type deletePointPayloadType = {
  id: number
};

export type movePointPayloadType = {
  id: number,
  coordinates: Array<number>
};

export type relocatePointPayloadType = {
  points: Object
};

export const addPoint = createAction(
  "ADD_POINT",
  (text, coordinates): addPointPayloadType => ({
    text,
    coordinates,
    id: nextPointId++
  })
);

export const deletePoint = createAction(
  "DELETE_POINT",
  (id): deletePointPayloadType => ({
    id
  })
);

export const movePoint = createAction(
  "MOVE_POINT",
  (id, coordinates): movePointPayloadType => ({
    id,
    coordinates
  })
);

export const relocatePoint = createAction(
  "RELOCATE_POINT",
  (points): relocatePointPayloadType => ({
    points
  })
);
