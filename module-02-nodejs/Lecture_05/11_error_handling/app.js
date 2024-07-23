import fs from "fs";
import path from "path";
//try catch
/*
try{
    //code
}catch(err){
    //handle
}
*/
const something = () => {
  try {
    const a = 10;
    const b = 20;
    const sum = a + b;
    if (sum === 30) throw new Error("30 is not correct answer");
  } catch (err) {
    console.log(err.message);
    // console.log(err, "here is error");
  }
};

//callbacks
const handleCallbackError = () => {
  fs.readFile(path.join(__dirname, "xyz", "something.txt"), (err, res) => {
    if (err)
      //handle here
      console.log(res, "this is response");
  });
};

//.then ( promises )
const someFunc = async () => {
  const a = 10;
  const b = 20;
  const sum = a + b;

  Promise.resolve(sum)
    .then((res) => {
      if (res === 30) throw new Error("30 is not correct");
    })
    .catch((err) => {
      console.log(err);
    });
};

/*
asyncWrapper => //result //throw
globalErrorHandler => //handle 
*/
