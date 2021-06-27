import { Logo150 } from '../../components/Universal'
import Breadcrumb from '../../components/Breadcrumb'

const Awards = () => {
  let srcs = []

  for (let index = 1; index <= 53; index++) {
    srcs.push(`/images/recruiters/${index}.jpg`)
  }

  return (
    <>
      <Breadcrumb title="Our Recruiters" />
      <div className="py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center">
            <div className="rounded-3xl overflow-hidden m-3 ">
              <img
                className="h-[200px] w-[200px]"
                src="/images/awards/1.png"
                alt=""
              />
            </div>

            <div className="rounded-3xl overflow-hidden m-3 ">
              <img
                className="h-[200px] w-[200px]"
                src="/images/awards/3.png"
                alt=""
              />
            </div>

            <div className="rounded-3xl overflow-hidden m-3 ">
              <img
                className="h-[200px] w-[200px]"
                src="/images/awards/2.png"
                alt=""
              />
            </div>

            <div className="rounded-3xl overflow-hidden m-3 ">
              <img
                className="h-[200px] w-[200px]"
                src="/images/awards/4.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Awards
