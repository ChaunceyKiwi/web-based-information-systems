"use strict";

module.exports = function(sequelize, DataType) {
    var Session = sequelize.define('Session',
        {
            sessionKey: {
                type: DataType.STRING,
                field: 'sessionKey'
            }
        }, {
            classMethods: {
                associate: function(models) {
                    Session.belongsTo(models.User, {
                        through: 'sessionUser'
                    });
                }
            }
        }
    );

    return Session;
};
