import { extend, localize, setInteractionMode } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en.json';

localize('en', en);

setInteractionMode('eager');

for (const [rule, validation] of Object.entries(rules)) {
	extend(rule, {
		...validation,
	});
}
