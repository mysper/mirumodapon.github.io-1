

const dom = (query) => document.querySelector(query);

const isChecked = (query) => dom(query).checked;


function remove (e) {

	e.target.remove();

}

function random_string (payload, length) {



	let str = '';

	for (let i=0;i<length;++i) {
		const random_index = Math.floor(Math.random() * payload.length);
    	str += payload[random_index];

	}

	return str;



}


function generate () {

  const A = isChecked('#A');
  const a = isChecked('#a');
  const _0 = isChecked('#n');
  const _else = isChecked('#else');

  const estring = dom('#estring').value;

  const count = dom('#count').value;
  const length = dom('#length').value;

  let payload = '';

  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const num = '0987654321';

  if (A) payload += upper;
  if (a) payload += lower;
  if (_0) payload += num;
  if (_else) payload += estring;

  const arr = [];

  for (let i=0;i<count;++i) {
    const s = random_string(payload, length);
    arr.push(s);

	dom('#result').innerHTML += `<p class="result_item" onclick="remove(event)">${s}</p>`

  }

  console.log(arr);

}
