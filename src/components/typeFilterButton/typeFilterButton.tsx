import "./typeFilterButton.css";
import { CheckboxCheckedIcon } from "../icon/checkboxCheckedIcon";
import { CheckboxIcon } from "../icon/checkboxIcon";

interface TypeFilterButtonProps {
  typeName: string;
  isActive: boolean;
  onClick: (name: string) => void;
}

export const TypeFilterButton = ({
  typeName,
  isActive,
  onClick,
}: TypeFilterButtonProps) => {
  const buttonClassName = `type-filter-button ${isActive ? "is-active" : ""}`;

  return (
    <button className={buttonClassName} onClick={() => onClick(typeName)}>
      {isActive ? <CheckboxCheckedIcon /> : <CheckboxIcon />}
      <span className="type-filter-button__name">{typeName}</span>
    </button>
  );
};
