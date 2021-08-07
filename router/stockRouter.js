const express = require('express')
const router = express.Router()
const Stock = require('../models/stockModels')


router.get('/', async (req, res) => {
    // console.log('get request')
    try {
        const stock = await Stock.find()
        res.json(stock)
    } catch (err) {
        res.send('Error' + err)
    }
});


// ======================FIND BY ID=======================
router.get('/:id', async (req, res) => {
    console.log('get request')
    try {
        const stocks = await Stock.findById(req.params.id)
        res.json(stocks)
    } catch (err) {
        res.send('Error' + err)
    }
});



// ==========================DELETE===================================
router.delete('/:id', async (req, res) => {
    console.log('deleted')
    try {
        const stocks = await Stock.findById(req.params.id)
        stocks.party_name = req.body.party_name,
            stocks.opening_balance = req.body.opening_balance
        // stocks.phone = req.body.phone,
        // stocks.work = req.body.work,
        // stocks.password = req.body.password,
        // stocks.balance = req.body.balance
        const a1 = await stocks.remove()
        res.json(a1)
    } catch (err) {
        res.send('Error' + err)
    }
});



// ===================UPDATE=====================
router.patch('/:id', async (req, res) => {
    console.log(req.body)
    try {
        const stocks = await Stock.findById(req.params.id)
        stocks.party_name = req.body.party_name,
            stocks.opening_balance = req.body.opening_balance,
           { "$push" :{ "table" :{
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            }}}
        const a1 = await stocks.save()
        res.json(a1)
    } catch (err) {
        res.send('Error' + err)
    }
});

// stock.update(
//     { "_id": "2142236566989568" },
//     { "$push": { "table": { name: "demo_name", email: "demo@gmail.com", "phone": "123451"  } } }
// )


// =============ADD================
router.post('/', async (req, res) => {
    console.log(req.body);
    const pData = new Stock({
        party_name: req.body.party_name,
        opening_balance: req.body.opening_balance,
        table :[{
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        }]
        // phone: req.body.phone,
        // work: req.body.work,
        // password: req.body.password,
        // balance: req.body.balance,
    })

    try {
        const a1 = await pData.save()
        res.json(a1)
        console.log(a1);
    } catch (err) {
        res.send('Error')
    }
})



router.post('/table', async (req, res) => {
    console.log('ans');
    const pData = new Stock({
       c

    })
    try {
        const a1 = await pData.save()
        res.json(a1)
        console.log(a1);
    } catch (err) {
        console.log(err);
        res.send('Error')
    }
})

module.exports = router