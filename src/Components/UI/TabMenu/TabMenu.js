import React, { useState } from 'react';
import './TabMenu.scss';

const TabMenu = ({ tabMenuCallback }) => {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

  const menuItems = ['Kurumsal', 'Bireysel'];

  return (
    <>
      <div className="tabMenu">
        {menuItems.map((menuItem, index) => {
          const menuItemTextClasses = ['tabMenuItemText'];
          if (selectedMenuIndex === index) menuItemTextClasses.push('selected');
          return (
            <div
              key={`item_${index}`}
              role="button"
              tabIndex={0}
              className="tabMenuItem"
              onClick={() => {
                setSelectedMenuIndex(index);
                tabMenuCallback(index);
              }}
              onKeyDown={() => {}}
            >
              <div className={menuItemTextClasses.join(' ')}>{menuItem}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TabMenu;
