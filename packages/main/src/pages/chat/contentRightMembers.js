import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import ContentRightMembersCard from './contentRightMembersCard'
import { Spinner } from '@zio/components'
import { RiSearchLine, RiEyeOffLine } from "react-icons/ri"
import { useAppSelector } from '@zio/shared/redux/hooks'

const ContentRightMembers = () => {
  const { searchTxt } = useAppSelector((state)=>state.band)
  const [searchUser, setSearchUser] = useState([]) // 검색결과
  const [loading, setLoading] = useState(false)
  const currentMessage = useRef(null)

  const handleSearchUser = async() => {
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/search-user`
    try{
      setLoading(true)
      const response = await axios.post(URL,{
          search: searchTxt
      })
      setLoading(false)
      setSearchUser(response.data.data)
    }catch(error){
      toast.error(error?.response?.data?.message)
    }
  }

  useEffect(()=>{
      if (currentMessage.current){
          currentMessage.current?.scrollIntoView({block:'start'}) //behavior:'smooth'는 크롬에서 동작하지 않음
      }
  },[searchUser]) //검색결과가 바뀔때 마다

  useEffect(()=>{
    console.log('찾아줘')
    handleSearchUser()
  },[searchTxt])

  return (
    <div className="pd-y-20 pd-x-10" ref={currentMessage}>
        <div className="tx-10 tx-uppercase tx-medium tx-color-03 tx-sans tx-spacing-1 pd-l-10">Members List</div>
        <div className="chat-member-list">
          {
            searchTxt.length === 0 && !loading && (
              <div className='mt-12'>
                <div className='text-center m-5 tx-color-03'><RiSearchLine size={40}/></div>
                <p className='text-center m-5 tx-color-03'>대화 상대를 검색하세요.</p>
              </div>
            )
          }
          {
            searchTxt.length > 0 && searchUser.length === 0 && !loading && (
              <div className='mt-12'>
                <div className='text-center m-5 tx-color-03'><RiEyeOffLine size={40}/></div>
                <p className='text-center m-5 tx-color-03'>검색 결과가 없습니다.</p>
              </div>
            )
          }
          {
            loading && (
              <p className='text-center m-5'><Spinner/></p>
            )
          }
          {
            searchUser.length !==0 && !loading && (
              searchUser.map((user,index)=>{
                return(
                  <ContentRightMembersCard user={user}/>                  
                )
              })
            ) 
          }
        </div>
    </div>
  )
}

export default ContentRightMembers