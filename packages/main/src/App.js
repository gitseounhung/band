import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAppSelector } from '@zio/shared/redux/hooks';
import '@zio/shared/css/dashforge.css';

function App() {
  const { darkMode } = useAppSelector((state)=>state.theme)
  if (darkMode===undefined || darkMode) {
    import('@zio/shared/css/skin.dark.css').then(() => {
      console.log('dark');
    });
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false}/>
      <Outlet/>
    </>
  );
}

export default App;
