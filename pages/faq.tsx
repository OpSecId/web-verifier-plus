import { NextPage } from "next";
import styles from './infopages.module.css'
import { BottomBar } from "components/BottomBar/BottomBar";
import { TopBar } from "components/TopBar/TopBar";
import { useEffect, useState } from "react";

const Faq: NextPage = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.lang = "en";
    document.title = "VcVérif Home page";
  }, []);

  return (
    <main className={styles.main}>
      <TopBar hasLogo={true} isDark={isDark} setIsDark={setIsDark}/>
      <div className={styles.textContent}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <h2 id="trust">Why this service?</h2>
        <p>Expand open digital credential frameworks towards supply-chain and experimentation.</p>
        <p>This website implements <a href='https://github.com/digitalcredentials'>open source libraries</a> that support open technical standards for supported digital credentials.</p>
        <p>This service is maintained by <a href='https://opsecid.ca'>Open Security and Identity</a>. </p>
        
        <h2 id="supported">How can I get involved?</h2>
        <p><a href='#'>Apply to join a trust registry now!</a></p>

        <h2 id="supported">What formats of digital credentials are supported?</h2>
        <p>W3C</p>
        <ul>
          <li>VC Data Model v2.0</li>
          <li>VC Bitstring Status List</li>
          <li>VC Data Integrity</li>
          <ul>
            <li>Ed25519Signature2020</li>
            <li>eddsa-rdfc-2022</li>
            <li>eddsa-jcs-2022</li>
          </ul>
        </ul>
        <p>UNTP</p>
        <ul>
          <li>DigitalIdentityAnchor</li>
          <li>DigitalProductPassport</li>
          <li>DigitalTraceabilityEvent</li>
          <li>DigitalConformityCredential</li>
        </ul>
        
        <h2>What is a {"Public Link"}?</h2>
        <p>Users of the OpSecId Discovery Wallet mobile app are able to “<a href='https://lcw.app/faq.html#public-link'>Create Public Links</a>” if they wish to share a credential from their wallet to anyone with the link. Please see the <a href='https://lcw.app/faq.html'>Learner Credential Wallet FAQ</a> for more information.</p>
          
        <h2>Who do I contact if I have more questions?</h2>
        <p>For questions about VcVérif please email contact -at- opsecid -dot- ca.</p>
        <p>To learn more about OpSecId please visit us at <a href='https://opsecid.ca'>opsecid.ca</a>.</p>

      </div>
      <BottomBar isDark={isDark}/>
    </main>
  );
}

export default Faq;
