// models/toJSONTransform.js

const toJSONTransform = ( ) => {
    this.id = this._id.toString();
    delete this._id;
    delete this.__v;
  };
  
module.exports = toJSONTransform;
  

