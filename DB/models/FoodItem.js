var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    code: Number,
    name: String,
    category : {type: Schema.ObjectId, ref: 'Category'},
    price: Number
});

var Item = mongoose.model('Item', ItemSchema);