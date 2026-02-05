---
title: "DPDPA Compliance Checklist for SaaS in India (2026)"
date: 2026-02-04
draft: false
description: "DPDPA compliance checklist for SaaS in India. Fines up to 250 crore. Covers consent, data processing, security, children's data, and what to do before May 2027 enforcement."
keywords: ["DPDPA compliance checklist", "DPDPA", "DPDPA India", "DPDPA for SaaS", "Digital Personal Data Protection Act", "DPDPA compliance", "DPDPA fines", "DPDPA 2026", "DPDPA requirements", "DPDPA deadline", "how to comply with DPDPA", "DPDPA enforcement date", "DPDPA vs GDPR", "data protection india", "DPDPA for startups"]
tags: ["compliance", "india", "data-protection", "saas", "dpdpa"]
author: "Aditya"
images: ["/images/landing.jpg"]
---

{{< rawhtml >}}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "DPDPA Compliance Checklist for SaaS in India (2026)",
  "author": {
    "@type": "Person",
    "name": "Aditya",
    "url": "https://twitter.com/0x0elliot"
  },
  "datePublished": "2026-02-04",
  "dateModified": "2026-02-04",
  "publisher": {
    "@type": "Organization",
    "name": "ShipFast Blog",
    "url": "https://www.shipfast.blog",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.shipfast.blog/favicon.png"
    }
  },
  "description": "Complete DPDPA compliance checklist for SaaS founders in India. Covers consent, data processing, security measures, fines up to 250 crore, and what you actually need to do before enforcement.",
  "image": "https://www.shipfast.blog/images/landing.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.shipfast.blog/blog/dpdpa-compliance-checklist-saas-india/"
  },
  "articleSection": "Compliance Guide",
  "wordCount": 2400
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need DPDPA compliance if my company is registered outside India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, if you're processing personal data of people in India. Doesn't matter where your company is registered."
      }
    },
    {
      "@type": "Question",
      "name": "What counts as personal data under DPDPA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anything that can identify a person: name, email, phone, IP address, device IDs, location data. If you can trace it back to a specific human, it's personal data."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a Data Protection Officer for DPDPA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The law requires you to publish contact information for someone who handles data protection queries and grievances. For small SaaS, this can be you or a co-founder. Larger companies designated as Significant Data Fiduciaries have stricter requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Does DPDPA apply to B2B SaaS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If you're storing data about employees or contacts of your business clients, that's still personal data. B2B doesn't exempt you."
      }
    },
    {
      "@type": "Question",
      "name": "Is Google Analytics DPDPA compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depends on how you use it. You need opt-in consent before firing any tracking. The default implied consent banners won't cut it. Consider self-hosted alternatives like Plausible or Umami if you want to avoid the headache."
      }
    }
  ]
}
</script>
{{< /rawhtml >}}

**TL;DR:** DPDPA is law, not a certification. Fines go up to 250 crore. Full enforcement around May 2027. Small or large, you need to comply. Get proper opt-in consent, publish a DPO contact, delete data when users ask, sign Data Processing Agreements with every vendor (CMS, email tool, analytics, everything). If some random WordPress plugin leaks your user's data, YOU get fined, not them. Children = anyone under 18, no tracking, no targeted ads. If unsure whether a tool is compliant, assume it isn't.

---

Howdy again!

I've helped companies work through HIPAA, ISO 27001, GDPR. I get the tech side. I also run [zappush.com](https://zappush.com) where we deal with user data daily. Figured I'd help confused indie devs and founders navigate this new regulation. There's both opportunity and a huge pain in the ass coming our way :)

I'm an engineer, not a lawyer. None of this is legal advice, but I know what I'm talking about.

DPDPA is India's version of GDPR. It's law, not a certification. Fines go up to 250 crore (~$30M), though I wouldn't expect small businesses to get hit that hard. Still, no need to get into locha over negligence.

{{< toc >}}

## DPDPA Timeline: Where We Are Now

The act isn't fully enforced yet. [Here's the official timeline](https://www.dpdpact2023.com/Section_1).

- **Phase 1 (Nov 2025):** Skeleton laid down. The law exists on paper.
- **Phase 2 (by Nov 2026):** Operational rules for consent managers and the Data Protection Board. How complaints are filed, how notices are issued, etc.
- **Phase 3 (~May 2027):** Full enforcement. This is when business owners get fined.

The market has already started preparing. I've noticed a lot of compliance consultants popping up. [Consently](https://www.consently.in), [Scrut](https://www.scrut.io/lp1/scrut-comparison), [DPDP Consultants](https://www.dpdpconsultants.com/), and even [Udemy courses on DPDPA](https://www.udemy.com/topic/dpdpa/). I also help companies with this stuff. If you need a hand, reach out through the contact form.

## What YOU Need to Know About DPDPA

Most of this comes from [here](https://www.dpdpact2023.com/)

### Notice & Consent (Sections 3–5)
- **Clear notice:** Explain why you need each item of data before collecting it.
- **Language:** Available in English or any Eighth Schedule language.
- **User rights:** Tell users what you collect, why, and how they can access, correct, delete, or withdraw consent.
- **Grievance contact:** Publish a [Data Protection Officer (DPO)](https://dpo-india.com/Blogs/strategic-role/). This can be you, an employee, or an external DPO-as-a-service provider. You have 90 days to resolve grievances. If you don't, users can escalate to the Data Protection Board.

### Core Fiduciary Duties (Sections 6(1)–6(8), 6(10))
- **No "legitimate interest" basis:** Unlike GDPR, you can't process data just because you have a "legitimate interest." You need consent or a specific exemption. This hits B2B SaaS harder than you'd expect.
- **Deemed consent:** Some processing is allowed without explicit consent if the user voluntarily provides data (like filling a form) or if it's for employment, public interest, etc. But don't stretch this.
- **Data minimisation:** Collect only what you need. Don't collect the user's entire contact list if you can't explain what you'd do with it. (This is a loose example from the guidelines themselves :P)
- **Purpose limitation:** Use data only for stated purposes.
- **"Reasonable" security:** I found this bit very ambiguous. GDPR at least suggests pseudonymisation, encryption, and regular security testing. DPDPA doesn't get into what algorithms count as "reasonable." From personal experience, auditors for ISO 27001 or SOC 2 often use [NIST's published FIPS algorithms](https://csrc.nist.gov/projects/cryptographic-algorithm-validation-program). I dislike DPDPA's skeleton for the lack of technical care.
- **Processor liability:** You are liable even if your data processor screws up. If AWS leaks YOUR user's data, you get fined. Not them. I do not like this personally. The party that screwed up should be penalised, not the business owner who trusted their infrastructure.
- **DPA required:** All processors need a Data Processing Agreement with you.
- **Breach notification:** Notify the Data Protection Board and affected users if there's a breach.
- **Deletion:** Delete data when consent is withdrawn or the purpose is served. Make sure your processors do the same.
- **Grievance mechanism:** Publish your DPO's contact so issues get handled before they escalate to the board.

### Special Situations (Sections 7–10)
- **Consent exemptions:** Some processing is allowed without consent. Legal compliance, employment, medical emergencies, fraud prevention, public interest.
- **Children (under 18):** Verifiable parental consent required. No tracking, no targeted ads. Be careful with how Google Analytics tracks underage users and how you advertise to them. Meta already enforces a lot of this. If you have a social platform for teenagers, a gaming platform, or an adolescent audience, this will affect you.
- **Significant Data Fiduciaries:** The Government can designate certain entities as "Significant." These are bigger firms with more responsibilities.

### Data Principal Rights (Sections 11–17)
- **Access & Correction**: Users can see what personal data is processed, why, with whom it is shared, and request correction, updating, or deletion where applicable.
- **Consent Control**: Users can withdraw consent at any time; processing must stop and data deleted unless legally required to retain it. **Withdrawal must be as easy as giving consent.**
- **Grievance & Escalation**: Users must have a clear grievance mechanism and can escalate unresolved complaints to the Data Protection Board.
- **Nomination**: Users may nominate another person to exercise their rights in case of death or incapacity.

### Data Protection Board Powers (Sections 28–34)
- **Investigation:** Board can investigate and ask for evidence.
- **Enforcement:** Board can issue orders and penalties.

### Penalties & Appeals (Sections 36–37)
- **Fines are tiered:**
  - Up to ₹50 crore for children's data violations
  - Up to ₹200 crore for security breach failures
  - Up to ₹250 crore for the most serious violations
- **Appeals:** Decisions can be appealed.

### Rule-making (Section 44(2))
- **Supporting rules:** Government will introduce additional rules and standards over time.

## DPDPA Compliance Checklist

### 1. Data Collection and Consent
"Child" as per DPDPA: Anyone under 18, or a person with disability who has a lawful guardian.

- [ ] Are you collecting **only** what you need without ambiguous permissions?
- [ ] Are you clearly telling them why you need it and how users can exercise their rights to withdraw, reach out for grievances, etc?
- [ ] Are you ensuring **children's data (<18 years)** is not processed without verifiable parental consent.
- [ ] Are you NOT undertaking tracking or behavioural monitoring of children or targeted advertising directed at children?
- [ ] Are you using **opt-in consent** for analytics, marketing, or tracking cookies (Google Analytics, Meta Pixel, etc.)?

### 2. Data Processing & Storage
- [ ] Are you using data **only for the stated purpose**? Cross-purpose usage requires fresh consent.
- [ ] If using **AWS, GCP, or other cloud services**, can you confirm that data is **processed securely** (encryption at rest and in transit, regular backups, restricted access)?
- [ ] For **CMS platforms or any other third party software processing user data**, can you ensure they take measures to be DPDPA compliant? Otherwise, you're liable as the fiduciary.
- [ ] Keep personal data **accurate and complete**, especially if used for decisions affecting users.

^ An interesting illustration stated for above is: X, an individual, decides to close her savings account with Y, a bank. Y is required by law applicable to banks to maintain the record of the identity of its clients for a period of ten years beyond closing of accounts. Since retention is necessary for compliance with law, Y shall retain X's personal data for the said period.

### 3. Security Measures
Remember: DPDP is vague on technical standards, so relying on **ISO 27001 / SOC 2 / NIST-approved algorithms** is safest.

- [ ] Are you implementing reasonable security safeguards for all personal data?
- [ ] Is encryption applied at rest and in transit using strong, recognized algorithms (e.g., NIST-approved)?
- [ ] Have you applied pseudonymization or anonymization for sensitive personal data where feasible?
- [ ] Are access controls in place to restrict data to authorized personnel only?
- [ ] Do you maintain audit logs to track who accessed or modified personal data?
- [ ] Are you conducting regular security testing (e.g., vulnerability scans, penetration tests) to identify and fix risks?
- [ ] Do your security practices align with recognized standards (ISO 27001, SOC 2, NIST)?

### 4. Data Retention & Deletion
- [ ] Are you deleting personal data when it is no longer needed for the original purpose?
- [ ] Do you honor user requests to withdraw consent by deleting their personal data promptly?
- [ ] Are you ensuring that third-party processors also delete personal data when instructed?
- [ ] Are you retaining data only as long as legally required, and not beyond that period?

### 5. Data Principal Rights
- [ ] Can users easily access their personal data that you hold?
- [ ] Can users request correction or completion of inaccurate or incomplete data?
- [ ] Can users request deletion of their personal data or withdraw consent at any time?
- [ ] Do you have a clear grievance redressal mechanism that handles complaints promptly and effectively (not just an email or portal)?
- [ ] Is it clear who users should contact (DPO or authorised person) for exercising their rights?
- [ ] Can users nominate another person to exercise their rights in case of death or incapacitation?

### 6. Third-Party Processors & Analytics
- [ ] Are you using valid contracts (example [here](https://www.dpdpa.com/templates/dataprocessingtemplate.html)) with all third-party processors (e.g., database providers, analytics platforms, email marketing tools)?
- [ ] Do you avoid sending personal data to non-compliant third-party services, especially for minors?
- [ ] Are you minimizing third-party tracking and sharing by default?
- [ ] Where feasible, are you self-hosting analytics or similar services to reduce reliance on external processors? Reach out to [me](https://cal.com/zappush/30min) if you need help with it.
- [ ] Do you know where your user data is stored and whether it's sent outside India?
- [ ] Are records of cross-border transfers maintained for audit and potential inspection by the Data Protection Board?
- [ ] Can you confirm if the data processor abroad complies with DPDPA as well?
- [ ] Have you checked whether any government guidelines or restrictions require certain types of data to remain in India, and are you compliant with them?

### 7. Monitoring & Compliance
- [ ] Are you keeping records of user consent and processing purposes for all personal data collected?
- [ ] Do you have a plan to respond to potential investigations or audits by the Data Protection Board?
- [ ] Are you actively monitoring for data breaches across all systems handling personal data?
- [ ] Do you have a breach notification plan to inform both affected users and the Data Protection Board promptly, as required under the law?
- [ ] Are periodic internal compliance checks conducted to ensure adherence to DPDPA obligations?


If you're unsure about a tool, plugin, or CMS, **assume it's non-compliant until proven otherwise**. Liability falls on you.

## FAQ

**Do I need to comply if my company is registered outside India?**
Yes, if you're processing personal data of people in India. Doesn't matter where your company is registered.

**What counts as "personal data"?**
Anything that can identify a person: name, email, phone, IP address, device IDs, location data. If you can trace it back to a specific human, it's personal data.

**Do I need a Data Protection Officer (DPO)?**
The law requires you to publish contact information for someone who handles data protection queries and grievances. This can be you, a co-founder, an employee, or an external DPO-as-a-service provider. Larger companies designated as "Significant Data Fiduciaries" have stricter requirements.

**What's a Data Processing Agreement (DPA)?**
A contract between you and any third party that processes your users' data. Your database provider, email marketing tool, analytics platform, payment gateway, all of them. Many big vendors (AWS, Stripe, etc.) already have standard DPAs. Smaller tools might not. Ask them.

**Does DPDPA apply to B2B SaaS?**
Yes. If you're storing data about employees or contacts of your business clients, that's still personal data. B2B doesn't exempt you.

**What about data I collected before DPDPA?**
You'll need to ensure it meets compliance standards. If you don't have proper consent records, you may need to re-obtain consent or delete the data.

**Can I transfer data outside India?**
Yes. Unlike earlier drafts of the law, DPDPA does NOT have strict data localization. The government will publish a "negative list" of restricted countries where transfer is blocked. As of now, this list hasn't been finalized. For transfers to allowed countries, use encryption and have proper contractual clauses with the processor.

**What triggers a breach notification?**
Any unauthorized access, disclosure, or loss of personal data. You must notify the Data Protection Board and affected users. Timeline isn't specified yet, but "promptly" is the expectation.

**Is Google Analytics compliant?**
Depends on how you use it. You need opt-in consent before firing any tracking. The default "implied consent" banners won't cut it. Consider self-hosted alternatives like Plausible or Umami if you want to avoid the headache.

**What if a user asks to delete their data but I need it for legal/tax reasons?**
You can retain data if required by law. Example: banks must keep records for 10 years. But you can only keep what's legally required, nothing extra.

## Conclusion
I have mixed feelings about this law. On one side, the government can't do anything well. It is a deeply incompetent organization. On the other, the law itself, even with its faults and rigidity, tries to argue for consent and clarity. I agree with that ethic, on its own.

This law will clearly make a lot of businesses more difficult to operate but, I hope that the accountable ones shine through. Hoping for liberty and a bright future.

If you don't even have a company, what are you doing here? You should be reading [this](/blog/indie-dev-first-time-founder-india-startup-guide/).
