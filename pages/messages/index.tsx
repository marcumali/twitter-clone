import React, {useState, useEffect, useRef} from 'react'
import type { NextPage } from 'next'
import LayoutMessages from '@/components/atom/layout-message'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Avatar from '@/components/molecule/avatar'
import TextareaAutosize from 'react-textarea-autosize'
import { Button } from 'react-bootstrap'
import {Icon} from '@iconify/react'
import DropdownButton from '@/components/molecule/dropdown-button'
import Input from '@/components/molecule/input'
import SearchResult from '@/components/atom/search-result'
import { useMediaQuery } from 'react-responsive'
import Messages from '@/components/atom/messages'
import Link from 'next/link'

const Home: NextPage = () => {

  const [disableBtn, SetDisableBtn] = useState('')
  const [height, setHeight] = useState(0)
  const ref = useRef<any>(null)

  useEffect(() => {
    setHeight(ref.current?.clientHeight)
  })

  const actions = [
    {
      id: 0,
      label: 'Delete Conversation'
    },
    {
      id: 1,
      label: 'Report'
    },
  ]

  const [show, setShow] = useState(false)
  const isSM = useMediaQuery({ query: '(min-width: 576px)' })

  const userList = [
    {
      id: 0,
      name: "Jason Daro",
      recentMessage: "Hey Marc, thanks for shopping at Clothstore! We've got tons of exciting deals in our upcoming Fall Collection. Stay tuned or visit www.cstore.com to learn more.",
      avatar: 'https://i.pravatar.cc/41/41',
      isNew: true,
    },
    {
      id: 1,
      name: "Kevin Rey Tabada",
      recentMessage: "Hey Marc, we've stocked our shelves with assorted mint cookie treats for you. Visit your local KookieU store. Hurry! This flavor is for a limited time only.",
      avatar: 'https://i.pravatar.cc/42/42',
      date: '3m',
    },
    {
      id: 2,
      name: "Darwin Pineda",
      recentMessage: "Mr. Umali, your package has been shipped - ETA: 9-10 A.M. on 18th October at your residence. To track your parcel, visit www.trackmypkg.com",
      avatar: 'https://i.pravatar.cc/43/43',
      date: '1h',
    },
    {
      id: 3,
      name: "Darwin Pineda",
      recentMessage: "Mr. Umali, your package has been shipped - ETA: 9-10 A.M. on 18th October at your residence. To track your parcel, visit www.trackmypkg.com",
      avatar: 'https://i.pravatar.cc/44/44',
      date: '3h',
    }
  ]

  return (
    <LayoutMessages>
      <div className="h-100">
        { isSM === true ? 
          <Tabs className="tabs-vertical h-100">
            <div className="d-flex h-100">
              <div className="w-55px w-lg-320px position-relative pt-8 pt-lg-10">
                <div className="cursor-pointer d-none-block p-3 bg-white box-shadow-1 position-absolute top-0 w-100 d-flex align-items-center justify-content-center">
                  <Icon icon="lucide:search" className="fs-20px" />
                </div>
                <div className="d-none d-lg-block bg-white box-shadow-1 position-absolute top-0 w-100" onClick={() => { setShow(true)} }>
                  <div className="p-3">
                    <Input type="text" placeholder="Search Holla" icon="lucide:search" hasIcon/>
                  </div>
                  <SearchResult show={show} onClickOutside={() => {setShow(false)}} className="top-44px" />
                </div>
                <TabList className="w-55px w-lg-320px h-100 scrollbar-1 overflow-y-auto">
                  { userList.map( (item) => (
                    <Tab key={item.id}>
                      <div className="d-flex align-items-center p-3 border-bottom-1-solid-gray-1 cursor-pointer">
                        <Avatar src={item.avatar} sm={30} className="me-2" />
                        <div className="d-none d-lg-flex align-items-center">
                          <div className="lh-sm me-auto">
                            <div>{item.name}</div>
                            <div className="clamp clamp-1">{item.recentMessage}</div>
                          </div>
                          <div className="fs-11px ms-3">
                            { item.isNew ? <div className="text-danger">NEW</div> : item.date }
                          </div>
                        </div>
                      </div>
                    </Tab>
                  ))}
                </TabList>
              </div>
              <div className="w-100p border-start-1-solid-gray-1 position-relative">
                { userList.map( (item) => (
                  <TabPanel key={item.id}>
                    <div className="position-absolute overflow-y-auto h-100 scrollbar-1">
                      <div className="d-flex align-items-center justify-content-between bg-white box-shadow-1 p-3 position-sticky top-0 start-0 w-100">
                        <div className="d-flex align-items-center">
                          <Avatar src={item.avatar} />
                          <div className="fw-600 ms-2">{item.name}</div>
                        </div>
                        <DropdownButton options={actions} seamless>
                          <Icon icon="mdi:ellipsis-horizontal" className="fs-22px text-gray-3" />
                        </DropdownButton>
                      </div>
                      <div className="p-3">
                        <Messages />
                        <div style={{ height: height }}></div>
                      </div>
                    </div>
                  </TabPanel>
                  ))}
                <div ref={ref} className="d-flex position-absolute w-100 z-index-1010 bottom-0 bg-white p-3 box-shadow-1 align-items-start">
                  <TextareaAutosize className="form-control w-100 me-3" maxRows={4} minRows={2} onChange={ (e: any) => SetDisableBtn(e.target.value ) } />
                  <Button disabled={!disableBtn} variant="link" className="p-0 h-auto">
                    <Icon icon="lucide:send" className="fs-20px text-primary" />
                  </Button>
                </div>
              </div>
            </div>
          </Tabs>
          :   
          <div>
            <div className="h-56px"></div>
              { userList.map( (item) => (
                <Link href="/messages/id" key={item.id}>
                  <div className="d-flex align-items-center p-3 border-bottom-1-solid-gray-1 cursor-pointer text-base">
                    <Avatar src={item.avatar} sm={30} className="me-2" />
                    <div className="d-flex align-items-center">
                      <div className="lh-sm me-auto">
                        <div>{item.name}</div>
                        <div className="clamp clamp-1">{item.recentMessage}</div>
                      </div>
                      <div className="fs-11px ms-3">
                        { item.isNew ? <div className="text-danger">NEW</div> : item.date }
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        }
        
      </div>
    </LayoutMessages>
  )
}

export default Home
