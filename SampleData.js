import { default as React, default as replaceIdInPath } from "react";
import routes from "../../../src/assets/config/routes";

class SampleData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "arul",
      lastname: "ytt",
      empid: 5,
      designaton: "UI",
      payrate: "20000",
      address: "frgere"
    };

     this.renderSampleDataRows = this.renderSampleDataRows.bind(this);
   
  }


  renderSampleDataRows(item) {
    var viewUrl = /* "http://localhost:8080/employeeprofile";  */  replaceIdInPath(routes.employeeprofile.view, item.id);  

    return (
      <tr key={item.id}>
        <td style={{ textAlign: "center" }}>
     
        </td>
        <td>
          <div className="tabledatavalue">
            {item.firstName ? item.firstName : "-"}
          </div>
        </td>
        <td>
          <div className="tabledatavalue">
            {item.lastName ? item.lastName : "-"}
          </div>
        </td>
        <td className="tabledatavalue">
          {item.empId ? item.empId : "-"}
        </td>
        <td className="tabledatavalue">
          {item.designaton ? item.designaton : "-"}
        </td>
        <td className="tabledatavalue">
          {item.payrate ? item.payrate : "-"}
        </td>
        <td className="tabledatavalue">
          {item.address ? item.address : "-"}
        </td>
      </tr>
    );
  }

  search() {
    this.setState(
      {
        pageNumber: 1,
      },
      () => {
        this.filterEmailLog();
      }
    );
  }




/* Create file */


createList() {
  fetch("http://localhost:8080/employeeprofile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(this.state.firstname, this.state.lastname, this.state.empid, this.state.designaton, this.state.payrate, this.state.address)
  }).then(
    this.setState({
      firstname: "arul",
      lastname: "ytt",
      empid: 5,
      designaton: "UI",
      payrate: "20000",
      address: "frgere"

     /*  singledata: {
        title: "",
        author: ""
      } */
    })
  );
}


  onValueChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
/* 
  filterEmailLog() {
    var filter = {
      pageNumber: this.state.pageNumber,
      pageSize: this.state.pageSize,
      error: this.state.error,
      subject: this.state.subject,
      sent: this.state.sent,
      emailSubject: this.state.emailSubject,
      timeSheetId: this.state.timeSheetId,
      dateCreated: this.state.dateCreated,
    };
    this.props.searchEmailLog();
  }
 */
  render() {
    var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('SampleData'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

    return (
<div className="container">
     <div className= "table">
          <table className = "tableheading">
               <tr>
               <th className="tableheading">FIRSTNAME</th>
                      <th className="tableheading">LASTNAME</th>
                      <th className="tableheading">EMAIL ID</th>
                      <th className="tableheading">DESIGNATION</th>
                      <th className="tableheading">PAYRATE</th>
                      <th className="tableheading">ADDRESS</th>
               </tr>
          </table>
     </div>
</div>


     /*  <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header" data-background-color="blue">
                <h4 className="title">EMPLOYEE TABLE</h4>
              </div>
              <div className="card-content table-responsive table-section">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th className="tableheading">FIRSTNAME</th>
                      <th className="tableheading">LASTNAME</th>
                      <th className="tableheading">EMAIL ID</th>
                      <th className="tableheading">DESIGNATION</th>
                      <th className="tableheading">PAYRATE</th>
                      <th className="tableheading">ADDRESS</th>
                    </tr>
                  </thead> */
                  /*  <tbody>
                                        {(this.props.emailLogList && this.props.emailLogList.length > 0) ?
                                            this.props.emailLogList.map((item) => {
                                                return this.renderEmailLogRows(item);
                                            }) : <tr><td colSpan="8" style={{ textAlign: "center" }}>NO DATA</td></tr>

                                        }

                                    </tbody> */
             /*    </table>
              </div>
            </div>
          </div>
        </div>
      </div> */
    );
  }
}

export default SampleData;
