const mongoose = require("mongoose");

const leadSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    lead_mobile: {
        type: String,
        required: true,
    }
});

leadCollection = mongoose.model('leadmon', leadSchema)

module.exports={
    createData: (inputData) => {
                 console.log(inputData);
       userData= new leadCollection(inputData);
       userData.save(function(err, data){
         if (err) throw err;
          return data;
       });
    }
}