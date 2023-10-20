import { createStore } from 'vuex';

import coachesModules from './modules/coaches';
import requestsModule from './modules/requests';
import authsModule from './modules/auth';

const store = createStore({
  modules: {
    coaches: coachesModules,
    requests: requestsModule,
    auth: authsModule,
  },
});

export default store;
