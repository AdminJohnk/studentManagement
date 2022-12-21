const {DataTypes} = require('sequelize')
const createStudentModel = (sequelize) => {
    sequelize.define('Student', {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Class: {
            type: DataTypes.STRING,
            allowNull: false
        },

    },
        {
            tableName: 'students', // tên bảng (có thể có hoặc không)
            timestamps: true, // có ngày tạo và ngày update
        }
    )
}

module.exports = createStudentModel
