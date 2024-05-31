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
                name: 'AAA', // 路由名称，可选，但建议设置，以便在路由跳转时使用。
                path: '/aaa',
                component: AAA
            },
            {
                name: 'BBB', // 路由名称，可选，但建议设置，以便在路由跳转时使用。
                path: '/bbb',
                component: BBB
            },
            {
                name: 'CCC', // 路由名称，可选，但建议设置，以便在路由跳转时使用。
                path: '/ccc',
                component: CCC
            }
        ]
    }
);

export default router;