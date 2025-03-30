import React from "react";
import DropdownItem from "./DropdownItem";

const HomeDropdown = ({ itmes }) => {
  return (
    <ul className="sub-menu ltn__sub-menu-col-2">
      {itmes?.map(({ title, path, dropdownItems }, idx) => (
        <li key={idx}>
          <DropdownItem item={{ name: title, path }} />
          <ul className="sub-menu-child">
            {dropdownItems?.map((dropdownItem, idx) => (
              <li key={idx}>
                <DropdownItem item={dropdownItem} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default HomeDropdown;
