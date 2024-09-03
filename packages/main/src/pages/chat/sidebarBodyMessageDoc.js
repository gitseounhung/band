import React from 'react'
import { filesData } from '@zio/shared/data'
import { FileExtIcon } from '@zio/shared/methods/fileExtIcon'
import { useAppDispatch } from '@zio/shared/redux/hooks'
import { setDocUrl } from '../../redux/slices/band' 

const SidebarBodyMessageDoc = () => {
  const dispatch = useAppDispatch()
  const handleOnClick = (url) => {
    dispatch(setDocUrl(url))
  }

  return (
    <div className="flex-fill pd-y-20 pd-x-10 bd-t">
      <div id="chatDirectMsg" className="chat-msg-list">
      {
        filesData.map((file)=>{
          return (
            <div onClick={()=>handleOnClick(file.url)} className="media">
              <FileExtIcon fileName={file.filename}/>
              <div className="media-body mg-l-10">
                <h6 className="mg-b-0">{file.filename}</h6>
                <small className="d-block tx-color-04">{file.alter}</small>
              </div>
            </div>    
          )
        })
      }
      </div>
    </div>    
  )
}

export default SidebarBodyMessageDoc