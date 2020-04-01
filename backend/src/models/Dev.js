const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    timestamps: true,
});

module.exports = model('Dev', DevSchema);

/*
{
    "likes": [],
    "dislikes": [],
    "_id": "5e837e01148f352ce038f911",
    "name": "Ramon Alves",
    "user": "RamonAlves1357",
    "bio": "Júnior em:\r\nPython, JS, React.",
    "avatar": "https://avatars3.githubusercontent.com/u/62886626?v=4",
    "createdAt": "2020-03-31T17:29:37.687Z",
    "updatedAt": "2020-03-31T17:29:37.687Z",
    "__v": 0
}

{
    "likes": [],
    "dislikes": [],
    "_id": "5e839bdb9605a306284f299a",
    "name": "Ciro Gomes",
    "user": "CiroGomess",
    "bio": "Desenvolvedor Web, Mobile e Designer",
    "avatar": "https://avatars0.githubusercontent.com/u/43193194?v=4",
    "createdAt": "2020-03-31T19:36:59.834Z",
    "updatedAt": "2020-03-31T19:36:59.834Z",
    "__v": 0
}
*/