// pages
import Links from './pages/Links/Links';
import LinksList from './pages/Links/LinkList';
import LinksAdd from './pages/Links/LinkAdd';

export const Routes = [
    {
        path: "/link",
        component: Links,
        routes: [
            {
                path: "/link/list",
                component: LinksList,
                pageName: "Link List"
            }, {
                path: "/link/add",
                component: LinksAdd,
                pageName: "Add New Link"
            }
        ]
    }, {
        path: "/",
        redirectTo: "/link/list"
    }
];