module.exports = {

  attributes: {
    id : {
      type : "integer",
      unique : true,
      autoIncrement: true
    },
    name : {
      type : 'string'
    },
    lastWin : {
      type : 'date'
    }
  }
};
