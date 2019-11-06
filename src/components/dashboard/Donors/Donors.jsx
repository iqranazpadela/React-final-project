import React, { Component, Fragment } from 'react'
import Group from '../../../UIComponents/Group';
import { connect } from "react-redux"
import Loader from "../../loader/Loader"

class Donors extends Component {
  constructor() {
    super();
    this.state = {
      groupSelected: "",
      selectedGroupArray: null,
      showSpecificDonors: false,
      showAllDonors: true,
      selectedBloodGroups: "",
      RText: "person_add"
    }
    this.Obj = {
      "AB+": ["AB+", "AB-", "A+", "A-", "B+", "B-", "O+", "O-"],
      "AB-": ["O-", "B-", "A-", "AB-"],
      "A+": ["O-", "O+", "A-", "A+"],
      'A-': ["O-", "A-"],
      "B-": ["O-", "B-"],
      "B+": ["O-", "O+", "B+", "B-"],
      "O+": ["O+", "O-"],
      "O-": ["O-"],
    }

  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
    const group = this.Obj[value];
    const allDonors = this.props.available
    const Tem = []
    for(let i = 0; i < allDonors.length; i++){
      for(let j = 0; j < group.length; j++ ){
        if(allDonors[i].group === group[j]){
          Tem.push(allDonors[i])
        }
      }
    }
    this.setState({
      selectedGroupArray: Tem,
      showSpecificDonors: true,
      showAllDonors: false,
      selectedBloodGroups: this.Obj[value],
    })
  }

  showAll = () => {
    this.setState({
      groupSelected: "",
      selectedGroupArray: null,
      showSpecificDonors: false,
      showAllDonors: true,
      selectedBloodGroups: ""
    })
  }

  details = (id) => {
    this.props.history.push(`/Details/${id}`)
  }

  render() {
    return (<Fragment>{
      this.props.User ? (
        <Fragment>
          {
            this.props.pervData ? (
              <div className="container">
                <ul className="collection with-header">
                  <li className="collection-header"><h2>Find Donors</h2></li>
                  {this.props.available.length > 0 ? (
                    <Fragment>
                      <li className="collection-item">
                        <Group text="Select Blood Group" f="selectG" id="selectG" n="groupSelected" v={this.state.groupSelected} oc={this.onChange} />
                        {this.state.showSpecificDonors ?
                          (<div className="center">
                            <button className="btn-small red darken-1" onClick={this.showAll}>All Donors</button>
                          </div>) : null
                        }
                      </li>
                      {this.state.showAllDonors ? (
                        this.props.available.map((donor, index) => {
                          return (
                            <li key={index} className="collection-item avatar">
                              <i className="btn btn-floating material-icons circle" onClick={() => this.details(donor.id)}>assignment_ind</i>
                              <span className="title">{donor.firstName}</span>
                              <p className="grey-text">{donor.group}</p>
                             {/*  <button className="btn-floating transparent secondary-content" >
                                <i className="material-icons red-text text-darken-3" onClick={() => {console.log("request for blood")}}>{this.state.RText}</i>
                              </button> */}
                            </li>)
                        })) : (null)
                      }
                      {this.state.showSpecificDonors ? (
                        <Fragment>
                          <li className="collection-item red-text flow-text center">
                          {this.state.groupSelected} can recieve blood from {this.state.selectedBloodGroups.map((v, i) => {
                            return v + "  "
                          })}</li>
                          {this.state.selectedGroupArray.length > 0 ? (
                            this.state.selectedGroupArray.map((donor, index) => {
                              return (
                                <li key={index} className="collection-item avatar">
                                  <i className="btn btn-floating material-icons circle" onClick={() => this.details(donor.id)}>assignment_ind</i>
                                  <span className="title">{donor.firstName}</span>
                                  <p className="grey-text">{donor.group}</p>
                                  {/* <button className="btn-floating transparent secondary-content">
                                    <i className="material-icons red-text text-darken-3" onClick={() => {console.log("request for blood")}}>{this.state.RText}</i>
                                  </button> */}
                                </li>
                              )
                            })
                          ) : (
                              <div className="center grey-text flow-text">
                                Sorry, No donor available.
                              </div>)}
                        </Fragment>
                      ) : (null)
                      }
                    </Fragment>
      
                  ) : (
                      <div> <br /> <br />
                        <div className="center grey-text flow-text">
                          Sorry, No donor available.
                          </div>
                      </div>)
                  }
                </ul>
              </div>) : (<Loader />)
          } 
        </Fragment>
        ) : (null)
    }
    </Fragment>)
  }
}
const mapStateToProps = (state) => {
  const check = state.donor.allDonors
  const availableDonors = check ? (state.donor.allDonors.filter((donor) => {
    return donor.avail
  })) : (null)
  return {
    allDonors: state.donor.allDonors,
    available: availableDonors,
    pervData: state.donor.pervData,
    User: state.auth.currentUser
  }
}
export default connect(mapStateToProps, null)(Donors)