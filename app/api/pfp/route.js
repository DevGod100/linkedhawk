import { connectToDB } from "@utils/database";
import User from "@models/user";

export const PUT = async (req, res) => {
    const { userId, imageUrl } = req.body;
    await connectToDB();
    // Perform the necessary logic to update the user's profile image
    // using the provided userId and imageUrl
  
    // Example code using a database (e.g., MongoDB) with Mongoose
    User.findByIdAndUpdate(userId, { image: imageUrl }, { new: true })
      .then((updatedUser) => {
        // Return the updated user as a response
        res.json(updatedUser);
      })
      .catch((error) => {
        // Handle any errors
        res.status(500).json({ error: 'Failed to update user profile image' });
      });
    }

    ex