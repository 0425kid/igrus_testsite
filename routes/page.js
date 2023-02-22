const express = require("express");
const userAgent = require('user-agent');
const router = express.Router();
const path = require("path")

// function isMobile(user){
// 	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(user);
// }

router.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, "../views/testtest.html"));
})

router.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, "../views/home.html"));
});

router.post("/code", (req,res) => {
    const code = req.body.code.toUpperCase()
    
    if(code == 'IGRUS') {
        res.send(
            `<script>
              location.href='/problem';
            </script>`
          );
    }
    else if(code == '284') {
      res.sendFile(path.join(__dirname, "../views/284.html"));
    }
    else if(code == 'INE') {
      res.sendFile(path.join(__dirname, "../views/ine.html"));
    }
    else if(code == 'YEOJUN8771') {
      res.sendFile(path.join(__dirname, "../views/yeojun.html"));
    }
    else if(code == 'JONGIN') {
      res.sendFile(path.join(__dirname, "../views/jongin.html"));
    }
    else {
        res.send(
            `<script>
              alert('invalidate code : ${code}');
              location.href='/';
            </script>`
          );
    }
});


module.exports = router;