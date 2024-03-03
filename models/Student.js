const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;
// const passportLocalMongoose = require("passport-local-mongoose");

const Student = new mongoose.Schema({
    //아이디
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    //비밀번호
    password: {
        type: String,
        required: true
    },
    //이름
    name: {
        type: String,
        required: true
    },
    //연락처
    phone: {
        type: String
    },
    //담당 관리자
    admin: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    }],
});

// Student.pre("save", function (next) { //유저 모델의 유저 정보를 저장하기 전에 정보 가져오기 
//     let user = this; //스키마 안 name ~~ tokenEXp를 가리킴
//     if (user.isModified("password")) { //모델 안에 field 중 password가 변화 할 때만 bcrypt를 사용하여 암호화 한다. 
//         bcrypt.genSalt(saltRounds, function (err, salt) {
//             bcrypt.hash(user.password, salt, function (err, hash) {
//                 user.password = hash;
//                 next();
//             });
//         });
//     } else {
//         next();
//     }
// })

// //사용자 이름 정하기 
// Student.plugin(passportLocalMongoose, { usernameField: "userId" });

module.exports = mongoose.model("Student", Student);
