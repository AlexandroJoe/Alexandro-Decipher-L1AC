
function decipher(message,key){
    const split = key.split(" ");
    words = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    if (message.length>key.length){
        missing = message.length - key.length;
        miss = 0;
        for (let x = 0;x < missing ;x+=1){
            split.push(split[x]);
            miss += 1;
            if (miss == split.length){
                miss = 0
            }
        }
    }
    for (let y = 0; y < split.length; y+=1){
        message[y] = message [y] - split[y];
    }

    for (let z = 0; z< message.length; z+=1){
        message[z] = words[message[z]-1]
    }
    result = message.join('');
    return result
}
console.log(decipher([6, 4, 1, 3, 9, 20], 100))