import liveAgentInit from './liveagent'

interface ChatCpnt {
    chatID: string;
    bgColor?: string;
    textColor?: string;
}

let chatStatus: string = ''

function ChatCpnt({ chatID, bgColor = '', textColor = '' }: ChatCpnt) {

    const classMain: string = 'chat-cpnt'
    const classAuxiliary: string = ''

    function insertHTML(htmlToRender = '') {
        const insertPosition = 'beforeend'

        if (htmlToRender)
            document.body.insertAdjacentHTML(insertPosition, htmlToRender)
    }

    function checkChatObject() {
        let checkStatus: string = ''

        const online: any = document?.querySelector('#liveagent_button_online')
        const offline: any = document?.querySelector('#liveagent_button_offline')

        if (getComputedStyle(online).display === 'block')
            checkStatus = 'online'

        if (getComputedStyle(offline).display === 'block')
            checkStatus = 'offline'

        chatStatus = checkStatus
    }

    function openChat() {
        const element = document.querySelector(`.${classMain}`)

        setTimeout(() => {
            element?.classList.add('is-active')
        }, 500);

        if (chatStatus !== 'online') return null

        element?.addEventListener('click', () => {
            window.liveagent?.startChat(chatID)
        })
    }

    function chatHtml() {
        const html = `
            <div class= "${classMain} ${classAuxiliary} is-${chatStatus}">
                <div class="${classMain}-wrap" onClick="" style="color:${textColor}; background-color: ${bgColor}" >
                    <div class="${classMain}-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25">
    <path fill="${textColor ? textColor : '#fff'}" fill-rule="evenodd" d="M13 0c7.168 0 13 5.313 13 11.843 0 2.28-.713 4.492-2.067 6.402.258 2.868.944 4.997 1.94 6.005.131.133.165.337.08.505-.072.15-.224.245-.387.245-.019 0-.04-.002-.059-.004-.175-.026-4.253-.62-7.202-2.343-1.674.683-3.458 1.03-5.305 1.03-7.168 0-13-5.311-13-11.84C0 5.313 5.832 0 13 0zm6.066 13.596c-.956 0-1.733-.788-1.733-1.753 0-.968.777-1.757 1.733-1.757.957 0 1.733.789 1.733 1.757 0 .965-.776 1.753-1.733 1.753zm-6.066 0c-.957 0-1.733-.788-1.733-1.753 0-.968.776-1.757 1.733-1.757.957 0 1.733.789 1.733 1.757 0 .965-.776 1.753-1.733 1.753zm-6.066 0c-.957 0-1.733-.788-1.733-1.753 0-.968.776-1.757 1.733-1.757.956 0 1.733.789 1.733 1.757 0 .965-.777 1.753-1.733 1.753z"/>
</svg>
                    </div>
                    <div class="${classMain}-text">
                        Chat
                        <span class="${classMain}-text__status">
                            ${chatStatus === 'online' ? 'Online' : 'Offline'}
                        </span>
                    </div>
                    <div class="${classMain}-led" />
                </div>
            </div>
            `

        insertHTML(html)
    }

    function init() {
        const hasChatActive = document.querySelector('.chat-cpnt')

        if (hasChatActive) return null

        liveAgentInit(chatID, () => {
            checkChatObject()

            if (chatStatus) {
                chatHtml()
                openChat()
            }

        })
    }

    document.addEventListener('DOMContentLoaded', init)
}

export default ChatCpnt
