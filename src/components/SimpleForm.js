import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

let SimpleForm = props => {
  console.log('bbbbb')
  return (
    <form>
      <Field
        name="firstName"
        component="input"
        type="text"
        placeholder="First Name"
      />
    </form>
  )
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
SimpleForm = reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)


const mapStateToProps = state => ({
  initialValues: state.staticData // pull initial values from account reducer
})

export default connect(mapStateToProps)(SimpleForm)