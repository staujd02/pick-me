import React from 'react';
import OptionPicker from '../OptionPicker/OptionPicker';
import Choice from '../Choice/Choice';
import ResultsOfDecision from '../ResultsOfDecision/ResultsOfDecision';
import Process from '../Process/Process';

class Picker extends React.Component<PickerProps, PickerState> {

    constructor(props: PickerProps) {
        super(props);
        this.state = {
            activeStep: 0,
            isPicking: false,
            isChoosing: false,
            hasChosen: false,
            availableOptions: [],
            optionsToChooseFrom: [],
            chosenOption: {
                image: '',
                title: ''
            }
        }
    }

    componentDidMount(){
        this.openRepo();
    }

    openRepo = async () => {
        await this.props.optionsRepo.init();
        this.setState({
            optionsToChooseFrom: await this.props.optionsRepo.loadOptions()
        });
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
        const { availableOptions, chosenOption, activeStep, optionsToChooseFrom } = this.state;
        return (
            <Process
                activeStep={activeStep}
                steps={
                    [
                        <button key={0} onClick={this.onClick} id="setup-choice">Make Choice</button>,
                        <OptionPicker options={optionsToChooseFrom} key={1} finishedPickingOptionsCallback={this.optionsPicked} />,
                        <Choice key={2} optionsToChooseFrom={availableOptions} finishedChoosingOption={this.optionChosen} />,
                        <ResultsOfDecision key={3} chosenOption={chosenOption} />
                    ]
                }
            />
        );
    }

}

export default Picker;