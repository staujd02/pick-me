import React from 'react';
import Stream from '../Stream/Stream';
import TimeDisplay from '../TimeDisplay/TimeDisplay';
import CyclerControl from './CyclerControl/CyclerControl';
import Curtain from '../Curtain/Curtain';
import { PlayBackMode } from '../../enumerations';

class Cycler extends React.Component<CyclerProps, CyclerState> {
    
    private readonly increment = 50;

    constructor(props: any){
        super(props);
        this.state = {
            activeSource: 0,
            millisecondsRemaining: this.props.cycleTime,
            controlsVisible: false,
            playbackPaused: false
        }
    }

    componentDidMount(){
        const { activeSource } = this.state;
        const { sourceList } = this.props;
        setTimeout(() => this.tick(sourceList, activeSource), this.increment);
    }
    
    render() {
        const { activeSource, millisecondsRemaining,
            controlsVisible, playbackPaused } = this.state;
        let playbackMode = playbackPaused ? PlayBackMode.Play : PlayBackMode.Pause;
        return (
            <div>
                <Stream source={this.getSource(activeSource)} />
                <TimeDisplay onClick={this.timeClicked} 
                    time={millisecondsRemaining} />
                <Curtain open={controlsVisible}>
                    <CyclerControl onSkip={this.onSkip}
                        playBackMode={playbackMode}
                        onPlayBack={this.onPlayBack} />
                </Curtain>
            </div>
        );
    }
    
    tick = (sourceList: Source[], activeSource: number) => {
        if (!this.state.playbackPaused)
            this.runTick(this.timeRemainingInCycle());
        setTimeout(() => this.tick(sourceList, activeSource), this.increment);
    }
    
    cycle = () => {
        const { activeSource } = this.state;
        const { sourceList } = this.props;
        this.setState({
           activeSource: this.cycleIndex(activeSource, sourceList.length),
           millisecondsRemaining: this.props.cycleTime
        });
    }


    onSkip = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.cycle();
        this.setState({ controlsVisible: false});
    }
    
    onPlayBack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.setState({ playbackPaused: !this.state.playbackPaused});
        this.setState({ controlsVisible: false});
    }

    timeClicked = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.setState({ controlsVisible: !this.state.controlsVisible });
    }

    private updateClock = (nextRemainingCycle: number) => {
        this.setState({
            millisecondsRemaining: nextRemainingCycle
        });
    }

    private runTick(nextRemainingCycle: number) {
        if (nextRemainingCycle > this.increment)
            this.updateClock(nextRemainingCycle);
        else
            this.cycle();
    }

    private timeRemainingInCycle() {
        const { millisecondsRemaining } = this.state;
        let nextRemainingCycle = millisecondsRemaining - this.increment;
        return nextRemainingCycle;
    }

    private cycleIndex(activeSource: number, length: number) {
        activeSource++;
        if (activeSource === length) {
            activeSource = 0;
        }
        return activeSource;
    }

    private getSource = (activeSource: number) => {
        return this.props.sourceList[activeSource];
    }
}

export default Cycler;