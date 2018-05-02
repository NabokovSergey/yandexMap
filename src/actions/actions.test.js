import * as actions from "./index";

describe("actions", () => {
  it("should create an action ADD_POINT", () => {
    const expectedAction = {
      type: "ADD_POINT",
      payload: {
        id: 0,
        text: "точка 1",
        coordinates: [50, 35]
      }
    };
    expect(actions.addPoint("точка 1", [50, 35])).toEqual(expectedAction);
  });

  it("should create an action DELETE_POINT", () => {
    const expectedAction = {
      type: "DELETE_POINT",
      payload: {
        id: 0
      }
    };
    expect(actions.deletePoint(0)).toEqual(expectedAction);
  });

  it("should create an action MOVE_POINT", () => {
    const expectedAction = {
      type: "MOVE_POINT",
      payload: {
        id: 0,
        coordinates: [50, 35]
      }
    };
    expect(actions.movePoint(0, [50, 35])).toEqual(expectedAction);
  });

  it("should create an action RELOCATE_POINT", () => {
    const points = [
      {
        id: 0,
        text: "точка 1",
        coordinates: [50, 35]
      },
      {
        id: 1,
        text: "точка 2",
        coordinates: [55, 35]
      }
    ];
    const expectedAction = {
      type: "RELOCATE_POINT",
      payload: {
        points
      }
    };
    expect(actions.relocatePoint(points)).toEqual(expectedAction);
  });
});
