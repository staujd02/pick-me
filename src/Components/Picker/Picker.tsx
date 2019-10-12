import React from 'react';
import OptionPicker, { Option } from '../OptionPicker/OptionPicker';
import Choice from '../Choice/Choice';
import ResultsOfDecision from '../ResultsOfDecision/ResultsOfDecision';
import Process from '../Process/Process';

export type PickerProps = {}
export type PickerState = {
    activeStep: number
    isPicking: boolean
    isChoosing: boolean
    hasChosen: boolean
    availableOptions: Option[],
    chosenOption: Option
}

class Picker extends React.Component<PickerProps, PickerState> {

    constructor(props: PickerProps) {
        super(props);
        this.state = {
            activeStep: 0,
            isPicking: false,
            isChoosing: false,
            hasChosen: false,
            availableOptions: [],
            chosenOption: {
                image: '',
                title: ''
            }
        }
    }

    onClick = () => {
        this.setState({
            activeStep: 1
        });
    }

    optionsPicked = (optionsChosen: Option[]) => {
        this.setState({
            activeStep: 2,
            availableOptions: optionsChosen
        });
    }

    optionChosen = (option: Option) => {
        this.setState({
            activeStep: 3,
            chosenOption: option
        });
    }

    render() {
        const { availableOptions, chosenOption, activeStep } = this.state;
        return (
            <Process
                activeStep={activeStep}
                steps={
                    [
                        <button key={0} onClick={this.onClick} id="setup-choice">Make Choice</button>,
                        <OptionPicker key={1} finishedPickingOptionsCallback={this.optionsPicked} />,
                        <Choice key={2} optionsToChooseFrom={availableOptions} finishedChoosingOption={this.optionChosen} />,
                        <ResultsOfDecision key={3} chosenOption={chosenOption} />
                    ]
                }
            />
        );
    }

}

export default Picker;