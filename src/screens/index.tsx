import {lazy, Suspense, ReactElement} from 'react'
import {Studio} from '@types'
import {Navigate, Route, Routes} from 'react-router-dom'
import ScreenWrapper from '@components/layout/ScreenWrapper'
import Screen = Studio.Screen;

const Basic = lazy(() => import('./basic'))

const load = (component: ReactElement) => {
    return (<Suspense>{component}</Suspense>)
}

const screens: { [index: string]: ReactElement } = {
    [Screen.Basic]: load(<Basic/>)
}

const Screens = () => {

    const screenKeys: string[] = Object.keys(screens)

    const getDefaultScreen = () => {
        return (<Route path="*" element={<Navigate to={Screen.Basic} replace/>}/>)
    }

    return (
        <Routes>
            {
                screenKeys.map(key => (
                    <Route path={`${key}/*`} element={<ScreenWrapper>{screens[key]}</ScreenWrapper>} key={key}/>)
                )
            }
            {
                getDefaultScreen()
            }
        </Routes>
    )
}

export default Screens
