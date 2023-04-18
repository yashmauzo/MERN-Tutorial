const asyncHandler = require('express-async-handler')

// @desc    Get goals
// @route   Get /api/goals
// @access  Private
const getGoals = asyncHandler((req, res) => {
    res.status(200).json({message: 'Get goals'})
})

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler((req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Set goal'})
})

// @desc    Update goal
// @route   Put /api/goals/:id
// @access  Private
const updateGoal = asyncHandler((req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc    Delete goal
// @route   Delete /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler((req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals, 
    setGoal,
    updateGoal,
    deleteGoal
}