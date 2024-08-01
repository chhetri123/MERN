# Social Media

User can register(unique based on email)
User can login ( session time 20day )

user schema
post schema
like schema

{fullname,email,password,bio,education,interest,address,jobs}

# Post

{
status:"private",
caption:"xypz",
image:"http:....",
user:"ObjectID"
}
{
status:{
type:string,
enum:['public','private'],
default:"public"
},
caption:String,
image:String,
user:{
type:mongoose.schema.types.objectId,
ref:"USER_MODEL"
},

}

# Like

{
post:{
type:mongoose.schema.types.objectid,
ref:'POST_MODEL_NAME'
},
user:{
type:mongoose.schema.types.objectid,
ref:'USER_MODEL_NAME'
}
}

1. Profile
2. Harek profile view ( afnu + arkako )
3. Post garna milcha ( text,image or both )
4. Post interaction ( like )

// user1,user2,user3

// condition => either caption or image or both ( but not empty )
{
status:Public,Private(enum) ( public => everyone can see, private ( only i can see )),
caption: String,
image:string | null
user: {type.objectId,rel:"User"}
}

//like
{
user:"rel",
post:"rel"
}
