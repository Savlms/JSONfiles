const fs = require('fs'); 
const filePath = 'data.json';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
});


