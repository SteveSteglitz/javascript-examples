export function sendTwitterMessage(messge){
    console.log("Twitter Post: " + messge);
}

export function sendFacebookMessage(messge){
    console.log("Facebook Post: " + messge);
}

function sendInstagramMessage(messge){  //steht nicht zum Import bereit
    console.log("Instagram Post: " + messge);
}

export let sendMessageAllowed = true;
