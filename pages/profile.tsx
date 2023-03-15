import React, {useState} from 'react'
import type { NextPage } from 'next'
import LayoutMain from '@/components/atom/layout-main'
import Avatar from '@/components/molecule/avatar'
import { Button } from 'react-bootstrap'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import WhoToFollow from '@/components/atom/who-to-follow'
import postList from '@/data/static/postList.json'
import Post from '@/components/atom/post'
import ModalButton from '@/components/atom/modal-button'
import Input from '@/components/molecule/input'
import TextareaAutosize from 'react-textarea-autosize'
import Select from 'react-select'

const Profile: NextPage = () => {

  const [birthDate, setBirthDate] = useState(false)
  const privacy = [
    {
      value: 'public',
      label: 'Public'
    },
    {
      value: 'private',
      label: 'Private'
    },
    {
      value: 'followers',
      label: 'Followers'
    },
  ]

  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const EditButton = () => {
    return(
      <div>
        <Button variant="outline-light" className="d-none d-md-block">Edit Profile</Button>
        <Icon icon="lucide:edit" className="fs-20px d-md-none"/>
      </div>
    )
  }

  return (
    <LayoutMain>
      <div className="h-200px bg-gray-2"></div>
      <div className="d-flex align-items-center align-items-md-end justify-content-between px-3 mt-md-n55px pt-3 pt-md-0">
        <div className="border-3-solid-white rounded-circle">
          <Avatar sm={60} md={100} />
        </div>
        <div>
          <ModalButton modalTitle="Edit Profile" btnChildren={<EditButton />}>
            <div className="bg-center bg-cover d-flex align-items-center h-170px bg-gray-2 position-relative" style={{ backgroundImage: `url(${previewUrl})` }}>
              <div className="top-0 end-0 mt-3 me-3 d-flex align-items-center justify-content-center position-absolute bg-dark w-30px h-30px rounded-circle">
                <input type="file" onChange={handleFileSelect} className="opacity-0 position-absolute cursor-pointer" />
                <Icon icon="lucide:camera" className="fs-18px text-white" />
              </div>
            </div>
            <div className="border-3-solid-white d-inline-flex rounded-circle mt-n50px mb-3 position-relative">
              <div className="bottom-0 end-0 d-flex align-items-center justify-content-center position-absolute bg-dark w-30px h-30px rounded-circle">
                <input type="file" onChange={handleFileSelect} className="opacity-0 position-absolute cursor-pointer" />
                <Icon icon="lucide:camera" className="fs-18px text-white" />
              </div>
              <Avatar sm={60} md={100} src={previewUrl}/>
            </div>
            <Input type="text" value="Marc Umali" label="Name" className="mb-3" />
            <div className="mb-3">
              <TextareaAutosize className="form-control w-100" maxRows={4} minRows={2} />  
            </div>          
            <Input type="text" placeholder="Location" label="Location" className="mb-3" />
            <Input type="text" placeholder="Website" label="Website" className="mb-3" />
            <div className="d-flex align-items-center">
              <div className="text-gray-3">Birth Date</div>
              <Icon icon="mdi:dot" />
              <div className="text-primary cursor-pointer" onClick={ ()=> setBirthDate(!birthDate) }>{ birthDate ? 'Cancel' : 'Edit' }</div>
            </div>
            <div className="fs-20px mb-3">October 12, 1989</div>
            { birthDate && 
              <div className="mb-3">
                <div className="d-flex mb-3">
                  <div className="w-50">
                    <div>Month</div>
                    <Select options={[]} classNamePrefix="select-default"/>
                  </div>
                  <div className="w-50 d-flex">
                    <div className="mx-3">
                      <div>Day</div>
                      <Select options={[]} classNamePrefix="select-default"/>
                    </div>
                    <div>
                      <div>Year</div>
                      <Select options={[{ value: 'public',  }]} classNamePrefix="select-default"/>
                    </div>
                  </div>
                </div>
                <div className="fw-600 mb-2">Who can see this?</div>
                <Select options={privacy} classNamePrefix="select-default"/>
              </div>
            }
            <Button>Save</Button>
          </ModalButton>
        </div>
      </div>
      <div className="p-3">
        <div className="fs-20px fw-600">Marc Umali</div>
        <div className="text-gray-3">@marcumali</div>
        <div className="d-flex align-items-center mt-2">
          <Icon icon="lucide:calendar" className="fs-18px me-2" />
          <div>Joined November 2022</div>
        </div>
        <div className="d-flex align-items-center mt-3">
          <Link href="#">
            <div className="d-flex align-items-center text-base me-5">
              <div className="fw-600 me-2">16</div>
              <div>Following</div>
            </div>
          </Link>
          <Link href="#">
            <div className="d-flex align-items-center text-base">
              <div className="fw-600 me-2">3.8M</div>
              <div>Followers</div>
            </div>
          </Link>
        </div>
      </div>
      <Tabs className="tabs-horizontal" selectedTabClassName="border-bottom-3-solid-primary">
        <TabList>
          <Tab>Posts</Tab>
          <Tab>Replies</Tab>
          <Tab>Media</Tab>
          <Tab>Likes</Tab>
        </TabList>
        <TabPanel>
          <div className="p-3">
           <Post className="border-bottom-1-solid-gray-1" postList={postList} onClick={()=>alert('image clicked')} />
           <WhoToFollow title="Who to follow" showMoreLink="#" className="mt-n30px" />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="p-3">
           <Post className="border-bottom-1-solid-gray-1" postList={postList} onClick={()=>alert('image clicked')} />
           <WhoToFollow title="Who to follow" showMoreLink="#" className="mt-n30px" />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="p-3">
           <Post className="border-bottom-1-solid-gray-1" postList={postList} onClick={()=>alert('image clicked')} />
           <WhoToFollow title="Who to follow" showMoreLink="#" className="mt-n30px" />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="p-3">
            <Post className="border-bottom-1-solid-gray-1" postList={postList} onClick={()=>alert('image clicked')} />
            <WhoToFollow title="Who to follow" showMoreLink="#" className="mt-n30px" />
          </div>
        </TabPanel>
      </Tabs>
    </LayoutMain>
  )
}

export default Profile
