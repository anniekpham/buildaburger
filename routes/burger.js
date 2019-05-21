const {Router} = require('express')
const router = Router()
const burgers = require('../model/burger')

router.get('/burgers', (req, res) => {
    burgers.all(burgers => {
        let noteaten = []
        let eaten = []
        burgers.forEach(burger => {
            if (burger.devoured === 0) {
                noteaten.push(burger)
            } else if (burger.devoured === 1) {
                eaten.push(burger)
            }
        })
        res.render('index', {
            burgers: noteaten.map(burger => burger),
            eatenburgers: eaten.map(eatenburger => eatenburger)
        })
    })
})

router.post('/burgers', (req, res) => {
    burgers.create(req.body.burger_name, () => {
        return res.redirect('/burgers')
    })
})

router.put('/burgers/:id', (req, res) => {
    burgers.update(req.params.id, () => {
        console.log('update burger')
    })
})
module.exports = router