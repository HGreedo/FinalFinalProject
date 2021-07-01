import axios from "axios";

const BRANDAPI = {
    //Gets all brands
    getBrands : function(name) {
        return axios.get("/api/brands" + name);
    },
      //Gets Brands by NameSort
    getBrandByName: function(name) {
        return axios.get('/api/brands/nameSort' + name);
    },
    //Deletes brand by name
    deleteBrand: function(name) {
        return axios.delete('api/brands/delete' + name);
    },
    //updates brand by id 
    updateBrand: function(id) {
        return axios.put('/api/brandindex/:id' + id)
    },

    //do I need to replicate these functions from my routes // and also do i need to include 'brandData' as parameter?
    saveBrand: function(brandData) {
        return axios.post("/api/brands/sign-up", brandData);
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

const BOUTIQUEAPI = {
    getBoutiques : function(name) {
        return axios.get("/api/boutiques" + name);
      },
      //Gets Brands by NameSort
    getBoutiqueByName: function(name) {
        return axios.get('/api/boutiques/nameSort' + name);
    },
    //Deletes brand by name
    deleteBoutique: function(name) {
        return axios.delete('api/boutiques/delete' + name);
    },
    //updates brand by id 
    updateBoutique: function(id) {
        return axios.put('/api/boutiqueindex/:id' + id)
    },

    //do I need to replicate these functions within my routes?
    saveBoutique: function(boutiqueData) {
        return axios.post("/api/boutiques/sign-up", boutiqueData);
    },
       //log in
    boutiqueLogin: function(userData) {
         console.log(userData);
        return axios.post("/api/boutiques/login", boutiqueData);
    },
       //log out
    boutiqueLogout: function() {
        return axios.post("/api/boutiques/logout");
    }
};

export default BOUTIQUEAPI;

export default BRANDAPI;
  