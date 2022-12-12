const mongoose = require("mongoose")
const moment = require('moment-timezone');

var mongoosePaginate = require('mongoose-paginate');

const schema = mongoose.Schema({
   
	taskName: String,
	taskDescription: String,
    dueDate: {
        type: Date,
      
        validate: [
            function (value) {
                return this.period < value;
            }
        ],
        get: getdateFormatting,
        set: setdateFormatting,
    },
    period: Date, 
    periodType: {
        type: String,
        enum: {
          values: ['Quarterly', 'Monthly','Yearly'],
          message: '{VALUE} is not supported'
        }
      },
    taskList: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'taskList'
    }
})
// Enable Mongoose getter functions
schema.set('toObject', { getters: true });
schema.set('toJSON', { getters: true });
schema.plugin(mongoosePaginate);

function getdateFormatting(d){
    const date = new Date(d);
    const momentDate = moment(date.toISOString());
    return moment(momentDate).format('DD-MM-YYYY');
}
function setdateFormatting(d){
    const date = new Date(d);
    const momentDate = moment(date.toISOString());
    return moment(momentDate).format('YYYY-MM-DD');
}




const task = mongoose.model("task", schema)
module.exports = {task}