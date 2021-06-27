import { Logo150 } from '../../components/Universal'
import Breadcrumb from '../../components/Breadcrumb'

const rename_later = () => {
  let srcs = [];

  for (let index = 1; index <= 53; index++) {
    srcs.push(`/images/recruiters/${index}.jpg`)
  }


  return (
    <>
      <Breadcrumb title="Our Recruiters" />
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center">
            {
              srcs.map((src, index) => {
                return <Logo150 key={index} src={src} />
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default rename_later
