const express = require('express');
const router = express.Router();
const { users } = require('../users');

// Path: /api/users

// GET
router.get('/', (req, res) => {
    console.log(req.body)
    res.status(200).json(users)
})

router.get('/:id', (req, res) => {
    console.log(req.body)

    const { id } = req.params;

    const user = users.find((user) => {
        if (user.id === id) return user 
    })

    res.status(200).json({success: true, data: user})
})

// POST
router.post('/', (req, res) => {
    console.log(req.body)

    newUser = req.body;
    newUser.id = Number(users[users.length - 1].id) + 1
    
    users.push(newUser);

    res.status(200).json({success: true, data: newUser})
})

// PUT
router.put('/:id', (req, res) => {
    console.log(req.body);

    const { id } = req.params;
    const index = users.findIndex((user) => user.id === id)

    let user = req.body;

    if(user.id !== id) user.id = id;

    users[index] = user;

    res.status(200).json({success: true, data: user})
})

// DELETE 
router.delete('/:id', (req, res) => {
    console.log(req.body);

    const { id } = req.params;
    const index = users.findIndex((user) => user.id === id)

    users.splice(index, 1)

    res.status(200).json({success: true, message: "User " + id + " deleted."})
})

module.exports = router;