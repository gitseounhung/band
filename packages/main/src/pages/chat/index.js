import '@zio/shared/css/dashforge.chat.css';
import Header from '../header'
import BodyChat from './body'
import { useAppSelector, useAppDispatch } from '@zio/shared/redux/hooks'
import { toggleModal } from '@zio/shared/redux/slices/ui'
import { ModalCreateChannel, ModalInvitePeople } from '@zio/components'
import { ModalCommon } from '@zio/components'
import { Outlet } from 'react-router-dom';

function Chat() {
  const { rightSidebar } = useAppSelector((state)=>state.chatUI)    
  const { modal } = useAppSelector((state)=>state.ui)    
  const dispatch = useAppDispatch()  
  const handleModal = () => {
    dispatch(toggleModal({modal:""}))
  }

  return (
    <div className={`app-chat ${rightSidebar ? "show-sidebar-right" : ""}`}>
      <Header />
      <BodyChat /> 
      {Outlet}
      <ModalInvitePeople modal={modal} onClose={handleModal}/>           
      <ModalCreateChannel modal={modal} onClose={handleModal}/>           
      <ModalCommon modal={modal} onClose={handleModal}/>
    </div>
  );
}

export default Chat;
