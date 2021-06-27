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
    <FlexColumnCenter className={`mb-10 lg:flex-row ${props.className}`}>
      <img
        className={`order-1 lg:order-2 rounded-3xl h-[300px] w-full max-w-[400px] object-cover object-center ${props.imgClassName}`}
        src={props.src}
        alt={props.alt}
      />
      <div className="prose px-5 pt-8 lg:pt-0 text-justify order-2 lg:order-1 w-full lg:pr-12">
        <h3 className={`italic text-center mt-0 ${props.hClassName}`}>
          {props.title || ''}
        </h3>
        <p className={`${props.pClassName}`}>{props.children || ''}</p>
      </div>
    </FlexColumnCenter>
  )
}

export const ContentOnRight = (props) => {
  return (
    <FlexColumnCenter className={`mb-10 lg:flex-row ${props.className}`}>
      <img
        className={`rounded-3xl h-[300px] w-full max-w-[400px] object-cover object-center ${props.imgClassName}`}
        src={props.src}
        alt={props.alt}
      />
      <div className="prose px-5 pt-8 lg:pt-0 text-justify w-full lg:pl-12">
        <h3 className={`italic text-center mt-0 ${props.hClassName}`}>
          {props.title || ''}
        </h3>
        <p className={`${props.pClassName}`}>{props.children || ''}</p>
      </div>
    </FlexColumnCenter>
  )
}

export const Logo150 = (props) => {
  return (
    <>
      <div className="h-[150px] w-[150px] m-3 border-2 border-gray-100 rounded-2xl">
        <img
          className="object-contain p-1.5 w-full h-full"
          src={
            props.src ||
            'https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e'
          }
          alt={props.alt || "couldn't load"}
        />
      </div>
    </>
  )
}
