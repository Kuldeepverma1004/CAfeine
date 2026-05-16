export const P1_DATA = [
  {
    "id": "AA1",
    "name": "Introduction to Accounting Standards",
    "dangerZones": [
      {
        "id": "AA1.DZ1",
        "point": "Confusing 'Convergence' with 'Adoption' of IFRS in India",
        "mistake": "Students assume India has adopted IFRS directly and apply IFRS provisions without considering Ind AS carve-outs/ins",
        "why": "ICAI tests whether students understand that India chose convergence (Ind AS with modifications) over adoption (IFRS as-is). This affects treatment of specific transactions where carve-outs exist.",
        "priority": "Very High"
      },
      {
        "id": "AA1.DZ2",
        "point": "Assuming AS override statutes when there is conflict",
        "mistake": "Students apply Accounting Standards provisions even when Companies Act 2013 or other statutes prescribe different treatment",
        "why": "ICAI explicitly states that in case of conflict, Statute prevails over Accounting Standards. This tests understanding of the hierarchy of regulatory framework.",
        "priority": "High"
      },
      {
        "id": "AA1.DZ3",
        "point": "Misidentifying the number of Accounting Standards currently in force",
        "mistake": "Students state 29 ASs are applicable, forgetting AS 6 (Depreciation) and AS 8 (R&D) have been withdrawn",
        "why": "ICAI tests awareness that AS 6 was withdrawn on revision of AS 10 (PPE) and AS 8 was withdrawn on issuance of AS 26 (Intangible Assets), leaving 27 effective ASs.",
        "priority": "High"
      },
      {
        "id": "AA1.DZ4",
        "point": "Applying Ind AS net worth thresholds incorrectly for roadmap applicability",
        "mistake": "Students apply wrong threshold (₹250 crore vs ₹500 crore) or ignore that holding/subsidiary/JV/associate companies are also covered",
        "why": "ICAI tests precise knowledge of Ind AS implementation roadmap phases and the cascade effect on group companies.",
        "priority": "High"
      },
      {
        "id": "AA1.DZ5",
        "point": "Assuming SME exchange listed companies must apply Ind AS",
        "mistake": "Students believe all listed companies must apply Ind AS without exception",
        "why": "ICAI specifically carves out SME exchange listed companies from Ind AS applicability—they continue with existing ASs unless they choose otherwise.",
        "priority": "High"
      }
    ],
    "formulaGuide": [
      {
        "id": "AA1.FG1",
        "topic": "Which Accounting Standards Apply to a Company?",
        "nodes": [
          {
            "id": "n1",
            "label": "Is the entity a Company under Companies Act 2013?",
            "branches": [
              {
                "label": "Yes",
                "target": "n2"
              },
              {
                "label": "No (Non-corporate)",
                "target": "outcomeA"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Does the company meet Ind AS roadmap criteria?",
            "branches": [
              {
                "label": "Yes - Listed with NW ≥ ₹500 Cr (Phase I)",
                "target": "outcomeB"
              },
              {
                "label": "Yes - Listed (non-SME) or NW ≥ ₹250 Cr (Phase II)",
                "target": "outcomeB"
              },
              {
                "label": "No - Below thresholds/SME listed",
                "target": "outcomeC"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "Apply ASs issued by ICAI for non-corporates",
            "reference": "Section 133, Companies Act 2013"
          },
          {
            "id": "outcomeB",
            "label": "Mandatory Ind AS applicability - no reverting to AS",
            "reference": "Companies (Indian Accounting Standards) Rules, 2015"
          },
          {
            "id": "outcomeC",
            "label": "Continue with ASs notified under Companies (Accounting Standards) Rules, 2021",
            "reference": "Companies (Accounting Standards) Rules, 2021"
          }
        ]
      },
      {
        "id": "AA1.FG2",
        "topic": "Standard Setting Process by ASB",
        "nodes": [
          {
            "id": "n1",
            "label": "Step I: Has ASB identified the area for AS formulation?",
            "branches": [
              {
                "label": "Yes",
                "target": "n2"
              },
              {
                "label": "No",
                "target": "outcomeA"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Step II-IV: Has study group prepared draft and obtained views?",
            "branches": [
              {
                "label": "Yes",
                "target": "n3"
              },
              {
                "label": "No - In progress",
                "target": "outcomeB"
              }
            ]
          },
          {
            "id": "n3",
            "label": "Step V-VII: Has Exposure Draft been finalized with comments?",
            "branches": [
              {
                "label": "Yes - Council approved",
                "target": "outcomeC"
              },
              {
                "label": "No - Modifications needed",
                "target": "outcomeD"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "No AS development initiated",
            "reference": "ASB Procedure"
          },
          {
            "id": "outcomeB",
            "label": "Draft stage - circulated to MCA, SEBI, C&AG, CBDT, SCOPE for comments",
            "reference": "ASB Procedure Step III"
          },
          {
            "id": "outcomeC",
            "label": "AS issued by ICAI (non-corporates) / MCA notification for corporates via NFRA recommendation",
            "reference": "ASB Procedure Step VIII"
          },
          {
            "id": "outcomeD",
            "label": "Draft modified in consultation with ASB before re-submission to Council",
            "reference": "ASB Procedure Step VII"
          }
        ]
      },
      {
        "id": "AA1.FG3",
        "topic": "Ind AS Applicability for NBFCs",
        "nodes": [
          {
            "id": "n1",
            "label": "Is the entity an NBFC?",
            "branches": [
              {
                "label": "Yes",
                "target": "n2"
              },
              {
                "label": "No",
                "target": "outcomeA"
              }
            ]
          },
          {
            "id": "n2",
            "label": "What is the NBFC's net worth?",
            "branches": [
              {
                "label": "≥ ₹500 Cr (Phase I)",
                "target": "outcomeB"
              },
              {
                "label": "≥ ₹250 Cr but < ₹500 Cr OR Listed with NW < ₹500 Cr (Phase II)",
                "target": "outcomeC"
              },
              {
                "label": "< ₹250 Cr and not listed",
                "target": "outcomeD"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "Apply corporate roadmap or ASs as applicable",
            "reference": "Companies (Indian Accounting Standards) Rules, 2015"
          },
          {
            "id": "outcomeB",
            "label": "Ind AS mandatory from 1st April 2018 (with comparatives)",
            "reference": "MCA NBFC Roadmap Phase I"
          },
          {
            "id": "outcomeC",
            "label": "Ind AS mandatory from 1st April 2019 (with comparatives)",
            "reference": "MCA NBFC Roadmap Phase II"
          },
          {
            "id": "outcomeD",
            "label": "Continue with ASs under Companies (Accounting Standards) Rules, 2006",
            "reference": "MCA NBFC Roadmap - Exemption"
          }
        ]
      }
    ],
    "flashcards": [
      {
        "id": "AA1.FC1",
        "front": "Generally Accepted Accounting Principles (GAAP)",
        "back": "Generally accepted accounting principles (GAAP) refer to a common set of accepted accounting principles, standards, and procedures that business reporting entity must follow when it prepares and presents its financial statements.",
        "section": "Chapter 1, Section 1"
      },
      {
        "id": "AA1.FC2",
        "front": "What aspects do Accounting Standards cover?",
        "back": "Accounting Standards cover: (i) recognition of events and transactions in the financial statements; (ii) measurement of these transactions and events; (iii) presentation of these transactions and events in a manner meaningful and understandable to the reader; and (iv) disclosures relating to these transactions and events.",
        "section": "Chapter 1, Page 1.3"
      },
      {
        "id": "AA1.FC3",
        "front": "Three Benefits of Accounting Standards",
        "back": "(i) Standardisation of alternative accounting treatments - reduces confusing variations in accounting treatment and presentation; (ii) Requirements for additional disclosures - beyond statutory requirements; (iii) Comparability of financial statements - both intra-enterprise and inter-enterprise comparison.",
        "section": "Chapter 1, Page 1.4-1.5"
      },
      {
        "id": "AA1.FC4",
        "front": "Accounting Standards Board (ASB) Constitution Year",
        "back": "The Institute of Chartered Accountants of India (ICAI) constituted the Accounting Standards Board (ASB) in 1977 to take leadership role in issuance of Accounting Standards.",
        "section": "Chapter 1, Section 2"
      },
      {
        "id": "AA1.FC5",
        "front": "Number of Accounting Standards Currently Effective",
        "back": "ICAI has issued 29 Accounting Standards. However, AS 6 on 'Depreciation Accounting' has been withdrawn on revision of AS 10 'Property, Plant and Equipment' and AS 8 on 'Accounting for Research and Development' has been withdrawn consequent to issuance of AS 26 on 'Intangible Assets'. Thus effectively, there are 27 Accounting Standards at present.",
        "section": "Chapter 1, Section 3"
      },
      {
        "id": "AA1.FC6",
        "front": "IFRS Composition",
        "back": "The term International Financial Reporting Standards (IFRS) comprises: (1) IFRS issued by IASB; (2) IAS issued by IASC; (3) Interpretations issued by the Standard Interpretations Committee (SIC); and (4) Interpretations issued by the IFRS Interpretations Committee of the IASB (called IFRIC).",
        "section": "Chapter 1, Section 7"
      },
      {
        "id": "AA1.FC7",
        "front": "Carve-outs in Ind AS",
        "back": "Certain changes have been made in Ind AS considering the economic environment of the country, which is different as compared to the economic environment presumed to be in existence by IFRS. These differences which are in deviation to the accounting principles and practices stated in IFRS, are commonly known as 'Carve-outs'.",
        "section": "Chapter 1, Section 9"
      },
      {
        "id": "AA1.FC8",
        "front": "Carve-ins in Ind AS",
        "back": "Additional guidance given in Ind AS over and above what is given in IFRS, is termed as 'Carve in'.",
        "section": "Chapter 1, Section 9"
      },
      {
        "id": "AA1.FC9",
        "front": "Section 133 of Companies Act 2013",
        "back": "As per Section 133 of the Companies Act, 2013, the Central Government may prescribe the standards of accounting or any addendum thereto, as recommended by the ICAI, constituted under section 3 of the Chartered Accountants Act, 1949, in consultation with and after examination of the recommendations made by NFRA.",
        "section": "Chapter 1, Section 2"
      },
      {
        "id": "AA1.FC10",
        "front": "Creative Accounting",
        "back": "Creative accounting refers to twisting of accounting policies to produce financial statements favourable to a particular interest group. For example, it is possible to overstate profits and assets by capitalising revenue expenditure or to understate them by writing off a capital expenditure against revenue of current accounting period.",
        "section": "Chapter 1, Page 1.6"
      },
      {
        "id": "AA1.FC11",
        "front": "Ind AS Numbering Convention for IFRS",
        "back": "Ind AS are named and numbered in the same way as the corresponding IAS. However, for Ind AS corresponding to IFRS, one need to add 100 to the IFRS number e.g. for IFRS 1 corresponding Ind AS number is 101.",
        "section": "Chapter 1, Section 11"
      },
      {
        "id": "AA1.FC12",
        "front": "IASC to IASB Transition",
        "back": "Between 1973 and 2001, the IASC released IASs. Between 1997 and 1999, the IASC restructured their organisation, which resulted in formation of IASB. These changes came into effect on 1st April, 2001. The standards issued by IASC till 31.03.2001 are known as IASs and the standards issued by IASB since 01.04.2001 are known as IFRSs.",
        "section": "Chapter 1, Section 6"
      }
    ],
    "practiceProblems": [
      {
        "id": "AA1.PP1",
        "title": "Determining Ind AS Applicability for a Corporate Group",
        "difficulty": 3,
        "problem": "PQR Ltd. is an unlisted company with net worth of ₹480 crore as on 31st March 2024. It has a wholly owned subsidiary XYZ Ltd. (net worth ₹50 crore) and holds 40% stake in an associate company ABC Ltd. (net worth ₹600 crore). ABC Ltd. is listed on BSE. Determine which companies are required to apply Ind AS and from which financial year.",
        "steps": [
          "Step 1: Identify the net worth threshold for Ind AS applicability - Phase I requires NW ≥ ₹500 crore, Phase II requires NW ≥ ₹250 crore",
          "Step 2: Analyze each entity - PQR Ltd. (₹480 Cr unlisted) does not meet Phase I (₹500 Cr) but meets Phase II (≥₹250 Cr) threshold",
          "Step 3: ABC Ltd. (₹600 Cr, listed) meets Phase I criteria - Ind AS from 1st April 2016",
          "Step 4: Since ABC Ltd. applies Ind AS from Phase I, its associate PQR Ltd. must also apply Ind AS from same date as it is an associate of an Ind AS company",
          "Step 5: XYZ Ltd. being subsidiary of PQR Ltd. must also apply Ind AS when PQR applies"
        ],
        "answer": "ABC Ltd. (listed, NW ₹600 Cr) - Ind AS mandatory from 1st April 2016 (Phase I). PQR Ltd. (associate of ABC Ltd.) and XYZ Ltd. (subsidiary of PQR) - Ind AS mandatory from 1st April 2016 as associate/subsidiary of Phase I company. Reference: Companies (Indian Accounting Standards) Rules, 2015.",
        "topic": "Ind AS Implementation Roadmap"
      },
      {
        "id": "AA1.PP2",
        "title": "Identifying Applicable Accounting Framework",
        "difficulty": 4,
        "problem": "MNO Private Ltd. is an unlisted NBFC with net worth of ₹240 crore as on 31st March 2024. It is a subsidiary of LMN Ltd., a listed company (non-SME exchange) with net worth of ₹180 crore. Another group company DEF Ltd. is listed on SME exchange of NSE with net worth of ₹45 crore. Determine the applicable accounting framework for each entity.",
        "steps": [
          "Step 1: Analyze MNO Private Ltd. (NBFC, NW ₹240 Cr) - As NBFC with NW < ₹250 Cr and not listed, it normally continues with ASs",
          "Step 2: Check if cascade rule applies - MNO is subsidiary of LMN Ltd. which is a listed company",
          "Step 3: Analyze LMN Ltd. (Listed non-SME, NW ₹180 Cr) - All listed companies (other than SME) apply Ind AS from Phase II (1st April 2017)",
          "Step 4: Since LMN Ltd. applies Ind AS, its subsidiary MNO Private Ltd. must also apply Ind AS despite being NBFC below threshold",
          "Step 5: Analyze DEF Ltd. (SME exchange listed, NW ₹45 Cr) - SME exchange listed companies are exempt from Ind AS applicability"
        ],
        "answer": "LMN Ltd. - Ind AS mandatory from 1st April 2017 (Phase II - all non-SME listed companies). MNO Private Ltd. (NBFC) - Ind AS mandatory from 1st April 2017 as subsidiary of Ind AS company despite NW < ₹250 Cr. DEF Ltd. - Continues with ASs under Companies (Accounting Standards) Rules, 2021 as SME exchange listed companies are specifically exempted from Ind AS. Reference: Companies (Indian Accounting Standards) Rules, 2015 and NBFC Roadmap.",
        "topic": "Multi-entity Ind AS Applicability with NBFC and SME"
      },
      {
        "id": "AA1.PP3",
        "title": "Hierarchy of Regulatory Framework Application",
        "difficulty": 3,
        "problem": "RST Ltd. is preparing its financial statements for FY 2024-25. The following situations have arisen: (a) Companies Act 2013 requires disclosure of a specific item in a particular manner, but the applicable AS requires different presentation; (b) AS provides two alternative accounting treatments for inventory valuation - FIFO and Weighted Average; (c) There is no AS guidance on a specific complex transaction, but IFRS provides detailed guidance. How should RST Ltd. handle each situation?",
        "steps": [
          "Step 1: For situation (a) - Apply the principle that Statute prevails over Accounting Standards in case of conflict",
          "Step 2: RST Ltd. must follow Companies Act 2013 requirement as it overrides AS",
          "Step 3: For situation (b) - AS 1 requires disclosure of accounting policies followed",
          "Step 4: RST Ltd. must select one method and disclose which permitted cost formula (FIFO or Weighted Average) has been used",
          "Step 5: For situation (c) - IFRS cannot be directly applied; consider AS Framework, professional judgment, and industry practice"
        ],
        "answer": "(a) Follow Companies Act 2013 - Statute prevails over AS in case of conflict (Page 1.5 of Study Material). (b) Select either FIFO or Weighted Average consistently and disclose the policy followed as per AS 1 requirements. (c) Apply professional judgment using AS Framework principles; IFRS is only a reference, not directly applicable in India unless converged into Ind AS. India has convergence approach, not adoption.",
        "topic": "Hierarchy and AS Application Principles"
      }
    ],
    "caseMCQs": {
      "scenario": "Alpha Industries Ltd. is a manufacturing company listed on NSE (main board) with net worth of ₹520 crore as on 31st March 2025. It has the following investments: (i) 80% stake in Beta Pvt. Ltd. (net worth ₹45 crore, unlisted); (ii) 30% stake in Gamma Ltd. (net worth ₹280 crore, listed on SME exchange); (iii) 25% stake in Delta LLP (capital ₹15 crore). Alpha Industries is examining its group's accounting framework applicability for FY 2025-26.",
      "questions": [
        {
          "id": "AA1.CQ1",
          "q": "Which entities in Alpha Industries' group are mandatorily required to apply Ind AS for FY 2025-26?",
          "opts": [
            "Alpha Industries Ltd. and Beta Pvt. Ltd. only",
            "Alpha Industries Ltd., Beta Pvt. Ltd., and Gamma Ltd.",
            "Alpha Industries Ltd., Beta Pvt. Ltd., Gamma Ltd., and Delta LLP",
            "All four entities including Delta LLP"
          ],
          "ans": 0,
          "exp": "Alpha Industries Ltd. (listed, NW ≥ ₹500 Cr) applies Ind AS mandatorily. Beta Pvt. Ltd. being its subsidiary must also apply Ind AS regardless of its own net worth. Gamma Ltd., though associate, is listed on SME exchange and SME listed companies are exempt from Ind AS. Delta LLP is an LLP, not a company, hence Ind AS rules under Companies Act do not apply to it.",
          "type": "Trap",
          "diff": 3
        },
        {
          "id": "AA1.CQ2",
          "q": "If Alpha Industries decides to prepare consolidated financial statements, which accounting framework should it use?",
          "opts": [
            "ASs notified under Companies (Accounting Standards) Rules, 2021",
            "IFRS as issued by IASB directly",
            "Ind AS notified under Companies (Indian Accounting Standards) Rules, 2015",
            "Either AS or Ind AS at management's discretion"
          ],
          "ans": 2,
          "exp": "Once a company is covered under Ind AS roadmap, it must apply Ind AS for both standalone and consolidated financial statements. There is no reverting back to ASs. Alpha Industries being a Phase I company (listed, NW ≥ ₹500 Cr) must use Ind AS. India follows convergence, not adoption, so IFRS cannot be applied directly.",
          "type": "Concept",
          "diff": 2
        },
        {
          "id": "AA1.CQ3",
          "q": "Gamma Ltd. (SME listed) wishes to voluntarily adopt Ind AS. What is the correct position?",
          "opts": [
            "Gamma Ltd. can voluntarily adopt Ind AS and revert to ASs in future if desired",
            "Gamma Ltd. can voluntarily adopt Ind AS but once adopted, cannot revert to ASs",
            "Gamma Ltd. cannot voluntarily adopt Ind AS; it must continue with ASs",
            "Gamma Ltd. must adopt Ind AS as it is an associate of Alpha Industries Ltd."
          ],
          "ans": 1,
          "exp": "SME exchange listed companies may choose to apply Ind AS voluntarily. However, once Ind AS is adopted, the company must continue to apply Ind AS for all subsequent financial statements - there is no looking back. The Study Material clearly states 'Once Ind AS are applicable, an entity shall be required to follow the Ind AS for all the subsequent financial statements.'",
          "type": "Trap",
          "diff": 3
        },
        {
          "id": "AA1.CQ4",
          "q": "How many Accounting Standards would Beta Pvt. Ltd. have applied before becoming subsidiary of Alpha Industries Ltd.?",
          "opts": [
            "29 Accounting Standards",
            "28 Accounting Standards",
            "27 Accounting Standards",
            "39 Indian Accounting Standards"
          ],
          "ans": 2,
          "exp": "ICAI issued 29 ASs originally. However, AS 6 (Depreciation Accounting) was withdrawn on revision of AS 10 (PPE) and AS 8 (Accounting for R&D) was withdrawn on issuance of AS 26 (Intangible Assets). Hence, 27 Accounting Standards are currently effective as per Companies (Accounting Standards) Rules, 2021.",
          "type": "Concept",
          "diff": 2
        }
      ]
    },
    "mcqs": [
      {
        "id": "AA1.Q1",
        "q": "Sigma Ltd., an unlisted company with net worth of ₹510 crore, became a subsidiary of Omega Ltd. (unlisted, NW ₹200 crore) on 1st October 2024. From which date is Omega Ltd. required to apply Ind AS?",
        "opts": [
          "1st April 2016 along with Sigma Ltd.",
          "1st April 2025 as parent of Ind AS company",
          "Not required as Omega's NW is below ₹250 crore",
          "1st October 2024 immediately on becoming parent"
        ],
        "ans": 1,
        "exp": "Sigma Ltd. (NW ≥ ₹500 Cr) applies Ind AS from Phase I (1st April 2016). When Omega Ltd. becomes its parent, Omega must also apply Ind AS as holding company of an Ind AS entity. The applicability is from the financial year following the date of becoming holding company, i.e., 1st April 2025.",
        "type": "Trap",
        "diff": 3
      },
      {
        "id": "AA1.Q2",
        "q": "Which of the following bodies recommends Accounting Standards to MCA for notification for companies?",
        "opts": [
          "Accounting Standards Board (ASB)",
          "Securities and Exchange Board of India (SEBI)",
          "National Financial Reporting Authority (NFRA)",
          "Reserve Bank of India (RBI)"
        ],
        "ans": 2,
        "exp": "As per Section 133 of Companies Act 2013 and the Study Material, NFRA recommends accounting standards to MCA. ASB formulates the standards, but NFRA examines and recommends them to MCA for notification for corporate entities.",
        "type": "Concept",
        "diff": 1
      },
      {
        "id": "AA1.Q3",
        "q": "What does the Ind AS number '115' correspond to in IFRS?",
        "opts": [
          "IAS 15",
          "IFRS 15",
          "IAS 115",
          "IFRS 115"
        ],
        "ans": 1,
        "exp": "For Ind AS corresponding to IFRS, 100 is added to the IFRS number. Hence, Ind AS 115 corresponds to IFRS 15 (Revenue from Contracts with Customers). This is explicitly stated in Section 11 of the Study Material.",
        "type": "Concept",
        "diff": 1
      },
      {
        "id": "AA1.Q4",
        "q": "An insurance company in India was initially required to implement Ind AS from 1st April 2018. What is the current status?",
        "opts": [
          "Ind AS is mandatory from 1st April 2020",
          "Ind AS implementation deferred to 1st April 2022",
          "Ind AS implementation deferred till further notice",
          "Ind AS is now voluntary for insurance companies"
        ],
        "ans": 2,
        "exp": "IRDAI initially deferred Ind AS implementation for insurance sector to 1st April 2020. Subsequently, vide circular dated 21 January 2020, IRDAI has deferred implementation of Ind AS in the insurance sector till further notice, as stated in the Study Material.",
        "type": "Amendment",
        "diff": 2
      },
      {
        "id": "AA1.Q5",
        "q": "Which AS was earlier known as 'Accounting for Fixed Assets' before revision?",
        "opts": [
          "AS 6",
          "AS 10",
          "AS 16",
          "AS 26"
        ],
        "ans": 1,
        "exp": "As per the footnote in the Study Material, AS 10 was earlier on 'Accounting for Fixed Assets'. It was later revised and renamed as 'Property, Plant and Equipment' effective from 1st April 2016, and AS 6 on Depreciation Accounting was withdrawn consequent to this revision.",
        "type": "Concept",
        "diff": 2
      },
      {
        "id": "AA1.Q6",
        "q": "The International Accounting Standards Committee (IASC) was established in which year?",
        "opts": [
          "1970",
          "1973",
          "1977",
          "2001"
        ],
        "ans": 1,
        "exp": "The International Accounting Standards Committee (IASC) was established in June 1973. It is important to note that ASB in India was established in 1977, and IASC was restructured into IASB with effect from 1st April 2001.",
        "type": "Concept",
        "diff": 1
      },
      {
        "id": "AA1.Q7",
        "q": "Kappa Ltd. follows AS and uses FIFO method for inventory valuation. Which disclosure is mandatory?",
        "opts": [
          "Only state compliance with AS 2",
          "Disclose that FIFO method is used for ascertaining inventory costs",
          "No disclosure required if consistently applied",
          "Disclose comparison with Weighted Average method results"
        ],
        "ans": 1,
        "exp": "As per AS 1 (Disclosure of Accounting Policies), it is not enough to comply with standards and state they have been followed. One must also disclose the accounting policies used. Specifically, an enterprise should disclose which permitted cost formula (FIFO, Weighted Average) has been used for ascertaining inventory costs.",
        "type": "Trap",
        "diff": 2
      },
      {
        "id": "AA1.Q8",
        "q": "Companies (Accounting Standards) Rules, 2021 applies to accounting periods beginning on or after:",
        "opts": [
          "1st April 2016",
          "1st April 2019",
          "23rd June 2021",
          "1st April 2021"
        ],
        "ans": 3,
        "exp": "Companies (Accounting Standards) Rules, 2021 were notified by MCA on 23rd June 2021, superseding the 2006 Rules. However, the Rules apply to accounting periods beginning on or after 1st April 2021, as stated in the Study Material.",
        "type": "Amendment",
        "diff": 2
      }
    ],
    "tricky": [
      {
        "id": "AA1.1",
        "point": "Voluntary adoption by SME listed companies has no reversal option",
        "mistake": "Students assume SME listed companies can try Ind AS and revert to ASs if inconvenient",
        "why": "ICAI tests that once Ind AS is adopted (voluntarily or mandatorily), there is no going back - this is a one-way door",
        "priority": "High"
      },
      {
        "id": "AA1.2",
        "point": "NBFC voluntary adoption is prohibited unlike other companies",
        "mistake": "Students assume NBFCs can voluntarily adopt Ind AS like other companies",
        "why": "The Study Material clearly states for NBFCs: 'Voluntary adoption of Ind AS is not allowed' - this is opposite to the rule for other companies",
        "priority": "High"
      },
      {
        "id": "AA1.3",
        "point": "Scheduled Commercial Banks (excluding RRBs) - Ind AS deferred indefinitely",
        "mistake": "Students assume banks are applying Ind AS since the original 2018/2019 deadline",
        "why": "RBI deferred Ind AS implementation for SCBs till further notice via notification dated 22 March 2019. UCBs and RRBs are not required to apply Ind AS at all.",
        "priority": "High"
      },
      {
        "id": "AA1.4",
        "point": "Cascade effect applies to JV and Associate also, not just subsidiary",
        "mistake": "Students think only subsidiaries of Ind AS companies must apply Ind AS",
        "why": "The roadmap clearly states 'Parent, Subsidiary, Associate and JV of above' must apply Ind AS - all four relationships trigger cascade",
        "priority": "High"
      },
      {
        "id": "AA1.5",
        "point": "Net worth is determined as per last audited Balance Sheet before roadmap date",
        "mistake": "Students use current year net worth or projected figures",
        "why": "Applicability is based on net worth as at the immediately preceding accounting year, not current or estimated figures",
        "priority": "Medium"
      }
    ],
    "amendments": [
      {
        "id": "AA1.A1",
        "topic": "Companies (Accounting Standards) Rules, 2021",
        "what": "MCA notified new Companies (Accounting Standards) Rules, 2021 on 23rd June 2021, superseding the 2006 Rules (as amended)",
        "oldPosition": "Companies (Accounting Standards) Rules, 2006 with various amendments including 30th March 2016 amendment governed AS applicability",
        "newPosition": "Companies (Accounting Standards) Rules, 2021 consolidates all amendments and revises AS 2, AS 4, AS 10, AS 13, AS 14, AS 21, AS 29 to align with corresponding Ind AS to extent possible",
        "effectiveFrom": "Accounting periods beginning on or after 1st April 2021",
        "pdfStatus": "mentioned on page 1.9",
        "priority": "High"
      },
      {
        "id": "AA1.A2",
        "topic": "Scheduled Commercial Banks - Ind AS Implementation Deferred",
        "what": "RBI notification dated 22 March 2019 deferred Ind AS implementation for SCBs (excluding RRBs) till further notice",
        "oldPosition": "SCBs were initially required to implement Ind AS from 1 April 2018, deferred to 1 April 2019",
        "newPosition": "Ind AS implementation deferred till further notice. UCBs and RRBs not required to apply Ind AS",
        "effectiveFrom": "22 March 2019 onwards - till further notice",
        "pdfStatus": "mentioned on page 1.28",
        "priority": "High"
      },
      {
        "id": "AA1.A3",
        "topic": "Insurance Sector - Ind AS Implementation Deferred",
        "what": "IRDAI circular dated 21 January 2020 deferred Ind AS implementation in insurance sector till further notice",
        "oldPosition": "Insurance companies were required to implement Ind AS from 1 April 2018, later deferred to 1 April 2020",
        "newPosition": "Ind AS implementation deferred till further notice as per IRDAI circular",
        "effectiveFrom": "21 January 2020 onwards - till further notice",
        "pdfStatus": "mentioned on page 1.28",
        "priority": "High"
      },
      {
        "id": "AA1.A4",
        "topic": "Revision of Multiple Accounting Standards in 2021",
        "what": "AS 2, AS 4, AS 10, AS 13, AS 14, AS 21, AS 29 revised to align with corresponding Ind AS",
        "oldPosition": "These ASs had significant differences from corresponding Ind AS",
        "newPosition": "Revised to make them in line with corresponding Ind AS to the extent possible under Companies (Accounting Standards) Rules, 2021",
        "effectiveFrom": "Accounting periods beginning on or after 1st April 2021",
        "pdfStatus": "mentioned on page 1.9",
        "priority": "High"
      }
    ],
    "cases": [],
    "trees": []
  },
  {
    "id": "AA2",
    "name": "Framework for Preparation and Presentation of Financial Statements",
    "dangerZones": [
      {
        "id": "AA2.DZ1",
        "point": "Confusing Fundamental Accounting Assumptions with Qualitative Characteristics — students mix up Going Concern, Accrual, Consistency (assumptions) with Understandability, Relevance, Reliability, Comparability (characteristics)",
        "mistake": "Students classify 'Prudence' or 'Materiality' as fundamental assumptions, or list 'Consistency' as a qualitative characteristic",
        "why": "ICAI frequently tests whether students can correctly categorize these distinct Framework concepts — the Framework explicitly lists only three assumptions but four qualitative characteristics",
        "priority": "Very High"
      },
      {
        "id": "AA2.DZ2",
        "point": "Applying Going Concern valuation incorrectly — when going concern assumption is NOT followed, assets must be valued at Net Realisable Value and deferred expenditure must be written off completely",
        "mistake": "Students continue using historical cost depreciation for PPE and amortizing deferred expenditure even when the entity is not a going concern",
        "why": "ICAI tests this in practical problems where students must prepare financial statements under both going concern and non-going concern scenarios with different profit figures",
        "priority": "Very High"
      },
      {
        "id": "AA2.DZ3",
        "point": "Physical Capital Maintenance vs Financial Capital Maintenance at Current Purchasing Power — both use price indices but Physical uses SPECIFIC price indices while Financial uses AVERAGE price indices",
        "mistake": "Students apply average price index (CPI) for physical capital maintenance calculations instead of specific asset price indices",
        "why": "Capital maintenance calculations frequently appear in exams with both average and specific indices given, testing whether students understand the conceptual difference",
        "priority": "High"
      },
      {
        "id": "AA2.DZ4",
        "point": "Recognition of Asset vs Expense — an expenditure is recognized as asset only if future economic benefits are PROBABLE beyond current accounting period",
        "mistake": "Students capitalize expenditure where future economic benefit is expected to expire within current period (e.g., stock purchased for resale by a dealer)",
        "why": "ICAI tests the probability criterion for asset recognition through scenarios involving binding purchase agreements where goods become obsolete before use",
        "priority": "High"
      },
      {
        "id": "AA2.DZ5",
        "point": "Provision for doubtful debts is NOT a liability — it represents diminution in value of assets (Trade Receivables), not a present obligation",
        "mistake": "Students classify provision for doubtful debts, depreciation, and impairment provisions as liabilities instead of contra-assets",
        "why": "ICAI tests conceptual understanding of elements of financial statements — only provisions arising from present obligations (like warranty provisions) qualify as liabilities",
        "priority": "High"
      }
    ],
    "formulaGuide": [
      {
        "id": "AA2.FG1",
        "topic": "Asset Recognition Decision Tree",
        "nodes": [
          {
            "id": "n1",
            "label": "Is the resource controlled by the enterprise?",
            "branches": [
              {
                "label": "Yes",
                "target": "n2"
              },
              {
                "label": "No",
                "target": "outcomeA"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Is control result of past events?",
            "branches": [
              {
                "label": "Yes",
                "target": "n3"
              },
              {
                "label": "No",
                "target": "outcomeA"
              }
            ]
          },
          {
            "id": "n3",
            "label": "Are future economic benefits PROBABLE beyond current period?",
            "branches": [
              {
                "label": "Yes",
                "target": "n4"
              },
              {
                "label": "No",
                "target": "outcomeB"
              }
            ]
          },
          {
            "id": "n4",
            "label": "Can cost/value be measured reliably?",
            "branches": [
              {
                "label": "Yes",
                "target": "outcomeC"
              },
              {
                "label": "No",
                "target": "outcomeD"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "Cannot recognize as Asset — no control or not from past events",
            "reference": "Framework Para 9"
          },
          {
            "id": "outcomeB",
            "label": "Recognize as EXPENSE in P&L — benefits expire in current period",
            "reference": "Framework Para 9"
          },
          {
            "id": "outcomeC",
            "label": "Recognize as ASSET in Balance Sheet",
            "reference": "Framework Para 9"
          },
          {
            "id": "outcomeD",
            "label": "Disclose in Notes — cannot measure reliably",
            "reference": "Framework Para 9"
          }
        ]
      },
      {
        "id": "AA2.FG2",
        "topic": "Liability Recognition Decision Tree",
        "nodes": [
          {
            "id": "n1",
            "label": "Is there a PRESENT obligation arising from past events?",
            "branches": [
              {
                "label": "Yes",
                "target": "n2"
              },
              {
                "label": "No (Future commitment)",
                "target": "outcomeA"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Is outflow of economic resources expected for settlement?",
            "branches": [
              {
                "label": "Probable (>50%)",
                "target": "n3"
              },
              {
                "label": "Possible but not probable",
                "target": "outcomeB"
              },
              {
                "label": "Remote",
                "target": "outcomeC"
              }
            ]
          },
          {
            "id": "n3",
            "label": "Can value of outflow be reliably measured?",
            "branches": [
              {
                "label": "Yes - with reasonable accuracy",
                "target": "outcomeD"
              },
              {
                "label": "Yes - substantial estimation required",
                "target": "outcomeE"
              },
              {
                "label": "No",
                "target": "outcomeB"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "No liability recognition — future commitment only",
            "reference": "Framework Para 9"
          },
          {
            "id": "outcomeB",
            "label": "Disclose as CONTINGENT LIABILITY in Notes",
            "reference": "Framework Para 9"
          },
          {
            "id": "outcomeC",
            "label": "No recognition or disclosure required",
            "reference": "Framework Para 9"
          },
          {
            "id": "outcomeD",
            "label": "Recognize as LIABILITY in Balance Sheet",
            "reference": "Framework Para 9"
          },
          {
            "id": "outcomeE",
            "label": "Recognize as PROVISION (liability measured by estimation)",
            "reference": "Framework Para 9"
          }
        ]
      },
      {
        "id": "AA2.FG3",
        "topic": "Capital Maintenance Calculation Framework",
        "nodes": [
          {
            "id": "n1",
            "label": "Which capital maintenance concept to apply?",
            "branches": [
              {
                "label": "Historical Cost",
                "target": "outcomeA"
              },
              {
                "label": "Current Purchasing Power",
                "target": "outcomeB"
              },
              {
                "label": "Physical Capital (Current Cost)",
                "target": "outcomeC"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "Retained Profit = Closing Equity at HC − Opening Equity at HC − Capital Introduced",
            "reference": "Framework Para 11"
          },
          {
            "id": "outcomeB",
            "label": "Restate Opening Equity using AVERAGE Price Index: (Opening Equity ÷ Opening Index) × Closing Index",
            "reference": "Framework Para 11"
          },
          {
            "id": "outcomeC",
            "label": "Restate Opening Assets using SPECIFIC Price Indices for each asset class",
            "reference": "Framework Para 11"
          }
        ]
      },
      {
        "id": "AA2.FG4",
        "topic": "Measurement Bases Selection",
        "nodes": [
          {
            "id": "n1",
            "label": "What is the purpose of measurement?",
            "branches": [
              {
                "label": "Initial Recognition",
                "target": "outcomeA"
              },
              {
                "label": "Subsequent Measurement - Asset",
                "target": "n2"
              },
              {
                "label": "Subsequent Measurement - Liability",
                "target": "n3"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Type of asset?",
            "branches": [
              {
                "label": "Inventory",
                "target": "outcomeB"
              },
              {
                "label": "PPE for impairment",
                "target": "outcomeC"
              },
              {
                "label": "Long-term receivables",
                "target": "outcomeD"
              }
            ]
          },
          {
            "id": "n3",
            "label": "Current or Non-current?",
            "branches": [
              {
                "label": "Current",
                "target": "outcomeE"
              },
              {
                "label": "Non-current",
                "target": "outcomeD"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "Historical Cost — amount paid/fair value at acquisition",
            "reference": "Framework Para 10"
          },
          {
            "id": "outcomeB",
            "label": "Lower of Cost and Net Realisable Value",
            "reference": "Framework Para 10"
          },
          {
            "id": "outcomeC",
            "label": "Recoverable Value = Higher of (Net Selling Price, Value in Use)",
            "reference": "Framework Para 10"
          },
          {
            "id": "outcomeD",
            "label": "Present Value of future cash flows",
            "reference": "Framework Para 10"
          },
          {
            "id": "outcomeE",
            "label": "Settlement Value — undiscounted amount to settle",
            "reference": "Framework Para 10"
          }
        ]
      }
    ],
    "flashcards": [
      {
        "id": "AA2.FC1",
        "front": "Definition of Asset as per Framework",
        "back": "An asset is a resource controlled by the enterprise as a result of past events from which future economic benefits are expected to flow to the enterprise.",
        "section": "Framework Para 9"
      },
      {
        "id": "AA2.FC2",
        "front": "Definition of Liability as per Framework",
        "back": "A liability is a present obligation of the enterprise arising from past events, the settlement of which is expected to result in an outflow of a resource embodying economic benefits.",
        "section": "Framework Para 9"
      },
      {
        "id": "AA2.FC3",
        "front": "Definition of Equity as per Framework",
        "back": "Equity is defined as residual interest in the assets of an enterprise after deducting all its liabilities.",
        "section": "Framework Para 9"
      },
      {
        "id": "AA2.FC4",
        "front": "Definition of Income as per Framework",
        "back": "Income is increase in economic benefits during the accounting period in the form of inflows or enhancement of assets or decreases in liabilities that result in increase in equity other than those relating to contributions from equity participants.",
        "section": "Framework Para 9"
      },
      {
        "id": "AA2.FC5",
        "front": "Definition of Expense as per Framework",
        "back": "An expense is decrease in economic benefits during the accounting period in the form of outflows or depletions of assets or incurrence of liabilities that result in decrease in equity other than those relating to distributions to equity participants.",
        "section": "Framework Para 9"
      },
      {
        "id": "AA2.FC6",
        "front": "Going Concern Assumption",
        "back": "Financial statements are normally prepared on the assumption that an enterprise will continue in operation in the foreseeable future and neither there is an intention, nor there is a need to materially curtail the scale of operations.",
        "section": "Framework Para 6"
      },
      {
        "id": "AA2.FC7",
        "front": "Accrual Basis of Accounting",
        "back": "Revenues and costs are accrued, that is, recognised as they are earned or incurred (and not as money is received or paid) and recorded in the financial statements of the periods to which they relate.",
        "section": "Framework Para 6"
      },
      {
        "id": "AA2.FC8",
        "front": "Qualitative Characteristic: Relevance",
        "back": "Information, which is likely to influence the economic decisions by the users, is said to be relevant. Such information may help the users to evaluate past, present or future events or may help in confirming or correcting past evaluations.",
        "section": "Framework Para 7"
      },
      {
        "id": "AA2.FC9",
        "front": "Qualitative Characteristic: Materiality",
        "back": "A piece of information is said to be material if its misstatement (i.e., omission or erroneous statement) can influence economic decisions of a user taken on the basis of the financial information. Materiality depends on the size and nature of the item or error.",
        "section": "Framework Para 7"
      },
      {
        "id": "AA2.FC10",
        "front": "Historical Cost Measurement Basis",
        "back": "Assets are recorded at an amount of cash or cash equivalent paid or the fair value of the asset at the time of acquisition. Liabilities are recorded at the amount of proceeds received in exchange for the obligation.",
        "section": "Framework Para 10"
      },
      {
        "id": "AA2.FC11",
        "front": "Current Cost Measurement Basis",
        "back": "Assets are carried at the amount of cash or cash equivalent that would have to be paid if the same or an equivalent asset was acquired currently. Liabilities are carried at the undiscounted amount of cash or cash equivalents that would be required to settle the obligation currently.",
        "section": "Framework Para 10"
      },
      {
        "id": "AA2.FC12",
        "front": "Present Value Measurement Basis",
        "back": "Assets are carried at the present value of the future net cash inflows that the item is expected to generate in the normal course of business. Liabilities are carried at the present value of the future net cash outflows that are expected to be required to settle the liabilities.",
        "section": "Framework Para 10"
      },
      {
        "id": "AA2.FC13",
        "front": "Formula: Profit Calculation from Balance Sheet",
        "back": "Profit = (Closing Assets − Closing Liabilities) − (Opening Assets − Opening Liabilities) − Capital Introduced + Drawings",
        "section": "Framework Para 9"
      },
      {
        "id": "AA2.FC14",
        "front": "Present Value Formula",
        "back": "P (Present Value) = A / (1+R)^n where A = Future Amount, R = Discount Rate, n = Number of periods",
        "section": "Framework Para 10"
      },
      {
        "id": "AA2.FC15",
        "front": "Components of Financial Statements",
        "back": "A complete set of financial statements normally consists of a Balance Sheet, a Statement of Profit and Loss and a Cash Flow Statement together with notes, other statements and explanatory materials that form an integral part of the financial statements.",
        "section": "Framework Para 4"
      }
    ],
    "practiceProblems": [
      {
        "id": "AA2.PP1",
        "title": "Going Concern vs Non-Going Concern Comparison",
        "difficulty": 4,
        "problem": "Balance sheet of XYZ Traders on 31st March, 20X1 shows: Capital ₹80,000; Profit and Loss Account ₹30,000; 12% Loan ₹50,000; Trade Payables ₹15,000; Property, Plant and Equipment ₹90,000; Stock ₹45,000; Trade Receivables ₹25,000; Deferred Expenditure ₹12,000; Bank ₹3,000. Additional Information: (a) Remaining life of PPE is 6 years with even use; NRV of PPE on 31.03.X2 is ₹82,000. (b) Purchases ₹5,00,000; Sales ₹6,00,000. (c) Cost and NRV of closing stock are ₹48,000 and ₹55,000 respectively. (d) Expenses including loan interest ₹6,000 amount to ₹20,000. (e) Deferred expenditure is amortised over 4 years. (f) Trade receivables of ₹28,000 include ₹5,000 doubtful. (g) Closing trade payables ₹18,000 likely to be settled at 4% discount. (h) Early repayment penalty for loan is ₹3,000. Prepare Profit and Loss Accounts under both assumptions.",
        "steps": [
          "Step 1: Under Going Concern — Use historical cost depreciation (₹90,000 ÷ 6 = ₹15,000), value stock at lower of cost (₹48,000), provision for doubtful debts ₹5,000, amortise deferred expenditure ₹3,000",
          "Step 2: Under Non-Going Concern — Use NRV depreciation (₹90,000 − ₹82,000 = ₹8,000), value stock at NRV (₹55,000), provision for ₹5,000 doubtful debts, write off entire deferred expenditure ₹12,000, include loan penalty ₹3,000, recognize discount on payables ₹720",
          "Step 3: Calculate profit under Going Concern: Sales ₹6,00,000 + Closing Stock ₹48,000 − Opening Stock ₹45,000 − Purchases ₹5,00,000 − Expenses ₹20,000 − Depreciation ₹15,000 − Provision ₹5,000 − Amortisation ₹3,000 = ₹60,000",
          "Step 4: Calculate profit under Non-Going Concern: Sales ₹6,00,000 + Closing Stock ₹55,000 + Discount ₹720 − Opening Stock ₹45,000 − Purchases ₹5,00,000 − Expenses ₹20,000 − Depreciation ₹8,000 − Provision ₹5,000 − Deferred Exp ₹12,000 − Loan Penalty ₹3,000 = ₹62,720"
        ],
        "answer": "Going Concern Profit: ₹60,000; Non-Going Concern Profit: ₹62,720. Key differences: (i) Depreciation ₹15,000 vs ₹8,000, (ii) Stock ₹48,000 vs ₹55,000, (iii) Deferred Expenditure ₹3,000 vs ₹12,000, (iv) Loan penalty Nil vs ₹3,000, (v) Discount on payables Nil vs ₹720. As per Framework, when going concern is not assumed, assets are stated at NRV and all deferred items are written off.",
        "topic": "Going Concern Assumption"
      },
      {
        "id": "AA2.PP2",
        "title": "Capital Maintenance under Three Bases",
        "difficulty": 5,
        "problem": "A trader commenced business on 01/04/20X1 with ₹15,00,000 represented by 50,000 units of product at ₹30 per unit. During 20X1-X2, he sold all units at ₹45 per unit and withdrew ₹8,00,000. The average price index rose from 100 to 130. The specific price index for the product rose from 100 to 140 (closing price ₹42 per unit). Calculate retained profit and capital maintenance status under: (i) Historical Cost, (ii) Current Purchasing Power, (iii) Physical Capital Maintenance.",
        "steps": [
          "Step 1: Calculate Closing Equity at Historical Cost: Sales (50,000 × ₹45) = ₹22,50,000 − Drawings ₹8,00,000 = ₹14,50,000 (all cash)",
          "Step 2: Historical Cost Maintenance: Opening Equity ₹15,00,000; Retained Profit = ₹14,50,000 − ₹15,00,000 = (₹50,000) — Capital NOT maintained",
          "Step 3: Current Purchasing Power: Opening Equity at Closing Price = (₹15,00,000 ÷ 100) × 130 = ₹19,50,000; Retained Profit = ₹14,50,000 − ₹19,50,000 = (₹5,00,000) — Capital NOT maintained",
          "Step 4: Physical Capital Maintenance: Opening Equity at Current Cost = 50,000 units × ₹42 = ₹21,00,000; Retained Profit = ₹14,50,000 − ₹21,00,000 = (₹6,50,000) — Capital NOT maintained"
        ],
        "answer": "Under Historical Cost: Retained Loss ₹50,000; Under Current Purchasing Power: Retained Loss ₹5,00,000; Under Physical Capital: Retained Loss ₹6,50,000. Maximum permissible drawings to maintain capital: Historical Cost ₹7,50,000 (₹22,50,000 − ₹15,00,000); CPP ₹3,00,000 (₹22,50,000 − ₹19,50,000); Physical ₹1,50,000 (₹22,50,000 − ₹21,00,000). Physical capital maintenance is most conservative.",
        "topic": "Capital Maintenance Concepts"
      },
      {
        "id": "AA2.PP3",
        "title": "Present Value and Value in Use Calculation",
        "difficulty": 4,
        "problem": "Carrying amount of a machine is ₹5,00,000 (Historical cost less depreciation). The machine is expected to generate net cash inflows of ₹1,50,000 annually for 4 years. Net realisable value on current date is ₹4,20,000. The enterprise's required earning rate is 12% per year. Discounting factors at 12%: Year 1 = 0.893; Year 2 = 0.797; Year 3 = 0.712; Year 4 = 0.636. Determine: (a) Value in Use, (b) Recoverable Value, (c) Whether impairment exists and amount.",
        "steps": [
          "Step 1: Calculate Value in Use = Present Value of future cash flows = ₹1,50,000 × (0.893 + 0.797 + 0.712 + 0.636) = ₹1,50,000 × 3.038 = ₹4,55,700",
          "Step 2: Determine Recoverable Value = Higher of (Value in Use, Net Selling Price) = Higher of (₹4,55,700, ₹4,20,000) = ₹4,55,700",
          "Step 3: Compare Carrying Amount with Recoverable Value: ₹5,00,000 > ₹4,55,700 — Asset is impaired",
          "Step 4: Calculate Impairment Loss = Carrying Amount − Recoverable Value = ₹5,00,000 − ₹4,55,700 = ₹44,300"
        ],
        "answer": "Value in Use: ₹4,55,700; Recoverable Value: ₹4,55,700; Impairment Loss: ₹44,300. As per Framework Para 10, present value measurement carries assets at PV of future net cash inflows. The asset should be written down by ₹44,300 with corresponding charge to P&L.",
        "topic": "Present Value Measurement"
      },
      {
        "id": "AA2.PP4",
        "title": "Liability Recognition for Binding Purchase Agreement",
        "difficulty": 3,
        "problem": "ABC Ltd. entered into a binding agreement on 15th March, 20X2 with Delta Ltd. to purchase a specialized machine for ₹8,00,000. Before delivery on 31st March, 20X2, ABC Ltd. had to change its production method. The new method will not require the machine and it will be scrapped after delivery with expected scrap value of ₹50,000. Pass necessary journal entries and explain the Framework principles applied.",
        "steps": [
          "Step 1: Identify liability: Binding agreement creates present obligation arising from past event — liability of ₹8,00,000 to Delta Ltd. must be recognized",
          "Step 2: Assess asset recognition: Future economic benefit from machine is improbable (only scrap value ₹50,000 expected) — cannot capitalize at ₹8,00,000",
          "Step 3: Recognize scrap as asset (₹50,000) and loss (₹7,50,000)",
          "Step 4: Journal Entry: Loss on Production Method Change Dr. ₹7,50,000; Scrap Asset Dr. ₹50,000; To Delta Ltd. Cr. ₹8,00,000"
        ],
        "answer": "Journal Entry: (1) Loss on Production Method Change A/c Dr. ₹7,50,000; Scrap Asset A/c Dr. ₹50,000; To Delta Ltd. ₹8,00,000 (Being liability recognized for binding agreement and loss charged as future economic benefit improbable). (2) P&L A/c Dr. ₹7,50,000; To Loss on Production Method Change A/c ₹7,50,000. Framework principles: Liability recognized when outflow is anticipated and measurable; Asset not recognized when future economic benefit beyond current period is improbable.",
        "topic": "Asset and Liability Recognition"
      }
    ],
    "caseMCQs": {
      "scenario": "Sunrise Enterprises commenced trading on 1st April, 20X1 with ₹24,00,000 represented by 80,000 units of a product at ₹30 per unit. During FY 20X1-X2: All units were sold at ₹48 per unit; Drawings made ₹12,00,000; Average price index rose from 100 to 125; Specific price index for the product rose from 100 to 135 (closing price ₹40.50 per unit). Balance Sheet on 31st March, 20X1 also included: PPE ₹18,00,000 (6 years remaining life); Deferred Revenue Expenditure ₹6,00,000 (4 years amortization); Trade Payables ₹4,50,000 (settleable at 5% discount if not a going concern); Early loan repayment penalty ₹75,000.",
      "questions": [
        {
          "id": "AA2.CQ1",
          "q": "Under Financial Capital Maintenance at Historical Cost, what is the retained profit/(loss) for Sunrise Enterprises for FY 20X1-X2?",
          "opts": [
            "₹2,40,000",
            "₹14,40,000",
            "(₹9,60,000)",
            "₹26,40,000"
          ],
          "ans": 0,
          "exp": "Under Historical Cost: Opening Equity = ₹24,00,000; Closing Equity = Sales ₹38,40,000 (80,000 × ₹48) − Drawings ₹12,00,000 = ₹26,40,000. Retained Profit = ₹26,40,000 − ₹24,00,000 = ₹2,40,000. Option B (₹14,40,000) wrongly calculates gross profit; Option C applies CPP; Option D is closing equity not retained profit.",
          "type": "Trap",
          "diff": 2
        },
        {
          "id": "AA2.CQ2",
          "q": "Under Financial Capital Maintenance at Current Purchasing Power, what is the capital required to be maintained?",
          "opts": [
            "₹24,00,000",
            "₹30,00,000",
            "₹32,40,000",
            "₹26,40,000"
          ],
          "ans": 1,
          "exp": "Under CPP, opening equity is restated using AVERAGE price index: Capital to maintain = (₹24,00,000 ÷ 100) × 125 = ₹30,00,000. Option A is historical cost; Option C wrongly uses specific index (135/100 × 24 lakh); Option D is closing equity.",
          "type": "Concept",
          "diff": 2
        },
        {
          "id": "AA2.CQ3",
          "q": "Under Physical Capital Maintenance at Current Cost, what is the loss resulting in non-maintenance of capital?",
          "opts": [
            "(₹3,60,000)",
            "(₹6,00,000)",
            "(₹5,40,000)",
            "(₹5,10,000)"
          ],
          "ans": 2,
          "exp": "Under Physical Capital: Opening Equity at Current Cost = 80,000 units × ₹40.50 = ₹32,40,000. Closing Equity = ₹26,40,000. Loss = ₹26,40,000 − ₹32,40,000 = (₹5,40,000). Option A uses wrong units; Option B uses average index instead of specific; Option D uses blended calculation.",
          "type": "Trap",
          "diff": 3
        },
        {
          "id": "AA2.CQ4",
          "q": "If Sunrise Enterprises is NOT a going concern, what additional expense must be recognized compared to going concern basis?",
          "opts": [
            "₹6,97,500",
            "₹5,25,000",
            "₹6,75,000",
            "₹4,50,000"
          ],
          "ans": 0,
          "exp": "Additional expenses under non-going concern: (1) Write-off remaining Deferred Expenditure ₹4,50,000 (₹6,00,000 − ₹1,50,000 normal amortization); (2) Loan penalty ₹75,000; (3) Discount on payables is income not expense (₹22,500 credit). Net additional expense = ₹4,50,000 + ₹75,000 + Normal amortization extra write-off ₹4,50,000 less discount = ₹4,50,000 + ₹75,000 + (₹6,00,000 − ₹1,50,000) − (₹22,500) = ₹6,97,500 additional net charge. Option B excludes penalty; Option C ignores discount; Option D is only deferred expenditure.",
          "type": "Amendment",
          "diff": 3
        }
      ]
    },
    "mcqs": [
      {
        "id": "AA2.Q1",
        "q": "A company has PPE with carrying amount ₹6,00,000. Expected annual cash inflows are ₹2,00,000 for 4 years. Net selling price is ₹5,50,000. Discount rate is 10%. PV factors: Yr1=0.909, Yr2=0.826, Yr3=0.751, Yr4=0.683. What is the recoverable value?",
        "opts": [
          "₹6,33,800",
          "₹5,50,000",
          "₹6,00,000",
          "₹8,00,000"
        ],
        "ans": 0,
        "exp": "Value in Use = ₹2,00,000 × (0.909 + 0.826 + 0.751 + 0.683) = ₹2,00,000 × 3.169 = ₹6,33,800. Recoverable Value = Higher of (Value in Use ₹6,33,800, Net Selling Price ₹5,50,000) = ₹6,33,800. As per Framework Para 10, present value measurement is used for impairment assessment.",
        "type": "Trap",
        "diff": 3
      },
      {
        "id": "AA2.Q2",
        "q": "Which of the following is NOT a fundamental accounting assumption as per the Framework?",
        "opts": [
          "Going Concern",
          "Accrual",
          "Prudence",
          "Consistency"
        ],
        "ans": 2,
        "exp": "As per Framework Para 6, there are only THREE fundamental accounting assumptions: Going Concern, Accrual, and Consistency. Prudence is an element of RELIABILITY which is a qualitative characteristic, not a fundamental assumption.",
        "type": "Concept",
        "diff": 1
      },
      {
        "id": "AA2.Q3",
        "q": "Provision for doubtful debts should be classified as:",
        "opts": [
          "Current Liability",
          "Non-current Liability",
          "Contra-asset (deducted from Trade Receivables)",
          "Contingent Liability"
        ],
        "ans": 2,
        "exp": "As per Framework Para 9, provisions for doubtful debts, depreciation and impairment losses represent DIMINUTION IN VALUE OF ASSETS rather than obligations. These provisions should NOT be considered as liability but as contra-asset reducing the carrying amount of the related asset.",
        "type": "Trap",
        "diff": 2
      },
      {
        "id": "AA2.Q4",
        "q": "Under Current Cost measurement basis, a machine acquired for $15,000 when exchange rate was ₹48/$ should be recorded at what amount if current market price in India is ₹8,50,000 and current exchange rate is ₹52/$?",
        "opts": [
          "₹7,20,000",
          "₹7,80,000",
          "₹8,50,000",
          "₹7,50,000"
        ],
        "ans": 2,
        "exp": "Under Current Cost basis as per Framework Para 10, assets are carried at the amount that would have to be paid if the same or equivalent asset was acquired CURRENTLY. Current market price in India = ₹8,50,000. Historical cost (₹7,20,000) and current exchange rate calculation (₹7,80,000) are irrelevant under current cost basis.",
        "type": "Concept",
        "diff": 2
      },
      {
        "id": "AA2.Q5",
        "q": "When an accounting policy change is required by statute, it must be changed even if the existing policy provides more appropriate presentation. This statement is:",
        "opts": [
          "True — statute overrides Framework",
          "False — Framework overrides statute",
          "True — but only for listed companies",
          "False — management has discretion"
        ],
        "ans": 0,
        "exp": "As per Framework Para 6, an accounting policy can be changed if required (i) by a statute, (ii) by an Accounting Standard, or (iii) for more appropriate presentation. Statutory requirements must be followed regardless of management preference for alternative treatments.",
        "type": "Concept",
        "diff": 1
      },
      {
        "id": "AA2.Q6",
        "q": "A trader has opening equity ₹5,00,000, earned income ₹80,000, incurred expenses ₹35,000, and made drawings ₹20,000. What is the closing equity?",
        "opts": [
          "₹5,25,000",
          "₹5,45,000",
          "₹5,65,000",
          "₹5,05,000"
        ],
        "ans": 0,
        "exp": "As per Framework: Closing Equity = Opening Equity + Income − Expenses − Drawings = ₹5,00,000 + ₹80,000 − ₹35,000 − ₹20,000 = ₹5,25,000. Option B ignores drawings; Option C adds drawings instead of deducting; Option D wrongly calculates retained profit.",
        "type": "Trap",
        "diff": 2
      },
      {
        "id": "AA2.Q7",
        "q": "Which user of financial statements is interested in the SHORTEST period compared to others?",
        "opts": [
          "Investors",
          "Employees",
          "Trade Creditors",
          "Lenders"
        ],
        "ans": 2,
        "exp": "As per Framework Para 5, 'Trade creditors are likely to be interested in an enterprise over a SHORTER period than lenders unless they are dependent upon the continuance of the enterprise as a major customer.' Investors and lenders have long-term interest; employees focus on stability and continuity.",
        "type": "Concept",
        "diff": 2
      },
      {
        "id": "AA2.Q8",
        "q": "Section 128(1) of the Companies Act, 2013 mandates that companies must maintain accounts on:",
        "opts": [
          "Cash basis only",
          "Hybrid basis",
          "Accrual basis only",
          "Either cash or accrual basis"
        ],
        "ans": 2,
        "exp": "As per Framework Para 6, Section 128(1) of the Companies Act, 2013 makes it MANDATORY for companies to maintain accounts on accrual basis ONLY. Cash basis is not permitted for companies.",
        "type": "Concept",
        "diff": 1
      }
    ],
    "tricky": [
      {
        "id": "AA2.1",
        "point": "Prudence is NOT a fundamental assumption — it is part of Reliability (qualitative characteristic)",
        "mistake": "Students list Prudence as the fourth fundamental accounting assumption alongside Going Concern, Accrual, and Consistency",
        "why": "Framework explicitly identifies only THREE assumptions; Prudence appears under reliability criteria for information to be free from bias",
        "priority": "Very High"
      },
      {
        "id": "AA2.2",
        "point": "Physical Capital uses SPECIFIC indices while Financial Capital at CPP uses AVERAGE indices",
        "mistake": "Students apply average price index (CPI/WPI) for physical capital maintenance calculations",
        "why": "Physical capital ensures replacement of specific assets at their individual prices, not at general purchasing power equivalent",
        "priority": "High"
      },
      {
        "id": "AA2.3",
        "point": "Under non-going concern, stock is valued at NRV (higher than cost) not lower of cost and NRV",
        "mistake": "Students continue applying 'lower of cost and NRV' rule even when going concern is not assumed",
        "why": "When liquidation is expected, all assets including inventory must be stated at amounts expected to be realized",
        "priority": "High"
      },
      {
        "id": "AA2.4",
        "point": "Future commitment does NOT create a liability — liability arises only when asset is delivered or irrevocable agreement is entered",
        "mistake": "Students recognize liability for management's decision to acquire assets in future",
        "why": "Framework clearly states a decision to acquire does not of itself create present obligation",
        "priority": "High"
      },
      {
        "id": "AA2.5",
        "point": "Discount earned on settlement of liability is INCOME not reduction of expense",
        "mistake": "Students credit the discount to the original expense account instead of recognizing it as income",
        "why": "Reduction of liability without corresponding asset reduction results in increase in equity = income",
        "priority": "Medium"
      },
      {
        "id": "AA2.6",
        "point": "Trade creditors have SHORTER interest period than lenders",
        "mistake": "Students assume all external parties have similar interest periods in the enterprise",
        "why": "Framework explicitly differentiates — trade creditors focus on short-term payment ability while lenders evaluate long-term viability",
        "priority": "Medium"
      }
    ],
    "amendments": [
      {
        "id": "AA2.A1",
        "topic": "Companies (Accounting Standards) Rules, 2021",
        "what": "Companies (Accounting Standards) Rules, 2021 replaced Companies (Accounting Standards) Rules, 2006 — Framework now operates in context of 2021 Rules",
        "oldPosition": "Framework was relevant in context of Companies (Accounting Standards) Rules, 2006 as amended",
        "newPosition": "Framework is now relevant in context of Companies (Accounting Standards) Rules, 2021 notified by the Central Government",
        "effectiveFrom": "2021 onwards",
        "pdfStatus": "mentioned on page 2.2",
        "priority": "Medium"
      },
      {
        "id": "AA2.A2",
        "topic": "Conceptual Framework for Financial Reporting (IASB 2018)",
        "what": "IASB issued revised Conceptual Framework in March 2018 with changes to definitions of assets, liabilities, and introduction of measurement uncertainty — Indian Framework yet to be aligned",
        "oldPosition": "Asset defined as resource from which future economic benefits expected to flow",
        "newPosition": "Under IASB 2018: Asset is a present economic resource controlled by entity as result of past events. Economic resource is a right that has potential to produce economic benefits",
        "effectiveFrom": "Not yet applicable to Indian AS/Ind AS Framework",
        "pdfStatus": "not mentioned",
        "priority": "Low"
      },
      {
        "id": "AA2.A3",
        "topic": "Section 128 — Books of Account under Companies Act, 2013",
        "what": "Section 128 as amended requires maintenance of books on accrual basis and mandates statutory maintenance in electronic form for certain class of companies",
        "oldPosition": "Books of account to be kept on accrual basis at registered office",
        "newPosition": "Accrual basis mandatory; electronic records acceptable; backup rules apply for electronic maintenance",
        "effectiveFrom": "Applicable for all assessments",
        "pdfStatus": "partially mentioned (accrual requirement only)",
        "priority": "Medium"
      }
    ],
    "cases": [],
    "trees": []
  }
]