import React from 'react'
import type { NextPage } from 'next'
import LayoutMessages from '@/components/atom/layout-message'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Avatar from '@/components/molecule/avatar';

const Home: NextPage = () => {

  return (
    <LayoutMessages>
      <div>
        <Tabs className="tabs-vertical">
          <div className="d-flex">
            <div className="w-320px">
              <TabList className="w-320px">
                <Tab>
                  <div className="d-flex align-items-center p-3 border-bottom-1-solid-gray-1">
                    <Avatar src="https://i.pravatar.cc/41/41" sm={30} className="me-2" />
                    <div className="d-flex align-items-center fw-600">
                      <div className="lh-sm me-auto">
                        <div>Jason Daro</div>
                        <div className="clamp clamp-1">Hey Marc, thanks for shopping at Clothstore! We've got tons of exciting deals in our upcoming Fall Collection. Stay tuned or visit www.cstore.com to learn more.</div>
                      </div>
                      <div className="fs-11px ms-3">16m</div>
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="d-flex align-items-center p-3 border-bottom-1-solid-gray-1">
                    <Avatar src="https://i.pravatar.cc/42/42" sm={30} className="me-2" />
                    <div className="d-flex align-items-center fw-600">
                      <div className="lh-sm me-auto">
                        <div>Kevin Rey Tabada</div>
                        <div className="clamp clamp-1">Hey Marc, we've stocked our shelves with assorted mint cookie treats for you. Visit your local KookieU store. Hurry! This flavor is for a limited time only.</div>
                      </div>
                      <div className="fs-11px ms-3">35m</div>
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="d-flex align-items-center p-3 border-bottom-1-solid-gray-1">
                    <Avatar src="https://i.pravatar.cc/43/43" sm={30} className="me-2" />
                    <div className="d-flex align-items-center text-gray-3">
                      <div className="lh-sm me-auto">
                        <div>Darwin Pineda</div>
                        <div className="clamp clamp-1">Mr. Umali, your package has been shipped - ETA: 9-10 A.M. on 18th October at your residence. To track your parcel, visit www.trackmypkg.com</div>
                      </div>
                      <div className="fs-11px ms-3">2h</div>
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="d-flex align-items-center p-3 border-bottom-1-solid-gray-1">
                    <Avatar src="https://i.pravatar.cc/44/44" sm={30} className="me-2" />
                    <div className="d-flex align-items-center text-gray-3">
                      <div className="lh-sm me-auto">
                        <div>Devin Steward</div>
                        <div className="clamp clamp-1">Mr. Umali, your package has been shipped - ETA: 9-10 A.M. on 18th October at your residence. To track your parcel, visit www.trackmypkg.com</div>
                      </div>
                      <div className="fs-11px ms-3">1w</div>
                    </div>
                  </div>
                </Tab>
              </TabList>
            </div>
            <div className="w-100p">
              <TabPanel>
                User 1
              </TabPanel>
              <TabPanel>
                User 2
              </TabPanel>
              <TabPanel>
                User 2
              </TabPanel>
              <TabPanel>
                User 2
              </TabPanel>
            </div>
          </div>
          
        </Tabs>
      </div>
    </LayoutMessages>
  )
}

export default Home
