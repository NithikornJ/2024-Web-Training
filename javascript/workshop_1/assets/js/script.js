var stataDate = '1 Jan 2023'

const formatDate=(time)=>{
    return (time<10)? "0"+time:""+time
}

function calDAte(inpDate){
    let targetDate = new Date(inpDate)
    let currentDate = new Date()
    let totalSeconds =  (targetDate-currentDate)/1000

    let days = Math.floor(totalSeconds/3600/24)
    let hours = Math.floor(totalSeconds/3600%24)
    let minute = Math.floor(totalSeconds/60)%60
    let seconds = Math.floor(totalSeconds%60)

    let dateObj = {
        days: formatDate(days),
        hours: formatDate(hours),
        minute: formatDate(minute),
        seconds: formatDate(seconds),
    }
    console.log(dateObj)

    document.getElementById('text-day').innerHTML = dateObj.days
    document.getElementById('text-hour').innerHTML = dateObj.hours
    document.getElementById('text-minute').innerHTML = dateObj.minute
    document.getElementById('text-second').innerHTML = dateObj.seconds
}

var changeState =(day)=>{
    let ctEl = document.getElementById('content')
    ctEl.removeAttribute('class')
    if(day=='newyear'){
        stataDate = '1 Jan 2023'
        ctEl.classList.add('hny')
    }else if(day=="birthday"){
        stataDate = '25 Jan 2023'
        ctEl.classList.add('hbd')
    }else if(day=="songkarn"){
        stataDate = '13 Apr 2023'
        ctEl.classList.add('sk')
    }
}

calDAte()
setInterval(()=>calDAte(stataDate),500)