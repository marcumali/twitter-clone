import React from 'react'
import type { NextPage } from 'next'
import LayoutMain from '@/components/atom/layout-main'
import Trending from '@/components/molecule/trending'
import Post from '@/components/atom/post'
import postList from '@/data/static/postList.json'
import trendList from '@/data/static/trendList.json'

const Explore: NextPage = () => {

  return (
    <LayoutMain>
      <div>
        <Trending trendOptions={trendList} showMoreLink="#" className="border-bottom-1-solid-gray-1 p-3" />
        <Post className="border-bottom-1-solid-gray-1" postList={postList} onClick={()=>alert('image clicked')} />
      </div>
    </LayoutMain>
  )
}

export default Explore
