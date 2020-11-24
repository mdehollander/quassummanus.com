import React from "react"
import styles from "../../../styles/rythmic.privacy-policy.module.css"
import { Helmet } from "react-helmet"

export default props => {
  return (
    <article className={styles.container}>
      <Helmet>
        <title>Rythmic Privacy Policy</title>
        <meta name="description" content="This is privacy policy page for rythmic app." />
      </Helmet>
      <h1>Rythmic Privacy Policy</h1>
      <h2>Privacy Policy</h2>
      <p>
        Antoni Silvestrovic built the rythmic app as a Freemium app. This
        SERVICE is provided by Antoni Silvestrovic at no cost and is intended
        for use as is. This page is used to inform visitors regarding my
        policies with the collection, use, and disclosure of Personal
        Information if anyone decided to use my Service. If you choose to use my
        Service, then you agree to the collection and use of information in
        relation to this policy. The Personal Information that I collect is used
        for providing and improving the Service. I will not use or share your
        information with anyone except as described in this Privacy Policy. The
        terms used in this Privacy Policy have the same meanings as in our Terms
        and Conditions, which is accessible at rythmic unless otherwise defined
        in this Privacy Policy.
      </p>
      <h2>Information Collection and Use</h2>
      <p>
        Currently no personal information is being collected when using our
        Service, but there are plans to introduce analytics in a future version
        of the application.
      </p>
      <h2>Log Data</h2>
      <p>
        I want to inform you that whenever you use my Service, in a case of an
        error in the app I collect data and information (through third party
        products) on your phone called Log Data. This Log Data may include
        information such as your device Internet Protocol (“IP”) address, device
        name, operating system version, the configuration of the app when
        utilizing my Service, the time and date of your use of the Service, and
        other statistics.
      </p>
      <h2>Cookies</h2>
      <p>
        Cookies are files with a small amount of data that are commonly used as
        anonymous unique identifiers. These are sent to your browser from the
        websites that you visit and are stored on your device's internal memory.
        This Service does not use these “cookies” explicitly.
      </p>
      {/* <h2>Security</h2>
      <p>
        I value your trust in providing us your Personal Information, thus we
        are striving to use commercially acceptable means of protecting it. But
        remember that no method of transmission over the internet, or method of
        electronic storage is 100% secure and reliable, and I cannot guarantee
        its absolute security.
      </p> */}
      <h2>Links to Other Sites</h2>
      <p>
        This Service may contain links to other sites. If you click on a
        third-party link, you will be directed to that site. Note that these
        external sites are not operated by me. Therefore, I strongly advise you
        to review the Privacy Policy of these websites. I have no control over
        and assume no responsibility for the content, privacy policies, or
        practices of any third-party sites or services.
      </p>
      <h2>Children’s Privacy</h2>
      <p>
        These Services do not address anyone under the age of 13. I do not
        knowingly collect personally identifiable information from children
        under 13. In the case I discover that a child under 13 has provided me
        with personal information, I immediately delete this from our servers.
        If you are a parent or guardian and you are aware that your child has
        provided us with personal information, please contact me so that I will
        be able to do necessary actions.
      </p>
      <h2>Changes to This Privacy Policy</h2>
      <p>
        I may update our Privacy Policy from time to time. Thus, you are advised
        to review this page periodically for any changes. I will notify you of
        any changes by posting the new Privacy Policy on this page.
      </p>
      <p>This policy is effective as of 2020-09-08</p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or suggestions about my Privacy Policy, do not
        hesitate to contact me at{" "}
        <a href="mailto:antoni@quassummanus.com">antoni@quassummanus.com</a>, or
        for general enquiries please contact us at{" "}
        <a href="mailto:info@quassummanus.com">info@quassummanus.com</a>
      </p>
    </article>
  )
}
