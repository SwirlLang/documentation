/* 
here is a example of swirl code
print("Hello, World!")
if 1 == 1 {
    print("1 is equal to 1")
}
elif 1 == 2 {
    print("1 is equal to 2")
}
else {
    print("1 is not equal to 2")
}
func add(a, b) {
    return a + b
}
print(add(1, 2))

// this is a comment
/// 
multiline 
comment
///
*/

Prism.languages.sw = Prism.languages.extend('clike', {
    'comment':  /\/\/.*\n/g,
	'string': {
		pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
		lookbehind: true,
		greedy: true
	},
	'keyword': /\b(?:break|const|continue|else|for|func|if|import|return|var|override|private|public|protected|inherits|and|or|is|in|static)\b/,
	'boolean': /\b(?:true|false)\b/,
	'number': [
		// binary and octal integers
		/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
		// hexadecimal integers and floats
		/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
		// decimal integers and floats
		/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i
	],
	'operator': /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
	'builtin': /\b(?:print|input|range|find|count|findall|string|int|float|bool|len|exit)\b/
});

Prism.languages.insertBefore('sw', 'string', {
	'char': {
		pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
		greedy: true
	}
});

delete Prism.languages.sw['class-name'];