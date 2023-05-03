import { useEffect } from "react"

const Text = ({isShow}) => {
  useEffect(() => {
    console.log('component mounted');
  },[])
  useEffect(() => {
    console.log('component updated to - ',isShow);

  },[isShow])
  useEffect(()=>{
    if (isShow) {
        return ()=>{
            console.log('component unmounted!');
        }
    }
  },[isShow])
  
  return (
    <div>{isShow ? 'Show' : ''}</div>
  )
}

export default Text