import React from 'react';
import './CyclerControl.scss';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import { PlayBackMode } from '../../../enumerations';

class CyclerControl extends React.Component<CyclerControlProps, CyclerControlState> {

    render(){
        const { onSkip, onPlayBack, playBackMode } = this.props;
        return (
            <div className='cycler-controls'>
                <IconButton id="skip-control" onClick={onSkip} aria-label="skip">
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                        <path d="M12 36l17-12-17-12v24zm20-24v24h4V12h-4z" />
                    </SvgIcon>
                </IconButton>
                <IconButton id="playback-control" onClick={onPlayBack} aria-label={playBackMode}>
                    {playBackMode === PlayBackMode.Play && 
                        <SvgIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        </SvgIcon>}
                    {playBackMode === PlayBackMode.Pause &&
                        <SvgIcon xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                            <path d="M18 32h4V16h-4v16zm6-28C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm2-8h4V16h-4v16z" />
                        </SvgIcon>}
                </IconButton>
            </div>);
    }

}

export default CyclerControl;