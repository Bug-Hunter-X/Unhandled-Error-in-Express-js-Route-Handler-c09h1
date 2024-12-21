const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // Validate user ID
    if (!/^[0-9]+$/.test(userId)) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }

    // ... database query to fetch user data ...
    const userData = await database.getUser(userId);

    if (!userData) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ user: userData });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});