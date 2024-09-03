import FeatherIcon from 'feather-icons-react';
import { Dropdown, DropdownMenu } from '@zio/components'

const RightNotification = () => {

  return (
    <Dropdown className="dropdown dropdown-notification">
      <a href="#" className="dropdown-link new-indicator" data-bs-toggle="dropdown">
        <FeatherIcon icon="bell"/>
        <span>2</span>
      </a>
      <DropdownMenu className="dropdown-menu dropdown-menu-end" data-bs-popper="static">
        <div className="dropdown-header">Notifications</div>
        <a href="#" className="dropdown-item">
          <div className="media">
            <div className="avatar avatar-sm avatar-online"><img src="https://placehold.co/500" className="rounded-circle" alt="" /></div>
            <div className="media-body mg-l-15">
              <p>Congratulate <strong>Socrates Itumay</strong> for work anniversaries</p>
              <span>Mar 15 12:32pm</span>
            </div>
          </div>
        </a>
        <a href="#" className="dropdown-item">
          <div className="media">
            <div className="avatar avatar-sm avatar-online"><img src="https://placehold.co/500" className="rounded-circle" alt="" /></div>
            <div className="media-body mg-l-15">
              <p><strong>Joyce Chua</strong> just created a new blog post</p>
              <span>Mar 13 04:16am</span>
            </div>
          </div>
        </a>
        <a href="#" className="dropdown-item">
          <div className="media">
            <div className="avatar avatar-sm avatar-online"><img src="https://placehold.co/500" className="rounded-circle" alt="" /></div>
            <div className="media-body mg-l-15">
              <p><strong>Althea Cabardo</strong> just created a new blog post</p>
              <span>Mar 13 02:56am</span>
            </div>
          </div>
        </a>
        <a href="#" className="dropdown-item">
          <div className="media">
            <div className="avatar avatar-sm avatar-online"><img src="https://placehold.co/500" className="rounded-circle" alt="" /></div>
            <div className="media-body mg-l-15">
              <p><strong>Adrian Monino</strong> added new comment on your photo</p>
              <span>Mar 12 10:40pm</span>
            </div>
          </div>
        </a>
        <div className="dropdown-footer"><a href="#">View all Notifications</a></div>
      </DropdownMenu>
    </Dropdown>
  )
}

export default RightNotification