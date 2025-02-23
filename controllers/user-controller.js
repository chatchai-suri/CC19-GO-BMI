const path = require('path')
const fs = require('fs/promises')
const cloudinary = require('../config/cloudinary')
const prisma = require('../config/prisma')
const createError = require('../utils/createError')

exports.updateProfile = async (req, res, next) => {
  try {
    // code
    const id = req.user.id
    const havefile = !!req.file
    let uploadResult = {}
    if(havefile) {
      console.log(req.file.path)
      uploadResult = await cloudinary.uploader.upload(req.file.path, {
        overwrite: true,
        public_id: path.parse(req.file.path).name
      })
      fs.unlink(req.file.path)
    }
    console.log(uploadResult)

    const data = {
      profileImage: uploadResult.secure_url || '',
    }

    const result = await prisma.user.update({
      where: {id: +id},
      data: data
    })

    res
    .status(201)
    .json({message: 'Update Profile picture ==> Done', result: result})
  } catch (error) {
    console.log(error)
    next(error)
  }
}