import { connect } from "react-redux"
import { updateFilter } from '../reducers/filterReducer'

const Filter = (props) => {

    const handleChange = (event) => {
      // input-kentän arvo muuttujassa event.target.value
      let filter = event.target.value.toString()
      props.updateFilter(filter)
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      updateFilter: (value) => {
        dispatch(updateFilter(value))
      }
    }
  }
  
  export default connect(null, mapDispatchToProps)(Filter)