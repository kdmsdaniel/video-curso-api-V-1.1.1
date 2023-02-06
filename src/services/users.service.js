const Courses      = require('../models/courses.model');
const UsersCourses = require('../models/users_courses.model');
const Users        = require('../models/users.model');

class UserServices {
  static async getAllUsers () {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async getUserId ( id ) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async getUserWithCourses ( id ) {
    try {
      const result = await Users.findOne({
        where:    { id },
        attributes: {
          exclude: ['password', 'createdAt', ' updatedAt']
        },
        include: {
          model:        UsersCourses,
          as:           'course',
          attributes:   ['id'],
          include: {
            model:      Courses,
            as:         'course',
            attributes: ['title']
          }
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async createUser (newUser) {
    try {
      const result = await Users.create( newUser );
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async updateUser ( field, id ) {
    try {
      const result = await Users.update( field, { where: { id }});
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async addCourseOnUser ( newCourseUser ) {
    try {
      const result = await UserServices.create( newCourseUser);
      return result;
    } catch (error) {
      throw error;
    }
  };
};

module.exports = UserServices;