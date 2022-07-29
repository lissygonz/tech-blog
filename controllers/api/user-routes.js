const router = require('express').Router();
const { User } = require('../../models');

router.post('/', ({ body },res)=>{
  User.create(body).then( (err,result)=> {
        if(err) throw err;
        res.json(result);
   });
   
});

module.exports = router;