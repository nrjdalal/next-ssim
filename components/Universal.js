// export const name = (props) => {
//   return <>{props.children}</>
// }

export const FlexColumnCenter = (props) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${props.className}`}
    >
      {props.children}
    </div>
  )
}

export const FlexRowCenter = (props) => {
  return (
    <div
      className={`flex flex-row items-center justify-center ${props.className}`}
    >
      {props.children}
    </div>
  )
}

export const ProseWide = (props) => {
  return (
    <div className={`mx-auto prose max-w-none md:w-5/6 ${props.className}`}>
      {props.children}
    </div>
  )
}
