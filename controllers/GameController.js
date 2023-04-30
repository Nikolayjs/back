import GameModel from '../models/Game.js';

export const getAll = async (req, res) => {
  try {
    const games = await GameModel.find().exec();
    res.json(games);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось загрузить список игр',
    });
  }
};

export const getAllWithSearch = async (req, res) => {
  const searchTerm = req.query.searchTerm;
  console.log(req.query);
  try {
    if (searchTerm) {
      const games = await GameModel.find({
        title: { $regex: searchTerm, $options: 'i' },
      }).exec();
      res.json(games);
    } else {
      const games = await GameModel.find().exec();
      res.json(games);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось загрузить список игр',
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const gameId = req.params.id;
    GameModel.findOneAndUpdate(
      {
        _id: gameId,
      },
      {
        returnDocument: 'after',
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            message: 'Не удалось загрузить игру',
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: 'Игра не найдена',
          });
        }
        res.json(doc);
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось загрузить игру',
    });
  }
};

export const remove = async (req, res) => {
  try {
    const gameId = req.params.id;
    GameModel.findByIdAndDelete(
      {
        _id: gameId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            message: 'Не удалось удалить игру',
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: 'Игра не найдена',
          });
        }
        res.status({
          success: true,
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось удалить игру',
    });
  }
};
export const create = async (req, res) => {
  try {
    const doc = new GameModel({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.body.image,
      content_images: req.body.content_images,
      release_date: req.body.release_date,
    });
    const game = await doc.save();
    res.json(game);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось создать игру',
    });
  }
};

export const update = async (req, res) => {
  try {
    const gameId = req.params.id;
    await GameModel.updateOne(
      {
        _id: gameId,
      },
      {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.body.image,
        content_images: req.body.content_images,
        release_date: req.body.release_date,
        isFavorites: req.body.isFavorites,
      }
    );
    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось обновить игру',
    });
  }
};

export const getCategories = async (req, res) => {
  try {
    const games = await GameModel.find().exec();
    const categories = games.map((obj) => obj.category).flat();
    const uniqueCategories = [...new Set(categories)];
    res.json(uniqueCategories);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось загрузить категории',
    });
  }
};
