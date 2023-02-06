const Users        = require('./users.model');
const UsersCourses = require('./users_courses.model')
const Courses      = require('./courses.model');
const Categories   = require('./categories.model');
const Videos       = require('./videos.model');

const initModels = ()=> {

  Users.hasMany( UsersCourses, {as: 'course', foreignKey: 'id_user'} );
  UsersCourses.belongsTo( Users, {as: 'user', foreignKey: 'id_user'} );

  Courses.hasMany( UsersCourses, {as: 'user', foreignKey: 'id_course'} );
  UsersCourses.belongsTo( Courses, {as: 'course', foreignKey: 'id_course'} );

  Courses.hasMany( Categories, {as: 'category', foreignKey: 'id_course'} );
  Categories.belongsTo( Courses, {as: 'course', foreignKey: 'id_course'} );

  Courses.hasMany( Videos, {as: 'video', foreignKey: 'id_course'} );
  Videos.belongsTo( Courses, {as: 'course', foreignKey: 'id_course'} );

}

module.exports = initModels;