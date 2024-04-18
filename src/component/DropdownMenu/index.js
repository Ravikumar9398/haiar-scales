import React, { useState } from "react";
import "./index.css";

import { FaAngleDown } from "react-icons/fa";

const menuItemsData = [
  {
    title: "weighing Scales",
    url: "/weighing-scales",
    dropdownItems: [
      {
        title: "weighing scales",
        url: "/weighing-scales",
      },
      {
        title: "Digital Scales",
        url: "/digital-scales",
      },
      {
        title: "spareparts",
        url: "/spareparts",
      },
      {
        title: "Business Needs",
        url: "/business-needs",
      },
      {
        title: "Manual Measurements",
        url: "/manual-measurements",
      },
    ],
  },
];

const DropdownMenu = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav>
      <ul>
        {menuItemsData.map((item, index) => (
          <li key={index}>
            {item.dropdownItems ? (
              <>
                <button
                  className="dropdown-btn"
                  onClick={() => setDropdown(!dropdown)}
                >
                  {item.title}
                  <FaAngleDown size={20} />
                </button>
                {dropdown && (
                  <ul className="dropdown">
                    {item.dropdownItems.map((dropdownItem, index) => (
                      <li key={index}>
                        <a href={dropdownItem.url}>{dropdownItem.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <a href={item.url}>{item.title}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DropdownMenu;
