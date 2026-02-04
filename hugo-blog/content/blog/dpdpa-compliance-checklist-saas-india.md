---
title: "DPDPA Compliance Checklist for SaaS in India (2026)"
date: 2026-02-05
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
  "datePublished": "2026-02-05",
  "dateModified": "2026-02-05",
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

## TL;DR

DPDPA is law, not a certification. Fines go up to 250 crore. Full enforcement kicks in around May 2027.

What you actually need to do: Get proper consent (opt-in, not opt-out), publish a DPO contact, delete data when users ask, and sign Data Processing Agreements with every vendor touching user data - your CMS, your email tool, your analytics, everything.

The annoying part: If some random WordPress plugin or cheap form builder leaks your user's data, YOU get fined. Not them.

Timeline: Phase 1 (skeleton) dropped Nov 2025. Phase 2 (operational rules) by Nov 2026. Phase 3 (full enforcement) around May 2027. Small business or large, you need to be compliant.

Children means anyone under 18. No tracking them, no targeted ads. If your product has teenage users, this will hurt.

Read the checklist below. If you're unsure whether a tool is compliant, assume it isn't.

---

Howdy again!

I have helped many companies work through HIPAA, ISO 27001 and GDPR etc. I understood the tech and I also have a company of my own where we regularly have to deal with data - [zappush.com](https://zappush.com). I figured that I could help shine some light over this topic and help confused indie devs and founders about this new regulation. There is both opportunity and a huge pain in the ass coming our way :)

DPDPA is India's latest attempt at copying Europe's GDPR (General Data Protection Regulation). Complying is necessary, It isn't a certification, It is law. I am not a big fan of spending too much time on regulations, They are meant to slow people like us down. However, compliance is necessary to avoid fines on our end :)

## Why should you as a SaaS business owner care?
It isn't a certification, It is law. Complying is a necessity. The fine _ceiling_ is up to 250 crore Rs (~30 million USD), But, I won't expect a small business owner to get hit with a fine as massive. There is no need to get involved in such locha over negligence.

## DPDPA Timeline: Where We Are Now
We are in a market right now where the act isn't fully enforced. [Consently](https://www.consently.in) is a consent management and consultancy brand, and [Scrut](https://www.scrut.io/lp1/scrut-comparison) is a compliance management platform that tries to take care of the process on your behalf.

An initial official notification was made on 13th November 2025 where [the timeline](https://www.dpdpact2023.com/Section_1) was laid down for the law.

This was phase 1. This is where the skeleton was laid down.

Phase 2, the government notifies the operational rules specifically for consent managers (Third party entities that can manage user's consent on your behalf. They are completely optional as stated by the law. So, "Operation rules" for them would include stuff like: Who is eligible, How to apply, Suspension grounds etc for them) and the Data Protection Board's mechanics ("Operation rules" for them would include stuff like: How notices are issued, How complaints are filed, Timeslines, Appointment of chairman) by 13 Nov 2026.

Phase 3 is where business owners get concerned. As per the gazette:
```
eighteen months from the date of publication of this gazette, on which the provision of sections 3 to 5, sub-sections (1) to (8) and (10) of section 6,sections 7 to 10, sections 11 to 17, section 27 except clause (d) of sub-section (1) of the said section, sections 28 to 34, 36, 37 and sub-section (2) of section 44 of the said Act shall come into force.
```

## What YOU Need to Know About DPDPA

Most of this comes from [here](https://www.dpdpact2023.com/)

### Notice & Consent (Sections 3–5)
- Provide a clear notice before collecting personal data, avoiding unnecessary data collection or permissions, and clearly explaining why each item of data is required.
- Make the notice available in English or any language specified in the Eighth Schedule to the Constitution.
- Explain what personal data is collected, the purpose of collection, and how users can exercise their rights (access, correction, deletion, withdrawal of consent, and grievance escalation).
- Clearly state who to contact for grievances, including the company's Data Protection Officer or an authorised contact person. This is generally a person from your company.

### Core Fiduciary Duties (Sections 6(1)–6(8), 6(10))
- Collect only necessary data. Example: Do not collect all of the user's contact list if you can't explain what you would do with them (This is a loose example from the guidelines themselves :P)
- Use only for stated purposes.
- Protect data with "reasonable" security: I found this bit very ambigious. This is where my fears kick in about this country being bad with being critical. Generally, compliance states out basic measures to take. Even GDPR suggests Pseudonymisation of PII, Encryption and regular security testing etc. Although, They don't get into the technicalities of what encryption algorithms count as "reasonably" secure. From personal experience, auditors for ISO 27001 or SOC 2 often use NIST's published FIPS algorithms. I dislike DPDPA's skeleton for the lack of technical care.
- You are liable even if your data processor screws up: This will be a game changer as the regulation kicks in. If, For example, AWS screws up YOUR user's data, you will end up being liable. I, again, Do not like this personally. In a case like such, The party that has screwed up must be penalised as they promised the business owner a safe infrastructure to work on.
- Processors must be under a valid contract called "Data Processing Agreement (DPA)" between you "Data Fiduciary" and "Data Processor" (AWS in our previous example).
- Notify the Data Protection Board and affected users in the event of a personal data breach.
- Delete personal data when consent is withdrawn or the purpose is no longer served, and ensure processors do the same.
- Allow deletion when no longer needed or on request.
- Publish Data Protection Officer (DPO) information with a grievance mechanism so that cases can be taken care of by your DPO before anything is escalated to the board.

### Special Situations (Sections 7–10)
- Certain processing is permitted without consent for limited lawful purposes: Legal compliance, Employment, Medical emergencies, Fraud prevention, and public interest uses.
- Personal data of children (below 18 years) requires verifiable parental consent and must not be processed in a manner likely to cause harm, including tracking or targeted advertising. This is where you will have to be very careful with even how Google Analytics tracks under aged children and how you're trying to advertise to them. Meta already does a good job at enforcing a lot of these guidelines. A child is anyone under 18, This might affect you if you have a social media platform for teenagers, Or if your audience is mostly adoloscent. Or, If you have a gaming platform and you would like to see how interact with your games. These are all real business usecases which would now require you to be more careful.
- The Government may designate certain entities as "Significant" Data Fiduciaries. These are bigger firms who would bear more responsibilities to the government.

### Data Principal Rights (Sections 11–17)
- **Access & Correction**: Users can see what personal data is processed, why, with whom it is shared, and request correction, updating, or deletion where applicable.
- **Consent Control**: Users can withdraw consent at any time; processing must stop and data deleted unless legally required to retain it.
- **Grievance & Escalation**: Users must have a clear grievance mechanism and can escalate unresolved complaints to the Data Protection Board.
- **Nomination**: Users may nominate another person to exercise their rights in case of death or incapacity.

### Board Powers (Sections 28–34)
- Board can investigate and ask for evidence.
- Board can issue orders and penalties.

### Penalties & Appeals (Sections 36–37)
- Board can impose fines proportional to violation
- Decisions can be appealed

### Rule-making (Section 44(2))
- Government will introduce supporting rules and standards.

## DPDPA Compliance Checklist

### 1. Data Collection and Consent
"Child" as per DPDPA: Person under 18 years of age or a person with disability who has a lawful guardian obtain.

[ ] Are you collecting **only** what you need without ambigious permissions?
[ ] Are you clearly telling them why you need it and how users can exercise their "rights" to withdraw, reach out for griences etc?
[ ] Are you ensuring **children's data (<18 years)** is not processed without verifiable parental consent.
[ ] Are you NOT undertaking tracking or behavioural monitoring of children or targeted advertising directed at children?
[ ] Are you using **opt-in consent** for analytics, marketing, or tracking cookies (Google Analytics, Meta Pixel, etc.)?

### 2. Data Processing & Storage
[ ] Are you using data **only for the stated purpose**, Respecting the fact that cross-purpose usage requires fresh consent, As per the law?
[ ] If using **AWS, GCP, or other cloud services**, Can you confirm that data is **processed securely** (encryption at rest with a good algorithm published from NIST's FIPS & in transit, regular backups, restricted access) AND DPDPA compliant?
[ ] For **CMS platforms, Or any other third party software processing the user's data**, Can you ensure they **don't process personal data without compliance** and take measures to be compliant to DPDPA themselves, ideally? otherwise, you're liable as the fiduciary.
[ ] Keep personal data **accurate and complete**, especially if used for decisions affecting users.

^ An interesting illustration stated for above is: X, an individual, decides to close her savings account with Y, a bank. Y is required by law applicable to banks to maintain the record of the identity of its clients for a period of ten years beyond closing of accounts. Since retention is necessary for compliance with law, Y shall retain X's personal data for the said period.

### 3. Security Measures
Remember: DPDP is vague on technical standards, so relying on **ISO 27001 / SOC 2 / NIST-approved algorithms** is safest.

[ ] Are you implementing reasonable security safeguards for all personal data?
[ ] Is encryption applied at rest and in transit using strong, recognized algorithms (e.g., NIST-approved)?
[ ] Have you applied pseudonymization or anonymization for sensitive personal data where feasible?
[ ] Are access controls in place to restrict data to authorized personnel only?
[ ] Do you maintain audit logs to track who accessed or modified personal data?
[ ] Are you conducting regular security testing (e.g., vulnerability scans, penetration tests) to identify and fix risks?
[ ] Do your security practices align with recognized standards (ISO 27001, SOC 2, NIST)?

### 4. Data Retention & Deletion
[ ] Are you deleting personal data when it is no longer needed for the original purpose?
[ ] Do you honor user requests to withdraw consent by deleting their personal data promptly?
[ ] Are you ensuring that third-party processors also delete personal data when instructed?
[ ] Are you retaining data only as long as legally required, and not beyond that period?

### 5. Data Principal Rights
[ ] Can users easily access their personal data that you hold?
[ ] Can users request correction or completion of inaccurate or incomplete data?
[ ] Can users request deletion of their personal data or withdraw consent at any time?
[ ] Do you have a clear grievance redressal mechanism that handles complaints promptly and effectively (not just an email or portal)?
[ ] Is it clear who users should contact (DPO or authorised person) for exercising their rights?
[ ] Can users nominate another person to exercise their rights in case of death or incapacitation?

### 6. Third-Party Processors & Analytics
[ ] Are you using valid contracts (example [here](https://www.dpdpa.com/templates/dataprocessingtemplate.html?utm_source=chatgpt.com)) with all third-party processors (e.g., database providers, analytics platforms, email marketing tools)?
[ ] Do you avoid sending personal data to non-compliant third-party services, especially for minors?
[ ] Are you minimizing third-party tracking and sharing by default?
[ ] Where feasible, are you self-hosting analytics or similar services to reduce reliance on external processors? Reach out to [me](https://cal.com/zappush/30min) if you need help with it.

### 7. Monitoring & Compliance
[ ] Are you keeping records of user consent and processing purposes for all personal data collected?
[ ] Do you have a plan to respond to potential investigations or audits by the Data Protection Board?
[ ] Are you actively monitoring for data breaches across all systems handling personal data?
[ ] Do you have a breach notification plan to inform both affected users and the Data Protection Board promptly, as required under the law?
[ ] Are periodic internal compliance checks conducted to ensure adherence to DPDPA obligations?


If you're unsure about a tool, plugin, or CMS, **assume it's non-compliant until proven otherwise**. Liability falls on you.

## FAQ

**Do I need to comply if my company is registered outside India?**
Yes, if you're processing personal data of people in India. Doesn't matter where your company is registered.

**What counts as "personal data"?**
Anything that can identify a person: name, email, phone, IP address, device IDs, location data. If you can trace it back to a specific human, it's personal data.

**Do I need a Data Protection Officer (DPO)?**
The law requires you to publish contact information for someone who handles data protection queries and grievances. For small SaaS, this can be you or a co-founder. Larger companies designated as "Significant Data Fiduciaries" have stricter requirements.

**What's a Data Processing Agreement (DPA)?**
A contract between you and any third party that processes your users' data. Your database provider, email marketing tool, analytics platform, payment gateway - all of them. Many big vendors (AWS, Stripe, etc.) already have standard DPAs. Smaller tools might not. Ask them.

**Does DPDPA apply to B2B SaaS?**
Yes. If you're storing data about employees or contacts of your business clients, that's still personal data. B2B doesn't exempt you.

**What about data I collected before DPDPA?**
You'll need to ensure it meets compliance standards. If you don't have proper consent records, you may need to re-obtain consent or delete the data.

**Can I transfer data outside India?**
Yes, to most countries. The government will publish a list of restricted countries where transfer is not allowed. As of now, this list hasn't been finalized.

**What triggers a breach notification?**
Any unauthorized access, disclosure, or loss of personal data. You must notify the Data Protection Board and affected users. Timeline isn't specified yet, but "promptly" is the expectation.

**Is Google Analytics compliant?**
Depends on how you use it. You need opt-in consent before firing any tracking. The default "implied consent" banners won't cut it. Consider self-hosted alternatives like Plausible or Umami if you want to avoid the headache.

**What if a user asks to delete their data but I need it for legal/tax reasons?**
You can retain data if required by law. Example: banks must keep records for 10 years. But you can only keep what's legally required, nothing extra.

## Conclusion
I have mixed feelings about this law. On one side, The government can't anything well. It is a deeply incompetent organization. On the other, The law itself, even with it's faults and rigidity, tries to argue for consent and clarity. I agree with that ethic, on it's own.

This law will clearly make a lot of businesses more difficult to operate but, I hope that the accountable ones shine through. Hoping for liberty and a bright future.
