var generateButton = document.getElementById('generate')
var messageBox = document.getElementById('flirtyMessage')

function flirt() {
    let greeting = ['Hayyyy','Why hello there','Hi','Hey ','Ciao','Sup','Howdy','What\'s cookin\'']
    let noun = ['you sexy thang', 'good lookin\'','you absolute specimen','baby','darlin\'','sweetie','bella']
    let action = ['grab a drink','meet for coffee','get to know each other better','go on a date','go eat samples at Costco','go out for a bello apperitivo']
    let timeframe = ['after work','tomorrow','this weekend','Friday night','after church','after school']
    let greetingIndex = Math.floor(Math.random()*greeting.length)
    let nounIndex = Math.floor(Math.random()*noun.length)
    let actionIndex = Math.floor(Math.random()*timeframe.length)
    let timeframeIndex = Math.floor(Math.random()*action.length)
    // messageBox.innerHTML=`${greetingIndex} ${nounIndex} ${actionIndex} ${timeframeIndex}`
    // messageBox.innerHTML=greeting.length
    const flirtyMessage = `${greeting[greetingIndex]} ${noun[nounIndex]}, would you like to ${action[actionIndex]} ${timeframe[timeframeIndex]}?`
    messageBox.innerHTML=flirtyMessage
}