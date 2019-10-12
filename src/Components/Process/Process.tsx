import React from 'react';

export type ProcessProps = {
    steps: React.ReactNode[],
    activeStep: number
}
export type ProcessState = {}

class Process extends React.Component<ProcessProps, ProcessState> {
    render() {
        let activeStep = this.props.activeStep;
        return (
            <React.Fragment>
                {this.props.steps.filter((c, idx) => activeStep === idx)}
            </React.Fragment>
        );
    }
}

export default Process;