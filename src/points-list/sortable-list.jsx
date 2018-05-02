// @flow
import React from "react";
import { List } from "material-ui/List";
import { SortableContainer } from "react-sortable-hoc";
import SortableItem from "./soratble-item";

const SortableList = SortableContainer(({ items, deletePoint }) => {
  return (
    <List>
      {items.map((value, index) => (
        <SortableItem
          key={value.id}
          deletePoint={deletePoint}
          index={index}
          value={value}
        />
      ))}
    </List>
  );
});

export default SortableList;
