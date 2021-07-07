import FileListItem from "./FileListItem";

const FileList=({files})=>{
    return(
<ul>
   {files.map(file=><li key={file.id}><FileListItem file={file}/></li>)}
</ul>
    );
}
export default FileList;