import React from 'react';

export default class ConfigureButton extends React.Component<ConfigureButtonProps> {
    render(){
        const { buttonClickHandler } = this.props;
        return <button onClick={buttonClickHandler}>Configure Streams</button>
    }
}