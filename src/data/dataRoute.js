import { examples } from './dataViews/examples';
import { intro } from './dataViews/intro';
import { api } from './dataViews/api';
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
        route:'/examples',
        pageName:'Examples',
        rBody: [...examples]
    }, 
    {
        route:'/api',
        pageName:'API\'s',
        rBody: [...api]
    },
]