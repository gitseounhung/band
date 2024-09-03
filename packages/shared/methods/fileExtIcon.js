/**
 * 아래 사이트에서 이미지를 찾으세요.
 * https://react-icons.github.io/react-icons/icons/ri/
 */
import { 
  RiFileExcel2Line, //excel
  RiFileWord2Line, //doc,word
  RiImageFill, //이미지계열
  RiFilePdf2Line, //pdf
  RiQuestionLine, //알수없을때
} from "react-icons/ri"

export const FileExtIcon = ({fileName}) => {
  let ext =  fileName.split('.').pop();
  switch(ext){
    case ['xls','xlsx'].find(name=>name===ext):
      return <RiFileExcel2Line size={20}/>
    case ['doc','docx'].find(name=>name===ext):
      return <RiFileWord2Line size={20}/>
    case ['gif','jpg','jpeg','png'].find(name=>name===ext):
      return <RiImageFill size={20} className='text-primary'/>
    case ['pdf'].find(name=>name===ext):
      return <RiFilePdf2Line size={20}/>
             
    default:
      return <RiQuestionLine size={20}/>
  }
}