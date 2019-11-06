import React, { Component } from 'react'

class Requests extends Component{
  render(){
    return (
      <div className="row">
        <div className="col s12 l6 offset-l3">
          <div className="card">
            
              <ul className="collection with-header myCollections">
                <li className="collection-header"><b className="red-text">Blood Requests</b></li>
                {/* Map chalega custom work */}
                <li className="collection-item myCollections">
                  <span><b>Misbah</b> has sent you a blood request.</span>
                  <button className="btn-small btn-floating transparent secondary-content" >
                    <i className="material-icons red-text text-darken-3" onClick={() => { console.log("request cancel") }}>highlight_off</i>
                  </button> 
                  <span className="secondary-content">&nbsp; &nbsp;</span>
                  <button className="btn-small btn-floating transparent secondary-content" >
                    <i className="material-icons red-text text-darken-3" onClick={() => { console.log("request accept") }}>check_circle_outline</i>
                  </button>
                </li>
                {/* ---------------- */}
                {/* <div className="center grey-text flow-text">No Requests.</div> */}
                <li className="collection-item myCollections"></li>
              </ul>
            </div>

        </div>
      </div>
  )
  }
  
}

export default Requests
