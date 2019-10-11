import React from 'react';

export type OptionPickerProps = {
  finishedPickingOptionsCallback: (chosenOptions: Option[]) => void
};
export type Option = {
  image: string
  title: string
}

const OptionPicker: React.FC<OptionPickerProps> = (props: OptionPickerProps) => {
  return (
    <div className="option-picker"></div>
  );
}

export default OptionPicker;
