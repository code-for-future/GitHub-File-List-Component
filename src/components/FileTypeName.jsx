import FileIcon from "./FileIcon";
import FileName from "./FileName";
const FileTypeName=({file})=>{
    return(
        <>
      <FileIcon file={file}/>
      <FileName file={file}/>
        </>
    )
}//prop passed by FileListItem
export default FileTypeName;