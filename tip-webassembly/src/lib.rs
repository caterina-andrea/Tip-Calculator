use wasm_bindgen::prelude::*;

#[wasm_bindgen_module]
pub fn calculate_tip(subtotal: f64) -> f64 {
	// initialize the tip amount
	subtotal * 0.18
}