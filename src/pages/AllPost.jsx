import React,{useEffect,useState} from 'react'
import  appwriteService from '../appwrite/config'
import { Container,PostCard } from '../components'
function AllPost() {
  const [post,setPosts]=useState([])
  useEffect(()=>{},[])
  appwriteService.getPosts([]).then((posts)=>{
    if(posts)
    {
      setPosts(posts)
    }
  })
  return (
    <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          {
            post.map((post)=>{
              <div key={post.$id}className="p-2 w-1/4">
                <PostCard post={post}/>
              </div>
            })
          }
        </div>
        </Container>
    </div>
  )
}

export default AllPost
