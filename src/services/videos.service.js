const Videos = require('../models/videos.model');

class VideosService {
  static async getVideo () {
    try {
      const result = await Videos.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async createVideo ( video ) {
    try {
      const result = await Videos.create(video);
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async deleteVideo ( id ) {
    try {
      const result = await Videos.destroy( {where: { id }} );
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = VideosService;