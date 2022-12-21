const express = require('express');
const studentRouter = express.Router();
const {getStudentList, getStudentById, addStudent, updateStudent, deleteStudent} = require('../controllers/student.controllers');
const {logFeature} = require('../middleware/logger/log-feature');
const { checkEmpty, checkClass } = require('../middleware/validations/student.validation');


// Lấy danh sách học sinh
studentRouter.get('/', logFeature, getStudentList)

// Lấy thông tin chi tiết học sinh
studentRouter.get('/:id', getStudentById)

// Thêm học sinh
studentRouter.post('/', checkEmpty, checkClass ,addStudent)

// Cập nhật học sinh
studentRouter.put('/:id', updateStudent)

// Xóa học sinh
studentRouter.delete('/:id', deleteStudent)

module.exports = studentRouter;












