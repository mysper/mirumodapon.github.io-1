import React, { useState, useRef } from 'react';

import './switchbtn.css';
import './input.css';
import './result.css';
import './index.css';

const App = () => {
	const [result, setResult] = useState({
		status: 'un-generate',
		msg: []
	});
	const count = useRef(0);
	const int = useRef(0);
	const float = useRef(0);
	const from = useRef(0);
	const to = useRef(0);
	const repeat = useRef(0);
	const point = useRef(0);
	const except = useRef(0);
	const getValue = (ref) => Number(ref.current.value);
	const error = (msg) => ({ status: 'error', msg });
	const handleGenerate = (e) => {
		if (int.current.checked) setResult(generateInt());
		else if (float.current.checked) console.log(0);
	};
	const generateInt = () => {
		if (!getValue(from) || !getValue(to))
			return error('Please enter the range!');
		if (!getValue(count))
			return error(
				'Please enter how many number do you went ot generate.'
			);
		let range = getValue(to) - getValue(from) + 1;
		if (range < 0) {
			const temp = from.current.value;
			from.current.value = to.current.value;
			to.current.value = temp;
			range = Math.abs(range);
		}
		if (range < getValue(count) && !repeat.current.checked) {
			return {
				status: 'error',
				msg: 'There is not enough different number.'
			};
		}
		const payload = [];
		while (payload.length < getValue(count)) {
			const temp = Math.floor(Math.random() * range) + getValue(from);
			if (!repeat.current.checked && payload.indexOf(temp) !== -1)
				continue;
			payload.push(temp);
		}
		return {
			status: 'successed',
			msg: payload
		};
	};
	const generateFloat = () => {};
	return (
		<>
			<p>
				Generate <input type="number" ref={count} />
				<>
					<input
						id="int"
						name="type"
						type="radio"
						ref={int}
						defaultChecked
					/>
					<label htmlFor="int">Integet</label>
					{/* <input id="float" name="type" type="radio" ref={float} />
					<label htmlFor="float">Float</label> */}
				</>
				.
			</p>
			<p>
				Between <input type="number" ref={from} /> to{' '}
				<input type="number" ref={to} />.
			</p>
			<p>
				<label>Repeat</label>
				<label className="switch">
					<input type="checkbox" ref={repeat} />
					<span className="slider round"></span>
				</label>
				<label>No repeat</label>
			</p>
			{/* <p>
				Float point to: <input type="number" ref={point} />
			</p> */}
			{/* <p>
				except: <input ref={except} />
			</p> */}
			<button onClick={handleGenerate}>Generate</button>
			<hr />
			<div className="result">
				{result.status === 'successed' ? (
					result.msg.map((number, index) => (
						<span
							key={index}
							onClick={() =>
								setResult({
									...result,
									msg: result.msg.filter(
										(_, i) => index !== i
									)
								})
							}
						>
							{number}
						</span>
					))
				) : (
					<p className="error">{result.msg}</p>
				)}
			</div>
		</>
	);
};

export default App;
