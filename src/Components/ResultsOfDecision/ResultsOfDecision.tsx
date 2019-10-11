import React from 'react';
import { Option } from '../OptionPicker/OptionPicker';

export type ResultsOfDecisionProps = {
    chosenOption: Option
};
export type ResultsOfDecisionState = {};

class ResultsOfDecision extends React.Component<ResultsOfDecisionProps, ResultsOfDecisionState> {
    render(){
        return (
            <div></div>
        );
    }
}

export default ResultsOfDecision;