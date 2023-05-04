import { forwardRef } from "react"

// eslint-disable-next-line react/display-name
const Input = forwardRef((props,ref) => {
    return (
      <input ref={ref}  placeholder='search product'/>
    )
})

export default Input