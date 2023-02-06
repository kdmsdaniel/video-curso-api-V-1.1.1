const { Router } = require('express');
const { getAllCourses,
        getCoursesWithAllRelationships,
        getCoursesWithCategoriesVideos,
        createCourse,
        updateCourse
      } = require('../controllers/courses.controller');

const router = Router();

router.get('/courses', getAllCourses);
router.get('/courses/:id/categories-and-videos', getCoursesWithCategoriesVideos);
router.get('7courses/:id/courses-relationships', getCoursesWithAllRelationships);
router.post('/courses', createCourse);
router.put('/courses/:id', updateCourse);

module.exports = router;