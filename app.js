let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
console.log(secretMessage.length)
secretMessage.push('word', 'program')
console.log(secretMessage)
secretMessage[7] = 'right';
console.log(secretMessage)
secretMessage.shift();
secretMessage.unshift('Programming')
console.log(secretMessage)
secretMessage.splice(6, 5, 'Know')
console.log(secretMessage)
console.log(secretMessage.join(' '));
