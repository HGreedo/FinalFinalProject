import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import API from "../../utils/API";
// import DataIndex from "../DataIndex";
import ("./indexdetail.css")

function IndexDetail(props) {
    const [brand, setBrand ] = useState({})

    const {id} = useParams()
    useEffect(() => {
        API.getBrandById(id).then(res => setBrand(res.data)).catch(err => console.log(err));
    }, [id])

return (
    <div className="profile-card">
    <Container fluid>
        <Row>
            <Col size="md-12">
                
                    <h1 className="name">Welcome to {brand.name} by {brand.website}!</h1>
                
            </Col>
        </Row>
        <Row>
            <Col size="md-12" className="profile-website">
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
    </div>
);
}

export default IndexDetail;