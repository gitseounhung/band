const DropdownMenu = ({children, className, show, ...restProps}) => {
  return (
    <div 
      className={`${className} ${show ? "show" : ""}`}
      {...restProps}
    >
      {children}
    </div>
  )
}

export default DropdownMenu