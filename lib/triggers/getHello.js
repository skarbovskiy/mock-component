exports.process = processTrigger;

function processTrigger (msg, cfg, next, snapshot) {
    var name = cfg.name;
    var self = this;
    setTimeout(function () {
        self.emit('data', {body: {message: 'Hello ' + name + '!'}});
    }, 2000);

    setTimeout(function () {
        self.emit('snapshot', 'snapshot data');
        self.emit('error', 'simple error');
        self.emit('end');
    }, 4000);

}