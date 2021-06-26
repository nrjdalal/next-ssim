import Breadcrumb from '../../components/Breadcrumb'
import { ProseWide } from '../../components/Universal'

const rename_later = () => {
  return (
    <>
      <Breadcrumb title="vision mission" />
      <ProseWide className="pb-12">
        <h2 className="pt-12 text-center">OUR VISION</h2>
        <blockquote>
          To be a world class school of management known for its innovative
          pedagogy, research and building professional competence.
        </blockquote>
        <h2 className="text-center">OUR MISSION</h2>
        <blockquote>
          To provide world-class management education in India in an atmosphere
          of freedom, while adhering to strict academic standards in research
          and teaching.
        </blockquote>
      </ProseWide>
    </>
  )
}

export default rename_later
