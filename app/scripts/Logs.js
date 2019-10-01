export default class Logs {
    constructor() {
        if (typeof window.tinyCpt !== 'undefined')
            window.tinyCpt.Logs = {
                list: [],
                show: this.getLogs
            };
    }

    static setLog(groupName, name, category = '', action = '', label = '') {
        window.tinyCpt.Logs.list.push({ group: groupName, name: name, category: category, action: action, label: label })
    }

    getLogs() {
        const key = 'group';

        if (!window.tinyCpt.Logs.list.length) return;

        return window.tinyCpt.Logs.list.reduce(function (obj, item) { 
            (obj[item[key]] = obj[item[key]] || []).push(item);
            return obj;
        }, {});

    }

}