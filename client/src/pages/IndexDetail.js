import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/jumbotron/Jumbotron";
import API from "../utils/API";

function IndexDetail(props) {
    const [brand, setBrand ] = useState({})

    const {name} = useParams()
    useEffect(() => {
        API.getBrandByName(name).then(res => setBrand(res.data)).catch(err => console.log(err));
    }, [name])

return (
    <Container fluid>
        <Row>
            <Col size="md-12">
                <Jumbotron>
                    <h1>Welcome to {brand.name} by {brand.website}!</h1>
                </Jumbotron>
            </Col>
        </Row>
        <Row>
            <Col size="md-12 md-offset-1">
                <description>
                    <h3>Company Bio</h3>
                    {brand.description}
                </description>
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
                <Link to="/api/brands">Back to Index</Link>
            </Col>
        </Row>
    </Container>
);
}

export default IndexDetail;