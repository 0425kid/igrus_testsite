const express = require("express");
const router = express.Router();
const path = require("path")

router.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, "../views/problem.html"));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.sendFile(path.join(__dirname, `../views/problems/${id}.html`))
})

router.post("/check", (req,res) => {
  const answer = req.body;
  const problem_num = answer.number;
  if(problem_num == 1) {
    let guess = answer.a.toUpperCase() + answer.b.toUpperCase() + answer.c.toUpperCase() + answer.d.toUpperCase();
      if(guess === 'CJPJ'){
        res.sendFile(path.join(__dirname, `../views/corrects/${problem_num}.html`))
      }
      else{
        res.redirect(`/problem/${problem_num}`);
      }
    }
  else if(problem_num == 2) {
    let guess = answer.a + answer.b + answer.c;
      if(guess === '309'){
        res.sendFile(path.join(__dirname, `../views/corrects/${problem_num}.html`))
      }
      else{
        res.redirect(`/problem/${problem_num}`);
      }
    }
});


module.exports = router;