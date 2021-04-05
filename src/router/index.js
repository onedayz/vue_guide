import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@page/home';

import Set from '@page/content/set/set';
import Overview from '@page/content/overview/overview';

import Spa from '@page/content/base/spa';
import Webpack from '@page/content/base/webpack';
import Npm from '@page/content/base/npm';
import Scss from '@page/content/base/scss';

import Architecture from '@page/content/usable/architecture';
import Router from '@page/content/usable/router';
import Axios from '@page/content/usable/axios';
import StructureSummary from '@page/content/usable/structureSummary';
import Template from '@page/content/usable/structureTemplate';
import Script from '@page/content/usable/structureScript';
import Style from '@page/content/usable/structureStyle';
import ComponentSummary from '@page/content/usable/componentSummary';
import Custom from '@page/content/usable/componentCustom';
import Store from '@page/content/usable/store';

import Memory from '@page/content/trouble/memory';
import Performance from '@page/content/trouble/performance';

import Install from '@page/content/starter/install';
import Directory from '@page/content/starter/directory';
import Playground from '@page/content/starter/playground';
import Biscuit from '@page/content/eg/Biscuit';



import NotFound from '@page/notFound';

const index = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/set', component: Set },
    { path: '/overview', component: Overview },

    /* 2. 기본개념 */
    { path: '/base', redirect: '/base/mandatory'},
    { path: '/base/mandatory', redirect: '/base/mandatory/spa'},
    { path: '/base/mandatory/spa',  component: Spa},
    { path: '/base/mandatory/webpack',  component: Webpack},
    { path: '/base/mandatory/npm',  component: Npm},
    { path: '/base/optional', redirect: '/base/optional/scss',},
    { path: '/base/optional/scss',  component: Scss},

    /* 3. Vue.js 활용하기 */
    { path: '/skill', redirect: '/skill/architecture'},
    { path: '/skill/architecture',  component: Architecture},
    { path: '/skill/router',  component: Router},
    { path: '/skill/axios',  component: Axios},
    { path: '/skill/structure',  redirect: '/skill/architecture/summary'},
    { path: '/skill/structure/summary',  component: StructureSummary},
    { path: '/skill/structure/template',  component: Template},
    { path: '/skill/structure/script',  component: Script},
    { path: '/skill/structure/style',  component: Style},
    { path: '/skill/component',  redirect: '/skill/component/summary'},
    { path: '/skill/component/summary',  component: ComponentSummary},
    { path: '/skill/component/custom',  component: Custom},
    { path: '/skill/store',  component: Store},

    { path: '/trouble',  redirect: '/trouble/memory'},
    { path: '/trouble/memory',  component: Memory},
    { path: '/trouble/performance',  component: Performance},

    { path: '/starter',  redirect: '/starter/install'},
    { path: '/starter/install',  component: Install},
    { path: '/starter/directory',  component: Directory},
    { path: '/starter/playground',  component: Playground},

    {path: '/biscuit', component: Biscuit},

    { path: '/:catchAll(.*)', component: NotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: index
});

router.beforeEach((to,from,next) => {
    document.getElementsByClassName('app-content')[0].scrollTop = 0;
    next();
})

export default router