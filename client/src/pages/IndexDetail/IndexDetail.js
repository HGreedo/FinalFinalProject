import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import ("./indexdetail.css")



function IndexDetail(props) {
    const [brand, setBrand ] = useState({})

    const {id} = useParams(props)
    useEffect(() => {
        API.getBrandById(id).then(res => setBrand(res.brand.data)).catch(err => console.log(err));
    }, [id])

return (
    <div className="profile-card">
    <Container fluid>
        <Row>
            <Col size="md-12">
                {brand}
                    <h1 className="name">Welcome to {this.brand.name} by {this.brand.website}!</h1>
                
            </Col>
        </Row>
        <Row>
            <Col size="md-12" className="profile-website">
                <description>
                    <h3>Company Bio</h3>
                    {this.brand.description}
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