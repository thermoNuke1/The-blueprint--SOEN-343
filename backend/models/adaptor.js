// models/toJSONTransform.js

const toJSONTransform = (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  };
  
  module.exports = toJSONTransform;
  

