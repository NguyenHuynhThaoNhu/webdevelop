const fs = require("fs");
const user = {
    id: 19521970,
    name: "Nguyễn Huỳnh Thảo Như",
    age: 21,
};
const data = JSON.stringify(user);
fs.writeFile("user.json", data, (err) =>{
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});