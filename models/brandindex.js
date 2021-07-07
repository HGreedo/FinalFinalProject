const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const brandSchema = new Schema({ 
    name: { type: String, required: true},
    id: { type: String, required: true},
    address: { type: String, required: true},
    website: { type: String, required: true},
    description: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: "Password is required", validate: [({ length }) => length >= 6, "Password should be longer."]} 
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;

// const LoginModel = ({
//     name: string,
//   password: string,
// });

// export defaul model <LoginModel>

// export type BrandModel = mongoose.Document & {
//     name: string; 
//     username: string;
//     email: string; 
//     password: string; 
//     avatar: string;
//     created_at: Date; 
//   };

//   export default model<BrandModel>("Brand", brandSchema);




// const brandlist = new Schema ({
//     brand = [{ type: Schema.Types.ObjectId, ref: 'Brand', }]
// });

// const Blist = mongoose.model('Brand List', brandlist);
// module.exports = Blist;