import React from 'react';

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