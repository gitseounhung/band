import React from 'react'

const SettingMainPage = () => {
  return (

      <div className="content content-components">
        <div className="container">
          <ol className="breadcrumb df-breadcrumbs mg-b-10">
            <li className="breadcrumb-item"><a href="#">Components</a></li>
            <li className="breadcrumb-item active" aria-current="page">Introduction</li>
          </ol>

          <h1 className="df-title">Introduction</h1>
          <p className="df-lead">Get started with over a dozen reusable components built on top of Bootstrap with styles enhancement and additional components and options.</p>

          <div className="row tx-14">
            <div className="col-sm-6">
              <div className="bg-white bd pd-20 pd-lg-30 ht-sm-300 d-flex flex-column justify-content-end">
                <div className="mg-b-25"><i data-feather="grid" className="wd-50 ht-50 tx-gray-500"></i></div>
                <h5 className="tx-inverse mg-b-20">Grid System</h5>
                <p className="mg-b-20">Use Bootstrap's powerful mobile-first flexbox grid to build layouts of all shapes and sizes.</p>
                <a href="#" className="tx-medium d-flex align-items-center gap-1">View Grid System <ion-icon name="arrow-forward-outline"></ion-icon></a>
              </div>
            </div>
            <div className="col-sm-6 mg-t-20 mg-sm-t-0">
              <div className="bg-white bd pd-20 pd-lg-30 ht-sm-300 d-flex flex-column justify-content-end">
                <div className="mg-b-25"><i data-feather="layers" className="wd-50 ht-50 tx-gray-500"></i></div>
                <h5 className="tx-inverse mg-b-20">UI Elements</h5>
                <p className="mg-b-20">UI Elements are those elements that can be found in any page with a single function and that can exist alone.</p>
                <a href="#" className="tx-medium d-flex align-items-center gap-1">View Elements <ion-icon name="arrow-forward-outline"></ion-icon></a>
              </div>
            </div>
            <div className="col-sm-6 mg-t-20 mg-sm-t-25">
              <div className="bg-white bd pd-20 pd-lg-30 ht-sm-300 d-flex flex-column justify-content-end">
                <div className="mg-b-25"><i data-feather="edit-3" className="wd-50 ht-50 tx-gray-500"></i></div>
                <h5 className="tx-inverse mg-b-20">Forms</h5>
                <p className="mg-b-20">Examples and usage guidelines for form control styles, layout options, and custom components...</p>
                <a href="#" className="tx-medium d-flex align-items-center gap-1">View Forms <ion-icon name="arrow-forward-outline"></ion-icon></a>
              </div>
            </div>
            
          </div>

          <footer className="content-footer">
            <div>
              <span>&copy; 2023 DashForge v1.0.0. </span>
              <span>Made by <a href="http://themepixels.me">ThemePixels</a></span>
            </div>
            <div>
              <nav className="nav">
                <a href="#" className="nav-link">Licenses</a>
                <a href="#" className="nav-link">Change Log</a>
                <a href="#" className="nav-link">Get Help</a>
              </nav>
            </div>
          </footer>

        </div>
      </div>    

  )
}

export default SettingMainPage