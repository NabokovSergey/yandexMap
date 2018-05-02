import { points as redusers } from "./points";

describe("reducers", () => {
  it("should return the initial state", () => {
    expect(redusers(undefined, {})).toEqual([]);
  });

  it("should handle ADD_POINT", () => {
    expect(
      redusers([], {
        type: "ADD_POINT",
        payload: {
          id: 0,
          text: "точка 1",
          coordinates: [55.76, 37.64]
        }
      })
    ).toEqual([
      {
        id: 0,
        text: "точка 1",
        coordinates: [55.76, 37.64]
      }
    ]);
  });

  it("should handle DELETE_POINT", () => {
    expect(
      redusers(
        [
          {
            id: 0,
            text: "точка 1",
            coordinates: [55.76, 37.64]
          }
        ],
        {
          type: "DELETE_POINT",
          payload: {
            id: 0
          }
        }
      )
    ).toEqual([]);
  });

  it("should handle MOVE_POINT", () => {
    expect(
      redusers(
        [
          {
            id: 0,
            text: "точка 1",
            coordinates: [55.76, 37.64]
          }
        ],
        {
          type: "MOVE_POINT",
          payload: {
            id: 0,
            text: "точка 1",
            coordinates: [55, 37]
          }
        }
      )
    ).toEqual([
      {
        id: 0,
        text: "точка 1",
        coordinates: [55, 37]
      }
    ]);
  });

  it("should handle RELOCATE_POINT", () => {
    expect(
      redusers(
        [
          {
            id: 0,
            text: "точка 1",
            coordinates: [50, 37]
          },
          {
            id: 2,
            text: "точка 2",
            coordinates: [55, 35]
          }
        ],
        {
          type: "RELOCATE_POINT",
          payload: {
            points: [
              {
                id: 2,
                text: "точка 2",
                coordinates: [55, 35]
              },
              {
                id: 0,
                text: "точка 1",
                coordinates: [50, 37]
              }
            ]
          }
        }
      )
    ).toEqual([
      {
        id: 2,
        text: "точка 2",
        coordinates: [55, 35]
      },
      {
        id: 0,
        text: "точка 1",
        coordinates: [50, 37]
      }
    ]);
  });
});
