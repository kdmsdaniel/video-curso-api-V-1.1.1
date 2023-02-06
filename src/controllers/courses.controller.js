const CoursesServices = require('../services/courses.service');

const getAllCourses = async ( req, res )=> {
  try {
    const result = await CoursesServices.getAllCourses();
    res.json( result );
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getCoursesWithCategoriesVideos = async ( req, res )=> {
  try {
    const { id } = req.paramas;
    const result = await CoursesServices.getCoursesWithCategoriesVideos( id );
    res.json( result );
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getCoursesWithAllRelationships = async ( req, res )=> {
  try {
    const { id } = req.paramas;
    const result = await CoursesServices.getCoursesWithAllRelationships( id );
    res.json( result );
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createCourse = async ( req, res )=> {
  try {
    const course = req.body;
    const result = await CoursesServices.createCourse( course );
    res.json( result );
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateCourse = async ( req, res )=> {
  try {
    const { id } = req.parmas;
    const { description } = req.body;
    const result = await CoursesServices.updateCourse( description, id );
    res.json( result );
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { getAllCourses,
                   getCoursesWithCategoriesVideos,
                   getCoursesWithAllRelationships,
                   createCourse,
                   updateCourse
                 };