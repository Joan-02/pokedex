import { TypeFilterButton } from "../typeFilterButton/typeFilterButton";
import "./filtersModal.css";
import { useState } from "react";
import { POKEMON_TYPES } from "../../constants/constants";

interface FiltersModalProps {
  onClose: () => void;
  onApplyFilters: (selectedTypes: string[]) => void;
  initialSelectedTypes: string[];
}

export const FiltersModal = ({
  onClose,
  onApplyFilters,
  initialSelectedTypes,
}: FiltersModalProps) => {
  const [selectedTypes, setSelectedTypes] = useState(initialSelectedTypes);

  const handleTypeToggle = (typeName: string) => {
    setSelectedTypes((currentSelectedTypes) => {
      if (currentSelectedTypes.includes(typeName)) {
        return currentSelectedTypes.filter((type) => type !== typeName);
      } else {
        return [...currentSelectedTypes, typeName];
      }
    });
  };

  const handleApplyClick = () => {
    onApplyFilters(selectedTypes);
    onClose();
  };

  const handleClearFilters = () => {
    setSelectedTypes([]);
  };

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h3 className="modal__title">Filter by Type</h3>
          <button onClick={onClose} className="close-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="close-arrow"
            >
              <path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill="black"
              />
            </svg>
          </button>
        </div>

        <div className="modal__scrollable-content">
          <div className="modal__grid">
            {POKEMON_TYPES.map((name) => (
              <TypeFilterButton
                key={name}
                typeName={name}
                isActive={selectedTypes.includes(name)}
                onClick={() => handleTypeToggle(name)}
              />
            ))}
          </div>
        </div>

        <div className="modal__actions">
          <button
            className="modal__action-button modal__action-button--secondary"
            onClick={handleClearFilters}
          >
            Clear
          </button>
          <button
            className="modal__action-button modal__action-button--primary"
            onClick={handleApplyClick}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
