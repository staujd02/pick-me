import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const OptionPicker: React.FC<OptionPickerProps> = (props: OptionPickerProps) => {
  return (
    <div className="option-picker">
      <button onClick={() => props.finishedPickingOptionsCallback([])}>Done</button>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <img src={'http://lorempixel.com/32/32/'} alt="random" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button selected={true}>
          <ListItemIcon>
            <img src={'http://lorempixel.com/32/32/'} alt="random" />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
    </div>
  );
}

export default OptionPicker;