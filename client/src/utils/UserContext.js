import React from 'react';

const userContext = React.createContext({
    loggedin: false,
    name: "",
    id: "",
    password: "",
    onUpdate: () => undefined

});

export default userContext;