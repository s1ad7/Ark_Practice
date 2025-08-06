const {writeFileAsync, readFileAsync} = require('./File.js')
readFileAsync('C:/Users/Saad/Downloads/Ark_Practice/test.txt').then(function (result){console.log('Content: ', result)});
