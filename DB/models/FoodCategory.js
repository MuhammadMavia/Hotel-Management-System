var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    code: Number,
    name: String,
    items : [{type: Schema.ObjectId, ref: 'Item', default: []}]
});

var Category = mongoose.model('Category', CategorySchema);