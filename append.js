
const fs = require('fs');
const filePath = 'data.json'; 

// Read the existing JSON file
fs.readFile(filePath, 'utf8', (readErr, data) => {
  if (readErr) throw readErr;
 
    const jsonData = JSON.parse(data);

    // Modify the JavaScript object (e.g., add or update properties)
    jsonData.newProperty = 'I do not know what i am doing at this point'; 


    // Convert the modified JavaScript object back to JSON
    const updatedJsonString = JSON.stringify(jsonData, null, 2);

    // Write the updated JSON string back to the file
    fs.writeFile(filePath, updatedJsonString, 'utf8', (writeErr) => {
      if (writeErr) throw writeErr;
        console.log('it has been updated successfully.');
      });
    });

 
