exports.process = processTrigger;

function processTrigger (msg, cfg, next, snapshot) {
    var name = cfg.name;
    var self = this;
    setTimeout(function () {
        self.emit('data', {body: {message: 'Hello ' + name + '!'}});
    }, 2000);

    setTimeout(function () {
        snapshot.lastUpdated1 = Date.now();
        self.emit('snapshot', snapshot);
        self.emit('updateSnapshot', {lastUpdated2: Date.now()});
        self.emit('error', new Error('Error in trigger'));
        self.emit('end');
    }, 4000);
}