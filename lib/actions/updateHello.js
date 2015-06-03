exports.process = processAction;
exports.getMetaModel = getMetaModel;
exports.getModel = getModel;

function processAction(msg, cfg) {
    var self = this;
    var name = cfg.name;
    var stringNew = msg.body.message + ' How are you today?';

    self.emit('data', {body: {message: stringNew}})
    self.emit('end');
}


function getMetaModel(cfg, cb) {
    return cb(null, {meta: 'metamodel'});
}

function getModel(cfg, cb) {
    return cb(null, {model: 'model'});
}