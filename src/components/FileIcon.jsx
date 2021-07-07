
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile,faFolder } from "@fortawesome/free-solid-svg-icons";
const FileIcon=({file})=>{
return(
  <div className="icon">
      {file.type==="folder"?<FontAwesomeIcon icon={faFolder} className="fasfolder-icon"/>:<FontAwesomeIcon icon={faFile} className="fasfile-icon"/>}
   </div>
)
}
   
export default FileIcon;