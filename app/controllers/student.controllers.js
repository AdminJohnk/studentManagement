const {getList, getDetail, addStudent_, updateStudent_, deleteStudent_, } = require('../services/student.services');

const getStudentList = (req, res) => {
    const studentList = getList();
    if (!studentList) {
        return res.status(404).send('Not found');
    }
    res.status(200).send(studentList);
};

const getStudentById = (req, res) => {
    const {id} = req.params;
    const student = getDetail(id);
    if (!student) {
        return res.status(404).send('Student not found');
    }
    res.status(200).send(student);
}

const addStudent = async (req, res) => {
    const {fullName, age, Class} = req.body;
    const student = {
        fullName,
        age,
        Class,
    }
    const newStudent = await addStudent_(student);
    res.status(201).send(newStudent);
}

const updateStudent = (req, res) => {
    const {id} = req.params;
    const student = req.body;
    const newStudent = updateStudent_(id, student);

    if(!newStudent){
        return res.status(404).send('Student not found');
    }
    res.status(200).send(newStudent);
}

const deleteStudent = (req, res) => {
    const {id} = req.params;
    const result = deleteStudent_(id);
    
    if(!result){
        return res.status(404).send('Student not found');
    }
    res.status(200).send('Delete successfully');
}

module.exports = {
    getStudentList, getStudentById, addStudent, updateStudent, deleteStudent, 
}