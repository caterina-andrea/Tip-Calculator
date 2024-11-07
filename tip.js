import init, {calculate_tip} from "./pkg/tip_webassembly"

async function run() {
	await init();
	function calculateTip(){
		const subtotal = paseFloat(document.getElementById("subtotal").value);
		const tip = calculate_tip(subtotal);
		document.getElementById("result").innerText = 'Tip:$${tip.toFixed(2)}';
	}
	document.getElementById("calculateButton").addEventListener("click", calculateTip);
}

run();