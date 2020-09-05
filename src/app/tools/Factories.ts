import { createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { setupVee } from '@/app/tools/Functions';
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export function localVueFactory() {
	const localVue = createLocalVue();
	localVue.use(BootstrapVue);
	library.add(fas, fab, far);
	setupVee();
	localVue.component('ValidationObserver', ValidationObserver);
	localVue.component('ValidationProvider', ValidationProvider);
	localVue.component('font-awesome-icon', FontAwesomeIcon);
	return localVue;
}
