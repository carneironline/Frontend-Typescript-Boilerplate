export default class DeepBI {

    static setSegmentation() {

        const interval = setInterval(() => {
                if (window.deepTracker && typeof deepTracker.scoringManager !== 'undefined') {
                    console.log("first")
                    DeepBI.setDeepOptions()
                    clearInterval(interval);

                      deepTracker.getScore({type: "profile"}).then(function(score) {
                        if (!(Object.entries(score).length === 0)) {
                            console.log("entries")
                            const atribute = Object.keys(score)
                            const value = Object.values(score)

                            for (let i = 0; i < Object.entries(score).length; i++) {
                                window.tp.push(['setCustomVariable', atribute[i], value[i].toString(),])
                            }

                        } else {
                          console.log('rfv call failed');
                        }
                      });
                    }
                  });

    }

    static setDeepOptions() {
        window.deep.options.pianoEventsQueue = true;
        window.deep.options.pianoDataCollector = true;
    }
}
