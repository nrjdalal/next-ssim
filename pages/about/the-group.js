import Breadcrumb from '../../components/Breadcrumb'
import {
  ContentOnLeft,
  ContentOnRight,
  FlexColumnCenter,
  ProseWide,
} from '../../components/Universal'

const the_group = () => {
  return (
    <>
      <Breadcrumb title="the group" />
      <ProseWide className="py-12">
        <FlexColumnCenter>
          <blockquote>
            Sri Sukhmani Group of Institutions, is rated among the top
            educational and professional Group of North India. Established in
            1970s SSGI is one of the first self-financing Groups providing
            education and professional training in the region.
            <br />
            <br />
            The group has already celebrated its Golden Jubilee and every year
            attracts a diverse student community from all over India. SSGI is
            known for its rich, vibrant campus life marked by Management,
            technical, cultural and sports events running throughout the year.
            <br />
            <br />
            With institutes providing a diverse range of specialized courses in
            engineering, hospitality, management, nursing and a lot more, the
            Group has gained an impeccable reputation for consistently imparting
            quality education. The group manages and operated multiple colleges
            in New Delhi, Chandigarh, and Dera Bassi.
          </blockquote>
        </FlexColumnCenter>

        <h1 className="pt-12 text-center italic">List of Our Institutes</h1>
      </ProseWide>

      <div className="mx-auto md:w-5/6 px-6 pb-16">
        <ContentOnRight
          src="/about/the-group/Sri Sukhmani Institute of Management Dwarka.jpg"
          className="text-center lg:text-left"
        >
          Sri Sukhmani Institute of Management, New Delhi
        </ContentOnRight>

        <ContentOnLeft
          src="/about/the-group/Sri Sukhmanu Polytechnic.jpg"
          className="text-center lg:text-right"
        >
          International Polytechnic for Women, New Delhi
        </ContentOnLeft>

        <ContentOnRight
          src="/about/the-group/Sri Sukhmani Institute of Management Dwarka.jpg"
          className="text-center lg:text-left"
        >
          Swarn Public School, New Delhi
        </ContentOnRight>

        <ContentOnLeft
          src="/about/the-group/Sri Sukhmanu Polytechnic.jpg"
          className="text-center lg:text-right"
        >
          Sri Sukhmani Institute of Engineering & Technology, Chandigarh
        </ContentOnLeft>

        <ContentOnRight
          src="/about/the-group/Sri Sukhmani Institute of Management Dwarka.jpg"
          className="text-center lg:text-left"
        >
          Sri Sukhmani Institute of Hospitality & Management, Chandigarh
        </ContentOnRight>

        <ContentOnLeft
          src="/about/the-group/Sri Sukhmanu Polytechnic.jpg"
          className="text-center lg:text-right"
        >
          Sri Sukhmani Institute of Dental College & Hospital, Chandigarh
        </ContentOnLeft>

        <ContentOnRight
          src="/about/the-group/Sri Sukhmani Institute of Management Dwarka.jpg"
          className="text-center lg:text-left"
        >
          Sri Sukhmani Polytechnic, Chandigarh
        </ContentOnRight>

        <ContentOnLeft
          src="/about/the-group/Sri Sukhmanu Polytechnic.jpg"
          className="text-center lg:text-right"
        >
          Sri Sukhmani International School, Chandigarh
        </ContentOnLeft>

        <ContentOnRight
          src="/about/the-group/Sri Sukhmani Institute of Management Dwarka.jpg"
          className="text-center lg:text-left"
        >
          Sri Sukhmani Institute of Medical Science & Research, Chandigarh
        </ContentOnRight>
      </div>
    </>
  )
}

export default the_group
