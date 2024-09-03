import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { StyledWrap } from './style'

const ScrollBar = ({children, ...rest}) => {
    return (
        <StyledWrap {...rest} className="scrollbar">
            <PerfectScrollbar>{children}</PerfectScrollbar>
        </StyledWrap>
    )
}

export default ScrollBar