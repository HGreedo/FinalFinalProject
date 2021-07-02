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


// function displayData() {
//     state = {
//         results: [],
//         allBrands: [],
//         search: ""
//     }

// // componentDidMount() {
// //     API.getBrands()
// //     .then((res) => { 
// //         this.setState({
// //         ...this.state, 
// //         results: res.data.results, 
// //         allBrands: res.data.allBrands
// //     }) 
// // })
// // };

// userSearchChange = (submit) => {
//     const userInput = submit.target.userInput;
// const filteredList = this.state.allBrands.filter((res) => { return res.name.last.toLowerCase().includes(allBrands.toLowerCase())
// })
// this.setState({
//     ...this.state,
//     res: filtered 
// })
// }

// handleSearchChange = (submit) => {
//     const display = submit.target.getAttribute("column")
//     let newResults = [];
//     if (column==="name") {
//         newResults = this.state.res.sort((a, b) => name > b.name ? 1: -1) } else {
//             newResults = this.state.res.sort((a, b) => a[column] > b[column] ? 1: -1)
//         }this.setState({
//             ...this.state,
//             res: newResults
//         })
//     };
// // render() {
// //     return (
// //         <div></div>
// //         <div className="brandTable"></div>
// //     )
// // }
// }



//pages/books file will help with all this