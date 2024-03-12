import {lazy, ReactElement, Suspense} from "react";

// @ts-ignore
const Pillbox = lazy(() => import('./Pillbox'))

const load = (component: ReactElement) => {
    return (<Suspense>{component}</Suspense>)
}

export const products: { [index: string]: ReactElement } = {
    'Pillbox': load(<Pillbox/>)
}

