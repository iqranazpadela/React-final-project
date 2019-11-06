import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
export default function Group(props) {
  const {text, v, oc, n, id, f } = props
  return (<div className="row">
            <div className="col s10 offset-s2 m6 l5 offset-l3">
            <InputLabel htmlFor={f}> { text } &nbsp; </InputLabel>
          <Select
            value= {v}
            onChange={oc}
            inputProps={{
              name: n,
              id: id,
            }}
          >
            <MenuItem value="AB+"> AB+ </MenuItem>
            <MenuItem value="AB-">AB-</MenuItem>
            <MenuItem value="A+">A+</MenuItem>
            <MenuItem value="A-">A-</MenuItem>
            <MenuItem value="B+">B+</MenuItem>
            <MenuItem value="B-">B-</MenuItem>
            <MenuItem value="O+">O+</MenuItem>
            <MenuItem value="O-">O-</MenuItem>
          </Select>
          </div>
          </div>
  )
}
