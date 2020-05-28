const express = require('express');
const router = express.Router();

router.get('/time', (req, res) => {
    const date = new Date();
    console.log("Date : " + date);
    res.json(
        {
            hour: date.getHours(),
            minutes: date.getMinutes()  
        }
    )
});

module.exports=router;
