const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/unishare');
    const hashedPassword = await bcrypt.hash('1234', 10);
    const user = new User({ username: 'shan', password: hashedPassword, role: 'admin' });
    await user.save();
    console.log('Admin user created: shan / 1234');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

createAdmin();