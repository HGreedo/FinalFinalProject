DROP DATABASE IF EXISTS user_store_db;

CREATE DATABASE user_store_db;
createMultipleUsers(client,
    [{
        name: "kevin",
        email: "kevin@kevin.com",
        password: "kevin123",
        id: "",
        summary:"a boot brand",
        location: "Portland"
    },
    {
        name: "molly",
        email: "molly@molly.com",
        password: "molly123",
        id: "",
        summary:"a skirt brand",
        location: "Salem"
    },
    {
        name: "tomas",
        email: "tomas@tomas.com",
        password: "tomas123",
        id: "",
        summary:"a t-shirt brand",
        location: "Klamath Falls"
    },
    {
        name: "Tori",
        email: "tori@tori.com",
        password: "tori123",
        id: "",
        summary:"I make bridal veils",
        location: "Bend"
    },
    {
        name: "Abdul",
        email: "abdul@abdul.com",
        password: "abdul123",
        id: "",
        summary:"a hat brand",
        location: "portland"
    }
    
]);

