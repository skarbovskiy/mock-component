exports.process = processAction;

function processAction(msg, cfg) {
    var self = this;
    var name = cfg.name;
    var stringOld = msg.message;
    var stringNew = 'Hello ' + name + '!';

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