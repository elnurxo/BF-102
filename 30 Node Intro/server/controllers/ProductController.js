const fakeData = require('../data');
module.exports = {
    get: (req,res)=>{
        if (fakeData.length === 0) {
            res.status(204).send("no content");
            return;
          } else {
            let{name} = req.query;
            console.log('query: ',name);
            if (name) {
              res.send(fakeData.filter((x)=>x.name==name));
            }
            res.status(200).send(fakeData);
            return;
          }
    }
}