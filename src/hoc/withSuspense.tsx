import React, {Component, ComponentType} from "react";

export function withSuspense<T>(Component: ComponentType<T>) {
    return (props: unknown) => {
        return <React.Suspense fallback={<div>Loading...</div>}>
            <Component{...props as T}/>
        </React.Suspense>
    }
}

