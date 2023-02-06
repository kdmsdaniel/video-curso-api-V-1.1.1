const Courses = require("../models/courses.model");
const Categories = require("../models/categories.model");
const Users = require("../models/users.model");
const Videos = require("../models/videos.model");
const UsersCourses = require("../models/users_courses.model");

class CoursesServices {
  static async getAllCourses() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getCoursesWithCategoriesVideos(id) {
    try {
      const result = await Courses.findOne(
        {
          where: { id },
          include: [
            {
              model: Categories,
              as: "category",
              attributes: ["name"],
            },
          ],
        },
        {
          model: Videos,
          as: "video",
          attributes: ["title", "url"],
        }
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getCoursesWithAllRelationships(id) {
    try {
      const result = await Courses.findOne({
        where: { id },
        include: [
          {
            model: Categories,
            as: "category",
          },
          {
            model: Videos,
            as:'video'
          },
          {
            model: UsersCourses,
            as:'users',
            attributes: ['id'],
            include: {
              model: Users,
              as: 'user',
              attributes: ['firstName', 'lastName', 'password']
            }
          }
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async createCourse(course) {
    try {
      const result = await Courses.create(course);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateCourse(description, id) {
    try {
      const result = await Courses.update({ description }, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CoursesServices;
