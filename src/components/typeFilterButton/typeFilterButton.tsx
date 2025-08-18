import "./typeFilterButton.css";
import { CheckboxCheckedIcon } from "../icon/checkboxCheckedIcon";
import { CheckboxIcon } from "../icon/checkBoxIcon";

interface TypeFilterButton {
  typeName: string;
  isActive: boolean;
  onClick: (name: string) => void;
}

export const TypeFilterButton = (filterInfo: TypeFilterButton) => {
  const { typeName, isActive, onClick } = filterInfo;

  return (
    <>
      <div
        className="filter-button_container"
        onClick={() => onClick(typeName)}
      >
        <button className="checkbox-button">
          {isActive ? <CheckboxCheckedIcon /> : <CheckboxIcon />}
          <span className="filter-name">{typeName}</span>
        </button>
      </div>
    </>
  );
};
