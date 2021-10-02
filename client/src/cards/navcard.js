import React, {Component} from 'react';
import {Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import {information} from './info.js'


class InfoCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedinfo: null
        }
    }
    onInfoSelect(info) {
        this.setState({ selectedinfo: info});
    }

    render() {

        const infoboard = information.map((info) => {
            return (
                <Card style = {{maxWidth: '22rem'}}>
                    <Card key = {info.id}>
                        <CardImg variant = "top" src = {info.image} />
                        <CardBody >
                            <CardTitle>{info.name}</CardTitle>
                            <CardText>{info.description}</CardText>
                            <Button variant = "outline-danger" href = {info.url} >{info.timetravel}</Button>
                        </CardBody>
                    </Card>
                </Card>
            );
        });


        return (
            <div className = "container">
                <div className = "row" xs = {1} md = {2}>
                    {infoboard}
                </div>
            </div>
        );
    }

}
export default InfoCard