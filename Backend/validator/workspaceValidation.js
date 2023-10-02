const z = require('zod');

const workspaceSchema = z.object ({
    WorkspaceName : z
        .string({required_error:"Name is required"})
        .trim()
        .min(3, {message:"Name must be atleast 3 characters"})
        .max(25, {message:"Name is exceeded at 25 characters"}),
    WorkspaceDescription : z.string()
        .trim()
        .regex(/^[a-zA-Z\s]*$/, { message: "Description should contain only alphabets" }),
    BoardName : z.string()
        .trim()
        .regex(/^[a-zA-Z\s]*$/, { message: "Board name should contain only alphabets" })
})


module.exports = workspaceSchema;