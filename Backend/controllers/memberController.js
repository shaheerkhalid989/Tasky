const Member = require('../models/memberModel');
const User = require('../models/userModel');
const workspace = require('../models/workspaceModel');
const axios = require('axios');

module.exports = {
    addMember,
    getAllMember,
    deleteAnyMember
}

async function addMember(req, res) {
    try {
        const {email} = req.body;
        const workspaceId = req.params.workspaceId;

        // Check if the email exists in the User table
        const user = await User.findOne({ UserEmail: email });
        // const userId = req.user.UserId;
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        // Fetch the workspace where the user will be added
        const workspaces = await workspace.findOne({ _id: workspaceId });
        if (!workspaces) {
            return res.status(404).json({ msg: 'Workspace not found' });
        }

        // Add the member to the workspace
        const member = await Member.create({
            email: email,
            workspaceId: workspaceId,
            userId: user._id, // Assuming _id is the user ID in your User table
        });

        // const savedMember = await member.save();
        if (!member) {
            return res.status(500).json({ msg: 'Failed to add member' });
        }

        return res.status(200).json({
            msg: `Successfully added ${email} as a member to workspace ${workspaceId}`,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getAllMember(req, res){
    try {
        const workspaceId = req.params.workspaceId;

        // Find all members belonging to the specified workspace
        const members = await Member.find({ workspaceId: workspaceId });

        if (!members || members.length === 0) {
            return res.status(404).json({ msg: 'No members found for this workspace' });
        }

        return res.status(200).json({ members: members });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// async function deleteAnyMember(req, res) {
//     try {
//         const memberId = req.params.memberId;

//         // Find the member by their unique ID and remove it
//         const deletedMember = await Member.findByIdAndDelete(memberId);

//         if (!deletedMember) {
//             return res.status(404).json({ msg: 'Member not found' });
//         }

//         return res.status(200).json({ msg: 'Member deleted successfully' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// }

async function deleteAnyMember(req, res) {
    try {
        const memberId = req.params.memberId;
        const workspaceId = req.params.workspaceId;

        // Find the workspace and remove the member from its members list
        const updatedWorkspace = await Workspace.findByIdAndUpdate(workspaceId, {
            $pull: { members: memberId }
        }, { new: true });

        if (!updatedWorkspace) {
            return res.status(404).json({ msg: 'Workspace not found' });
        }

        return res.status(200).json({ msg: 'Member deleted successfully from workspace' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

