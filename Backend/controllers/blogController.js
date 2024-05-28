const Blog = require("../models/blogModel")
const mongoose = require("mongoose")

const getBlog = async (req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status
    } 
}
const createBlog = async (req,res)=>{
    const {title, description} = req.body;
    
    try{
        const blog = await Blog.create({title, description})
        res.status(200).json(blog)
    }
    catch (error){
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    createBlog
}