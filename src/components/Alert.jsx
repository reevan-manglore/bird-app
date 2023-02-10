import { useTransition, animated } from '@react-spring/web'

function Alert({shouldShowAlert = false,message}) {
   const transition = useTransition(shouldShowAlert,{
    from:{
      opacity:0,
      transform:"translateY(-100%) translatex(-50%) "
    },
    enter:{
      opacity:1,
      transform:"translateY(0) translatex(-50%)"
    },

   })
 
  return transition((style,item)=>
   item?
    <animated.div style = {style} className={`
    px-4 py-2 rounded-sm  min-w-[40vw]   fixed top-0 left-1/2 -translate-x-1/2 bg-red-400 text-lg text-center
    shadow-sm shadow-red-400
    `}>
        {message}
    </animated.div>
    : ""
  )
}

export default Alert