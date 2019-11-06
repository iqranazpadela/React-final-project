import React from 'react'
import { connect } from "react-redux"

const UserProfile = (props) => {
      const currentDonor = props.allDonors.find((donor) => {
        return donor.userId === props.userId
      })
    return (
      props.user ? (<div className="container">
      <br/>
      <br/>
      <div className="row">
        <div className="col l4 s12 offset-l1">
          <div className="card">
              <div className="card-content red lighten-5">
              <table>
                <tbody>
                  <tr>
                    <th>
                      Status:
                    </th>
                    <td>
                      {props.status.toUpperCase()}
                    </td>
                  </tr>
                  {props.status === "donor" ? (<tr>
                    <th>
                    Availability:
                    </th>
                    <td>
                      {currentDonor ? (currentDonor.avail ? ("YES") : ("No") ) : ("NONE")}
                    </td>
                  </tr>) : (null)}
                </tbody>
              </table>
              </div>
          </div>
        </div>
        <div className="col s12 m10 l6">
          <div className="card">
            <div className="card-content red lighten-5">
              <div className="card-title red-text text-darken-4">
                User Profile
              </div>
              { //1 donor
                props.status === "donor" ? (
                currentDonor ? (
                  <table>
                <tbody>
                  <tr>
                    <th>
                      Fisrt Name
                    </th>
                    <td>
                      {currentDonor.firstName}
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Sir Name
                    </th>
                    <td>
                      {currentDonor.lastName}
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Age
                    </th>
                    <td>
                      {currentDonor.age}
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Gender
                    </th>
                    <td>
                      {currentDonor.gender}
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Blood Group
                    </th>
                    <td>
                      {currentDonor.group}
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Email
                    </th>
                    <td>
                      {currentDonor.email}
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Phone Number
                    </th>
                    <td>
                      {currentDonor.phoneNumber}
                    </td>
                  </tr>
                  <tr>
                    <th>
                      City
                    </th>
                    <td>
                      {currentDonor.city}
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Country
                    </th>
                    <td>
                      {currentDonor.country}
                    </td>
                  </tr>
                </tbody>
              </table>
                ) : ( 
                <table>
                  <tbody>
                    <tr>
                      <th>
                        Email
                      </th>
                      <td>
                        {props.userEmail}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Please Register Yourself
                      </th>
                      <td>
                        <button className="btn-small grey" onClick={() => {
                          props.history.push("/RegisterDonor")
                        }}>Register</button>
                      </td>
                    </tr>
                  </tbody>
                </table>)) : (null)}
              {//2 Procurer
                props.status === "procurer" ? (
                <table>
                  <tbody>
                    <tr>
                      <th>
                        Email
                      </th>
                      <td>
                        {props.userEmail}
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (null)}
            </div>
          </div>
        </div>
      </div>
    </div>) : (null)
    )
  }
const mapStateToProps = (state) => {
  const userId = state.auth.currentUser ? state.auth.currentUser.uid : null
  const userEmail = state.auth.currentUser ? state.auth.currentUser.email : null
  return {
    user: state.auth.currentUser,
    status: state.auth.status,
    userId,
    allDonors: state.donor.allDonors,
    userEmail,
  }
}
export default connect(mapStateToProps)(UserProfile)
