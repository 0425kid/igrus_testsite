const express = require("express");
const router = express.Router();
const path = require("path")

const answer_dict={
  1: 'CJPJ',
  2: '309',
  3: '9GU8',
  4: '8OP9A',
  6: '8VTM2',
  7: '427581369'
}

function checkAnswer(parsed_answer, res){
  for (problem_num in parsed_answer){
    console.log(problem_num)
    console.log(parsed_answer[problem_num])
    if(answer_dict[problem_num] === parsed_answer[problem_num].toUpperCase()){
      res.sendFile(path.join(__dirname, `../views/corrects/${problem_num}.html`))
    } 
    else {
      res.send(
        `<script>
          alert('Wrong Answer!');
          location.href='/problem/${problem_num}';
        </script>`
      )
    }
  }
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

router.get("/check", (req,res) => {
  res.sendFile(path.join(__dirname, "../views/corrects/5.html"));
})

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.sendFile(path.join(__dirname, `../views/problems/${id}.html`))
})



router.post("/check", (req,res) => {
  const answer = req.body;
  const parsed_answer = parseAnswer(answer);
  checkAnswer(parsed_answer, res)
});



module.exports = router;