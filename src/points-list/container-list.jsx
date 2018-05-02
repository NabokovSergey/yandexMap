// @flow
import React from "react";
import { arrayMove } from "react-sortable-hoc";
import SortableList from "./sortable-list";

type ContainerListPropsType = {
  items: Array<Object>,
  deletePoint: Function,
  relocatePoint: Function
};

export class ContainerList extends React.PureComponent<ContainerListPropsType> {
  onSortEnd = ({
    oldIndex,
    newIndex
  }: {
    oldIndex: number,
    newIndex: number
  }) => {
    const { items, relocatePoint } = this.props;
    relocatePoint(arrayMove(items, oldIndex, newIndex));
  };

  render() {
    const { items, deletePoint } = this.props;
    return (
      <SortableList
        items={items}
        deletePoint={deletePoint}
        onSortEnd={this.onSortEnd}
        distance={3}
      />
    );
  }
}
