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
  }
]