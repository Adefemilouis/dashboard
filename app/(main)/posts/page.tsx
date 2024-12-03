import React from 'react'
import PostsTable from '@/components/posts/PostsTable'
import BackButton from '@/components/BackButton'
import PostsPagination from '@/components/posts/PostsPagination'


const page = () => {
  return (
    <div>
    
      <BackButton text='Go Back' link='/' />
      <PostsTable />
      <PostsPagination />

    </div>
  )
}

export default page
