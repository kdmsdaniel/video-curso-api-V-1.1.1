const { Router } = require('express');
const { getAllUsers,
        getUserId,
        getUserWithCourses,
        createUser,
        updateUser,
        addCourseOnUser
      } = require('../controllers/useres.controller');

const router = Router();

router.get('/users', getAllUsers);
router.get('/users', getUserId);
router.get('/users', getUserWithCourses);
router.post('/users', createUser);
router.put('/users', updateUser);
router.post('/users', addCourseOnUser);

module.exports = router; 