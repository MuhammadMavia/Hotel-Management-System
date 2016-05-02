var Schema = mongoose.Schema;

var SalesSchema = new Schema({
    date : {type: Date, default: Date.now},
    cashier : {type: Schema.ObjectId, ref: 'User'},
    items : [
        {
            item:{
                type: Schema.ObjectId,
                ref: 'Item'
            },
            quantity: Number
        }
    ]
});

var Sales = mongoose.model('Sales', SalesSchema);