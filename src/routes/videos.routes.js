const { Router } = require('express');
const { getVideo, 
        createVideo,
        deleteVideo
      } = require('../controllers/videos.controllers');

const router = Router();

router.get('/video', getVideo);
router.post('./video', createVideo);
router.delete('./vide0/:id', deleteVideo);

module.exports = router;