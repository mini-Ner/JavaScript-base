let a = false;
let b = 0;
let c = '';
let d = null;
let e;

console.log(
	a || '기본값',
	b || '기본값',
	c || '기본값',
	d || '기본값',
	e || '기본값',
);

function getFee(isMember)	{
	return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true));
console.log(getFee(false));
console.log(getFee(null));
