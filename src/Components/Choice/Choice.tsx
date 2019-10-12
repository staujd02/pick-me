import React from 'react';
import { Option } from '../OptionPicker/OptionPicker';

export type ChoiceProps = {
    optionsToChooseFrom: Option[]
    finishedChoosingOption: (chosenOption: Option) => void 
}
export type ChoiceState = {}

class Choice extends React.Component<ChoiceProps, ChoiceState>{
    render(){
        let dummy: Option = {
            title: "A Title",
            image: ""
        }
        return (
            <div>
                <button onClick={() => this.props.finishedChoosingOption(dummy)}>Next Again</button>
            </div>
        );
    }
}

export default Choice;