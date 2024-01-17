const { Router } = require("express");
const router = Router();
const { User, Course } = require('../db');
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username: username,
        password: password,
        // purchased_courses: []
    });

    res.json({
        msg: "user created successfully",
    })
});

router.get('/courses',userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find();
    res.json({courses : courses});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    // const courseId = req.params.courseId;
    // const courseExists = Course.findOne({_id: courseId});

    // if (courseExists) {

    // }




    const courseId = req.params.courseId; console.log(courseId)
    const username = req.headers.username;

    const courseExists = await Course.findOne({_id: courseId});

    if (courseExists) {
        await User.updateOne({
            username: username
        }, {
            "$push": {
                purchasedCourses: courseId
            }
        })
        res.json({
            message: "Purchase complete!"
        })
    }
    else{
        res.json({
            msg: "yo theres some error in finding the course to add"
        })
    }
        

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic


    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router