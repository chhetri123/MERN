const jwt = require('jsonwebtoken');

const userSchema= require("./../model/userSchema")
const authenticateToken=async (req, res, next) =>{
    try{
        const authHeader = req.headers['authorization'];
        console.log(authHeader)
      
        if (!authHeader) {
          return res.status(401).json({ message: 'No token provided' });
        }
      
        const token = authHeader.split(' ')[1]; 
      
        if (!token) {
          return res.status(401).json({ message: 'Token not found' });
        }
    
  
  
  const decoded=jwt.verify(token, process.env.jwt_secret)
   const user=await userSchema.findOne({
    _id:decoded.id
   })
  
  req.user = user; 
    next();
}catch(err){
    res.status(400).json({
        err
    })
}

}

module.exports = authenticateToken;
