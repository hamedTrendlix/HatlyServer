// Create Token and saving in cookie

const sendToken = async(user, statusCode, res) => {
  const token = await user.generateJWTToken();
  // console.log(token)

  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    // secure: false,
    path : '/',
    sameSite : 'strict'
  };
  user.tokens = null
  user.password = null
  user.resetLink = null
  res.status(statusCode).cookie("access_token", token, options).json({
    success: true,
    body:user,
    token,
  });
  console.log(1)
};

module.exports = sendToken;