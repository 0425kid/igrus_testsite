const express = require("express");
const userAgent = require('user-agent');
const router = express.Router();
const path = require("path")

let code_list={
  'IGRUS': '../views/problem.html',
  '284': '../views/284.html',
  'INE': '../views/ine.html',
  'YEOJUN8771': '../views/yeojun.html',
  'JONGIN': '../views/jongin.html',
  '7PUG': '../views/prize/part1.html',
  'H54A': '../views/prize/part2.html'
}

function checkCode(code) {
  console.log(code);
  try{
    return code_list[code]
  }
  catch(err){
    return err;
  }
}

router.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, "../views/testtest.html"));
})

router.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, "../views/home.html"));
});

router.get("/meta", (req,res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.post("/code", (req,res) => {
  const code = req.body.code.toUpperCase()
  try{
    res.sendFile(path.join(__dirname, checkCode(code)))
  }
  catch(err){
    res.send(
      `<script>
        alert('invalidate code : ${code}');
        location.href='/';
      </script>`
    );
  }
});


module.exports = router;