import React from 'react';

const userContext = React.createContext({
    loggedin: false,
    name: "",
    id: "",
    onUpdate: () => undefined

});

export default userContext;