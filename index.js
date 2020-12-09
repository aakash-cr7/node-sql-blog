const express = require('express');
const db = require('./config/sequelize');
const User = require('./models/user');
const Post = require('./models/post');

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// db.sync({ force: true })
db.sync()
  .then(() => {
    console.log('DB synced');
    app.listen(PORT, (error) => {
      if (error) {
        console.log('Error in running server', error);
      }

      console.log(`Server running on port ${PORT}`);
    })
  })
  .catch((error) => {
    console.log('Error in DB', error);
  })

// constraints so that if user is deleted, delete its posts as well
Post.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Post);

app.use('/create', async (req, res) => {
  try {
    const user = await User.create({
      name: 'abcd',
    })

    const post = await user.createPost({
      title: 'First post'
    });

    console.log('=====----------->', post);

    const posts = await user.getPosts();
    console.log('=====>', posts);
    res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
})