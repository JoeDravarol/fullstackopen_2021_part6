import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = () => {
  const filterString = useSelector(state => state.filter)
  const dispatch = useDispatch()
  const style = {
    marginBottom: 10
  }

  const handleChange = (event) => {
    dispatch( filterChange(event.target.value) )
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} value={filterString} />
    </div>
  )
}

export default Filter
