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
    <div
      className={`mx-auto prose max-w-none md:w-5/6 px-6 text-justify ${props.className}`}
    >
      {props.children}
    </div>
  )
}

export const ContentOnLeft = (props) => {
  return (
    <FlexColumnCenter className="lg:flex-row">
      <img
        className={`order-1 lg:order-2 rounded-3xl h-[300px] w-full max-w-[400px] object-cover object-center ${props.className}`}
        src={props.src}
        alt={props.alt}
      />
      <div className="order-2 lg:order-1 w-full lg:pr-12">
        <h2 className="text-center">{props.title}</h2>
        <blockquote>{props.children}</blockquote>
      </div>
    </FlexColumnCenter>
  )
}

export const ContentOnRight = (props) => {
  return (
    <FlexColumnCenter className="lg:flex-row">
      <img
        className={`rounded-3xl h-[300px] w-full max-w-[400px] object-cover object-center ${props.className}`}
        src={props.src}
        alt={props.alt}
      />
      <div className="w-full lg:pl-12">
        <h2 className="text-center">{props.title}</h2>
        <blockquote>{props.children}</blockquote>
      </div>
    </FlexColumnCenter>
  )
}
