import React, {useState} from 'react'
import type { NextPage } from 'next'
import LayoutMain from '@/components/atom/layout-main'
import Input from '@/components/molecule/input'
import Trending from '@/components/molecule/trending'
import Post from '@/components/atom/post'
import ToastFluid from '@/components/atom/toast-fluid'
import postList from '@/data/static/postList.json'
import trendList from '@/data/static/trendList.json'
import SearchResult from '@/components/atom/search-result'

const HomePublic: NextPage = () => {
  const [show, setShow] = useState(false)
  return (
    <LayoutMain>
      <div>
        <div className="p-3 border-bottom-1-solid-gray-1">
          <div className="position-relative" onClick={() => { setShow(true)} }>
            <Input type="text" placeholder="Search Holla" icon="lucide:search" hasIcon/>
            <SearchResult show={show} onClickOutside={() => {setShow(false)}} />
          </div>
        </div>
        <Trending trendOptions={trendList} showMoreLink="#" className="border-bottom-1-solid-gray-1 p-3" />
        <Post className="border-bottom-1-solid-gray-1" postList={postList} onClick={()=> alert('image clicked')}/>
      </div>
      <ToastFluid className="bg-primary bottom-0" />
    </LayoutMain>
  )
}

export default HomePublic
