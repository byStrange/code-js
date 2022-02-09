let c = console;
var console = {
    log: function (some) {
        let line = document.createElement('div');
        line.className = 'console-line';
        line.innerText = some;
        document.querySelector('#console #res').appendChild(line)
    },
    clear: function () {
        document.querySelector('#console #res').innerHTML = ''
        console.info('console was cleared')
    },
    error: function (some) {
        let line = document.createElement('div');
        line.className = 'console-line error';
        line.innerText = some;
        document.querySelector('#console #res').appendChild(line)
    },
    warn: function (some) {
        let line = document.createElement('div');
        line.className = 'console-line warn';
        line.innerText = some;
        document.querySelector('#console #res').appendChild(line)
    },
    info: function (some) {
        let line = document.createElement('div');
        line.className = 'console-line info';
        line.innerText = some;
        document.querySelector('#console #res').appendChild(line)
    }
}
var editor = CodeMirror.fromTextArea(document.querySelector('#textarea'), {
    lineNumbers: true,
    tabSize: 4,
    mode: 'javascript',
    lineWrapping: true,
    smartIndent: true,
    addModeClass: true,
    matchBrackets: true,
    theme: 'ayu-mirage'
});

window.onkeyup = e => {
    if (e.ctrlKey && e.key == 'Enter') {
        evaluvate()
    }
    window.localStorage.setItem('code-js-code', editor.getValue())
}

function evaluvate() {
    document.querySelector('#console #res').innerHTML = ''
    try {
        eval(editor.getValue())

    } catch (err) {
        console.error(err)
    }

}
evaluvate()