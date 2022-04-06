const { default: axios } = require('axios');

exports.makeRequest = async () =>{
    var date = formatedTimestamp();
    console.log(date)
    const filterDate = {"created_at:gt":`${date}`}
    
    const config = {
        method: 'get',
        url: `https://api.jotform.com/form/${process.env.FORM_ID}/submissions?apiKey=${process.env.API_KEY}`,
        params: {
            limit: process.env.FORM_LIMIT,
            filter: filterDate,
            orderBy: process.env.FORM_ORDERBY
        }
    }
    let res = await axios(config);
    const forms = res.data.content;

    if(forms.length === 0){
        return 0;
    }
    if(forms.length){
        return forms;
    }
}

//Get the previous day 
const formatedTimestamp = ()=> {
    const today = new Date();
    const yestarday = new Date(today)
    yestarday.setDate(yestarday.getDate()-1);
    const date = yestarday.toISOString().split('T')[0];
    const time = yestarday.toTimeString().split(' ')[0];
    return `${date} ${time}`
  }



