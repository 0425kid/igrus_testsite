const express = require("express");
const userAgent = require('user-agent');
const router = express.Router();
const path = require("path")

// function isMobile(user){
// 	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(user);
// }

router.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, "../views/home.html"));

  // const ua = userAgent.parse(req.headers['user-agent']);
  // console.log(ua);
  // console.log(ua.full);
  // if (/mobile|android/i.test(ua.full)) {
  //   res.send('You are accessing this page on a mobile device. Some features may not work as expected.');
  // } else {
  //   res.send('You are accessing this page on a desktop device.');
  // }
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