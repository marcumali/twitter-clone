import React from 'react'
import type { NextPage } from 'next'
import LayoutMain from '@/components/atom/layout-main'
import Input from '@/components/molecule/input'
import Trending from '@/components/molecule/trending'
import Post from '@/components/atom/post'
import { useRouter } from 'next/router'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Publisher from '@/components/atom/publisher'

const Home: NextPage = () => {

  const router = useRouter()

  const trendList = [
    {
      id: 0,
      label: 'Trending in the Philippines',
      trendName: 'God is Good',
      shares: 583,
      link: '#',
    },
    {
      id: 1,
      label: 'Trending in the Philippines',
      trendName: 'Answered Prayer',
      shares: 83,
      link: '#',
    },
    {
      id: 2,
      label: 'Trending only for Holla',
      trendName: 'Amen',
      shares: 856,
      link: '#',
    },
  ];

  const postList = [
    {
      id: 0,
      name: "Jason Daro",
      avatar: "https://i.pravatar.cc/50/50",
      username: "@jasondaro",
      status: "1min",
      text: "When you have a dream, you've got to grab it and never let go.",
      img: "https://picsum.photos/1920/1080",
      link: "#",
    },
    {
      id: 1,
      name: "Kevin Rey Tabada",
      avatar: "https://i.pravatar.cc/50/51",
      username: "@kevinreytabada",
      status: "1h",
      text: "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
      img: "https://picsum.photos/1080/1080",
      link: "#",
    },
    {
      id: 2,
      name: "Kevin Rey Tabada",
      avatar: "https://i.pravatar.cc/50/52",
      username: "@kevinreytabada",
      status: "6h",
      text: "Life has got all those twists and turns. You've got to hold on tight and off you go.",
      img: "https://picsum.photos/1080/1080",
      link: "#",
    },
    {
      id: 3,
      name: "Marc Umali",
      avatar: "https://i.pravatar.cc/50/53",
      username: "@marcumali",
      status: "18h",
      text: "Spread love everywhere you go.",
      img: "https://picsum.photos/1080/1080",
      link: "#",
    },
  ];

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
              <TabList>
                <Tab>For You</Tab>
                <Tab>Following</Tab>
              </TabList>
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
