//create a table to display information 
import React, { useState, useEffect} from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";


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




// rework this after creating components 
return (
    <div>
        <form>
            <input onChange={handleSearchChange} name="name" placeholder="Search By Name" />

            <button disabled={!(formatObject.name)} onClick={handleSearchSubmit}>Click Here to Search </button>
        </form>

        <div>
            {brands.length? (
                <div>
                    {brands.map(brand => (
                        <Brands key={brand.name}>
                                <Link to={"/api/brands/" + brand.name}>
                                <strong>
                                    {brand.name}
                                </strong>

                                </Link>
                                <button onClick={() => deleteBrand(brand.id)} />
                        </Brands>
                    ))}
                </div>
            ) : (
                <h3>Your Search Yields Zero Results</h3>
            )}
        </div>
        </div>
);
}
export default Brands;

//need to solve problem of endless loop of search queries