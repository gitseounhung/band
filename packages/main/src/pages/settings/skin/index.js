import React from 'react'
import {useAppDispatch} from '@zio/shared/redux/hooks'
import { toggleDarkMode } from '@zio/shared/redux/slices/theme'

const SettingsSkinPage = () => {
  const dispatch = useAppDispatch()
  const handleDark = (dark) => {
    console.log('dark',dark)
    dispatch(toggleDarkMode(dark))
    window.location.reload()
  }

  return (

      <div className="content content-components">
        <ol className="breadcrumb df-breadcrumbs mg-b-10">
          <li className="breadcrumb-item"><a href="#">Collections</a></li>
          <li className="breadcrumb-item active" aria-current="page">Page Layouts</li>
        </ol>
        <h1 className="df-title">Page Layouts</h1>
        <p className="df-lead">현재, 다크모드 및 라이트모드 둘 중에 하나를 사용하실 수 있습니다.</p>

        <div className="row">

          <div className="pd-y-20 bd-t">
            <label className="tx-sans tx-10 tx-uppercase tx-bold tx-spacing-1 tx-color-02 mg-b-15">Skin Mode</label>
            <div className="row row-xs">
              <div className="col-4">
                <a className="df-mode df-mode-default" data-title="classic"></a>
                <span className="df-skin-name">Classic</span>
              </div>
              <div className="col-4">
                <a onClick={()=>handleDark(false)} href="#" className="df-mode df-mode-light" data-title="light">
                  <span className="bg-ui-01"></span>
                  <span className="bg-ui-02"></span>
                </a>
                <span className="df-skin-name">Light</span>
              </div>
              <div className="col-4">
                <a className="df-mode df-mode-cold" data-title="cool">
                  <span className="bg-primary op-1"></span>
                  <span className="bg-primary op-2"></span>
                </a>
                <span className="df-skin-name">Cool</span>
              </div>
              <div className="col-4 mg-t-15">
                <a onClick={()=>handleDark(true)} href="#" className="df-mode df-mode-dark active" data-title="dark">
                  <span className="bg-gray-700"></span>
                  <span className="bg-gray-900"></span>
                </a>
                <span className="df-skin-name tx-nowrap">Dark</span>
              </div>
            </div>
          </div>

          <div className="pd-y-20 bd-t">
            <label className="tx-sans tx-10 tx-uppercase tx-bold tx-spacing-1 tx-color-02 mg-b-15">Navigation Skin</label>
            <div className="row row-xs">
              <div className="col-4">
                <a className="df-skin df-skin-default" data-title="default"></a>
                <span className="df-skin-name">Default</span>
              </div>
              <div className="col-4">
                <a className="df-skin df-skin-deepblue" data-title="deepblue">
                  <span></span>
                  <span></span>
                </a>
                <span className="df-skin-name">Deep Blue</span>
              </div>
              <div className="col-4">
                <a className="df-skin df-skin-charcoal" data-title="charcoal">
                  <span></span>
                  <span></span>
                </a>
                <span className="df-skin-name">Charcoal</span>
              </div>
              <div className="col-4 mg-t-15">
                <a className="df-skin df-skin-gradient1" data-title="gradient1">
                  <span></span>
                  <span></span>
                </a>
                <span className="df-skin-name">Gradient 1</span>
              </div>
            </div>
          </div>

          <div className="pd-y-20 bd-t">
            <label className="tx-sans tx-10 tx-uppercase tx-bold tx-spacing-1 tx-color-02 mg-b-15">Navigation Layout</label>
            <div className="row row-xs">
              <div className="col">
                <a className="btn btn-xs btn-outline-secondary btn-uppercase btn-block">Horizontal</a>
              </div>
              <div className="col">
                <a className="btn btn-xs btn-outline-secondary btn-uppercase btn-block">Vertical</a>
              </div>
            </div>
          </div>

          <div className="pd-y-20 bd-t">
            <label className="tx-sans tx-10 tx-uppercase tx-bold tx-spacing-1 tx-color-02 mg-b-15">Font Family Base</label>
            <div className="row row-xs">
              <div className="col-7">
                <a id="setFontBase" className="btn btn-xs btn-outline-secondary active">IBM Plex Sans</a>
              </div>
              <div className="col-5">
                <a id="setFontRoboto" className="btn btn-xs btn-outline-secondary">Roboto</a>
              </div>
            </div>
          </div>

        </div>
      </div>    
    
  )
}

export default SettingsSkinPage