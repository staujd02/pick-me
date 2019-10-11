import React from 'react';
import { Option } from '../OptionPicker/OptionPicker';

export type ChoiceProps = {
    optionsToChooseFrom: Option[]
    finishedChoosingOption: (chosenOption: Option) => void 
}
export type ChoiceState = {}

class Choice extends React.Component<ChoiceProps, ChoiceState>{
    render(){
        return (
            <div></div>
        );
    }
}

export default Choice;