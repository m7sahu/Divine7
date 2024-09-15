const express=require('express');
const router=express.Router({mergeParams: true});
const wrapAsync = require("../utlis/wrapAsync.js");
const {validateReview,isLoggedIn,isReviewAuthor}=require('../middleware');
const reviewController=require('../controllers/reviews');

//Post Route

router.post('/',isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//Delete Review Route

router.delete('/:reviewId',isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview   ));

module.exports=router;