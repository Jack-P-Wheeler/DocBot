import { useEffect, useRef } from "react"

const UploadFileForm = () => {
    const inputRef = useRef()
    useEffect(() => {
        console.log(inputRef.current.value)
    }, [inputRef])
    return (
        <form>
            <input type="file" ref={inputRef}/>
        </form>
    )
}

export default UploadFileForm