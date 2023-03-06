import React from 'react'
import type { NextPage } from 'next'
import LayoutMain from '@/components/atom/layout-main'
import Input from '@/components/molecule/input'
import Trending from '@/components/molecule/trending'
import Post from '@/components/atom/post'
import ToastFluid from '@/components/atom/toast-fluid'
import postList from '@/data/static/postList.json'
import trendList from '@/data/static/trendList.json'
import { useRouter } from 'next/router'

const ExplorePublic: NextPage = () => {

  const router = useRouter()

  return (
    <LayoutMain>
      <div>
        <Input type="text" placeholder="Search Holla" className="border-bottom-1-solid-gray-1 p-3" icon="lucide:search" hasIcon />
        <Trending trendOptions={trendList} showMoreLink="#" className="border-bottom-1-solid-gray-1 p-3" />
        <Post className="border-bottom-1-solid-gray-1" postList={postList} onClick={()=> alert('image clicked')}/>
      </div>
      <ToastFluid className="bg-primary bottom-0" />
    </LayoutMain>
  )
}

export default ExplorePublic
