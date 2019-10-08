import React from 'react';
import './Stream.css';

class Stream extends React.Component<StreamProps> {

    noOpMessage(){
        return "Your browser doesn't support iFrames.";
    }

    render(){
        const { source, title } = this.props.source;
        return (
            <iframe title={title} allow={"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"} src={source}>{this.noOpMessage()}</iframe>
        );
    }

}

export default Stream;