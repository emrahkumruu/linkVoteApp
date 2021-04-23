import {
    Switch,
    Route,
} from "react-router-dom";

export default function Links({ routes }) {
    return (
        <>
            <Switch>
                {routes.map((route, i) => (
                    <Route
                        key={i}
                        path={route.path}
                        render={props => (
                            <route.component {...props} pageName={route.pageName || null} />
                        )}
                    />
                ))}
            </Switch>
        </>
    )
}