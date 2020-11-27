import { apps } from './dataViews/apps';
import { intro } from './dataViews/intro';
import { apis } from './dataViews/apis';
import { advanced } from './dataViews/advanced';
import { styling } from './dataViews/styling';
import { hooks } from './dataViews/hooks';
import { redux } from './dataViews/redux';

export const dataRoutes = [
    {
        route:'/',
        pageName:'Intro',
        rBody: [...intro]
    },
    {
        route:'/styling',
        pageName:'Styling',
        rBody: [...styling]
    },
    {
        route:'/advanced',
        pageName:'Advanced',
        rBody: [...advanced]
    },
    {
        route:'/hooks',
        pageName:'Hooks',
        rBody: [...hooks]
    },
    {
        route:'/redux',
        pageName:'Redux',
        rBody: [...redux]
    },
    {
        route:'/apps',
        pageName:'App\'s',
        rBody: [...apps]
    }, 
    {
        route:'/apis',
        pageName:'API\'s',
        rBody: [...apis]
    },
]