import Breadcrumb from '../../components/Breadcrumb'
import { ProseWide } from '../../components/Universal'

const deans_message = () => {
  return (
    <>
      <Breadcrumb title="dean's message" />
      <ProseWide className="container mx-auto prose my-12 px-5">
        <div className="flex justify-center">
          <img
            className="rounded-3xl w-[250px] object-cover object-center"
            src="/images/other/dean.jpeg"
            alt="dean"
          />
        </div>
        <blockquote>
          SSIM welcomes you to the world of exclusive learning ambience and to
          experience the epitome of corporate leadership. It is our perennial
          drive to offer quality education with world class exposure and to
          build capability of students.
          <br />
          <br />
          Our endeavour is to equip our students with life skills to face the
          real world – be it planning, organising, questioning or reasoning. We
          at SSIM, mentor our students to sharpen their intelligence and enable
          them a positive system that shapes their attitude, outlook and
          conduct, so that they become sharp enough to tackle the challenges of
          life.
          <br />
          <br />I encourage you to visit us in person to discover the exciting
          new developments and advantages of the great opportunities available
          in SSIM.
        </blockquote>
        <p className="text-right">
          Dr. Sujata Kaul
          <br />
          Dean
        </p>
      </ProseWide>
    </>
  )
}

export default deans_message
