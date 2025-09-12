(function() {
    function waitForElement(predicate, callback, timer = 10000, frequency = 100) {
		if (timer <= 0) {
			return;
		} else if (predicate && predicate()) {
			callback();
		} else {
			setTimeout(() => {
				waitForElement(predicate, callback, timer - frequency, frequency);
			}, frequency);
		}
		
	}

    try {

        const IS_BUCKETED = window['EXP_1004165791_BUCKETED'] === true;
        
        if(IS_BUCKETED) {
            return true;
        } else {
            waitForElement(
                () => !!(window.appRoute === 'ticketing_date_and_time' && window.highRatedSeatsCount > 0),
                () => {
                    window['EXP_1004165791_BUCKETED'] = true;
                    convert_recheck_experiment();
                }

            );
        
        }
    } catch(error) {
        convert_recheck_experiment();
        return false;
    }

})()