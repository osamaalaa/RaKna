const Joi = require('@hapi/joi');


let result ;

const requestStructure = Joi.object().keys({

  username: Joi.string().alphanum().min(1).max(100).required(),
  message: Joi.string().min(3).max(500).required()

});

function validaterequestStructure(req, res, next) {
  result = Joi.validate(req.body, requestStructure);
  if (result.error == null) {
    const {name , message,longitude,latitude} = req.body;
    const userMessage ={
      name,
      message,
      latitude,
      longitude,
      date : new Date()
    };

     next();
  } else {
    res.status(400).json({
      "error": "invalid  !"
    });
  }
}



module.exports = { validaterequestStructure: validaterequestStructure};
