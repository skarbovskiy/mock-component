exports.process = processAction;
exports.getMetaModel = getMetaModel;
exports.getModel = getModel;

function processAction(msg, cfg) {
    var self = this;
    var name = cfg.name;
    var stringNew = msg.body.message + ' How are you today?';
    self.emit('data', {body: {message: stringNew}});
    setTimeout(function () {
        self.emit('error', new Error('simple error'));
        self.emit('end');
    }, 1000);
    
}


function getMetaModel(cfg, cb) {
    var metadata = {
        "type": "object",
        "properties": {
            "message": {
                "type": "string",
                "required": false,
                "title": "Hello string"
            }
        }
    };
    return cb(null, {in: metadata, out: metadata});
}

function getModel(cfg, cb) {
    return cb(null, {
        opt_1: 'Option 1',
        opt_2: 'Option 2',
        opt_3: 'Option 3'
    });
}
