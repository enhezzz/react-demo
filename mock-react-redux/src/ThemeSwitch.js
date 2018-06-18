import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor() {
    super()
    this.state = { themeColor: '' };
    this.handleBlue = this.handleBlue.bind(this);
    this.handleRed = this.handleRed.bind(this);
  }
  componentWillMount() {
    this._updateThemeColor();
    this.context.store.subscribe(() => {
      this.context.store.subscribe(() => this._updateThemeColor())
    })
  }

  _updateThemeColor() {
    const { store } = this.context
    const state = store.getState()
    this.setState({ themeColor: state.themeColor })
  }
  handleRed() {
    this.context.store.dispatch({
      type: 'CHANGE_COLOR',
      themeColor: 'red'
    })
  }
  handleBlue() {
    this.context.store.dispatch({
      type: 'CHANGE_COLOR',
      themeColor: 'blue'
    })
  }
  render() {
    return (
      <div>
        <button style={{ color: this.state.themeColor }} onClick={this.handleRed}>Red</button>
        <button style={{ color: this.state.themeColor }} onClick={this.handleBlue}>Blue</button>
      </div>
    )
  }
}

export default ThemeSwitch