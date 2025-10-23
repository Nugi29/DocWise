import express from 'express';
import { bookAppointment, cancelAppointment, getProfile, listAppointment, loginUser, paymentRazorpay, registerUser, updateProfile, verifyRazorpayPayment } from '../controllers/userController.js';
import authUser from '../middlewares/AuthUser.js';
import upload from '../middlewares/multer.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/get-profile', authUser, getProfile);
router.post('/update-profile', upload.single('image'), authUser, updateProfile);
router.post('/book-appointment', authUser, bookAppointment);
router.get('/appointments', authUser, listAppointment);
router.post('/cancel-appointment', authUser, cancelAppointment);
router.post('/payment-razorpay', authUser, paymentRazorpay);
router.post('/verifyRazorpay', authUser, verifyRazorpayPayment);

export default router;
