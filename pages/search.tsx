import React, {useState} from 'react'
import type { NextPage } from 'next'
import MobileHeader from '@/components/molecule/mobile-header'
import MobileMenu from '@/components/molecule/mobile-menu'
import Trending from '@/components/molecule/trending'
import trendList from '@/data/static/trendList.json'
import { useMediaQuery } from 'react-responsive'
import Post from '@/components/atom/post'
import postList from '@/data/static/postList.json'
import Link from 'next/link'
import Avatar from '@/components/molecule/avatar'
import { Icon } from '@iconify/react'

const Search: NextPage = () => {

  const isSM = useMediaQuery({ query: '(min-width: 576px)' })
  const [searchResult, setSearchResult] = useState(false)

  const [RecentSearches, setRecentSearches] = useState([
    {
      id: 0,
      name: 'Jason Daro',
      avatar: 'https://i.pravatar.cc/32/32',
      link: '#'
    },
    {
      id: 1,
      name: 'Kevin Rey Tabada',
      avatar: 'https://i.pravatar.cc/33/33',
      link: '#'
    },
  ]);

  const removeItem = (id:any) => {
    const newList = RecentSearches.filter( (l) => l.id !== id );
    setRecentSearches( newList );
  };

  return (
    <div>
      { isSM === false &&
        <>
          <MobileHeader searchOnClick={ ()=> setSearchResult( true ) }/>
            <div className="p-3">
              { searchResult ? 
                  <>
                    <div className="fw-600 mb-3 fs-14px">Recent Searches</div>
                      {RecentSearches.map((item:any, index: number, RecentSearches ) => (
                        <div key={item.id}>
                          <div>{RecentSearches.length === 0 && 'No Recent Searches' }</div>
                          <div className={"d-flex align-items-center justify-content-between " + (index + 1 === RecentSearches.length ? 'mb-0' : 'mb-3') }>
                            <Link href={item.link}>
                              <div className="d-flex align-items-center">
                                <Avatar sm={30} md={40} src={item.avatar} className="me-2" />
                                <div className="clamp clamp-1 text-base">{item.name}</div>
                              </div>
                            </Link>
                            <div>
                              <Icon icon="lucide:x" className="fs-16px cursor-pointer" onClick={ ()=> removeItem(item.id) }/>
                            </div>
                          </div>
                        </div>
                      ))}
                  </>
                :
                <>
                  <Trending trendOptions={trendList} showMoreLink="#" className="pb-3" />
                  <Post className="border-bottom-1-solid-gray-1" postList={postList} onClick={()=>alert('image clicked')} />
                </>
              }
              
            </div>
          <MobileMenu />
        </>
      }
    </div>
  )
}

export default Search
