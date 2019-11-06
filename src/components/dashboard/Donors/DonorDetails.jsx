import React,{Fragment} from 'react'
import { connect } from "react-redux"
function DonorDetails(props) {
    const goBack = () => {
    props.history.push("/")
    }
    const { donor } = props
    return (
        <div className="container">
            <br />
            {props.currentUser ? (
                props.donor ? (
                <Fragment>
                    <div className="grey-text underline form_a" onClick={goBack}> &nbsp;  
                    <i className="material-icons">arrow_back</i></div>
                <div className="row">
                    <div className="col s12 m6 l6 offset-l3">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-title red-text">
                                    Donor Details
                                </div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>First Name:</th>
                                            <td>{donor.firstName}</td>
                                        </tr>
                                        <tr>
                                            <th>Sir Name:</th>
                                            <td>{donor.lastName}</td>
                                        </tr>
                                        <tr>
                                            <th>Age: </th>
                                            <td>{donor.age} </td>
                                        </tr>
                                        <tr>
                                            <th>Gender: </th>
                                            <td>{donor.gender}</td>
                                        </tr>
                                        <tr>
                                            <th>Blood Group: </th>
                                            <td>{donor.group}</td>
                                        </tr>
                                        <tr>
                                            <th>Email: </th>
                                            <td>{donor.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Phone Number: </th>
                                            <td>{donor.phoneNumber}</td>
                                        </tr>
                                        <tr>
                                            <th>City: </th>
                                            <td>{donor.city}</td>
                                        </tr>
                                        <tr>
                                            <th>Country: </th>
                                            <td>{donor.country}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                </Fragment>) : (<div className="center grey-text lighten-3">Loading. . . . </div>)
            ) : (null)}
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const specific = state.donor.allDonors.find((donor) => {
        return donor.id === id
    })
    return {
        donor: specific,
        currentUser: state.auth.currentUser,
    }
}
export default connect(mapStateToProps)(DonorDetails)
