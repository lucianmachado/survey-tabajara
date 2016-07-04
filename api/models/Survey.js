module.exports = {
  autoCreatedAt: false,
    attributes: {
        votes: {
            collection : 'Vote', //array de restaurantes
            via : 'poll'
        },
        surveyDate: {
            type: 'date' //data do dia atual
        },
        winner: {
            type: 'string' //nome do restaurante que ganhou
        },
        isActive: {
            type: 'boolean' //esta ativa ou nao
        },
        vote: {
            type: 'array' //array de votos
        },
        winner : {
          type : 'string'
        },


    }
};
