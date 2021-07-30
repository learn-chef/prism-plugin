// Terminal Selector Plugin

(function(terminal_selector) {

    if (typeof self === 'undefined' || !self.Prism || !self.document) {
        return;
    }

    var clsReg = /(?:^|\s)terminal-window(?:\s|$)/;

    Prism.hooks.add('complete', function (env) {
        var vars = env.vars = env.vars || {};
        var terminal = vars['terminal'] = vars['terminal'] || {};
        if (terminal.complete) {
            return;
        }
        console.log(Prism);
        var pre = env.element.parentNode;

        if (!pre || !/pre/i.test(pre.nodeName) || // Abort only if neither the <pre> nor the <code> have the class
		(!clsReg.test(pre.className) && !clsReg.test(env.element.className))) {
		terminal.complete = true;
		return;
	}

        if (clsReg.test(env.element.className)) { // Remove the class "terminal" from the <code>
            env.element.className = env.element.className.replace(clsReg, ' ');
        }
        if (!clsReg.test(pre.className)) { // Add the class "terminal" to the <pre>
            pre.className += ' terminal-window';
        }
        
        pre.className += ' body'; //Add the body class to pre

        var getAttribute = function(key, defaultValue) {
            return (pre.getAttribute(key) || defaultValue).replace(/"/g, '&quot');
        };
    
        // Create wrapping div
        var window_div = document.createElement('div');
        window_div.className = 'terminal'
        
        // Add span for window title
        var title = document.createElement('div');
        title.className = 'top';
        title.innerHTML = getAttribute('data-title','');

        window_div.insertAdjacentElement('afterbegin',title);
        pre.insertAdjacentElement('beforebegin',window_div);
        window_div.insertAdjacentElement('beforeend',pre);

        terminal.complete = true;
    });

}());

// Powershell selector

(function(powershell_selector) {

    if (typeof self === 'undefined' || !self.Prism || !self.document) {
        return;
    }

    var clsReg = /(?:^|\s)powershell-window(?:\s|$)/;
    
    Prism.hooks.add('complete', function (env) {
        var vars = env.vars = env.vars || {};
        var powershell = vars['powershell'] = vars['powershell'] || {};
        if (powershell.complete) {
            return;
        }
        console.log(Prism);
        var pre = env.element.parentNode;

        if (!pre || !/pre/i.test(pre.nodeName) || // Abort only if neither the <pre> nor the <code> have the class
		(!clsReg.test(pre.className) && !clsReg.test(env.element.className))) {
		powershell.complete = true;
		return;
	}

        if (clsReg.test(env.element.className)) { // Remove the class "powershell" from the <code>
            env.element.className = env.element.className.replace(clsReg, ' ');
        }
        if (!clsReg.test(pre.className)) { // Add the class "terminal" to the <pre>
            pre.className += ' powershell-window';
        }
        
        pre.className += ' body'; //Add the body class to pre

        var getAttribute = function(key, defaultValue) {
            return (pre.getAttribute(key) || defaultValue).replace(/"/g, '&quot');
        };
    
        // Create wrapping div
        var window_div = document.createElement('div');
        window_div.className = 'terminal'
        
        // Add span for window title
        var title = document.createElement('div');
        title.className = 'powershell-top top';
        title.innerHTML = getAttribute('data-title','');

        window_div.insertAdjacentElement('afterbegin',title);
        pre.insertAdjacentElement('beforebegin',window_div);
        window_div.insertAdjacentElement('beforeend',pre);

        powershell.complete = true;
    });

}());

// Editor window selector

(function(editor_selector) {

    if (typeof self === 'undefined' || !self.Prism || !self.document) {
        return;
    }

    var clsReg = /(?:^|\s)editor-window(?:\s|$)/;
    
    Prism.hooks.add('complete', function (env) {
        var vars = env.vars = env.vars || {};
        var editor = vars['editor'] = vars['editor'] || {};
        if (editor.complete) {
            return;
        }
        console.log(Prism);
        var pre = env.element.parentNode;

        if (!pre || !/pre/i.test(pre.nodeName) || // Abort only if neither the <pre> nor the <code> have the class
		(!clsReg.test(pre.className) && !clsReg.test(env.element.className))) {
		editor.complete = true;
		return;
	}

        if (clsReg.test(env.element.className)) { // Remove the class "editor" from the <code>
            env.element.className = env.element.className.replace(clsReg, ' ');
        }
        if (!clsReg.test(pre.className)) { // Add the class "terminal" to the <pre>
            pre.className += ' editor-window';
        }
        
        pre.className += ' body'; //Add the body class to pre

        var getAttribute = function(key, defaultValue) {
            return (pre.getAttribute(key) || defaultValue).replace(/"/g, '&quot');
        };
    
        // Create wrapping div
        var window_div = document.createElement('div');
        window_div.className = 'terminal'
        
        // Add span for window title
        var title = document.createElement('div');
        title.className = 'top';
        title.innerHTML = getAttribute('data-title','');

        window_div.insertAdjacentElement('afterbegin',title);
        pre.insertAdjacentElement('beforebegin',window_div);
        window_div.insertAdjacentElement('beforeend',pre);

        editor.complete = true;
    });

}());
