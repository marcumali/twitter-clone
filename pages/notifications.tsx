import React from 'react'
import type { NextPage } from 'next'
import LayoutMain from '@/components/atom/layout-main'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Avatar from '@/components/molecule/avatar'
import {Icon} from '@iconify/react'
import ModalButton from '@/components/atom/modal-button'
import Link from 'next/link'
import Publisher from '@/components/atom/publisher'
import PostLike from '@/components/molecule/post-like'

const Notifications: NextPage = () => {

  const CommentButton = () => {
    return <div className="d-flex align-items-center text-gray-3">
			<Icon icon="lucide:message-circle" className="fs-20px me-2" />
			<div>321</div>
		</div>
  }

  return (
    <LayoutMain>
      <div>
        <Tabs className="tabs-horizontal" selectedTabClassName="border-bottom-3-solid-primary">
          <div className="position-sticky top-56px top-sm-0px z-index-1010 bg-white w-100">
            <TabList>
              <Tab><div className="px-3">All</div></Tab>
              <Tab>Mentions</Tab>
            </TabList>
          </div>
          <TabPanel>
            <div className="d-flex align-items-center p-3 border-bottom-1-solid-gray-1">
              <div>
                <Icon icon="ri:user-3-fill" className="fs-20px text-primary me-2" />
              </div>
              <Avatar src="https://i.pravatar.cc/51/51" sm={30} className="me-2" />
              <div className="d-sm-flex lh-sm align-items-center">
                <div className="fw-600 me-2">Jason Daro</div>
                <div>Followed you</div>
              </div>
            </div>
            <div className="d-flex p-3 border-bottom-1-solid-gray-1">
              <div>
                <Icon icon="mdi:cards-heart" className="fs-20px text-primary me-2 mt-1" />
              </div>
              <div>
                <div className="d-flex align-items-center mb-2">
                  <Avatar src="https://i.pravatar.cc/52/52" sm={30} className="me-2" />
                  <div className="d-sm-flex lh-sm align-items-center">
                    <div className="fw-600 me-2">Kevin Rey Tabada</div>
                    <div>Liked your post</div>
                  </div>
                </div>
                <div className="text-gray-3">Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning. #hope #life</div>
              </div>
            </div>
            <div className="d-flex p-3 border-bottom-1-solid-gray-1">
              <div>
                <Icon icon="mdi:comment" className="fs-20px text-primary me-2 mt-1" />
              </div>
              <div>
                <div className="d-flex align-items-center mb-2">
                  <Avatar src="https://i.pravatar.cc/53/53" sm={30} className="me-2" />
                  <div className="d-sm-flex lh-sm align-items-center">
                    <div className="fw-600 me-2">Kevin Rey Tabada</div>
                    <div>commented on your post</div>
                  </div>
                </div>
                <div className="text-gray-3">This is awesome! <span className="fw-600">@marcumali</span></div>
                <div className="d-flex align-items-center mt-3">
                  <ModalButton className="me-5" modalTitle="Write your Reply" btnChildren={<CommentButton />}> 
                    <div className="d-flex px-3">
                      <Link href="#">
                        <Avatar sm={30} md={40} className="me-3" src="https://i.pravatar.cc/53/53" />
                      </Link>
                      <div>
                        <div className="d-flex align-items-center">
                          <Link href="#">
                            <div className="d-flex">
                              <div className="fw-600 me-2 text-base">Kevin Rey Tabada</div>
                              <div className="text-gray-3">@kevinreytabada</div>
                            </div>
                          </Link>
                        </div>
                        <div>This is awesome!</div>
                        <div className="d-flex align-items-center mt-2">
                          <div className="text-gray-3 me-1">Replying to</div>
                          <Link href="#">@marcumali</Link>
                        </div>
                      </div>
                    </div>
                    <Publisher btnLabel="Reply" />
                  </ModalButton>
                  <PostLike />
						    </div>
              </div>
            </div>
            <div className="d-flex p-3 border-bottom-1-solid-gray-1">
              <div>
                <Icon icon="ps:retweet" className="fs-20px text-primary me-2 mt-1" />
              </div>
              <div>
                <div className="d-flex align-items-center mb-2">
                  <Avatar src="https://i.pravatar.cc/52/52" sm={30} className="me-2" />
                  <div className="d-sm-flex lh-sm align-items-center">
                    <div className="fw-600 me-2">Devin Stewart</div>
                    <div>Shared your post</div>
                  </div>
                </div>
                <div className="text-gray-3">
                  <div className="mb-2">Great! You are blessed <span className="fw-600">@marcumali</span></div>
                  <div className="border-1-solid-gray-1 p-2 rounded-10px">Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning. #hope #life</div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="d-flex p-3 border-bottom-1-solid-gray-1">
              <div>
                <Icon icon="mdi:comment" className="fs-20px text-primary me-2 mt-1" />
              </div>
              <div>
                <div className="d-flex align-items-center mb-2">
                  <Avatar src="https://i.pravatar.cc/53/53" sm={30} className="me-2" />
                  <div className="d-sm-flex lh-sm align-items-center">
                    <div className="fw-600 me-2">Kevin Rey Tabada</div>
                    <div>commented on your post</div>
                  </div>
                </div>
                <div className="text-gray-3">This is awesome! <span className="fw-600">@marcumali</span></div>
                <div className="d-flex align-items-center mt-3">
                  <ModalButton className="me-5" modalTitle="Write your Reply" btnChildren={<CommentButton />}> 
                    <div className="d-flex px-3">
                      <Link href="#">
                        <Avatar sm={30} md={40} className="me-3" src="https://i.pravatar.cc/53/53" />
                      </Link>
                      <div>
                        <div className="d-flex align-items-center">
                          <Link href="#">
                            <div className="d-flex">
                              <div className="fw-600 me-2 text-base">Kevin Rey Tabada</div>
                              <div className="text-gray-3">@kevinreytabada</div>
                            </div>
                          </Link>
                        </div>
                        <div>This is awesome!</div>
                        <div className="d-flex align-items-center mt-2">
                          <div className="text-gray-3 me-1">Replying to</div>
                          <Link href="#">@marcumali</Link>
                        </div>
                      </div>
                    </div>
                    <Publisher btnLabel="Reply" />
                  </ModalButton>
                  <PostLike />
						    </div>
              </div>
            </div>
            <div className="d-flex p-3 border-bottom-1-solid-gray-1">
              <div>
                <Icon icon="ps:retweet" className="fs-20px text-primary me-2 mt-1" />
              </div>
              <div>
                <div className="d-flex align-items-center mb-2">
                  <Avatar src="https://i.pravatar.cc/52/52" sm={30} className="me-2" />
                  <div className="d-sm-flex lh-sm align-items-center">
                    <div className="fw-600 me-2">Devin Stewart</div>
                    <div>Shared your post</div>
                  </div>
                </div>
                <div className="text-gray-3">
                  <div className="mb-2">Great! You are blessed <span className="fw-600">@marcumali</span></div>
                  <div className="border-1-solid-gray-1 p-2 rounded-10px">Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning. #hope #life</div>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </LayoutMain>
  )
}

export default Notifications
