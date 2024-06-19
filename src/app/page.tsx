import React from 'react'
import { NextPage } from 'next'
import axios from 'axios'
import { IPost } from '../../interfaces/IPost'


const getData = async () => {
  try {

    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return res.data
  } catch (error) {
    return []
  }

}

const page: NextPage = async () => {
  const data: IPost[] = await getData()
  // console.log(data)
  return (
    <div className='mx-5'>

      <h1 className='text-center font-bold text-5xl mt-3 mb-5'>Posts</h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4'>

        {
          data.length === 0 ? <p>No hay posts</p> : data.map((post) => (
            <div key={post.id} className='text-center bg-white rounded-xl px-4 py-5 shadow-lg font-medium flex flex-col gap-2 items-center justify-center'>
              <h5 className=' flex-auto font-medium text-slate-900'>
                {post.title}
              </h5>
              <p className='text-sm font-medium text-slate-400'>
                {post.body}
              </p>
              <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white" type="submit">
                Buy now
              </button>
            </div>
          ))
        }
      </div>

    </div >
  )
}

export default page
