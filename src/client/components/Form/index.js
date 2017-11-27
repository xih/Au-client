import React, { Component } from 'react'
import Select from 'react-select'

const SIZES = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
]

export class Dropdown extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleChange(option) {
    this.setState({ value: option.value })
  }

  render() {
    return (
      <Select
        name="size"
        placeholder="Select a Size"
        style={{
          fontSize: 21,
          color: '#000',
          border: 'none',
          width: 172,
          marginTop: 8
        }}
        value={this.state.value}
        onChange={this.handleChange.bind(this)} 
        options={SIZES}
        clearable={false}
      />
    )
  }
}