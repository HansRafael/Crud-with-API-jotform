const { default: axios } = require('axios');
const fs = require('fs');
const path = require('path');

exports.makeRequest = async () =>{
    {
        const config = {
            method: 'get',
            url: `https://api.jotform.com/form/${process.env.FORM_ID}/submissions?apiKey=${process.env.API_KEY}`,
            params: {
                limit: process.env.FORM_LIMIT,
                filter: process.env.FORM_FILTER,
                orderBy: process.env.FORM_ORDERBY
                
            }
        }
        
        let res = await axios(config);
        const forms = res.data.content;
        //toJSON(forms);
        return forms;
    }

}






const toJSON = (data) =>{
    pathArq = path.resolve(__dirname, "test.json")
    fs.writeFile(pathArq, JSON.stringify(data,null,2), (err) =>{
        if(err){
            console.log(err)
        }
        console.log('data written')
    })
}


