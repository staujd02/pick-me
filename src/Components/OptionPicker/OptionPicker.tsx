import React from 'react';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

class OptionPicker extends React.Component<OptionPickerProps, OptionPickerState> {
  constructor(props: OptionPickerProps){
    super(props);
    this.state = {
      selectedOptions: []
    }
  }

  addToList = (option: Option) => {
    const { selectedOptions } = this.state;
    this.optionInList(selectedOptions, option) ?
      this.removeOption(selectedOptions, option) 
      : this.addOption(selectedOptions, option);
  }

  private optionInList = (options: Option[], option: Option) => 
    options.some(o => o.title === option.title);
  

  private removeOption = (options: Option[], option: Option) => 
    this.setState({
      selectedOptions: options.filter(o => o.title === option.title)
    });

  private addOption = (options: Option[], option: Option) => 
    this.setState({ selectedOptions: options.concat([option]) });

  render() {
    return (
      <div className="option-picker">
        <Container>
          {this.props.options.map((option, idx) => (
            <Card key={idx}>
              <CardActionArea onClick={() => this.addToList(option)}>
                <Typography>{option.title}</Typography>
                <img src={option.image} />
              </CardActionArea>
            </Card>
          ))}
        </Container>
        <button onClick={() => this.props.finishedPickingOptionsCallback([])}>Done</button>
      </div>
    );
  };
}

export default OptionPicker;