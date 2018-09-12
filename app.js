const express = require('express')
const app = express()

app.get('/',function (req, res){
  function strange_Root(){
    let input= req.query.q;
    let result_Sqrt_ = Math.sqrt(input);
    let result_Sqrt = result_Sqrt_.toFixed(3);
    let result_Pow = Math.pow(input, 2);
    let result_Sqrt_Str = result_Sqrt.toString();
    let result_Pow_Str = result_Pow.toString();
    if (result_Sqrt_Str.length >= result_Pow_Str.length) {
      for (let i = 0; i < result_Sqrt_Str.length; ++i) {
        for(let j = 0; j < result_Pow_Str.length; ++j) {
          if (result_Sqrt_Str[i] == result_Pow_Str[j]) {
            return "Strange Root is 'false.' " + "Result Pow: " + result_Pow_Str + ", " + "Result Sqrt: " + result_Sqrt_Str;
          }
        }
      }

    } else {
      for (let i = 0; i < result_Pow_Str.length; ++i) {
        for(let j = 0; j < result_Sqrt_Str.length; ++j) {
          if (result_Pow_Str[i] == result_Sqrt_Str[j]) {
            return "Strange Root is 'false.' " + "Result Pow: " + result_Pow_Str + ", " + "Result Sqrt: " + result_Sqrt_Str;
          }
        }
      }
    }
    return "Strange Root is 'true.' " + "Result Pow: " + result_Pow_Str + ", " + "Result Sqrt: " + result_Sqrt_Str;
  }

let result = strange_Root();
 res.send(result)
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))
