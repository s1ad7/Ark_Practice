const fs = require ('fs').promises;

async function readFileAsync(path){
    try{ 
    const data = await fs.readFile(path, 'utf-8')
    return data;
    }
    catch(error){
        return 'wrong file'
    }
}

// readFileAsync('C:/Users/Saad/Downloads/Ark_Practice/test.txt').then(function (result){console.log('Content: ', result)});
// .then(result => console.log('Content: ',result))

async function writeFileAsync(path, Content){
    try{
        await fs.writeFile(path, Content,  'utf-8')
        return 'file changed';
    }
    catch(error){
        return 'Couldn\'t Over Write the file'
    }
}

// writeFileAsync('C:/Users/Saad/Downloads/Ark_Practice/test.txt','test'.toUpperCase()).then(file => console.log(file))

module.exports = {
    readFileAsync,
    writeFileAsync,
}


// const greet = (name) => ('Hello ' + name)

// console.log(greet('saad'))

