
const Commit=({commit})=>{
    return(
        <div className="commit">
            {commit.message}
        </div>
    )
}//prop passed by FileListItem
export default Commit;