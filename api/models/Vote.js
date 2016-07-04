module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
    attributes: {
        restaurantId: {
            type: 'integer'
        },
        idUser: {
            type: 'integer'
        },

        poll : {
            model : 'Survey'
        }
    }
};
