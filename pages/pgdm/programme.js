import { ProseWide } from '../../components/Universal'
import Breadcrumb from '../../components/Breadcrumb'

const programme = () => {
  return (
    <>
      <Breadcrumb title="Programme" />
      <ProseWide className="pb-12 md:w-2/3">
        <h2 className="pt-12 text-left">PGDM PROGRAM</h2>
        <blockquote className="text-sm sm:text-base">
          Our PGDM program, combined with SAP Training, is an innovative pursuit
          in management education. It combines skill-oriented qualifications in
          the field of management services including management research and
          thus adds to students’ employability. We follow a practical and
          experimental learning approach coupled with interactive sessions and
          peer-to-peer feedback mechanism. Our main aim is to be creative and
          keep innovating the age-old activity of imparting education, thereby
          revolutionizing the way you learn and assimilate information. With
          more focus on practical aspects of education, we ensure that students
          are ready to face the market and succeed. Our mentorship program helps
          each individual learner connect with corporate mentors and gain
          greater exposure to multiple levels of expertise and knowledge.
        </blockquote>
        <h2 className="text-left">PROGRAM HIGHLIGHTS</h2>
        <p className="pl-2 text-left text-xs sm:text-base">
          <li>A pragmatic approach to learning through case studies</li>
          <li>Specialized Personality Development Programs</li>
          <li>Field Training and Practical coaching using Live Projects</li>
          <li>Imparting essential Business Communication Skills</li>
          <li>Workshops and seminars by leading industry experts</li>
          <li>Strong Alumni Network with global reach</li>
        </p>
      </ProseWide>
    </>
  )
}

export default programme
