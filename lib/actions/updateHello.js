exports.process = processAction;

function processAction(msg, cfg) {
    var self = this;
    var name = cfg.name;
    var stringNew = msg.message + ' How are you today?';

    setTimeout(function () {
        if (Math.random() > 0.5) {
            self.emit('rebound');
        } else {
            self.emit('data', {body: {message: stringNew}});
        }
    }, 2000);

    setTimeout(function () {
        self.emit('error', 'simple error');
        self.emit('end');
    }, 4000);
}