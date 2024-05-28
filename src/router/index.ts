import { createRouter, createWebHashHistory } from 'vue-router';
import AAA from '@/components/AAA.vue';
import BBB from '@/components/BBB.vue';
import CCC from '@/components/CCC.vue';

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