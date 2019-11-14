import React from 'react';
import Container from '@material-ui/core/Container';
import OptionCard from './OptionCard/OptionCard';

class OptionPicker extends React.Component<OptionPickerProps, OptionPickerState> {
  constructor(props: OptionPickerProps) {
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

  private handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    this.props.finishedPickingOptionsCallback(this.state.selectedOptions);

  render() {
    const doneDisabled = this.state.selectedOptions.length !== 2;
    return (
      <div className="option-picker">
        <Container className='option-list'>
          {this.props.options.map((option, idx) => (
            <OptionCard handleClick={() => this.addToList(option)} option={option} key={idx} />
          ))}
        </Container>
        <Container className="selected-list">
          {this.state.selectedOptions.map((option, idx) => (
            <OptionCard handleClick={() => this.addToList(option)} option={option} key={idx} />
          ))}
        </Container>
        <button disabled={doneDisabled} onClick={this.handleButtonClick}>Done</button>
      </div>
    );
  };

}

export default OptionPicker;