// Validates the Vee validate props to provide input valid state
export function isValid(errors: string[], valid: boolean | undefined): boolean | null {
	return errors[0] ? false : valid ? true : null;
}
