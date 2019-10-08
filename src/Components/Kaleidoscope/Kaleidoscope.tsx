import React from 'react';
import Loader from '../Loader/Loader';
import Cycler from '../Cycler/Cycler';
import SourceList from '../../source-list.json';
import { cycleTime } from '../../Constants/environment.constants';

export default class Kaleidoscope extends React.Component<KaleidoscopeProps, KaleidoscopeState>{
    render(){
        return (
            <Loader loadTime={this.props.loadTime} handleConfigureClick={this.openConfiguration}>
                <Cycler sourceList={SourceList} cycleTime={cycleTime} />
            </Loader>
        );
    }

    openConfiguration = (event: ButtonClickEvent): void => {
        
    }

}