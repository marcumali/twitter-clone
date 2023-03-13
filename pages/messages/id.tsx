import React, {useState, useEffect, useRef} from 'react'
import type { NextPage } from 'next'
import { useMediaQuery } from 'react-responsive'
import Avatar from '@/components/molecule/avatar'
import { Icon } from '@iconify/react'
import Messages from '@/components/atom/messages'
import TextareaAutosize from 'react-textarea-autosize'
import { Button } from 'react-bootstrap'
import { useRouter } from 'next/router';

const MessageId: NextPage = () => {
  const [disableBtn, SetDisableBtn] = useState('')
  const [height, setHeight] = useState(0)
  const isSM = useMediaQuery({ query: '(min-width: 576px)' })
  const ref = useRef<any>(null)
  useEffect(() => {
    setHeight(ref.current?.clientHeight)
  })
  const router = useRouter();
  return (
    <div>
      { isSM === false &&
        <div>
          <div className="d-flex align-items-center bg-white p-3 box-shadow-1 position-fixed w-100 top-0 z-index-1010">
            <Icon icon="mdi:arrow-left" className="fs-24px cursor-pointer" onClick={ () => router.back() } />
            <Avatar sm={30} md={40} src="https://i.pravatar.cc/40/40" className="mx-3" />
            <div className="fw-600">Jason Daro</div>
          </div>
          <div className="p-3">
            <div className="h-58px"></div>
            <Messages />
            <div style={{ height: height }}></div>
          </div>
          <div ref={ref} className="d-flex position-absolute w-100 z-index-1010 bottom-0 bg-white p-3 box-shadow-1 align-items-start">
            <TextareaAutosize className="form-control w-100 me-3" maxRows={4} minRows={2} onChange={ (e: any) => SetDisableBtn(e.target.value ) } />
            <Button disabled={!disableBtn} variant="link" className="p-0 h-auto">
              <Icon icon="lucide:send" className="fs-20px text-primary" />
            </Button>
          </div>
        </div>
      }
    </div>
  )
}

export default MessageId