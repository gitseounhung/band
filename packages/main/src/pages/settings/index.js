import { Outlet } from 'react-router-dom';
import '@zio/shared/css/dashforge.demo.css';
import Header from '../header';
import SettingsSidebarMenu from './sidebarMenu'

function Settings() {
  return (
    <div>
      <Header />
      <SettingsSidebarMenu/>
      <Outlet/>  
    </div>
  );
}

export default Settings;
