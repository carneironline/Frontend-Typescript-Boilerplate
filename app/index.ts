import AddQueryOnLinks from '@components/AddQueryOnLinks'
import ChatCpnt from '@components/ChatCpnt'

import './sass/index.scss'

declare global {
    interface Window {
        LPHelpers: {
            addQueryOnLinks: Function;
            chatCpnt: Function;
        };
    }
}

console.table(process.env)

window.LPHelpers = {
    addQueryOnLinks: AddQueryOnLinks,
    chatCpnt: ChatCpnt
}

