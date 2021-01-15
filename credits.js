/*
This is javascript code to hack The Nightfall Incident by patrickhpan on itch.io

To use this, copy this code into a chrome code snippet on the game index, run, then reload.
*/

'use strict';

var savefile = 'save1'    // set which save file to overwrite ('save1', 'save2', 'save3')
var credits = 100000;     // set the desired number of credits here

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
                json_save_data.numCredits = credits; 
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