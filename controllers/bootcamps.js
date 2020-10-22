// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @acess   Public
exports.getBootcapms = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Show all bootcamps", hello: req.hello })
    debugger
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @acess   Public
exports.getBootcapm = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show bootcamps ${req.params.id}` })

}

// @desc    Create new  bootcamp
// @route   Post /api/v1/bootcamps
// @acess   Private
exports.createBootcapm = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Create new bootcamps ` })

}
// @desc    Update  bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @acess   Private
exports.updateBootcapm = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update bootcamps ${req.params.id}` })

}
// @desc    Delete  bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @acess   Private
exports.deleteBootcapm = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete bootcamps ${req.params.id}` })

}

