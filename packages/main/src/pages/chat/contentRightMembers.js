import React, { useEffect, useState, useRef, Fragment } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import ContentRightMembersCard from './contentRightMembersCard'
import { Spinner } from '@zio/components'
import { RiSearchLine, RiEyeOffLine, RiUser3Line } from "react-icons/ri"
import { useAppSelector } from '@zio/shared/redux/hooks'
import { useParams } from 'react-router-dom'

const ContentRightMembers = () => {
  const { searchTxt } = useAppSelector((state)=>state.band)
  const [channelMembers, setChannelMembers] = useState([]) // 채널맴범들
  const [searchUser, setSearchUser] = useState([]) // 검색결과
  const [loading, setLoading] = useState(false)
  const currentMessage = useRef(null)
  const params = useParams()

  const handleChannelMembers = async() => {
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/channelMembers`
    try{
      setLoading(true)
      const response = await axios.post(URL,{
          channelId: params.channelId
      })
      setLoading(false)
      setChannelMembers(response.data.data)
    }catch(error){
      toast.error(error?.response?.data?.message)
    }
  }
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
    console.log('찾아줘')
    handleChannelMembers()
  },[params.channelId]) // 검색어가 변경될때 마다

  useEffect(()=>{
    if (currentMessage.current){
      currentMessage.current?.scrollIntoView({block:'start'}) //behavior:'smooth'는 크롬에서 동작하지 않음
    }
  },[searchUser]) //검색결과가 바뀔때 마다

  useEffect(()=>{
    console.log('찾아줘')
    handleSearchUser()
  },[searchTxt]) // 검색어가 변경될때 마다

  return (
    <div className="pd-y-20 pd-x-10" ref={currentMessage}>
      <div className="d-flex justify-content-between align-items-center pd-x-10">
        <span className="tx-10 tx-uppercase tx-medium tx-color-03 tx-sans tx-spacing-1">
          {`${searchTxt.length===0 ? "Members List" : "검색 결과"}`}
        </span>
        <a className="chat-btn-add">
          <span data-bs-toggle="tooltip">
            {searchTxt.length===0 && (<RiUser3Line size={20}/>)}
            {searchTxt.length!==0 && (<RiSearchLine size={20}/>)}
          </span>
        </a>
      </div>
      
      <div className="chat-member-list">
        {
          searchTxt.length === 0 && !params.channelId && !loading && (
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
          channelMembers.length !==0 && searchTxt.length === 0 && !loading && (
            channelMembers.map((user,index)=>{
              return(
                <ContentRightMembersCard 
                  channelId={params.channelId} 
                  user={user} 
                  isMember={true}
                  setChannelMembers={setChannelMembers}                  
                />                  
              )
            })
          ) 
        }
        {
          searchUser.length !==0 && !loading && (
            searchUser.map((user,index)=>{
              // let isMember = channelMembers.includes(user._id)
              const isMember = channelMembers.some(u => u._id == user._id)
              return(
                <ContentRightMembersCard 
                  channelId={params.channelId} 
                  user={user} 
                  isMember={isMember}
                  setChannelMembers={setChannelMembers}                  
                />
              )
            })
          ) 
        }
      </div>
    </div>
  )
}

export default ContentRightMembers