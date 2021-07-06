//create a table to display information 
import React, { useState, useEffect} from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import ("./dataindex.css")

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
    <button {...props} className="search-button">
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
    <Container  className="background"  fluid>
        <Row>
            <Col size="md-6">
            <h3 className="top-header">Check Out These Brands!</h3>
               
                <form className="search-form">
            <input className="input" onChange={handleSearchChange} name="name" placeholder="Search By Name" />

            <FormBtn disabled={!(formatObject.name)} onClick={handleSearchSubmit}>Click Here to Search </FormBtn>
        </form>
            </Col>
            <Col size="md-6">
            <h2 className="header">Brand List</h2>
            {brands.length ? (
                <List className="brand-list">
                    {brands.map(brand => (
                        <ListItems className="brand-items" key={brand.id}>
                        <Link to={"/api/brands/:id" + brand.id}>
                                <strong className="brand-children">
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

