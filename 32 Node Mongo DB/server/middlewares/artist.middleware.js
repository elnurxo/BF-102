const artistSchema = require('../validations/artist.validation')

const artistPostValidation = (req,res,next)=>{
    const{body} = req;
    const{error} = artistSchema.validate(body);
    
    if (error===undefined) {
        next()
        return;
    }
    else{
        const{details} = error;
        const message = details.map((i)=>i.message).join(',');
        res.status(403).send({
            error: message
        })
    }
}

module.exports = artistPostValidation