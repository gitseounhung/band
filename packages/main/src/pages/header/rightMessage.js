import FeatherIcon from 'feather-icons-react';
import { Dropdown, DropdownMenu } from '@zio/components'

const RightMessage = () => {

  return (
    <Dropdown className="dropdown dropdown-message">
      <a href="#" className="dropdown-link new-indicator" data-bs-toggle="dropdown">
        <FeatherIcon icon="message-square"/>
        <span>5</span>
      </a>
      <DropdownMenu className="dropdown-menu dropdown-menu-end" data-bs-popper="static">
        <div className="dropdown-header">New Messages</div>
        <a href="#" className="dropdown-item">
          <div className="media">
            <div className="avatar avatar-sm avatar-online"><img src="https://placehold.co/500" className="rounded-circle" alt="" /></div>
            <div className="media-body mg-l-15">
              <strong>Socrates Itumay</strong>
              <p>nam libero tempore cum so...</p>
              <span>Mar 15 12:32pm</span>
            </div>
          </div>
        </a>
        <a href="#" className="dropdown-item">
          <div className="media">
            <div className="avatar avatar-sm avatar-online"><img src="https://placehold.co/500" className="rounded-circle" alt="" /></div>
            <div className="media-body mg-l-15">
              <strong>Joyce Chua</strong>
              <p>on the other hand we denounce...</p>
              <span>Mar 13 04:16am</span>
            </div>
          </div>
        </a>
        <a href="#" className="dropdown-item">
          <div className="media">
            <div className="avatar avatar-sm avatar-online"><img src="https://placehold.co/500" className="rounded-circle" alt="" /></div>
            <div className="media-body mg-l-15">
              <strong>Althea Cabardo</strong>
              <p>is there anyone who loves...</p>
              <span>Mar 13 02:56am</span>
            </div>
          </div>
        </a>
        <a href="#" className="dropdown-item">
          <div className="media">
            <div className="avatar avatar-sm avatar-online"><img src="https://placehold.co/500" className="rounded-circle" alt="" /></div>
            <div className="media-body mg-l-15">
              <strong>Adrian Monino</strong>
              <p>duis aute irure dolor in repre...</p>
              <span>Mar 12 10:40pm</span>
            </div>
          </div>
        </a>
        <div className="dropdown-footer"><a href="#">View all Messages</a></div>
      </DropdownMenu>
    </Dropdown>
  )
}

export default RightMessage