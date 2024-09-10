import React, { useEffect, useState } from 'react'
import FeatherIcon from 'feather-icons-react';
import { useAppSelector, useAppDispatch } from '@zio/shared/redux/hooks';
import { setSearchTxt } from '../../redux/slices/band'

const ContentHeaderSearch = () => {
  const dispatch = useAppDispatch()
  const searchTxt = useAppSelector(state=>state?.band?.searchTxt)
  const [input,setInput] = useState(searchTxt)
  const handleKeyDown = (e) => {
    if (e.key!=='Enter') return
    dispatch(setSearchTxt(input))
  }
  useEffect(()=>{
    setInput(searchTxt)
  },[searchTxt])

  return (
    <div className="search-form mg-l-15 d-none d-sm-flex">
      <input 
        type="search" 
        className="form-control" 
        placeholder="검색어 입력.."
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="btn" type="button"><FeatherIcon icon="search"/></button>
    </div>
  )
}

export default ContentHeaderSearch