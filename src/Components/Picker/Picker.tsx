import React from 'react';
import OptionPicker, { Option } from '../OptionPicker/OptionPicker';
import Choice from '../Choice/Choice';
import ResultsOfDecision from '../ResultsOfDecision/ResultsOfDecision';

export type PickerProps = {}
export type PickerState = {
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
            isPicking: true
        });
    }

    optionsPicked = (optionsChosen: Option[]) => {
        this.setState({
            isChoosing: true,
            availableOptions: optionsChosen
        });
    }

    optionChosen = (option: Option) => {
        this.setState({
            hasChosen: true,
            chosenOption: option
        });
    }

    render() {
        const { isPicking, isChoosing, hasChosen, availableOptions, chosenOption } = this.state;
        return (
            <React.Fragment>
                {!isPicking && <button onClick={this.onClick} id="setup-choice">Make Choice</button>}
                {isPicking && !isChoosing && <OptionPicker finishedPickingOptionsCallback={this.optionsPicked} />}
                {isChoosing && !hasChosen && <Choice optionsToChooseFrom={availableOptions} finishedChoosingOption={this.optionChosen}/>}
                {hasChosen && <ResultsOfDecision chosenOption={chosenOption} />}
            </React.Fragment>
        );
    }

}

export default Picker;