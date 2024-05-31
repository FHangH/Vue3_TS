import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import AAA from '@/pages/AAA.vue';
import BBB from '@/pages/BBB.vue';
import CCC from '@/pages/CCC.vue';

const router = createRouter
(
    {
        // createWebHashHistory 或者 createWebHistory 取决于你的项目设置。
        // Hash: 兼容好，URL有#，SEO优化差
        // History： 兼容差，URL无#，SEO优化好，需要服务器支持。
        history: createWebHistory(),
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