import { createRouter, createWebHashHistory } from 'vue-router';
import AAA from '@/pages/AAA.vue';
import BBB from '@/pages/BBB.vue';
import CCC from '@/pages/CCC.vue';

const router = createRouter
(
    {
        history: createWebHashHistory(),
        routes:
        [
            {
                path: '/aaa',
                component: AAA
            },
            {
                path: '/bbb',
                component: BBB
            },
            {
                path: '/ccc',
                component: CCC
            }
        ]
    }
);

export default router;