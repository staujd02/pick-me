import React from 'react';
import Slide from '@material-ui/core/Slide';

class Curtain extends React.Component<CurtainProps, CurtainState> {
    render() {
        const { open } = this.props;
        return (
            <Slide direction={'down'} in={open}>
                <div id="cycler-controls">
                    {this.props.children}
                </div>
            </Slide>);
    }
}

export default Curtain;