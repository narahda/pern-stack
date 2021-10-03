const findRemoveSync = require('find-remove')

setInterval(() => {
    var result = findRemoveSync('./videos/ipcam', { age: { seconds: 30 }, extensions: '.ts' });
    console.log(result);
}, 5000);

//ok do i really need this bc this doesnt seem to be coded right
//or smthg along the way isnt coded right :( 