const z = require('zod');

const signUpSchema = z.object ({
    FullName : z
        .string({required_error:"Name is required"})
        .trim()
        .min(3, {message:"Name must be atleast 3 characters"})
        .max(25, {message:"Name is exceeded at 25 characters"}),
    UserEmail : z
        .string({required_error:"email is required"})
        .trim()
        .email({message:"Invalid email address"})
        .min(3, {message:"Email must be atleast 3 characters and @"})
        .max(255, {message:"Email is exceeded at 255 characters"}),
    Password : z
        .string({required_error:"Password is required"})
        .trim()
        .min(7, {message:"Password must be atleast 6 and between 12 characters"})
        .max(12, {message:"Password is exceeded at 12 characters"}),
})


module.exports = signUpSchema;