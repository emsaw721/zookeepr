const path = require('path');
const router = require('express').Router(); 


//'/' brings us to root rout of server 
router.get('/', (req,res) => {
    //this get file only has to respond with an html file to display to browser.
    // so tell where to find file we want server to read and send back to client 
    res.sendFile(path.join(__dirname, '../../public/index.html'));
}); 

router.get('/animals', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html')); 
});


// any route not previously defined will fall under this request and will recieve homepage as response. 
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

module.exports = router; 