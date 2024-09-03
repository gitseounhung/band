import React from 'react'
import { useParams } from 'react-router-dom'
import SettingsMainPage from './main'
import SettingsSkinPage from './skin'

const SettingsPage = () => {
  const params = useParams()

  return (
    <>
      {
        params.page==='main' && (
          <SettingsMainPage/>
        )
      }
      {
        params.page==='skin' && (
          <SettingsSkinPage/>
        )
      }

    </>

  )
}

export default SettingsPage
