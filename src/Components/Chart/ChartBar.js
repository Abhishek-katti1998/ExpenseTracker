import './ChartBar.css'
function ChartBar(props){
    let colorHeight='0%'
    if(props.maxValue>0){
        colorHeight=Math.round((props.value/props.maxValue)*100)+'%'
        console.log(colorHeight)
    }
return (
    <div className="chart-bar">
       <div className='chart-bar__inner '>
            <div className='chart-bar__fill' style={{height:colorHeight}}></div>
       </div>
       <div className="chart-bar__label">{props.label}</div>
    </div>
)
}
export default ChartBar;