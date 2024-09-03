import React, { Children, useCallback, useState } from 'react'
import { useClickOutside } from '@zio/shared/hooks'

const Dropdown = ({children, className, ...restProps}) => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow((prev)=>!prev)
  }
  const onClose = useCallback(()=>{
    setShow(false);
  },[])
  const containerRef = useClickOutside(onClose)

  const renderChild = Children.map(children, (el) => {
    if (el.props.className.includes('dropdown-link')) {
      return (
        <el.type 
          onClick={handleClick}
          {...el.props}
        /> 
      )  
    }
    if (el.props.className.includes('dropdown-menu')) {
      return (
        <el.type
            {...el.props} // 리엑트에서는 이것을 children으로 받나보다.
            show={show}
        />
      )  
    }

  });

  return (
    <div 
      className={`${className} shindalsoo`}
      ref={containerRef}
      {...restProps}
    >
      {renderChild}
    </div>
  )
}

export default Dropdown