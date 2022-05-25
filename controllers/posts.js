const Post = require('../models/post');
const S3 = require('aws-sdk/clients/s3');
const { v4: uuidv4 } = require('uuid'); // import uuid to generate random ID's

const s3 = new S3(); // initialize s3 constructor


module.exports = {
  create,
  index
}

function create(req, res){
  console.log(req.file, req.body, req.user)
  try {
      const filePath = `${uuidv4()}/${req.file.originalname}`
      const params = {Bucket: 'phtdb', Key: filePath, Body: req.file.buffer};
      s3.upload(params, async function(err, data){
			    console.log(err, ' from aws')
          const post = await Post.create({
            petName: req.body.petName,
            petSex: req.body.petSex,
            petAge: req.body.petAge,
            petBreed: req.body.petBreed,
            petHealth: req.body.petHealth, 
            user: req.user, 
            photoUrl: data.Location});
          console.log(post)
			    await post.populate('user');
		
          res.status(201).json({post: post})
        })
    } catch (err) {
        console.log(err)
        res.json({data: err})
    }
}

async function index(req, res){
  try {
      const posts = await Post.find({}).populate('user').exec()
      res.status(200).json({posts})
  } catch(err){

  }
}
