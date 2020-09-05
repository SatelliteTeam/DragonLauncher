import { StorageItem } from '@/app';

// Validates the Vee validate props to provide input valid state
export function isValid(errors: string[], valid: boolean | undefined): boolean | null {
	return errors[0] ? false : valid ? true : null;
}

// Stores data in the local storage
export function storeItem(name: string, data: string | object): void {
	const parsedData = typeof data !== 'string' ? JSON.stringify(data) : data;
	localStorage.setItem(name, parsedData);
}

// Retrieves an item from the local storage
export function getItem(name: string): string | object {
	const resultItem = localStorage.getItem(name);
	if (resultItem !== null) return JSON.parse(resultItem);
	else return {};
}

export function storeItems(toStore: StorageItem[]): void {
	toStore.forEach(itemStore => {
		storeItem(itemStore.name, itemStore.value);
	});
}

export function getItems(...itemNames: string[]): StorageItem[] {
	let results = new Array<StorageItem>();
	itemNames.forEach(name => {
		const value = getItem(name);
		results = [...results, { name: name, value: value }];
	});
	return results;
}

import { extend, localize, setInteractionMode } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en.json';

export function setupVee() {
	localize('en', en);

	setInteractionMode('eager');

	for (const [rule, validation] of Object.entries(rules)) {
		extend(rule, {
			...validation,
		});
	}
}
