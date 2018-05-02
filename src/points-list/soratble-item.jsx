// @flow
import React from "react";
import { ListItem } from "material-ui/List";
import { SortableElement } from "react-sortable-hoc";
import IconButton from "material-ui/IconButton";
import ClearIcon from "material-ui/svg-icons/content/clear";
import { red200 } from "material-ui/styles/colors";

const iconButtonElement = (id, deletePoint) => {
  const handleDeletePoint = () => {
    deletePoint(id);
  };
  return (
    <IconButton
      touch={true}
      tooltip="удалить"
      onClick={handleDeletePoint}
      tooltipPosition="bottom-left"
    >
      <ClearIcon color={red200} />
    </IconButton>
  );
};

const SortableItem = SortableElement(({ value, deletePoint }) => (
  <ListItem
    primaryText={value.text}
    rightIconButton={iconButtonElement(value.id, deletePoint)}
  />
));

export default SortableItem;
