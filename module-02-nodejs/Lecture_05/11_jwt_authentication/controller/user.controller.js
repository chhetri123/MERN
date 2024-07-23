import userModel from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const editUser = async (req, res) => {
  const { name, address, phoneNumber } = req.body;

  const updatedUser = await userModel.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { name, address, phoneNumber } },
    { new: true, upsert: true }
  );

  res.json(updatedUser);
};

//login cotroller
export const loginUser = async (req, res) => {
  const finduser = await userModel
    .findOne({ email: req.body.email })
    .select("+password");
  if (!finduser) return res.json({ msg: "User doesnot exist" });
  const currentPassword = finduser.password;
  const comparePassword = bcrypt.compareSync(
    req.body.password,
    currentPassword
  );
  if (!comparePassword) return res.json({ msg: "Invalid password!" });
  const token = jwt.sign({ _id: finduser._id }, config.jwt_secret, {
    issuer: config.jwt_issuer,
    expiresIn: config.jwt_expiry_date,
  });

  return res.json({ msg: "Logged in successfully", accessToken: token });
};

export const registerUser = async (req, res) => {
  const previousUser = await userModel.findOne({ email: req.body.email });
  if (previousUser) return res.json({ msg: "User email already exist" });
  const currentPassword = req.body.password;
  //PASSWORD HASHED
  const hashedPassword = bcrypt.hashSync(currentPassword, 10);
  const saveUser = await userModel.create({
    ...req.body,
    password: hashedPassword,
  });
  res.json(saveUser);
};

export const getUser = async (req, res) => {
  const getUser = await userModel.find();
  res.json(getUser);
};

export const deleteUser = async (req, res) => {
  const removeUser = await userModel.findOneAndDelete({ _id: req.params.id });
  res.json(removeUser);
};

// REFERENCE
// hello123 => onfdlsakfj432 => hello123 //encryption => keybased encryption = symmatric encryption => assymentric encryption
// symetric encryption => key based encryption

/*
  one => hash using symmetric encryption
  ciser cipher
  one => 6
  a b c d e f g h i j k l m n o p q r s t u v w x y z
  0 1 2 3 4 5 6 7 8 9 10 11 12 13 .... 25

  one => 6 encrypt
  0 => 14 + 6 => 20 = u
  n => n + 6 => p
  e => n + 6 => x
  one => upx => 6 

  6 depty

  6

  bcryptjs



  hashing

  sha256
  message,digest,salt
  // hello123,9x9x9fud90x809890,x,x,cjfsdlkjfkl
  hello123 => flkdasjlfkajdskl;fjadl;kfjasdljflaksdjfladsjflasdjlfajsjfalsdjffajdslfjaldsjf
fkdlajslfkasjflkajsd
fjldaskjfaldksj => fdlakssjflkasjdlfjaslfjlajfladsjfljad
  */
