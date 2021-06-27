import Breadcrumb from '../../components/Breadcrumb'
import { ProseWide } from '../../components/Universal'

const chairmans_message = () => {
  return (
    <>
      <Breadcrumb title="Chairman's Message" />
      <ProseWide className="container mx-auto prose my-12 px-5">
        <div className="flex justify-center">
          <img
            className="rounded-3xl w-[250px] object-cover object-center"
            src="/images/other/chairman.jpeg"
            alt="chairman"
          />
        </div>
        <blockquote>
          SSIM students are professionals and intellectuals, in the making. The
          institution provides a learning environment that is adaptable and
          flexible, facilitating potential change in the higher education
          pattern. The learning environment is also used as a strategic tool for
          power and excellence. This is done with an objective to support the
          learning paradigm that provides education for the student in a manner
          most suited to them.
          <br />
          <br />
          SSIM, in association with AACE, offers professional programs that
          groom boys and girls to shoulder gaps, at national and as well as
          global platforms. An optimum blend of academics with on-the-job
          training is provided. Excellent infrastructure, competent faculty &
          committed management, help the students excel in their pursuits.
          <br />
          <br />
          SSIM, as well as all the other institutions of Sri Sukhmani Group of
          institutions, empower the students to face the evolving global
          platform and professional milieu, with confidence.
          <br />
          <br />
          The Group members continuously strive and have accomplished tremendous
          student welfare.
        </blockquote>
        <p className="text-right">
          Prof. Avtar Singh
          <br />
          Founder and Chairman
        </p>
      </ProseWide>
    </>
  )
}

export default chairmans_message
