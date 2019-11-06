import React from 'react'

function Checkbox(props) {
  const {wc} = props
    return (
    <div className="input-field">
    <p><label><input value="donor" onChange={wc} className="with-gap" name="Status" type="radio"/><span>Donor</span></label></p>
    <p><label><input value="procurer" onChange={wc} className="with-gap" name="Status" type="radio"/><span>Procurer</span></label></p>
    </div>
  )
}

export default Checkbox;
