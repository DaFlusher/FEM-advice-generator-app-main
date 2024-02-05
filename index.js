const advice = document.getElementById('advice');
const adviceId = document.getElementById('advice-id');
const adviceBtn = document.getElementById('advice-btn');

//fetch advice from api
const fetchAdvice = async()=>{
    const endpoint = 'https://api.adviceslip.com/advice';
    // const showAdvice = advice.innerHTML;
    try{
        const adviceslip = await fetch(endpoint);
        if(adviceslip.ok){
            const adviceResponse = await adviceslip.json();
            showAdvice(adviceResponse.slip.advice, adviceResponse.slip.id);
        }

    }
    catch(err){console.log(err)}
}


//adding an event listener
// adviceBtn.addEventListener('click', fetchAdvice);


//function to display advice ui
const showAdvice = (adviceText, idText)=>{
    advice.innerHTML = adviceText;
    adviceId.innerHTML = idText;
}

//refresh every 10seconds if user does not click on the button
setInterval(fetchAdvice,8000);