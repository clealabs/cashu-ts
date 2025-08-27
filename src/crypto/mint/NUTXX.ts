// TODO: see cashu rust cdk for implementation
import init, { run_verify } from 'stwo-web-stark';

import { type Proof } from '../../model/types/index';
import { CairoWitness } from '../../model/types/index';

export const verifyCairo = async (proof: Proof): Promise<boolean> => {
	await init(); // Initialize the WASM module
	return run_verify((proof.witness as CairoWitness).cairo_proof_json);
	// return false;
};
