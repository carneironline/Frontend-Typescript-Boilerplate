export default class DeepBI {

    static setSegmentations(callback) {
      const isNotOglobo = window.tinyCpnt.Product.name !== 'oglobo'
      let count = 0

      if(isNotOglobo) {
        if(callback)
          callback()

          return null
      }

        const interval = setInterval(() => { 
                if (window.deepTracker?.scoringManager) {
                    DeepBI.setDeepOptions()
                    clearInterval(interval);

                      window.deepTracker.getScore({type: "profile"}).then(function(score) {
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

                        if(callback)
                            callback()
                      });
                    }

                    if(count === 10) {
                      clearInterval(interval)

                      if(callback)
                            callback()
                    }

                    count++
                  }, 500);

    }

    static setDeepOptions() {
        window.deep.options.pianoEventsQueue = true;
        window.deep.options.pianoDataCollector = true;
    }
}
