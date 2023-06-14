

function add(value1, value2) {
    var result;
    result = value1 + value2;
    return result;
}

function sendMapOverUDP(map) {
    var ourmap = GMS_API.json_encode(map);
    var myjson = JSON.parse(ourmap);
    console.log("This is our map: " + myjson.test);
}

function sendListOverUDP(list) {
    var myfirstinput = GMS_API.ds_list_find_value(list, 0);
    console.log("Value number 0 is: " + myfirstinput);
}