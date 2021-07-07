const dayjs=require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime);
const Time=({file})=>{
    const now=dayjs();

    return(
<div className="time">
    {dayjs(file.updated_at).from(now)}
</div>
    );
}
export default Time;