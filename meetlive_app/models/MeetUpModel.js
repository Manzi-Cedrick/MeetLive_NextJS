const mongoose = require('mongoose');
const MeetModel = mongoose.Schema({
    title: {type: String,required: true},
    address: {type: String,required: true},
    description: {type: String,required: true},
    image: {type: String,default: 'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/pool-v15035002-1440-1024x683.jpg'}
})
const MeetUp = mongoose.models?.MeetData || mongoose.model('MeetData',MeetModel);
export default MeetUp;