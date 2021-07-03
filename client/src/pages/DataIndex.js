//create a table to display information 
import React, { useState, useEffect} from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/jumbotron/Jumbotron";

function Brands() {
    const [brands, setBrands] = useState([])
    const [formatObject, setFormObject] = useState({})

    useEffect(() => {
        loadBrands()
    }, [])


function loadBrands() {
    API.getBrands().then(res => setBrands(res.data)).catch(err => console.log(err));
};
function deleteBrand(id) {
    API.deleteBrand(id).then(res => loadBrands()).catch(err => console.log(err))
};
function handleSearchChange(submit) {
    const { name, value } = submit.target;
    setFormObject({...formatObject, [name]: value})
};

function handleSearchSubmit(submit) {
    submit.preventDefault();
    if(formatObject.name && formatObject.email) {
        API.saveBrand({
            name: formatObject.name,
            email: formatObject.email,
            description: formatObject.description
        })
        .then(res => loadBrands()).catch(err => console.log(err));
    }
};

function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
  };
  function DeleteBtn(props) {
    return (
      <span className="delete-btn" {...props} role="button" tabIndex="0">
        ✗
      </span>
    );
  }
  
  function List({ children }) {
    return (
        <div className="list-container">
            <ul className="list-group">{children}</ul>
        </div>
    );
};
 function ListItems({children}) {
    return <li className="list-group-items">{children}</li>
};

return (
    <Container fluid>
        <Row>
            <Col size="md-6">
                <Jumbotron>
                    <h1>Check Out These Brands!</h1>
                </Jumbotron>
                <form>
            <input onChange={handleSearchChange} name="name" placeholder="Search By Name" />

            <FormBtn disabled={!(formatObject.name)} onClick={handleSearchSubmit}>Click Here to Search </FormBtn>
        </form>
            </Col>
            <Col size="md-6 sm-12">
            <Jumbotron><h1>Brand List</h1></Jumbotron>
            {brands.length ? (
                <List>
                    {brands.map(brand => (
                        <ListItems key={brands.name}>
                        <Link to={"/api/brands/nameSort/" +brands.name}>
                                <strong>
                                    {brand.name} by {brand.website}
                                </strong>
                        </Link>
                        <DeleteBtn onClick={() => deleteBrand(brand.id)} />
                        </ListItems>
                    ))}
                </List>
            ) : ( 
                <h3>No Brands Matched Your Search</h3>
            )}
            </Col>
        </Row>
    </Container>
    );
}
export default Brands;

