/*
This is javascript code to hack The Nightfall Incident by patrickhpan on itch.io

To use this, copy this code into a chrome code snippet on the game index, run, then reload.
*/

'use strict';

var savefile = 'save1'    // set which save file to overwrite ('save1', 'save2', 'save3')

// connect to the indexedDB nightfall database (number is version?)
var connection = indexedDB.open('nightfall', 2);

connection.onsuccess = (e) => {
    var db = e.target.result;
    var transaction = db.transaction(['nightfall-save'], "readwrite");
    var objectStore = transaction.objectStore('nightfall-save');
    // choose which save file to access

    objectStore.openCursor().onsuccess = function(e){
        const cursor = e.target.result;
        if (cursor) {
            // loop through the entries in the database and find the savefile
            if (cursor.key === savefile) {
                // data is saved as a stringified object
                var json_save_data = JSON.parse(cursor.value);
                // reset collected credit data
                json_save_data.collectedCreditIDs = []; 
                var new_save_data = JSON.stringify(json_save_data);
                console.log(new_save_data);
                var request = cursor.update(new_save_data);
                request.onsuccess = function(e) {
                    console.log(e.target.result);
                }
            }
            cursor.continue();
        }
    }
};


/*
credit ids:
credit-car-archives-0
credit-car-archives-1
credit-car-archives-2
credit-car-archives-3
credit-car-commshub-0
credit-car-commshub-1
credit-car-inventory-0
credit-car-inventory-1
credit-car-substation-0
credit-car-substation-1
credit-car-sydney-0
credit-car-sydney-1
credit-donut-flavor-0
credit-donut-flavor-1
credit-donut-flavor-2
credit-donut-flavor-3
credit-donut-flavor-4
credit-donut-flavor-5
credit-donut-recipe-0
credit-donut-recipe-1
credit-donut-recipe-2
credit-donut-recipe-3
credit-lmm-assimilation-0
credit-lmm-assimilation-1
credit-lmm-eastern-0
credit-lmm-eastern-1
credit-lmm-film-0
credit-lmm-film-1
credit-lmm-film-2
credit-lmm-film-3
credit-lmm-film-4
credit-lmm-film-5
credit-lmm-jungle-0
credit-lmm-jungle-1
credit-lmm-print-0
credit-lmm-print-1
credit-lmm-print-2
credit-lmm-print-3
credit-ped-executive-0
credit-ped-executive-1
credit-ped-executive-2
credit-ped-executive-3
credit-ped-offshore-0
credit-ped-offshore-1
credit-ped-offshore-2
credit-ped-privileged-0
credit-ped-privileged-1
credit-ped-privileged-2
credit-ped-privileged-3
credit-ped-privileged-4
credit-ped-privileged-5
credit-ped-privileged-6
credit-ped-privileged-7
credit-ped-privileged-8
credit-ped-rdbackup-0
credit-ped-rdbackup-1
credit-ped-reinsurance-0
credit-ped-reinsurance-1
credit-ped-reinsurance-2
credit-ped-reinsurance-3
credit-ped-reinsurance-4
credit-ped-reinsurance-5
credit-ped-reinsurance-6
credit-ped-reinsurance-7
credit-ped-reinsurance-8
credit-ped-reinsurance-9
credit-ped-treasury-0
credit-ped-treasury-1
credit-ped-treasury-2
credit-ped-treasury-3
credit-ph-clinical-0
credit-ph-clinical-1
credit-ph-clinical-2
credit-ph-clinical-3
credit-ph-clinical-4
credit-ph-clinical-5
credit-ph-clinical-6
credit-ph-clinical-7
credit-ph-clinical-8
credit-ph-clinical-9
credit-ph-employee-0
credit-ph-employee-1
credit-ph-employee-2
credit-ph-employee-3
credit-ph-employee-4
credit-ph-employee-5
credit-ph-employee-6
credit-ph-employee-7
credit-ph-govaffairs-0
credit-ph-govaffairs-1
credit-ph-hmo-0
credit-ph-hmo-1
credit-ph-hmo-2
credit-ph-hmo-3
credit-ph-hmo-4
credit-ph-prdatabase-0
credit-ph-prdatabase-1
credit-ph-prdatabase-2
credit-ph-proprietary-0
credit-ph-proprietary-1
credit-ph-proprietary-2
credit-ph-proprietary-3
credit-ph-proprietary-4
credit-ph-proprietary-5
credit-ph-syscore-0
credit-ph-syscore-1
credit-ph-syscore-2
credit-ph-syscore-3
credit-ph-vaccine-0
credit-ph-vaccine-1
credit-ph-vaccine-2
ph-clinical-x1
ph-clinical-x2
ph-clinical-x3
*/