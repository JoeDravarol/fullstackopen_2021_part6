import React from 'react'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => {
  const style = {
    marginBottom: 10
  }

  const handleChange = (event) => {
    props.filterChange(event.target.value)
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} value={props.filterString} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    filterString: state.filterString
  }
}

export default connect(
  mapStateToProps,
  { filterChange }
)(Filter)
