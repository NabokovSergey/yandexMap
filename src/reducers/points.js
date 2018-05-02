// @flow
import { handleActions } from "redux-actions";
import { addPoint, deletePoint, movePoint, relocatePoint } from "../actions";
import type {
  movePointPayloadType,
  deletePointPayloadType,
  addPointPayloadType,
  relocatePointPayloadType
} from "../actions";

export type pointType = {
  id: number,
  text: string,
  coordinates: Array<number>
};

type stateType = Array<pointType>;
type actionAddPointType = { payload: addPointPayloadType };
type actionMovePointType = { payload: movePointPayloadType };
type actionDeletePointType = { payload: deletePointPayloadType };
type actionRelocatePointType = { payload: relocatePointPayloadType };
const initialState: stateType = [];

export const points = handleActions(
  {
    [addPoint]: (state, { payload }: actionAddPointType) => [
      ...state,
      { ...payload }
    ],

    [deletePoint]: (state, { payload }: actionDeletePointType) =>
      state.filter((item: deletePointPayloadType) => item.id !== payload.id),

    [movePoint]: (state, { payload }: actionMovePointType) =>
      state.map((item: movePointPayloadType) => {
        if (item.id === payload.id) {
          return { ...item, coordinates: payload.coordinates };
        }
        return item;
      }),

    [relocatePoint]: (state, { payload }: actionRelocatePointType) => [
      ...payload.points
    ]
  },
  initialState
);
