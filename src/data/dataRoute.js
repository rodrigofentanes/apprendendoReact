import { apps } from './dataViews/apps';
import { intro } from './dataViews/intro';
import { apis } from './dataViews/apis';
import { advanced } from './dataViews/advanced';
import { styling } from './dataViews/styling';

export const dataRoute = [
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