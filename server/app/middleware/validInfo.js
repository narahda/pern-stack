module.exports = function(req, res, next) {
    const { username, pwd } = req.body;
  
    function validEmail(username) {
      return /^[a-zA-Z0-9_]*$/.test(username);
    }
  
    if (req.path === "/register") {
      console.log(!username.length);
      if (![username, pwd].every(Boolean)) {
        return res.status(401).json("Missing Credentials");
      } else if (!validEmail(username)) {
        return res.json("Invalid username!");
      }
    } else if (req.path === "/login") {
      if (![username, pwd].every(Boolean)) {
        return res.status(401).json("Missing Credentials");
      } else if (!validEmail(username)) {
        return res.json("Invalid username!");
      }
    }
  
    next();
  };