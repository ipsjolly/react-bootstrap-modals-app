// src/components/bootstrap-carousel.component.js
import React, { Component } from "react";

import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyModalComponent extends Component {

    render() {

        return (
            <div>
                <Modal show={this.props.show} onHide={() => this.props.onHide({ msg: 'Cross Icon Clicked!' })}>

                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.props.title}
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {this.props.body}

                        <ul>
                            {this.props.data.map(item => (
                                <li key={item.id}>Name: {item.name} | Address: {item.address}</li>
                            ))}
                        </ul>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.props.onClick({ msg: 'Modal Closed!' })} >Close</Button>
                        <Button variant="primary" onClick={() => this.props.onClick({ msg: 'Modal Submitted!' })}  >Submit</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        )
    };
}

export default MyModalComponent;