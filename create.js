const fs = require('fs');

const data = {
  name: 'Amara Den',
  age: 24,
  email: 'marachukwu08@gmail.com',
  phone: '08101650031',
};

const filePath = 'data.json';

fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
  if (err) throw err
  
    console.log('You have done well. Rachael is a good teach');
  }
);