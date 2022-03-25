const express = require('express');
const router = express.Router();
const Posts = require('../../models/Posts');

router.post('/', async (req, res) => {
    const newPost = new Posts(req.body);
    console.log(req.body)
    try {
    const post = await newPost.save();
    if(!post) throw Error('Something went wrong with the post')
    res.status(200).json(post);
    } catch (error){
    res.status(400).json({msg: error})
    }
    });


//get all
router.get('/', async (req,res) =>{
    try{
        const posts = await Posts.find();
        if(!posts) throw Error('No items');
        res.status(200).json(posts);
    } catch(err){
        res.status(400).json({mesg: err})
    }
});

//get by CPF and return URL
router.get('/:id', async (req, res) => {
    
    try {
        const post = await Posts.findOne({ cpf : req.params.id});
        if(!post) throw Error('No Items');
        res.status(200).json(post.url);
    }catch(err) {
        res.status(400).json({mesg: err})
    }
});

//update
router.patch('/:id', async (req, res) => {
    try {
        const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
        if(!post) throw Error('Something went wrong while updating the post');
        res.status(200).json({success: true});
    }catch(err) {
        res.status(400).json({msg:err});
    }
});

//delete by cpf
router.delete('/:id', async (req, res) => {
    try {
        const post = await Posts.findOneAndDelete({ cpf :req.params.id});
        if(!post) throw Error('No post found!');
        res.status(200).json({success: true})
    }catch(err) {
        res.status(400).json({msg: error})
    }
});

//login page
module.exports = router;