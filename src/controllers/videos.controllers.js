const VideosService = require('../services/videos.service');

const getVideo = async ( req, res )=> {
  try {
    const result = await VideosService.getVideo();
    res.json( result );
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const createVideo = async ( req, res )=> {
  try {
    const video = req.body;
    const result = await VideosService.createVideo( video);
    res.json( result );
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const deleteVideo = async ( req, res )=> {
  try {
    const { id } = req.params;
    const result = await VideosService.deleteVideo( id );
    res.json( result );
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = { getVideo, createVideo, deleteVideo };