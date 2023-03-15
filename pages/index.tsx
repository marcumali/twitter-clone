import React from 'react'
import type { NextPage } from 'next'
import LayoutMain from '@/components/atom/layout-main'
import Post from '@/components/atom/post'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Publisher from '@/components/atom/publisher'
import postList from '@/data/static/postList.json'
import { useMediaQuery } from 'react-responsive'

const Home: NextPage = () => {

  const isSM = useMediaQuery({ query: '(min-width: 576px)' })

  return (
    <LayoutMain>
      <div>
        <Tabs className="tabs-horizontal" selectedTabClassName="border-bottom-3-solid-primary">
          <div className="position-sticky top-56px top-sm-0px z-index-1010 bg-white w-100">
            <TabList>
              <Tab>For You</Tab>
              <Tab>Following</Tab>
            </TabList>
          </div>
          <TabPanel>
            { isSM && <Publisher className="border-bottom-1-solid-gray-1 p-3" hasPrivacy /> }
            <Post className="border-bottom-1-solid-gray-1" postList={postList} onClick={()=>alert('image clicked')} />
          </TabPanel>
          <TabPanel>
          { isSM && <Publisher className="border-bottom-1-solid-gray-1 p-3" hasPrivacy /> }
            <Post className="border-bottom-1-solid-gray-1" postList={postList} onClick={()=>alert('image clicked')} />
          </TabPanel>
        </Tabs>
      </div>
    </LayoutMain>
  )
}

export default Home
