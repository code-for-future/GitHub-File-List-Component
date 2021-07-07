import Commit from "./Commit"
import FileTypeName from "./FileTypeName"
import Time from "./Time"
const FileListItem=({file})=>{
    return(
        <div className="filelist">
             <FileTypeName file={file}/>
        <Commit commit={file.commit}/>
<Time file={file}/>
        </div>
       
    );
}
export default FileListItem;