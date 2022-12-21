const studentList = [
    {
        id: 1,
        fullName: 'Trần Chí Kiên',
        age: 20,
        Class: 12,
    },
    {
        id: 2,
        fullName: 'Nguyễn Hoàng Hải',
        age: 18,
        Class: 14,
    },
    {
        id: 3,
        fullName: 'Trần Phước nhân',
        age: 25,
        Class: 16,
    },
]

const {Student} = require('../model');

const getList = () => {
    if(studentList){
        return studentList;
    }
    return false;
}

const getDetail = (id) => {
    console.log(id);
    const student = studentList.find(student => student.id === Number(id));
    if(student){
        return student;
    }
    return false;
}

const addStudent_ = async (student) => {
    // const newStudent = {id: studentList.length + 1, ...student};
    // studentList.push(newStudent);

    const newStudent = await Student.create(student);
    return newStudent;
}

const updateStudent_ = (id, student) => {
    const index = studentList.findIndex(student => student.id === Number(id));
    if (index === -1) {
        return false;
    }
    const newStudent = {id: id, ...student};
    studentList[index] = newStudent;
    return newStudent;
}

const deleteStudent_ = (id) => {
    const index = studentList.findIndex(student => student.id === Number(id));
    if (index === -1) {
        return false;
    }
    studentList.splice(index, 1);
    return true;
}

module.exports = {
    getList, getDetail, addStudent_, updateStudent_, deleteStudent_, 
}


















