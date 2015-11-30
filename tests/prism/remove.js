(function() {
    if (typeof self === 'undefined' || !self.Prism || !self.document) {
        return;
    }

    Prism.hooks.add('before-highlight', function (env) {
        if (!env.code) {
            return;
        }

        var pre = env.element.parentNode;
        var clsReg = /\s*\bkeep-initial-line-feed\b\s*/;

        if (pre && pre.nodeName.toLowerCase() === 'pre' && (!clsReg.test(pre.className) && !clsReg.test(env.element.className))) {
            env.code = env.code.replace(/^(?:\r?\n|\r)/, '');
            env.code = env.code.replace(/\s*$/, '');
        }
    });
}());
