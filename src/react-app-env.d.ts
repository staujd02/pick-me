/// <reference types="react-scripts" />

interface blah {

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
type Option = {
  image: string
  title: string
}
type PickerProps = {}
type PickerState = {
    activeStep: number
    isPicking: boolean
    isChoosing: boolean
    hasChosen: boolean
    availableOptions: Option[],
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
