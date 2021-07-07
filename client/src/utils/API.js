import axios from "axios";

const BRANDAPI = {
    //Gets all brands does not work when trying to get name
    getBrands: function() {
        return axios.get("/api/brands/");
    },
      //Gets Brands by NameSort
    getBrandByName: function(name) {
        return axios.get('/api/brands/nameSort/' + name);
    },
    getBrandById: function(id) {
        return axios.get('/api/brands/'+ id)
    },
    //Deletes brand by name
    deleteBrand: function(id) {
        return axios.delete('api/brands/' + id);
    },
    //updates brand by id 
    updateBrand: function(id) {
        return axios.put('/api/brandindex/:id' + id)
    },
    //posting an object
    //do I need to replicate these functions from my routes // and also do i need to include 'brandData' as parameter?
    saveBrand: function(brandData) {
        return axios.post("/api/brands/sign-up", brandData);
    },
    getBrand:  function(id) {
        return axios.get("/api/brands/" + id)
      },
       //log in
    brandLogin: function(brandData) {
         console.log(brandData);
        return axios.post("/api/brands/login", brandData);
    },
       //log out
    brandLogout: function(brandData) {
        return axios.post("/api/brands/logout", brandData);
    }
};


// const BOUTIQUEAPI = {
//     getBoutiques : function(name) {
//         return axios.get("/api/boutiques" + name);
//       },
//       //Gets Brands by NameSort
//     getBoutiqueByName: function(name) {
//         return axios.get('/api/boutiques/nameSort' + name);
//     },
//     //Deletes brand by name
//     deleteBoutique: function(name) {
//         return axios.delete('api/boutiques/delete' + name);
//     },
//     //updates brand by id 
//     updateBoutique: function(id) {
//         return axios.put('/api/boutiqueindex/:id' + id)
//     },

//     //do I need to replicate these functions within my routes?
//     saveBoutique: function(boutiqueData) {
//         return axios.post("/api/boutiques/sign-up", boutiqueData);
//     },
//        //log in
//     boutiqueLogin: function(boutiqueData) {
//          console.log(boutiqueData);
//         return axios.post("/api/boutiques/login", boutiqueData);
//     },
//        //log out
//     boutiqueLogout: function() {
//         return axios.post("/api/boutiques/logout");
//     }
// };

export default BRANDAPI;
