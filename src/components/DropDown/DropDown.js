import React from 'react';
import PropTypes from 'prop-types';
import './DropDown.css';

class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0
    }
  }

  onSelect = (item) => {
    if (item) {
      this.setState({ current: 0 });
      this.props.onSelect(item);
    }
  }

  onKeyDown = (e) => {
    if (this.props.visible) {
      if (e.keyCode === 40) { // down arrow
        const max = this.props.options.length;
        if (this.state.current < max - 1) {
          this.setState((prevState) => ({ current: prevState.current + 1 }));
        }
      }
      else if (e.keyCode === 38) { // up arrow
        if (this.state.current > 0) {
          this.setState((prevState) => ({ current: prevState.current - 1 }));
        }
      }
      else if (e.keyCode === 13) { // enter 
        this.onSelect(JSON.stringify(this.props.options[this.state.current]));
      }
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyDown);
  }

  render() {
    const { options, visible } = this.props;
    const { current } = this.state;
    if (visible && options.length > 0) {
      return (
        <div className="DropDown">
          <ul>
            {options.map((item, index) => (
              <li data-item={JSON.stringify(item)}
                className={(current === index) ? "current" : ""}
                key={index}
                onClick={(e) => this.onSelect(e.target.dataset.item)}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )
    }

    return null;
  }
}

DropDown.propTypes = {
  options: PropTypes.array,
  visible: PropTypes.bool,
  onSelect: PropTypes.func
}

export default DropDown;