'use strict';

function update() {
    // Update the table
    for(let i = 0; i < cookieArray.length + 1; i++) {
        if(i === cookieArray.length) {
            footer();
            continue;
        }
        renderMe(cookieArray[i]);
    }
}