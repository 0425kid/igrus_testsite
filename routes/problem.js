const express = require("express");
const router = express.Router();
const path = require("path")

let answer_dict={
  1: 'CJPJ',
  2: '309',
  3: '9GU8',
  4: '8OP9A'
}

function checkAnswer(problem_num, guess){
  if(answer_dict[problem_num] === guess) return true;
  else return false;
}

function parseAnswer(item) {
  let result={}
  const problem_num = item.number;

  let answer = '';
  for (let prop in item) {
    if (prop !== 'number') {
      answer += item[prop];
    }
  }
  result[problem_num] = answer;
  return result;
}



router.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, "../views/problem.html"));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.sendFile(path.join(__dirname, `../views/problems/${id}.html`))
})

router.get("/check", (req,res) => {
  res.send('SUCCESS')
})

router.post("/check", (req,res) => {
  const answer = req.body;
  const problem_num = answer.number;
  if(problem_num == 1) {
    console.log(parseAnswer(answer));
    let guess = answer.a.toUpperCase() + answer.b.toUpperCase() + answer.c.toUpperCase() + answer.d.toUpperCase();
    if(checkAnswer(1, guess)){
      res.sendFile(path.join(__dirname, `../views/corrects/${problem_num}.html`))
    }
    else {
      res.send(
        `<script>
          alert('Wrong Answer!');
          location.href='/problem/${problem_num}';
        </script>`
      );
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
  else if(problem_num == 3) {
    let guess = answer.a.toUpperCase() + answer.b.toUpperCase() + answer.c.toUpperCase() + answer.d.toUpperCase();
      if(guess === '9GU8'){
        res.sendFile(path.join(__dirname, `../views/corrects/${problem_num}.html`))
      }
      else{
        res.redirect(`/problem/${problem_num}`);
      }
    }
  else if(problem_num == 4) {
    let guess = answer.a.toUpperCase() + answer.b.toUpperCase() + answer.c.toUpperCase() + answer.d.toUpperCase() + answer.e.toUpperCase();
      if(guess === '8OP9A'){
        res.sendFile(path.join(__dirname, `../views/corrects/${problem_num}.html`))
      }
      else{
        res.redirect(`/problem/${problem_num}`);
      }
    }
});


module.exports = router;