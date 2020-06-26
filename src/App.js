// App.js
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import MyModalComponent from './components/bootstrap-model.component';

class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      show: false,
      title: '',
      body: '',
      data: []
    };
  }

  handleShow = () => {

    const myObject = [
      {
        id: 1,
        name: 'Victor Rippin',
        address: '4032 Cordia Streets'
      }, {
        id: 2,
        name: 'Jamey Zieme',
        address: '3733 Tremblay Throughway'
      }, {
        id: 3,
        name: 'Madelyn Ruecker Sr.',
        address: '44487 Reba Drive'
      },
    ];

    this.setState({
      show: true,
      title: 'Group People',
      body: 'Hi, find my group details',
      data: myObject
    });
  };

  handleClose = (fromModal) => {
    alert(fromModal.msg);

    this.setState({
      show: false
    });
  };


  render() {



    return (
      <div>
        <Button variant="primary" onClick={this.handleShow} >
          Launch Bootstrap Modal
        </Button>

        <MyModalComponent
          show={this.state.show}
          title={this.state.title}
          body={this.state.body}
          data={this.state.data}
          onClick={this.handleClose}
          onHide={this.handleClose} />

      </div>
    );
  }

}

export default App;
