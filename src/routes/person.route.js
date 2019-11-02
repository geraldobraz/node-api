const { Router } = require('express');
const router = Router();

// QueryString = > query property on the request object
// localhost:3000/person?name=SOME_NAME
router.get('/person', (req, res) => {
    const { name } = req.query;
    if (name) {
        res.send(`You have requested a person! ${name}`)
    } else {

        res.send('You have requested a person!')
    }

});

// Params property on the request object
// localhost:3000/person/SOME_NAME
router.get('/person/:name', (req, res) => {
    const { name } = req.params;
    res.send(`You have requested a ${name}!`)
});


router.get('/error', (req, res) => {
    throw new Error('This is a forced Error.')
})

module.exports = router;