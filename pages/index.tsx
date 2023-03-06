import React from 'react'
import type { NextPage } from 'next'
import LayoutMain from '@/components/atom/layout-main'
import Input from '@/components/molecule/input'
import Trending from '@/components/molecule/trending'
import Post from '@/components/atom/post'
import { useRouter } from 'next/router'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Publisher from '@/components/atom/publisher'
import postList from '@/data/static/postList.json'
import trendList from '@/data/static/trendList.json'

const Home: NextPage = () => {

  const router = useRouter()

  return (
    <LayoutMain>
      <div>
        { router.pathname === 'public' ? 
          <div>
            <Input type="text" placeholder="Search Holla" className="border-bottom-1-solid-gray-1 p-3" icon="lucide:search" hasIcon />
            <Trending trendOptions={trendList} showMoreLink="#" className="border-bottom-1-solid-gray-1 p-3" />
          </div>
          : 
          <div>
            <Tabs selectedTabClassName="border-bottom-3-solid-primary">
              <div className="position-sticky top-56px top-sm-0px z-index-1010 bg-white w-100">
                <TabList>
                  <Tab>For You</Tab>
                  <Tab>Following</Tab>
                </TabList>
              </div>
              <TabPanel>
                <Publisher hasPrivacy />
                <Post className="border-bottom-1-solid-gray-1" postList={postList} onClick={()=>alert('image clicked')} />
              </TabPanel>
              <TabPanel>
                <Publisher hasPrivacy/>
                <Post className="border-bottom-1-solid-gray-1" postList={postList} onClick={()=>alert('image clicked')} />
              </TabPanel>
            </Tabs>
          </div>
        }
      </div>
    </LayoutMain>
  )
}

export default Home
