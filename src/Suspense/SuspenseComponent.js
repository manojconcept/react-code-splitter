import { Suspense } from "react"

/*
@para
element : React element
fallback : loading animation component
The syntax <div/> in React is a shorthand for an empty div element. It's a self-closing tag that represents an HTML div element without any children or content.
*/
export const SuspenseComponent = ({ children, fallback = <div /> }) => {
    return (
        <Suspense fallback={fallback}>
            {children}
        </Suspense>
    )
}