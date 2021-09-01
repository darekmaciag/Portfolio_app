import React from "react";
import * as Icons from "react-icons/fa";

/* Your icon name from database data can now be passed as prop */
const DynamicFaIcon = ({ name }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) { // Return a default one
    return <Icons.FaSpinner />;
  }

  return <IconComponent />;
};

export default function DynamicIcon({icon}) {
  return (
      <DynamicFaIcon name={icon} />
  );
}