import Breadcrumb from '../../components/Breadcrumb'
import { Logo150, ProseWide } from '../../components/Universal'

const rename_later = () => {
  let srcs = [];

  for (let index = 1; index <= 28; index++) {
    srcs.push(`/images/recruiters/${index}.jpg`)
  }

  return (
    <>
      <Breadcrumb title="Summer Internships" />
      <ProseWide className="pt-24">
        <p>
          The right internship is an important aspect of the entire PGDM
          programme. In a continually changing corporate world, it is imperative
          for business schools to prepare their students for taking on future
          challenges. An internship tenure not only adds value to the degree but
          also defines the future career path of the degree holder.
        </p>

        <p>
          Internship programs by SSIM are devised to heighten the awareness of
          students regarding various rural and social issues and the corporate
          work culture. Students are required to complete summer internships
          with corporate business houses. These give them a fundamental
          understanding of the functioning of various organizations and
          businesses.
        </p>

        <h3 className="text-center">SIP Companies</h3>
      </ProseWide>
      <div className="pt-8 pb-24">
        {/* Logo Sec */}
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center">
            {
              srcs.map((src, index) => {
                return <Logo150 key={index} src={src} />
              })
            }
          </div>
        </div>
        {/* Logo Sec */}
      </div>
    </>
  )
}

export default rename_later
