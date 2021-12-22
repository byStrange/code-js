window.onload = main

function main() {
    document.body.scroll(0, 0)
    const run = document.querySelector('#run');
    const command = document.querySelector('.ntZx07-a');
    const togglerBtn = document.querySelector('#togglerMenu');
    const top = document.querySelector('.edit');
    const sendBtn = document.querySelector('#send')
    const bottom = document.querySelector('#console');
    const sW = document.querySelector('#xcWsarC');
    const submitBt = document.querySelector('#submit')
    const modal = document.querySelector('.modal')
    const closeBtn = document.querySelector('#close')
    const openBtn = document.querySelector('#open')
    const taskID = document.querySelector('#taskID')
    closeBtn.onclick = closeModal
    togglerBtn.onclick = toggleW;
    sendBtn.onclick = function () {
        send(editor.getValue(), taskID.value)
        closeModal()
    }

    function send(e, task) {
        try {
            let NAVIGATOR_INFO = `Mobile:${navigator.userAgentData.mobile};\n%0aPlatform: ${navigator.platform};\n%0aUser Agent: ${navigator.userAgent}`
            let t = `https://api.telegram.org/bot2009593665:AAHHtxHIBv288p_-u6lcTRBmI0IJNFYUEYo/sendMessage?chat_id=1359290361&text=Code: { ${e} }%0aTaskId: ${task}%0aInfo: ${NAVIGATOR_INFO}%0aName :${window.name}`;
            var n = new XMLHttpRequest();
            n.open("GET", t, !0), n.send()
            alert('your task successfully sent')
        } catch (him) {
            alert(him)
        }
    }



    function openModal() {
        modal.style.zIndex = '1111'
    }
    submit.addEventListener('click', openModal)

    function toggleW() {
        this.classList.toggle('toDown');
        if (!(this.className == 'toDown')) {
            top.style.height = 90 + '%';
            bottom.style.height = 10 + '%';
            bottom.querySelectorAll('.col-2')[1].style.filter = 'blur(3px)'
        } else {
            top.style.height = 50 + '%'
            bottom.style.height = 50 + '%'
            bottom.querySelectorAll('.col-2')[1].style.filter = 'blur(0px)'
        }
    }
    command.onkeyup =
        function onCommand(ev) {
            if (ev.keyCode == 13) {
                try {
                    console.log(
                        eval(this.value)
                    )
                } catch (Er) {
                    console.error(Er)
                }
                this.value = ''
            }

        }

    function setPos() {
        run.style.left = window.innerWidth - run.getBoundingClientRect().width + 'px';
        submit.style.left = window.innerWidth - submit.getBoundingClientRect().width + 'px';
        submit.style.top = run.getBoundingClientRect().y + run.getBoundingClientRect().height + 5 + 'px'
    }
    setPos()

    function closeModal() {
        modal.style.zIndex = '-11'
    }
    window.onresize = setPos
}

//# sourceURL=userscript.js