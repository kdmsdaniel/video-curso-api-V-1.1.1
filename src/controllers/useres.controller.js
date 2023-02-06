const UserServices = require('../services/users.service');

const getAllUsers = async ( req, res )=> {
  try {
    const result = await UserServices.getAllUsers();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserId = async ( req, res )=> {
  try {
    const { id } = req.params;
    const result = await UserServices.getUserId( id );
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserWithCourses = async ( req, res )=> {
  try {
    const { id } = req.params;
    const result = await UserServices.getUserWithCourses( id );
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createUser = async ( req, res )=> {
  try {
    const newUser = req.body;
    const result = await UserServices.createUser( newUser );
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateUser = async ( req, res )=> {
  try {
    const { id } = req.params;
    const { firstName, lastName, password } = req.body;
    const field  = { firstName, lastName, password };
    const result = await UserServices.updateUser( field, id );
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const addCourseOnUser = async ( req, res )=> {
  try {
    const { id }= req.params;
    const { idCourse } = req.body;
    const newCourseUser = {idUser: id, idCourse};
    const result = await UserServices.addCourseOnUser(newCourseUser);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { getAllUsers, getUserId, getUserWithCourses, createUser, updateUser, addCourseOnUser };