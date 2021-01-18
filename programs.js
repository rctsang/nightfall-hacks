/*
This is javascript code to hack The Nightfall Incident by patrickhpan on itch.io

To use this, copy this code into a chrome code snippet on the game index, 
run the snippet, then reload the page.
*/

'use strict';

var savefile = 'save1';    // set which save file to overwrite ('save1', 'save2', 'save3')

// list the desired program ids here (see bottom for names)
var new_programs = ["GolemStone", "Heisenbug", "Guru", "Seeker3"];

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
                json_save_data.programIDs.push(...new_programs); 
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
Program IDs

***** lvl 1 *****

Hack
Bug
Slingshot
DataDoctor
BitMan

***** lvl 2 *****

Hack2
GolemMud
WolfSpider
Seeker
Tower
Medic
Turbo

***** lvl 3 *****

Hack3
GolemClay
BlackWidow
Mandelbug
Buzzbomb
Fiddle
Seeker2
MobileTower
Satellite
Ballista
DataDoctorPro
Clog2
TurboDX

***** lvl 4 *****

GolemStone
Tarantula
Heisenbug
LogicBomb
Sumo
Seeker3
LaserSatellite
Catapult
Clog3
Guru

*/