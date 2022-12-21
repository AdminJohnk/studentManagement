const checkEmpty = (req, res, next) => {
    const { fullName, age, Class } = req.body;
    if (!fullName || !age || !Class) {
        return res.status(500).send('Không được để trống các trường thông tin')
    }
    next();
}
const checkClass = (req, res, next) => {
    const { Class } = req.body;
    if(Number(Class)>12 || Number(Class)<1){
        return res.status(500).send('Lớp học không hợp lệ')
    }
    next();
}
 

module.exports = {
    checkEmpty, checkClass, 
}

















