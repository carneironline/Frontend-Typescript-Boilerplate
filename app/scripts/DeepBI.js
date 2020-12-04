export default class DeepBI {

    static setSegmentation() {
        let count = 0

        const interval = setInterval(() => {
            if(window.deepTracker?.getScore) {
                DeepBI.setDeepOptions()

                window.deepTracker.getScore().then(data => {
                    const userScore = data
                    const atribute = Object.keys(userScore)
                    const value = Object.values(userScore)

                    for (let i = 0; i < Object.keys(userScore).length; i++) {
                        window.tp.push(['setCustomVariable', atribute[i], value[i].toString(),])
                    }
                });
                clearInterval(interval)
            }

            if(count === 20)
                clearInterval(interval)

            count++
        },500)

    }

    static setDeepOptions() {
        window.deep.options.pianoEventsQueue = true;
        window.deep.options.pianoDataCollector = true;
    }
}
