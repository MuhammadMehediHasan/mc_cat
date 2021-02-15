const express = require("express");
const minecraft_server = require("minecraft-server-util");


const router = express.Router();

router.get("/:ip", (req, res, next) => {
    const { ip } = req.params;

    minecraft_server.status(ip).then(data => {
        res.render("server", {...data});
        // console.log(data)
    })
    .catch(err => {
        
        res.render("404.ejs");
    });
})



module.exports = router;