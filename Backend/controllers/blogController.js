const Blog = require("../models/blogModel")
const mongoose = require("mongoose")

const getBlog = async (req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such blog"})
    } 
    const blog = await Blog.findById(id)

    if(!blog) return res.status(404).send({error:"no such blog"})

    res.status(200).send(blog)
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

const updateBlog = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such blog"})
    }
  const blog = await Blog.findOneAndUpdate({_id:id},{
    ...req.body
  })

  if(!blog){
    res.status(400).send("no such blog")
  }
  res.status(200).send(blog)

}

const deleteBlog =async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such blog"})
    }

    const blog = await Blog.findOneAndDelete({_id:id})

    if(!blog){
        return res.status(400).json({error:"No such workout"})
    }
    res.status(200).send(blog)
}
module.exports = {
    createBlog,
    getBlog,
    updateBlog,
    deleteBlog
}