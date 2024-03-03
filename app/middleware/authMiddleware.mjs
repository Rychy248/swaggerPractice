// middleware/authMiddleware.js

const authMiddleware = (req, res, next) => {
  // Your authentication logic here
  // Example: Check if user is logged in
  const isLoggedIn = true;
  if (isLoggedIn) {
    next(); // Pass control to the next middleware or route handler
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export default authMiddleware;
