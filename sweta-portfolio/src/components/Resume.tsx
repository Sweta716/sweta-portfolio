export default function Resume() {
  return (
<section id="resume" className="py-20 px-4 md:px-20 text-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">

      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-brand-pink mb-8 text-center">Experience</h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold">Barclays, New York</h3>
            <p className="text-sm text-gray-600 mb-1">Full Stack Developer · Aug 2024 – Present</p>
            <ul className="list-disc ml-6 text-base leading-7">
              <li>Built microservices with Spring Boot, REST, and Kafka for real-time orchestration</li>
              <li>Integrated Camunda, Tableau, OpenFin into Angular/React stack</li>
              <li>Deployed on OpenShift AWS and modernized legacy UI</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">State Street Corporation, Boston</h3>
            <p className="text-sm text-gray-600 mb-1">Software Developer · Feb 2024 – Dec 2024</p>
            <ul className="list-disc ml-6 text-base leading-7">
              <li>Automated developer portal onboarding, integrated REST APIs</li>
              <li>Migrated UI from Bootstrap to Material UI</li>
              <li>Achieved 100% test coverage with Jest, Storybook, React Testing Library</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Barclays Global Service Center, India</h3>
            <p className="text-sm text-gray-600 mb-1">Senior Developer · Jul 2018 – Jun 2022</p>
            <ul className="list-disc ml-6 text-base leading-7">
              <li>Led automation for RBI localization, ML incident predictors</li>
              <li>Built dashboards in Tableau, Power BI; decommissioned 60% of legacy systems</li>
              <li>Managed a team of 10+, improved customer satisfaction by 20%</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10">
          <a
            href="/Sweta_Resume.pdf"
            className="inline-block bg-brand-pink text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            download
          >
            📄 View Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}