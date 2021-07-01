//create a table to display information 
import React, { Component, seState, useEffect} from "react";
import axios from "axios";
import API from "../utils/API";
import userContext from "../utils/UserContext";
import Nav from "../components/Nav"

function displayData() {
    state = {
        results: [],
        allBrands: [],
        search: ""
    }

// componentDidMount() {
//     API.getBrands()
//     .then((res) => { 
//         this.setState({
//         ...this.state, 
//         results: res.data.results, 
//         allBrands: res.data.allBrands
//     }) 
// })
// };

userSearchChange = (submit) => {
    const userInput = submit.target.userInput;
const filteredList = this.state.allBrands.filter((res) => { return res.name.last.toLowerCase().includes(allBrands.toLowerCase())
})
this.setState({
    ...this.state,
    res: filtered 
})
}

handleSearchChange = (submit) => {
    const display = submit.target.getAttribute("column")
    let newResults = [];
    if (column==="name") {
        newResults = this.state.res.sort((a, b) => name > b.name ? 1: -1) } else {
            newResults = this.state.res.sort((a, b) => a[column] > b[column] ? 1: -1)
        }this.setState({
            ...this.state,
            res: newResults
        })
    };
// render() {
//     return (
//         <div></div>
//         <div className="brandTable"></div>
//     )
// }
}