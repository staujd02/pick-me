/// <reference types="react-scripts" />

interface IOptionRepo {
  loadOptions: () => Promise<Option[]>
  init: () => Promise<void>
}

type ButtonClickHandler = (event: ButtonClickEvent) => void
type ButtonClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>
type ChoiceProps = {
  optionsToChooseFrom: Option[]
  finishedChoosingOption: (chosenOption: Option) => void
}
type ChoiceState = {}
type OptionPickerProps = {
  finishedPickingOptionsCallback: (chosenOptions: Option[]) => void
  options: Option[]
}
type OptionPickerState = {
  selectedOptions: Option[]
}
type OptionCardProps = {
  handleClick: () => void
  option: Option
}
type Option = {
  image: string
  title: string
}
type PickerProps = {
  optionsRepo: IOptionRepo
}
type PickerState = {
  activeStep: number
  isPicking: boolean
  isChoosing: boolean
  hasChosen: boolean
  optionsToChooseFrom: Option[]
  availableOptions: Option[]
  chosenOption: Option
}
type ProcessProps = {
  steps: React.ReactNode[],
  activeStep: number
}
type ProcessState = {}
type ResultsOfDecisionProps = {
  chosenOption: Option
}
type ResultsOfDecisionState = {};