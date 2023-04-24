import React, { useState } from "react";

import useTheme from "../../../hooks/useTheme";

const Dropdown = ({ className, isShow, dropdownRef, ...props }: any) => {
  const { styles }: any = useTheme();

  const FilterComponent = ({ componentName, isMulti = false }: any) => {
    const listChildComponent: any = React.Children.toArray(props.children);
    if (isMulti) {
      let arrayComponent: any = [];
      listChildComponent.map((item: any) => {
        if (item?.type?.name === componentName) arrayComponent.push(item);
      });

      return <>{arrayComponent}</>;
    }

    return (
      <>
        {listChildComponent.find(
          (item: any) => item.type.name === componentName
        )}
      </>
    );
  };

  return (
    <div className="relative ">
      <FilterComponent componentName="DropdownButton"></FilterComponent>
      <div
        ref={dropdownRef}
        className={`${isShow ? "" : "hidden"} ${
          styles.dropdown.backgroundColor
        } ${
          styles.dropdown.textColor
        } z-10   rounded-lg shadow w-44    ${className}`}
      >
        <ul className="py-2 text-sm  ">
          <FilterComponent
            componentName="DropdownItem"
            isMulti={true}
          ></FilterComponent>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
