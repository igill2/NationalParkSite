const model = require('../models/states')


//GET   /states/:value:   Send details of clicked state of National Park
exports.show = (req, res, next) => {
    let value = req.params.value;
    let state = model.findByValue(value);
    if (state) {
        res.render('./states/stateInfo', { state });
    } else {
        let err = new Error('Can not find the state with value ' + value);
        err.status = 404;
        next(err);
    }
}

