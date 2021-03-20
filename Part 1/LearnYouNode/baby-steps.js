var process_list = process.argv;
var sum = 0;

for (var i = 2; i < process_list.length; i++) {
	sum += Number(process.argv[i]);
}
console.log(sum)