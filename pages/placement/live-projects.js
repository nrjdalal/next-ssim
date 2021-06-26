import Breadcrumb from '../../components/Breadcrumb'
import { Logo150, ProseWide } from '../../components/Universal'

const rename_later = () => {
  return (
    <>
      <Breadcrumb title="Live Projects" />
      <ProseWide className="pt-24">
        <p>
          Live projects play a significant role in providing real-time
          management education to the students. During live projects, students
          are encouraged to identify the domain they want to work in and select
          the relevant project. They also get to meet working professionals or
          organizations and discuss with them about the project. Live projects
          are about bringing professional management experience to young
          students which help them in the beginning of their career as well as
          in the long-run. It provides a right mix of practical exposure to the
          students and allows them to explore the professional work culture in
          the corporate world much before they actually get into it.
        </p>
      </ProseWide>
      <div className="mx-auto md:w-5/6 px-3 pt-2 pb-24">
        <Logo150 />
      </div>
    </>
  )
}

export default rename_later
