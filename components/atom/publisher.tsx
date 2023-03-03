import React, { useState, useRef } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import Avatar from '../molecule/avatar'
import Select from 'react-select'
import { Button, Form } from 'react-bootstrap'
import {Icon} from '@iconify/react'
import ModalButton from './modal-button'
import ReactGiphySearchbox from 'react-giphy-searchbox'

const Publisher: React.FC<Props> = ({ className, hasPrivacy, btnLabel }: Props) => {
  const [showPoll, setPoll] = useState(false)
  const privacy = [
    {
      value: 0,
      label: 'Public',
    },
    {
      value: 1,
      label: 'Holla Circle',
    },
  ]
  const listRef = useRef()
  const [listItems, setListItems] = useState([
    {
      id: 0,
      title: "Item 0",
    },
    {
      id: 1,
      title: "Item 1",
    },
  ]);
  const addItem = () => {
    const items = [...listItems];
    const newItem = {
      id: items.length + 1,
      title: `Item ${items.length + 1}`,
    };

    items.push(newItem);
    setListItems(items);
  };

  const removeItem = (id:any) => {
    const newList = listItems.filter( (l) => l.id !== id );
    setListItems( newList );
  };

  const [disableBtn, SetDisableBtn] = useState('')

  const IconBtn = () => {
    return <>
            <Icon icon="material-symbols:gif-box-outline-rounded" className="fs-20px me-3" />
           </>
  }

  return (
    <div className={"border-bottom-1-solid-gray-1 pb-3 px-3 " + className}>
      <div className="d-flex">
        <Avatar width={40} height={40} className="me-3" />
        <div className="w-100">
          { hasPrivacy && <Select options={privacy} className="select mb-3 w-140px select-sm" classNamePrefix="select" defaultValue={{ label: "Public", value: 0 }} /> }
          <div className="border-bottom-1-solid-gray-1 pb-3 mb-3">
            <TextareaAutosize className="form-control w-100" maxRows={4} minRows={2} onChange={ (e: any) => SetDisableBtn(e.target.value ) } />
            { showPoll && 
              <div className="border-1-solid-gray-4 mt-3 rounded-10px">
                <div className="p-3 border-bottom-1-solid-gray-1">
                 {listItems.map((item:any, index: number, listItems) => (
                    <div className="d-flex align-items-center mb-3" key={item.id}>
                      <Form.Control type="text" className="" placeholder={"Choice " + (index + 1)} />
                      { index + 1 === listItems.length ? 
                        <div>
                          <Icon icon="lucide:plus" className="fs-18px ms-2 cursor-pointer" onClick={addItem}/>
                        </div> : 
                        index === 0 ? '' : 
                        <div>
                          <Icon icon="lucide:x" className="fs-18px ms-2 cursor-pointer" onClick={ ()=> removeItem(item.id) }/>
                        </div>
                      }
                    </div>
                  ))}
                </div>
                <Button variant="link" className="w-100 text-decoration-none" onClick={()=>setPoll(false)}>Close Poll</Button>
              </div>
            }
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center text-primary">
              <div className="position-relative overflow-hidden">
                <Form.Control type="file" className="position-absolute top-0 start-0 h-100 w-100 opacity-0" />
                <Icon icon="material-symbols:image-rounded" className="fs-22px"/>
              </div>
              <ModalButton modalTitle="Select Giphy" btnChildren={<IconBtn />}>
                <ReactGiphySearchbox masonryConfig={[{columns: 4, imageWidth: 105, gutter: 11}]} apiKey="y7ntDGBVlOhGxxPEvBqJJfFWgrHVkRaV" className="w-100" onSelect={(item:any) => console.log(item)}/>
              </ModalButton>
              <Icon icon="ic:round-poll" className="fs-22px cursor-pointer" onClick={()=>setPoll(true)} />
            </div>
            <Button disabled={!disableBtn}>{btnLabel}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface Props {
  className?: string
  hasPrivacy?: boolean
  btnLabel?: string
}

Publisher.defaultProps = {
	className: '',
  btnLabel: 'Post',
}

export default Publisher