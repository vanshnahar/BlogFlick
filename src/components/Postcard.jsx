import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'



function Postcard({$id,title,featuredImage}) {
  return (
      <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
       <div className="w-full justify-center mb-4">
        <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
        className='rounded-xl' />
        </div> 

      </div>
      </Link>
  )
}

export default Postcard
