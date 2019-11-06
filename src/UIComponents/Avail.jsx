import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function Avail(props) {
    const {name, checked, oc} = props
  return (
        <div className="col s10 offset-s2 m6 l4 offset-l3">
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              name={name}
              onChange={oc}
              value="checkedA"
            />
          }
          label="Availability"
        />
    </div>
  )
}

export default Avail
