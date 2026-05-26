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
  },
  {
    "id": "AA3",
    "name": "Applicability of Accounting Standards",
    "dangerZones": [
      {
        "id": "AA3.DZ1",
        "point": "Confusing MSME classification thresholds for non-company entities — Turnover ≤ ₹250 crore vs ≤ ₹50 crore for AS 18/AS 28 exemption",
        "mistake": "Students apply the general MSME turnover limit of ₹250 crore to claim exemption from AS 18 (Related Party Disclosures) and AS 28 (Impairment of Assets), when these specific standards require turnover ≤ ₹50 crore and borrowings ≤ ₹10 crore",
        "why": "ICAI tests whether students have read the layered exemption structure — there are two tiers within MSMEs with different AS applicability",
        "priority": "Very High"
      },
      {
        "id": "AA3.DZ2",
        "point": "Two-consecutive-year rule for newly qualifying MSMEs before availing exemptions",
        "mistake": "Students assume that a non-company entity can avail MSME exemptions immediately upon first qualifying as an MSME, when in fact it must remain an MSME for two consecutive years before claiming exemptions",
        "why": "ICAI specifically tests transitional provisions — this rule prevents entities from gaming the system by temporarily reducing turnover/borrowings",
        "priority": "Very High"
      },
      {
        "id": "AA3.DZ3",
        "point": "Borrowing threshold for MSME classification is ₹50 crore 'at any time' during the year, not year-end",
        "mistake": "Students check borrowings only at year-end balance sheet date, ignoring that exceeding ₹50 crore even for a single day during the year disqualifies MSME status",
        "why": "ICAI tests precise reading of 'at any time during the immediately preceding accounting year' — this is different from turnover which is cumulative",
        "priority": "High"
      },
      {
        "id": "AA3.DZ4",
        "point": "SMC classification for companies differs from MSME classification for non-company entities",
        "mistake": "Students apply MSME thresholds (₹250 crore turnover, ₹50 crore borrowings) to companies, when companies follow SMC definition under Companies (Accounting Standards) Rules, 2021 which has different criteria",
        "why": "ICAI tests awareness that corporate and non-corporate entities have separate classification frameworks issued by MCA and ICAI respectively",
        "priority": "High"
      },
      {
        "id": "AA3.DZ5",
        "point": "Holding/subsidiary of a non-MSME cannot be classified as MSME regardless of own size",
        "mistake": "Students classify an entity as MSME based solely on its own turnover and borrowings, ignoring that being a holding or subsidiary of a Large entity automatically disqualifies it",
        "why": "ICAI tests the anti-avoidance provision preventing group structures from claiming exemptions through subsidiaries",
        "priority": "High"
      }
    ],
    "formulaGuide": [
      {
        "id": "AA3.FG1",
        "topic": "Is the Non-Company Entity an MSME?",
        "nodes": [
          {
            "id": "n1",
            "label": "Is entity's equity/debt listed or in process of listing?",
            "branches": [
              {
                "label": "Yes",
                "target": "outcomeA"
              },
              {
                "label": "No",
                "target": "n2"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Is entity a bank, financial institution, or insurance company?",
            "branches": [
              {
                "label": "Yes",
                "target": "outcomeA"
              },
              {
                "label": "No",
                "target": "n3"
              }
            ]
          },
          {
            "id": "n3",
            "label": "Does turnover (excluding other income) exceed ₹250 crore in immediately preceding year?",
            "branches": [
              {
                "label": "Yes",
                "target": "outcomeA"
              },
              {
                "label": "No",
                "target": "n4"
              }
            ]
          },
          {
            "id": "n4",
            "label": "Did borrowings exceed ₹50 crore at any time during immediately preceding year?",
            "branches": [
              {
                "label": "Yes",
                "target": "outcomeA"
              },
              {
                "label": "No",
                "target": "n5"
              }
            ]
          },
          {
            "id": "n5",
            "label": "Is entity a holding or subsidiary of a non-MSME?",
            "branches": [
              {
                "label": "Yes",
                "target": "outcomeA"
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
            "label": "Large Entity — Must comply with ALL Accounting Standards in full",
            "reference": "ICAI Announcement August 2024"
          },
          {
            "id": "outcomeB",
            "label": "MSME — Eligible for exemptions/relaxations (subject to two-consecutive-year rule for new MSMEs)",
            "reference": "ICAI Announcement August 2024"
          }
        ]
      },
      {
        "id": "AA3.FG2",
        "topic": "Which Accounting Standards are NOT Applicable to MSMEs?",
        "nodes": [
          {
            "id": "n1",
            "label": "Is the entity classified as MSME?",
            "branches": [
              {
                "label": "No",
                "target": "outcomeA"
              },
              {
                "label": "Yes",
                "target": "n2"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Check which category of exemption applies:",
            "branches": [
              {
                "label": "General MSME exemption (all MSMEs)",
                "target": "outcomeB"
              },
              {
                "label": "Additional exemption (Turnover ≤₹50Cr & Borrowings ≤₹10Cr)",
                "target": "n3"
              }
            ]
          },
          {
            "id": "n3",
            "label": "Does MSME have Turnover ≤₹50Cr AND Borrowings ≤₹10Cr AND not holding/subsidiary of larger MSME?",
            "branches": [
              {
                "label": "Yes",
                "target": "outcomeC"
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
            "label": "Large Entity — All AS applicable in full",
            "reference": "ICAI Announcement August 2024"
          },
          {
            "id": "outcomeB",
            "label": "MSME Tier 1 — AS 3, AS 17, AS 20, AS 24 NOT applicable; Relaxations in AS 10, AS 11, AS 15, AS 19, AS 22, AS 26, AS 28, AS 29",
            "reference": "ICAI Announcement Annexure 1 Para 2(A)(i)"
          },
          {
            "id": "outcomeC",
            "label": "MSME Tier 2 — Additional exemption: AS 18 and AS 28 also NOT applicable in entirety",
            "reference": "ICAI Announcement Annexure 1 Para 2(A)(ii)"
          }
        ]
      },
      {
        "id": "AA3.FG3",
        "topic": "Can Entity Avail MSME Exemptions This Year?",
        "nodes": [
          {
            "id": "n1",
            "label": "Was entity an MSME in the immediately preceding year?",
            "branches": [
              {
                "label": "Yes",
                "target": "n2"
              },
              {
                "label": "No (was Large Entity)",
                "target": "n3"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Does entity qualify as MSME in current year?",
            "branches": [
              {
                "label": "Yes",
                "target": "outcomeA"
              },
              {
                "label": "No",
                "target": "outcomeB"
              }
            ]
          },
          {
            "id": "n3",
            "label": "Does entity qualify as MSME in current year (newly qualifying)?",
            "branches": [
              {
                "label": "Yes",
                "target": "n4"
              },
              {
                "label": "No",
                "target": "outcomeC"
              }
            ]
          },
          {
            "id": "n4",
            "label": "Has entity remained MSME for two consecutive years?",
            "branches": [
              {
                "label": "Yes",
                "target": "outcomeA"
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
            "label": "Can avail MSME exemptions — Disclose MSME status and Standards from which exemptions availed",
            "reference": "ICAI Announcement Additional Requirement (1)"
          },
          {
            "id": "outcomeB",
            "label": "Cannot avail MSME exemptions — Apply full AS from current year; Disclose prior MSME status and that previous year figures not revised",
            "reference": "ICAI Announcement Additional Requirement (2)"
          },
          {
            "id": "outcomeC",
            "label": "Large Entity — Full AS compliance required",
            "reference": "ICAI Announcement Para 4"
          },
          {
            "id": "outcomeD",
            "label": "Cannot avail MSME exemptions yet — Must remain MSME for two consecutive years before claiming",
            "reference": "ICAI Announcement Additional Requirement (3)"
          }
        ]
      },
      {
        "id": "AA3.FG4",
        "topic": "Applicability of Accounting Standards to Enterprises",
        "nodes": [
          {
            "id": "n1",
            "label": "Is the enterprise engaged in commercial, industrial, or business activities?",
            "branches": [
              {
                "label": "No activity is commercial/industrial/business",
                "target": "outcomeA"
              },
              {
                "label": "Even a small proportion is commercial/industrial/business",
                "target": "n2"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Is the financial item material?",
            "branches": [
              {
                "label": "Yes",
                "target": "outcomeB"
              },
              {
                "label": "No (immaterial)",
                "target": "outcomeC"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "Accounting Standards do NOT apply (e.g., purely charitable activities like collecting donations for flood relief)",
            "reference": "Preface to Statements of Accounting Standards"
          },
          {
            "id": "outcomeB",
            "label": "Accounting Standards apply to ALL activities including non-commercial ones",
            "reference": "Preface to Statements of Accounting Standards"
          },
          {
            "id": "outcomeC",
            "label": "Accounting Standards intended to apply only to material items — immaterial items need not strictly comply",
            "reference": "Preface to Statements of Accounting Standards"
          }
        ]
      }
    ],
    "flashcards": [
      {
        "id": "AA3.FC1",
        "front": "Definition of MSME (Micro, Small and Medium Sized Entity) for Non-Company Entities",
        "back": "MSME means a non-company entity: (i) whose equity or debt securities are not listed or are not in the process of listing on any stock exchange, whether in India or outside India; (ii) which is not a bank, financial institution or an insurance company; (iii) whose turnover (excluding other income) does not exceed ₹250 crore in the immediately preceding accounting year; (iv) which does not have borrowings in excess of ₹50 crore at any time during the immediately preceding accounting year; and (v) which is not a holding or subsidiary of an entity which is not a micro, small and medium-sized entity.",
        "section": "ICAI Announcement August 2024 Para 2"
      },
      {
        "id": "AA3.FC2",
        "front": "Accounting Standards NOT applicable to ALL MSMEs in their entirety",
        "back": "AS 3 (Cash Flow Statements), AS 17 (Segment Reporting), AS 20 (Earnings per Share), AS 24 (Discontinuing Operations)",
        "section": "ICAI Announcement Annexure 1 Para 2(A)(i)"
      },
      {
        "id": "AA3.FC3",
        "front": "Additional AS exemption for smaller MSMEs (Turnover ≤₹50Cr, Borrowings ≤₹10Cr)",
        "back": "AS 18 (Related Party Disclosures) and AS 28 (Impairment of Assets) are NOT applicable in their entirety to MSMEs: (a) whose turnover (excluding other income) does not exceed ₹50 crore in the immediately preceding accounting year; (b) which does not have borrowings in excess of ₹10 crore at any time during the immediately preceding accounting year; and (c) which is not a Holding and subsidiary of an MSME not covered above.",
        "section": "ICAI Announcement Annexure 1 Para 2(A)(ii)"
      },
      {
        "id": "AA3.FC4",
        "front": "Two-Consecutive-Year Rule for Newly Qualifying MSMEs",
        "back": "An entity which was previously not an MSME and subsequently becomes an MSME, shall not be qualified for exemption/relaxation in respect of Accounting Standards available to an MSME until the entity remains an MSME for two consecutive years.",
        "section": "ICAI Announcement Additional Requirement (3)"
      },
      {
        "id": "AA3.FC5",
        "front": "Disclosure requirement when MSME loses its status",
        "back": "Where an MSME had qualified for any exemption or relaxation previously but no longer qualifies for the relevant exemption or relaxation in the current accounting period, the relevant standards or requirements become applicable from the current period and the figures for the corresponding period of the previous accounting period need not be revised merely by reason of its having ceased to be an MSME. The fact that it was an MSME in the previous period and it had availed of the exemptions or relaxations available to it shall be disclosed in the notes to the financial statements.",
        "section": "ICAI Announcement Additional Requirement (2)"
      },
      {
        "id": "AA3.FC6",
        "front": "Section 129(1) of Companies Act, 2013 — AS Compliance Requirement",
        "back": "Section 129(1) of the Companies Act, 2013 requires companies to present their financial statements in accordance with the accounting standards notified under Section 133 of the Companies Act, 2013.",
        "section": "Companies Act 2013 Section 129(1)"
      },
      {
        "id": "AA3.FC7",
        "front": "Section 143(3)(e) of Companies Act, 2013 — Auditor's Reporting Duty",
        "back": "The auditor is required by Section 143(3)(e) to report whether, in his opinion, the financial statements of the company audited, comply with the accounting standards referred to in Section 133 of the Companies Act, 2013.",
        "section": "Companies Act 2013 Section 143(3)(e)"
      },
      {
        "id": "AA3.FC8",
        "front": "Definition of Materiality for Accounting Standards",
        "back": "An item is considered material, if its omission or misstatement is likely to affect economic decision of the user. Materiality is not necessarily a function of size; it is the information content i.e., the financial item which is important.",
        "section": "Preface to Statements of Accounting Standards"
      },
      {
        "id": "AA3.FC9",
        "front": "AS 22 Transitional Requirement for MSMEs availing exemption",
        "back": "On the first occasion when an MSME avails this exemption (from deferred tax requirements), the accumulated deferred tax asset/liability appearing in the financial statements of immediate previous accounting period, shall be adjusted against the opening revenue reserves/owner's funds.",
        "section": "ICAI Announcement Annexure 1 Para 2(B)(v)(b)"
      },
      {
        "id": "AA3.FC10",
        "front": "Section 145(2) of Income Tax Act, 1961 — ICDS Authority",
        "back": "Section 145(2) of the Income Tax Act, 1961, empowers the Central Government to notify in the Official Gazette from time to time, Income Computation and Disclosure Standards to be followed by any class of assesses or in respect of any class of income.",
        "section": "Income Tax Act 1961 Section 145(2)"
      },
      {
        "id": "AA3.FC11",
        "front": "Accounting Standard not applicable to SMCs (Companies) in entirety",
        "back": "AS 17 (Segment Reporting) is NOT applicable to SMCs in their entirety.",
        "section": "Companies (Accounting Standards) Rules, 2021"
      },
      {
        "id": "AA3.FC12",
        "front": "Three questions to assess AS applicability",
        "back": "(a) Does it apply to the enterprise concerned? (b) Does it apply to the financial statement concerned? (c) Does it apply to the financial item concerned?",
        "section": "Preface to Statements of Accounting Standards"
      }
    ],
    "practiceProblems": [
      {
        "id": "AA3.PP1",
        "title": "Classification of Partnership Firm as MSME or Large Entity",
        "difficulty": 3,
        "problem": "Sharma & Associates, a partnership firm, provides the following information for FY 2023-24:\n- Turnover from operations: ₹240 crore\n- Other income (interest, rent): ₹15 crore\n- Maximum borrowings at any point during the year: ₹48 crore\n- Year-end borrowings: ₹35 crore\n- The firm is not listed and is not a bank/FI/insurance company\n- It is not a subsidiary or holding of any other entity\n\nDetermine whether the firm qualifies as an MSME for FY 2024-25 and list the Accounting Standards from which it would be exempt.",
        "steps": [
          "Step 1: Check listing status — Not listed, satisfies condition (i)",
          "Step 2: Check nature — Not bank/FI/insurance, satisfies condition (ii)",
          "Step 3: Check turnover — ₹240 crore (excluding other income ₹15 crore) < ₹250 crore, satisfies condition (iii)",
          "Step 4: Check borrowings — Maximum during year ₹48 crore < ₹50 crore (not year-end figure), satisfies condition (iv)",
          "Step 5: Check holding/subsidiary status — Not applicable, satisfies condition (v)",
          "Step 6: All five conditions satisfied — Entity qualifies as MSME",
          "Step 7: List exempt AS — AS 3, AS 17, AS 20, AS 24 not applicable; Relaxations available in AS 10, AS 11, AS 15, AS 19, AS 22, AS 26, AS 28, AS 29"
        ],
        "answer": "Sharma & Associates qualifies as an MSME for FY 2024-25. It is exempt from AS 3 (Cash Flow Statements), AS 17 (Segment Reporting), AS 20 (Earnings per Share), and AS 24 (Discontinuing Operations) in their entirety. Since turnover (₹240 crore) exceeds ₹50 crore, the additional exemption from AS 18 and AS 28 is NOT available — these standards remain applicable with certain relaxations.",
        "topic": "MSME Classification and AS Exemptions"
      },
      {
        "id": "AA3.PP2",
        "title": "Transitional Provisions for Entity Losing MSME Status",
        "difficulty": 4,
        "problem": "ABC LLP was classified as an MSME in FY 2022-23 and FY 2023-24. It availed exemptions from AS 3, AS 17, AS 20, and AS 24. In FY 2023-24, its borrowings peaked at ₹65 crore in October 2023 (though year-end borrowings were only ₹40 crore). Turnover was ₹200 crore.\n\nFor FY 2024-25, the LLP shows:\n- Turnover: ₹180 crore\n- Maximum borrowings during year: ₹45 crore\n\nAdvise on the AS applicability and disclosure requirements for FY 2024-25.",
        "steps": [
          "Step 1: Analyze FY 2023-24 status — Borrowings exceeded ₹50 crore at some point (₹65 crore in October 2023), hence ABC LLP was NOT an MSME in FY 2023-24",
          "Step 2: The fact that year-end borrowings were ₹40 crore is irrelevant — the test is 'at any time during the year'",
          "Step 3: For FY 2024-25 — Turnover ₹180 crore < ₹250 crore, Max borrowings ₹45 crore < ₹50 crore, satisfies MSME criteria",
          "Step 4: Apply two-consecutive-year rule — Entity was not MSME in FY 2023-24 and newly qualifies in FY 2024-25",
          "Step 5: Cannot avail exemptions until MSME for two consecutive years — Must comply with full AS in FY 2024-25",
          "Step 6: If entity remains MSME in FY 2025-26 as well, exemptions can be availed from FY 2025-26 onwards"
        ],
        "answer": "ABC LLP must comply with ALL Accounting Standards in full for FY 2024-25 despite meeting MSME thresholds. This is because it was not an MSME in FY 2023-24 (borrowings exceeded ₹50 crore during the year) and is newly qualifying. As per ICAI Announcement Additional Requirement (3), it must remain MSME for two consecutive years before availing exemptions. The LLP should disclose that it incorrectly classified itself as MSME in prior years and restate comparatives if material.",
        "topic": "Two-Consecutive-Year Rule and Transitional Provisions"
      },
      {
        "id": "AA3.PP3",
        "title": "AS 22 Deferred Tax Transitional Adjustment for MSME",
        "difficulty": 4,
        "problem": "Delta Enterprises, a partnership firm, has been classified as an MSME since FY 2020-21. However, it had been fully complying with AS 22 including deferred tax provisions voluntarily. The deferred tax liability as on 31st March 2024 is ₹8,50,000 and deferred tax asset is ₹2,30,000. From FY 2024-25, the firm decides to avail the MSME exemption under AS 22 (i.e., comply only with current tax requirements).\n\nPrepare the transitional journal entry and compute the impact on owner's funds.",
        "steps": [
          "Step 1: Identify accumulated deferred tax position — DTL ₹8,50,000, DTA ₹2,30,000, Net DTL ₹6,20,000",
          "Step 2: Apply transitional requirement — Accumulated deferred tax asset/liability shall be adjusted against opening revenue reserves/owner's funds",
          "Step 3: Journal Entry to reverse net DTL:\n   Dr. Deferred Tax Liability A/c  ₹8,50,000\n   Cr. Deferred Tax Asset A/c      ₹2,30,000\n   Cr. Owner's Funds/Capital A/c   ₹6,20,000",
          "Step 4: This adjustment increases owner's funds by ₹6,20,000 (reversal of net liability)",
          "Step 5: From FY 2024-25 onwards, only current tax as per paragraph 9 and measurement as per paragraph 20 of AS 22 is required"
        ],
        "answer": "The transitional journal entry on 1st April 2024:\nDr. Deferred Tax Liability ₹8,50,000\nCr. Deferred Tax Asset ₹2,30,000\nCr. Opening Capital/Owner's Funds ₹6,20,000\n\nImpact: Owner's funds increase by ₹6,20,000 as the net deferred tax liability is reversed against opening reserves. Henceforth, Delta Enterprises will account only for current tax under AS 22 and must disclose that it is an MSME availing exemption from deferred tax provisions.",
        "topic": "AS 22 Transitional Provisions for MSME"
      },
      {
        "id": "AA3.PP4",
        "title": "Determining AS 18 and AS 28 Applicability to MSME",
        "difficulty": 3,
        "problem": "Consider two partnership firms for FY 2024-25:\n\nFirm X:\n- Turnover: ₹45 crore\n- Other income: ₹3 crore\n- Maximum borrowings: ₹8 crore\n- Not a holding/subsidiary\n\nFirm Y:\n- Turnover: ₹48 crore\n- Other income: ₹5 crore\n- Maximum borrowings: ₹12 crore\n- Not a holding/subsidiary\n\nBoth firms are unlisted and not banks/FIs. Determine whether AS 18 (Related Party Disclosures) and AS 28 (Impairment of Assets) are applicable to each firm.",
        "steps": [
          "Step 1: Check basic MSME qualification for both firms — Both qualify as MSMEs (turnover < ₹250 crore, borrowings < ₹50 crore)",
          "Step 2: Check additional exemption criteria for AS 18 and AS 28 — Turnover ≤ ₹50 crore AND borrowings ≤ ₹10 crore",
          "Step 3: Firm X — Turnover ₹45 crore ≤ ₹50 crore (✓), Borrowings ₹8 crore ≤ ₹10 crore (✓)",
          "Step 4: Firm X qualifies for additional exemption — AS 18 and AS 28 NOT applicable in entirety",
          "Step 5: Firm Y — Turnover ₹48 crore ≤ ₹50 crore (✓), Borrowings ₹12 crore > ₹10 crore (✗)",
          "Step 6: Firm Y does NOT qualify for additional exemption — AS 18 and AS 28 ARE applicable (though with certain relaxations for AS 28)"
        ],
        "answer": "Firm X: AS 18 and AS 28 are NOT applicable in their entirety as it meets both thresholds (turnover ₹45 crore ≤ ₹50 crore; borrowings ₹8 crore ≤ ₹10 crore).\n\nFirm Y: AS 18 (Related Party Disclosures) IS fully applicable. AS 28 (Impairment of Assets) IS applicable but with relaxation — Firm Y may measure 'value in use' based on reasonable estimate instead of present value technique, and certain disclosures under para 121 are exempted. The borrowings threshold of ₹10 crore is breached.",
        "topic": "Tiered MSME Exemptions for AS 18 and AS 28"
      }
    ],
    "caseMCQs": {
      "scenario": "Zenith Traders LLP, an unlisted partnership firm, provides the following data for FY 2023-24 and FY 2024-25:\n\nFY 2023-24:\n- Turnover from operations: ₹235 crore\n- Other income: ₹12 crore\n- Maximum borrowings during year: ₹52 crore (in June 2023)\n- Year-end borrowings: ₹38 crore\n\nFY 2024-25:\n- Turnover from operations: ₹195 crore\n- Other income: ₹8 crore\n- Maximum borrowings during year: ₹42 crore\n- Year-end borrowings: ₹42 crore\n\nThe LLP is not a bank, financial institution, or insurance company. It is not a holding or subsidiary of any other entity. The LLP has never been classified as MSME before and wishes to avail MSME exemptions.",
      "questions": [
        {
          "id": "AA3.CQ1",
          "q": "What is the relevant turnover figure for MSME classification for FY 2024-25?",
          "opts": [
            "₹195 crore",
            "₹203 crore",
            "₹235 crore",
            "₹247 crore"
          ],
          "ans": 2,
          "exp": "For MSME classification in the current year, the turnover of the 'immediately preceding accounting year' is considered. For FY 2024-25, this means FY 2023-24 turnover of ₹235 crore (excluding other income of ₹12 crore). The current year turnover of ₹195 crore is not relevant for classification purposes.",
          "type": "Trap",
          "diff": 2
        },
        {
          "id": "AA3.CQ2",
          "q": "Was Zenith Traders LLP classified as an MSME in FY 2023-24?",
          "opts": [
            "Yes, because turnover ₹235 crore < ₹250 crore and year-end borrowings ₹38 crore < ₹50 crore",
            "No, because borrowings exceeded ₹50 crore at some point during the year",
            "Yes, because total income ₹247 crore < ₹250 crore",
            "No, because turnover including other income exceeds ₹250 crore"
          ],
          "ans": 1,
          "exp": "The borrowing threshold test requires that borrowings should not exceed ₹50 crore 'at any time during the immediately preceding accounting year'. Since borrowings peaked at ₹52 crore in June 2023, the LLP was NOT an MSME in FY 2023-24. Year-end borrowings of ₹38 crore are irrelevant.",
          "type": "Trap",
          "diff": 3
        },
        {
          "id": "AA3.CQ3",
          "q": "Can Zenith Traders LLP avail MSME exemptions from Accounting Standards in FY 2024-25?",
          "opts": [
            "Yes, because it meets all five MSME criteria based on FY 2023-24 data",
            "Yes, because FY 2024-25 turnover and borrowings are within limits",
            "No, because it must remain MSME for two consecutive years before availing exemptions",
            "No, because borrowings exceeded ₹50 crore in June 2023"
          ],
          "ans": 2,
          "exp": "Even though Zenith Traders LLP meets MSME criteria for FY 2024-25, it cannot avail exemptions immediately. As per ICAI Announcement Additional Requirement (3), an entity which was previously not an MSME and subsequently becomes an MSME shall not be qualified for exemptions until it remains an MSME for two consecutive years.",
          "type": "Concept",
          "diff": 3
        },
        {
          "id": "AA3.CQ4",
          "q": "From which financial year can Zenith Traders LLP avail MSME exemptions, assuming it continues to meet MSME criteria?",
          "opts": [
            "FY 2024-25",
            "FY 2025-26",
            "FY 2026-27",
            "Never, as it was once a Large Entity"
          ],
          "ans": 1,
          "exp": "Zenith Traders LLP was not an MSME in FY 2023-24 (borrowings exceeded ₹50 crore). It newly qualifies as MSME in FY 2024-25. If it remains MSME in FY 2025-26 as well, it would have been MSME for two consecutive years (FY 2024-25 and FY 2025-26), and can avail exemptions from FY 2025-26 onwards.",
          "type": "Concept",
          "diff": 2
        }
      ]
    },
    "mcqs": [
      {
        "id": "AA3.Q1",
        "q": "Omega LLP has turnover of ₹48 crore (excluding other income) and maximum borrowings of ₹9 crore during FY 2023-24. For FY 2024-25, which of the following Accounting Standards is NOT applicable to it in its entirety?",
        "opts": [
          "AS 18 — Related Party Disclosures",
          "AS 22 — Accounting for Taxes on Income",
          "AS 15 — Employee Benefits",
          "AS 29 — Provisions, Contingent Liabilities and Contingent Assets"
        ],
        "ans": 0,
        "exp": "Since Omega LLP has turnover ≤ ₹50 crore AND borrowings ≤ ₹10 crore, it qualifies for additional MSME exemption. AS 18 (Related Party Disclosures) and AS 28 (Impairment of Assets) are NOT applicable in their entirety to such smaller MSMEs. AS 22, AS 15, and AS 29 are applicable but with certain relaxations.",
        "type": "Concept",
        "diff": 2
      },
      {
        "id": "AA3.Q2",
        "q": "A company's financial statements do not disclose certain matters as they are not required by the Banking Regulation Act, 1949. As per Companies Act, 2013, such financial statements:",
        "opts": [
          "Cannot be treated as showing true and fair view",
          "Should not be treated as not disclosing true and fair view merely for this reason",
          "Require qualification in auditor's report",
          "Must separately disclose deviation from Accounting Standards"
        ],
        "ans": 1,
        "exp": "As per Section 129 of Companies Act, 2013, financial statements shall not be treated as not disclosing a true and fair view merely by reason of the fact that they do not disclose matters which are not required to be disclosed by the Banking Regulation Act, 1949 (in case of banking company).",
        "type": "Concept",
        "diff": 2
      },
      {
        "id": "AA3.Q3",
        "q": "Ram Trust collects donations from public and distributes them to flood-affected families. It also runs a small canteen generating ₹2 lakh annual revenue. Regarding applicability of Accounting Standards:",
        "opts": [
          "AS not applicable as primary activity is charitable",
          "AS applicable only to canteen operations, not charitable activities",
          "AS applicable to all activities including charitable activities",
          "AS applicable only if canteen revenue exceeds ₹10 lakh"
        ],
        "ans": 2,
        "exp": "Even if a very small proportion of the activities of an enterprise were considered to be commercial, industrial or business in nature, the Accounting Standards would apply to ALL its activities including those which are not commercial, industrial or business in nature. The canteen activity makes AS applicable to the entire Trust.",
        "type": "Trap",
        "diff": 2
      },
      {
        "id": "AA3.Q4",
        "q": "A company paid ₹50,000 penalty for breach of environmental law. Its annual revenue is ₹500 crore. This penalty should be:",
        "opts": [
          "Clubbed with legal charges as it is immaterial in size",
          "Shown separately as materiality is based on information content, not just size",
          "Ignored as it is less than 0.01% of revenue",
          "Disclosed only in notes to accounts"
        ],
        "ans": 1,
        "exp": "Materiality is not necessarily a function of size; it is the information content which is important. A penalty for breach of law is a material item because of the information it conveys, regardless of the amount. It should be shown separately instead of clubbing with other items like legal charges.",
        "type": "Concept",
        "diff": 2
      },
      {
        "id": "AA3.Q5",
        "q": "XYZ Ltd. took machinery on finance lease. As per AS 19, depreciation is charged by XYZ Ltd. (lessee). For income tax purposes, depreciation is allowed to:",
        "opts": [
          "XYZ Ltd. (lessee) as it charges depreciation in books",
          "Lessor, being legal owner of the asset",
          "Both lessee and lessor proportionately",
          "Neither, as it is a leased asset"
        ],
        "ans": 1,
        "exp": "Depreciation on assets taken on finance lease is charged in the books of lessee as per AS 19, but depreciation for tax purposes is allowed to the lessor, being the legal owner of the asset, rather than to the lessee. Accounting Standards and Income Tax Act treatment may differ.",
        "type": "Concept",
        "diff": 2
      },
      {
        "id": "AA3.Q6",
        "q": "Which of the following ICDSs corresponds to AS 7 (Construction Contracts)?",
        "opts": [
          "ICDS I",
          "ICDS II",
          "ICDS III",
          "ICDS IV"
        ],
        "ans": 2,
        "exp": "ICDS III deals with Construction Contracts, corresponding to AS 7. ICDS I deals with Accounting Policies, ICDS II with Valuation of Inventories, and ICDS IV with Revenue Recognition.",
        "type": "Concept",
        "diff": 1
      },
      {
        "id": "AA3.Q7",
        "q": "For SMCs (Small and Medium-sized Companies) as per Companies (Accounting Standards) Rules, 2021, which of the following relaxations is available under AS 20?",
        "opts": [
          "AS 20 is not applicable at all",
          "Only basic EPS disclosure required, diluted EPS exempt",
          "EPS disclosure only for extraordinary items exempt",
          "Disclosure of diluted EPS (both including and excluding extraordinary items) is exempt"
        ],
        "ans": 3,
        "exp": "As per Companies (Accounting Standards) Rules, 2021, SMCs are exempted from disclosure of diluted earnings per share (both including and excluding extraordinary items). However, basic EPS must still be disclosed. This is different from MSMEs where AS 20 is not applicable in entirety.",
        "type": "Concept",
        "diff": 2
      },
      {
        "id": "AA3.Q8",
        "q": "As per the revised scheme effective from April 1, 2024, how many categories are non-company entities classified into for AS applicability?",
        "opts": [
          "Four (Level I, II, III, IV)",
          "Three (Large, Medium, Small)",
          "Two (MSMEs and Large entities)",
          "One (All treated equally)"
        ],
        "ans": 2,
        "exp": "As per the ICAI Council's announcement at its 433rd meeting (August 13-15, 2024), non-company entities are classified into two categories: Micro, Small and Medium Sized Entities (MSMEs) and Large entities. This replaces the earlier four-level classification.",
        "type": "Concept",
        "diff": 1
      },
      {
        "id": "AA3.Q9",
        "q": "Delta Partnership Firm (an MSME) chooses to avail exemption from AS 3 and AS 17 but decides to fully comply with AS 20. What disclosure is required?",
        "opts": [
          "Disclose only that it is an MSME",
          "Disclose that it is an MSME and mention AS 3 and AS 17 as Standards from which exemptions availed",
          "No disclosure required as partial exemption is permissible",
          "Disclose deviation from AS 20 as it is mandatory for all"
        ],
        "ans": 1,
        "exp": "As per ICAI Announcement Additional Requirement (4), if an MSME opts not to avail exemptions in respect of any but not all of the Accounting Standards, it shall disclose the Standard(s) in respect of which it has availed the exemption or relaxation. Here, AS 3 and AS 17 should be specifically mentioned.",
        "type": "Concept",
        "diff": 2
      },
      {
        "id": "AA3.Q10",
        "q": "National Financial Reporting Authority (NFRA) is mentioned in context of Accounting Standards for:",
        "opts": [
          "Issuing Accounting Standards for non-company entities",
          "Consultation by Central Government before prescribing accounting standards",
          "Classification of enterprises into SMC and non-SMC",
          "Notification of ICDS under Income Tax Act"
        ],
        "ans": 1,
        "exp": "As per Companies Act, 2013, the Central Government may prescribe standards of accounting or addendum thereto, as recommended by the Institute of Chartered Accountants of India, in consultation with the National Financial Reporting Authority (NFRA).",
        "type": "Concept",
        "diff": 2
      }
    ],
    "tricky": [
      {
        "id": "AA3.1",
        "point": "Borrowings threshold uses 'at any time during the year' not 'at year-end'",
        "mistake": "Students check only balance sheet date borrowings of ₹40 crore and classify as MSME, ignoring that borrowings peaked at ₹55 crore during the year",
        "why": "ICAI tests precise reading of definitions — the phrase 'at any time during the immediately preceding accounting year' is fundamentally different from year-end measurement",
        "priority": "Very High"
      },
      {
        "id": "AA3.2",
        "point": "Turnover threshold excludes 'other income' for MSME classification",
        "mistake": "Students add turnover (₹240 crore) and other income (₹15 crore) to get ₹255 crore and wrongly classify entity as Large",
        "why": "ICAI specifically states 'turnover (excluding other income)' — this tests whether students read the definition carefully",
        "priority": "High"
      },
      {
        "id": "AA3.3",
        "point": "SMC definition for companies differs from MSME definition for non-company entities",
        "mistake": "Students apply ICAI's MSME thresholds (₹250 crore turnover, ₹50 crore borrowings) to companies governed by MCA rules",
        "why": "Companies follow Companies (Accounting Standards) Rules, 2021 for SMC classification, while non-company entities follow ICAI's August 2024 announcement for MSME classification",
        "priority": "High"
      },
      {
        "id": "AA3.4",
        "point": "Two-tiered MSME exemption structure — AS 18/AS 28 have stricter thresholds",
        "mistake": "Students assume all MSMEs are exempt from AS 18 and AS 28, when only MSMEs with turnover ≤ ₹50 crore AND borrowings ≤ ₹10 crore qualify",
        "why": "ICAI tests whether students understand the layered exemption structure within the MSME category itself",
        "priority": "Very High"
      },
      {
        "id": "AA3.5",
        "point": "AS compliance and Income Tax treatment can differ — depreciation on finance lease assets",
        "mistake": "Students assume that charging depreciation as per AS 19 (in lessee's books) automatically allows tax deduction for lessee",
        "why": "ICAI emphasizes that AS compliance does not override tax law — fiscal policy differs from accounting policy",
        "priority": "High"
      },
      {
        "id": "AA3.6",
        "point": "Subsidiary of a Large entity cannot be MSME regardless of own size",
        "mistake": "Students classify a small subsidiary (turnover ₹50 crore, borrowings ₹5 crore) as MSME, ignoring that its parent is a Large entity",
        "why": "The anti-avoidance provision prevents gaming through group structures — tests understanding of 'holding or subsidiary of a non-MSME' condition",
        "priority": "High"
      }
    ],
    "amendments": [
      {
        "id": "AA3.A1",
        "topic": "Revised Classification Criteria for Non-Company Entities",
        "what": "ICAI Council's 433rd meeting (August 13-15, 2024) revised the criteria for classification of non-company entities and applicability of Accounting Standards",
        "oldPosition": "Four-level classification (Level I, II, III, IV) with different AS applicability for each level as per March 2021 announcement",
        "newPosition": "Two-level classification: (1) MSMEs — turnover ≤ ₹250 crore, borrowings ≤ ₹50 crore, not listed, not bank/FI/insurance, not holding/subsidiary of non-MSME; (2) Large entities — all others. Effective from accounting periods commencing on or after April 1, 2024",
        "effectiveFrom": "Accounting periods commencing on or after April 1, 2024 (i.e., FY 2024-25 onwards)",
        "pdfStatus": "mentioned",
        "priority": "Very High"
      },
      {
        "id": "AA3.A2",
        "topic": "Two-Consecutive-Year Rule for Newly Qualifying MSMEs",
        "what": "New transitional provision introduced requiring entities to remain MSME for two consecutive years before availing exemptions",
        "oldPosition": "No specific waiting period mentioned for newly qualifying MSMEs under earlier four-level classification",
        "newPosition": "An entity which was previously not an MSME and subsequently becomes an MSME shall not be qualified for exemption/relaxation in respect of Accounting Standards available to an MSME until the entity remains an MSME for two consecutive years",
        "effectiveFrom": "Accounting periods commencing on or after April 1, 2024",
        "pdfStatus": "mentioned",
        "priority": "Very High"
      },
      {
        "id": "AA3.A3",
        "topic": "Additional MSME Tier for AS 18 and AS 28 Exemption",
        "what": "Introduction of stricter thresholds within MSME category for exemption from AS 18 and AS 28",
        "oldPosition": "Earlier scheme had multiple levels with different AS applicability",
        "newPosition": "Within MSMEs, AS 18 and AS 28 are NOT applicable in entirety only to those with: (a) turnover ≤ ₹50 crore; (b) borrowings ≤ ₹10 crore; (c) not holding/subsidiary of MSME not meeting above criteria",
        "effectiveFrom": "Accounting periods commencing on or after April 1, 2024",
        "pdfStatus": "mentioned",
        "priority": "High"
      },
      {
        "id": "AA3.A4",
        "topic": "Companies (Accounting Standards) Rules, 2021",
        "what": "MCA notification dated June 23, 2021 prescribing SMC definition and AS applicability for companies",
        "oldPosition": "Earlier Companies (Accounting Standards) Rules, 2006",
        "newPosition": "Two-level classification for companies: SMCs and Non-SMCs. SMCs get exemption from AS 17 in entirety and relaxations in AS 15, AS 19, AS 20, AS 28, AS 29",
        "effectiveFrom": "Financial years commencing on or after April 1, 2021",
        "pdfStatus": "mentioned",
        "priority": "High"
      }
    ],
    "cases": [],
    "trees": []
  },
  {
    "id": "AA4",
    "name": "Presentation & Disclosures Based Accounting Standards (AS 1, AS 3, AS 17, AS 18, AS 20)",
    "dangerZones": [
      {
        "id": "AA4.DZ1",
        "point": "Fundamental Accounting Assumptions disclosure requirement - disclosure only when NOT followed",
        "mistake": "Students assume all three fundamental accounting assumptions (Going Concern, Consistency, Accrual) must always be disclosed in financial statements",
        "why": "ICAI tests whether students understand that disclosure is required ONLY when assumptions are NOT followed - if followed, no specific disclosure is needed (AS 1 Para 17)",
        "priority": "Very High"
      },
      {
        "id": "AA4.DZ2",
        "point": "AS 17 Segment Reporting - 10% test uses TOTAL revenue (internal + external) but 75% test uses only EXTERNAL revenue",
        "mistake": "Students apply the same revenue base for both tests - either using total revenue for both or external revenue for both",
        "why": "ICAI specifically tests the distinction: 10% materiality test = Internal + External revenue; 75% overall test = External revenue only (AS 17 Para 27-28)",
        "priority": "Very High"
      },
      {
        "id": "AA4.DZ3",
        "point": "AS 18 Related Party - Two companies with common director are NOT automatically related parties",
        "mistake": "Students assume any common director creates related party relationship between two companies",
        "why": "ICAI tests the condition that common director must be able to AFFECT POLICIES OF BOTH COMPANIES in their mutual dealings to create related party relationship (AS 18 Para 9)",
        "priority": "High"
      },
      {
        "id": "AA4.DZ4",
        "point": "AS 3 Cash Flow - Interest paid classification differs for financial vs non-financial enterprises",
        "mistake": "Students classify interest paid uniformly as financing activity for all enterprises",
        "why": "For financial enterprises: Interest paid = Operating activity; For non-financial enterprises: Interest paid = Financing activity (AS 3 Para 32-33)",
        "priority": "High"
      },
      {
        "id": "AA4.DZ5",
        "point": "AS 17 Profit/Loss test - Compare with HIGHER of absolute profit or absolute loss, not net profit/loss",
        "mistake": "Students compare segment result with net profit/loss of all segments combined",
        "why": "When some segments have profit and others have loss, compare segment result with the GREATER in absolute amount of (i) combined profits or (ii) combined losses (AS 17 Para 27)",
        "priority": "High"
      },
      {
        "id": "AA4-DZ6",
        "title": "AS 20 - Amalgamation Purchase vs Merger Treatment for EPS",
        "description": "In amalgamation in the nature of PURCHASE, shares issued are weighted from DATE OF ACQUISITION. In amalgamation in the nature of MERGER, shares are included from BEGINNING of reporting period as if combined entity existed from start.",
        "commonMistake": "Treating both types of amalgamation identically - weighting shares from acquisition date for merger type",
        "correctApproach": "Purchase = Date of acquisition weighting; Merger = Full year weighting from beginning of earliest period reported",
        "examTip": "The nature of amalgamation (purchase vs merger) determines whether retrospective treatment applies to share count"
      },
      {
        "id": "AA4-DZ7",
        "title": "AS 20 - Rights Issue Adjustment Factor Application",
        "description": "Rights issue adjustment factor applies RETROSPECTIVELY to all periods PRIOR to the rights issue, multiplying pre-issue shares by the factor. Post-issue shares are NOT multiplied.",
        "commonMistake": "Applying adjustment factor to post-rights issue shares or ignoring retrospective application to prior year EPS",
        "correctApproach": "Adjustment Factor = Fair value prior to exercise ÷ Theoretical ex-rights value. Apply ONLY to shares outstanding BEFORE the rights issue",
        "examTip": "Rights issue at fair value has NO bonus element - adjustment factor equals 1.00 in such cases"
      },
      {
        "id": "AA4-DZ8",
        "title": "AS 20 - Anti-dilutive Potential Equity Shares - Control Factor",
        "description": "The control factor for determining dilutive vs anti-dilutive is CONTINUING ORDINARY ACTIVITIES profit/loss, NOT total profit/loss including discontinued operations.",
        "commonMistake": "Using total net profit/loss to determine if potential equity shares are dilutive",
        "correctApproach": "If conversion INCREASES EPS from continuing ordinary activities or DECREASES loss per share from continuing ordinary activities, it is anti-dilutive and IGNORED",
        "examTip": "Continuing ordinary activities is the benchmark - discontinuing operations do not affect dilution classification"
      },
      {
        "id": "AA4-DZ9",
        "title": "AS 24 - Initial Disclosure Event Timing",
        "description": "Initial disclosure event is the EARLIER of: (a) binding sale agreement, OR (b) Board approval AND announcement of detailed formal plan. Both conditions in (b) must be met.",
        "commonMistake": "Treating board approval alone as initial disclosure event without announcement",
        "correctApproach": "For (b) to trigger disclosure: Board must BOTH approve AND announce. A binding sale agreement alone triggers disclosure immediately.",
        "examTip": "Announcement must be to affected parties in sufficiently specific manner to create demonstrable commitment"
      },
      {
        "id": "AA4-DZ10",
        "title": "AS 25 - Seasonal Revenue and Cost Treatment",
        "description": "Seasonal revenues should NOT be anticipated or deferred at interim date if such treatment would not be appropriate at year-end. Same accounting policies as annual statements apply.",
        "commonMistake": "Deferring expenses to high-revenue quarters to match costs with revenue in seasonal businesses",
        "correctApproach": "Revenue recognized when earned; expenses recognized when incurred. No smoothing across interim periods.",
        "examTip": "Cost deferral only appropriate at interim if it would also be appropriate to defer at financial year-end"
      }
    ],
    "formulaGuide": [
      {
        "id": "AA4.FG1",
        "topic": "AS 1 - Disclosure of Fundamental Accounting Assumptions",
        "nodes": [
          {
            "id": "n1",
            "label": "Are Going Concern, Consistency, and Accrual assumptions followed?",
            "branches": [
              {
                "label": "All three assumptions followed",
                "target": "outcomeA"
              },
              {
                "label": "Any assumption NOT followed",
                "target": "outcomeB"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "No specific disclosure required - assumptions are presumed unless stated otherwise",
            "reference": "AS 1 Para 17"
          },
          {
            "id": "outcomeB",
            "label": "Mandatory disclosure required stating which assumption is not followed and the fact thereof",
            "reference": "AS 1 Para 17"
          }
        ]
      },
      {
        "id": "AA4.FG2",
        "topic": "AS 1 - Change in Accounting Policy Disclosure",
        "nodes": [
          {
            "id": "n1",
            "label": "Does the change in accounting policy have material effect?",
            "branches": [
              {
                "label": "Material effect in CURRENT period",
                "target": "n2"
              },
              {
                "label": "No material effect in current period but expected in LATER periods",
                "target": "outcomeC"
              },
              {
                "label": "No material effect at all",
                "target": "outcomeD"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Is the amount of effect ascertainable?",
            "branches": [
              {
                "label": "Amount ascertainable",
                "target": "outcomeA"
              },
              {
                "label": "Amount NOT ascertainable (wholly or in part)",
                "target": "outcomeB"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "Disclose the change AND the amount by which financial statement items are affected",
            "reference": "AS 1 Para 28"
          },
          {
            "id": "outcomeB",
            "label": "Disclose the change AND indicate the fact that amount is not ascertainable",
            "reference": "AS 1 Para 28"
          },
          {
            "id": "outcomeC",
            "label": "Disclose the fact of such change in the period in which the change is adopted",
            "reference": "AS 1 Para 29"
          },
          {
            "id": "outcomeD",
            "label": "No disclosure required",
            "reference": "AS 1 Para 28"
          }
        ]
      },
      {
        "id": "AA4.FG3",
        "topic": "AS 3 - Classification of Interest and Dividends",
        "nodes": [
          {
            "id": "n1",
            "label": "What type of enterprise is the reporting entity?",
            "branches": [
              {
                "label": "Financial Enterprise (Bank, NBFC)",
                "target": "n2"
              },
              {
                "label": "Non-Financial Enterprise",
                "target": "n3"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Type of cash flow for financial enterprise?",
            "branches": [
              {
                "label": "Interest paid, Interest received, Dividends received",
                "target": "outcomeA"
              },
              {
                "label": "Dividends paid",
                "target": "outcomeB"
              }
            ]
          },
          {
            "id": "n3",
            "label": "Type of cash flow for non-financial enterprise?",
            "branches": [
              {
                "label": "Interest received, Dividends received",
                "target": "outcomeC"
              },
              {
                "label": "Interest paid",
                "target": "outcomeD"
              },
              {
                "label": "Dividends paid",
                "target": "outcomeB"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "Operating Activity",
            "reference": "AS 3 Para 32-33"
          },
          {
            "id": "outcomeB",
            "label": "Financing Activity",
            "reference": "AS 3 Para 34"
          },
          {
            "id": "outcomeC",
            "label": "Investing Activity",
            "reference": "AS 3 Para 33"
          },
          {
            "id": "outcomeD",
            "label": "Financing Activity",
            "reference": "AS 3 Para 32"
          }
        ]
      },
      {
        "id": "AA4.FG4",
        "topic": "AS 17 - Identifying Reportable Segments (10% Tests)",
        "nodes": [
          {
            "id": "n1",
            "label": "Apply Revenue Test: Is segment revenue (internal + external) ≥ 10% of total revenue of all segments?",
            "branches": [
              {
                "label": "Yes",
                "target": "outcomeA"
              },
              {
                "label": "No",
                "target": "n2"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Apply Profit/Loss Test: Is segment result ≥ 10% of GREATER of (combined profits OR combined losses in absolute terms)?",
            "branches": [
              {
                "label": "Yes",
                "target": "outcomeA"
              },
              {
                "label": "No",
                "target": "n3"
              }
            ]
          },
          {
            "id": "n3",
            "label": "Apply Asset Test: Are segment assets ≥ 10% of total assets of all segments?",
            "branches": [
              {
                "label": "Yes",
                "target": "outcomeA"
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
            "label": "REPORTABLE SEGMENT - Must be reported separately",
            "reference": "AS 17 Para 27"
          },
          {
            "id": "outcomeB",
            "label": "NOT a reportable segment under 10% test - May be designated by management or included as unallocated reconciling item",
            "reference": "AS 17 Para 28"
          }
        ]
      },
      {
        "id": "AA4.FG5",
        "topic": "AS 17 - 75% Overall Test for Reportable Segments",
        "nodes": [
          {
            "id": "n1",
            "label": "After applying 10% tests, is total EXTERNAL revenue of reportable segments ≥ 75% of total ENTERPRISE revenue?",
            "branches": [
              {
                "label": "Yes (≥ 75%)",
                "target": "outcomeA"
              },
              {
                "label": "No (< 75%)",
                "target": "outcomeB"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "Sufficient reportable segments identified - No additional segments required",
            "reference": "AS 17 Para 29"
          },
          {
            "id": "outcomeB",
            "label": "Identify additional segments as reportable (even if they fail 10% tests) until ≥ 75% of total enterprise revenue is covered",
            "reference": "AS 17 Para 29"
          }
        ]
      },
      {
        "id": "AA4.FG6",
        "topic": "AS 18 - Related Party Identification Decision Tree",
        "nodes": [
          {
            "id": "n1",
            "label": "What is the nature of the party?",
            "branches": [
              {
                "label": "Holding/Subsidiary/Fellow Subsidiary",
                "target": "outcomeA"
              },
              {
                "label": "Associate or Joint Venture",
                "target": "outcomeA"
              },
              {
                "label": "Individual with significant shareholding (control/significant influence)",
                "target": "n2"
              },
              {
                "label": "Key Management Personnel (KMP)",
                "target": "n3"
              },
              {
                "label": "Provider of finance/Trade union/Public utility/Government",
                "target": "n4"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Are relatives of such individual involved?",
            "branches": [
              {
                "label": "Yes - Spouse, son, daughter, brother, sister, father, mother who may influence dealings",
                "target": "outcomeA"
              },
              {
                "label": "No relatives involved",
                "target": "outcomeA"
              }
            ]
          },
          {
            "id": "n3",
            "label": "Are relatives of KMP involved?",
            "branches": [
              {
                "label": "Yes - Specified relatives",
                "target": "outcomeA"
              },
              {
                "label": "No relatives involved",
                "target": "outcomeA"
              }
            ]
          },
          {
            "id": "n4",
            "label": "Are they acting in normal course of dealings by virtue ONLY of those dealings?",
            "branches": [
              {
                "label": "Yes - Only normal dealings",
                "target": "outcomeB"
              },
              {
                "label": "No - Have additional control/influence",
                "target": "outcomeA"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "RELATED PARTY - Disclosure required under AS 18",
            "reference": "AS 18 Para 3"
          },
          {
            "id": "outcomeB",
            "label": "NOT a Related Party - No AS 18 disclosure required",
            "reference": "AS 18 Para 9"
          }
        ]
      },
      {
        "id": "AA4.FG7",
        "topic": "AS 20 - Basic EPS Computation",
        "nodes": [
          {
            "id": "n1",
            "label": "Calculate Numerator: Net Profit/Loss attributable to equity shareholders",
            "branches": [
              {
                "label": "Proceed to adjustments",
                "target": "n2"
              }
            ]
          },
          {
            "id": "n2",
            "label": "What type of preference shares exist?",
            "branches": [
              {
                "label": "Non-cumulative preference shares",
                "target": "outcomeA"
              },
              {
                "label": "Cumulative preference shares",
                "target": "outcomeB"
              },
              {
                "label": "No preference shares",
                "target": "outcomeC"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "Deduct preference dividend ONLY IF PROVIDED for in respect of the period",
            "reference": "AS 20 Para 13"
          },
          {
            "id": "outcomeB",
            "label": "Deduct FULL preference dividend for the period WHETHER OR NOT provided/declared",
            "reference": "AS 20 Para 14"
          },
          {
            "id": "outcomeC",
            "label": "No adjustment for preference dividend - Use full net profit",
            "reference": "AS 20 Para 10"
          }
        ]
      },
      {
        "id": "AA4-FG8",
        "title": "AS 20 - Partly Paid Shares Treatment for EPS",
        "condition": "Shares are partly paid with entitlement to dividend",
        "steps": [
          "Determine paid-up proportion: Paid amount ÷ Face value",
          "Convert to equivalent fully paid: Number of partly paid shares × (Paid amount ÷ Face value)",
          "Apply time-weighting based on when partly paid shares were outstanding",
          "Include in Basic EPS if entitled to dividends proportionally"
        ],
        "formula": "Equivalent shares = Partly paid shares × (Amount paid ÷ Face value)",
        "example": "600 shares of ₹10 FV, ₹5 paid = 600 × (5/10) = 300 equivalent shares"
      },
      {
        "id": "AA4-FG9",
        "title": "AS 20 - Rights Issue Theoretical Ex-Rights Value",
        "condition": "Computing EPS adjustment for rights issue with bonus element",
        "steps": [
          "Calculate aggregate fair value of shares before exercise: (Fair value × Old shares)",
          "Add proceeds from rights exercise: (Rights price × New shares)",
          "Divide total by shares after exercise: (Old shares + New shares)",
          "Compute adjustment factor: Fair value before ÷ Theoretical ex-rights value"
        ],
        "formula": "TERP = [(FV × Old) + (Rights Price × New)] ÷ (Old + New); Adjustment Factor = FV ÷ TERP",
        "example": "5,00,000 shares at ₹21 FV, rights 1:5 at ₹15: TERP = [(21×5,00,000)+(15×1,00,000)]÷6,00,000 = ₹20; Factor = 21÷20 = 1.05"
      },
      {
        "id": "AA4-FG10",
        "title": "AS 20 - Diluted EPS with Convertible Debentures",
        "condition": "Computing Diluted EPS with convertible debt instruments",
        "steps": [
          "Start with net profit attributable to equity shareholders",
          "Add back interest expense on convertible debentures",
          "Deduct tax saving on that interest (Interest × Tax rate)",
          "Divide adjusted profit by (Existing shares + Potential shares from conversion)"
        ],
        "formula": "Diluted EPS = [Net Profit + Interest(1-t)] ÷ [Existing shares + Conversion shares]",
        "example": "Profit ₹1Cr, 50L shares, 1L debentures converting to 10L shares, 12% interest, 30% tax: Adjusted = 1Cr + 12L(1-0.3) = ₹1.084Cr; Diluted EPS = 1.084Cr ÷ 60L = ₹1.81"
      },
      {
        "id": "AA4-FG11",
        "title": "AS 20 - Options/Warrants Dilution (Treasury Stock Method)",
        "condition": "Computing incremental shares for diluted EPS from share options",
        "steps": [
          "Calculate proceeds from exercise: Options × Exercise price",
          "Determine shares that would be issued at fair value: Proceeds ÷ Average fair value",
          "Incremental shares = Options outstanding - Shares at fair value",
          "Only include if exercise price < average fair value (dilutive)"
        ],
        "formula": "Incremental shares = Options × [1 - (Exercise price ÷ Fair value)]",
        "example": "1,00,000 options at ₹15, fair value ₹20: Proceeds = ₹15L; Shares at FV = 75,000; Incremental = 25,000"
      },
      {
        "id": "AA4-FG12",
        "title": "AS 25 - Interim Tax Expense using Weighted Average Rate",
        "condition": "Computing tax expense for interim period with graduated tax rates",
        "steps": [
          "Estimate annual taxable income",
          "Calculate full year tax using applicable slab rates",
          "Compute weighted average annual tax rate: Total tax ÷ Total estimated income",
          "Apply weighted average rate to interim period income"
        ],
        "formula": "Weighted Avg Rate = Total estimated tax ÷ Total estimated income; Interim tax = Interim income × Weighted Avg Rate",
        "example": "Annual income ₹10L, tax 20% on first ₹5L + 40% on rest = ₹3.5L; Rate = 35%; Q1 income ₹75,000 → Tax = ₹26,250"
      }
    ],
    "flashcards": [
      {
        "id": "AA4.FC1",
        "front": "Fundamental Accounting Assumptions (AS 1)",
        "back": "Going Concern, Consistency, Accrual - These are usually not specifically stated because their acceptance and use are assumed. Disclosure is necessary only if they are not followed.",
        "section": "AS 1 Para 17"
      },
      {
        "id": "AA4.FC2",
        "front": "Prudence (AS 1)",
        "back": "In view of uncertainty associated with future events, profits are not anticipated, but losses are provided for as a matter of conservatism. Provision should be created for all known liabilities and losses even though the amount cannot be determined with certainty.",
        "section": "AS 1 Para 17"
      },
      {
        "id": "AA4.FC3",
        "front": "Cash Equivalents (AS 3)",
        "back": "Short term, highly liquid investments that are readily convertible into known amounts of cash and are subject to insignificant risk of change in value. A short-term investment is one which is due for maturity within three months from the date of acquisition.",
        "section": "AS 3 Para 6"
      },
      {
        "id": "AA4.FC4",
        "front": "Business Segment (AS 17)",
        "back": "A distinguishable component of an enterprise that is engaged in providing an individual product or service or a group of related products or services and that is subject to risks and returns that are different from those of other business segments.",
        "section": "AS 17 Para 9"
      },
      {
        "id": "AA4.FC5",
        "front": "Geographical Segment (AS 17)",
        "back": "A distinguishable component of an enterprise that is engaged in providing products or services within a particular economic environment and that is subject to risks and returns that are different from those of components operating in other economic environments.",
        "section": "AS 17 Para 10"
      },
      {
        "id": "AA4.FC6",
        "front": "Segment Revenue (AS 17)",
        "back": "The aggregate of (i) portion of enterprise revenue directly attributable to a segment, (ii) relevant portion allocable on reasonable basis, and (iii) revenue from transactions with other segments. EXCLUDES: Extraordinary items, interest/dividend income, gains on investments (unless segment is primarily financial).",
        "section": "AS 17 Para 15-16"
      },
      {
        "id": "AA4.FC7",
        "front": "Related Party (AS 18)",
        "back": "Parties are considered to be related if at any time during the reporting period one party has the ability to control the other party or exercise significant influence over the other party in making financial and/or operating decisions.",
        "section": "AS 18 Para 3"
      },
      {
        "id": "AA4.FC8",
        "front": "Control (AS 18)",
        "back": "(a) ownership, directly or indirectly, of more than one half of the voting power of an enterprise, or (b) control of the composition of the board of directors, or (c) a substantial interest in voting power AND the power to direct financial and/or operating policies.",
        "section": "AS 18 Para 4"
      },
      {
        "id": "AA4.FC9",
        "front": "Key Management Personnel (AS 18)",
        "back": "Those persons who have the authority and responsibility for planning, directing and controlling the activities of the reporting enterprise. In case of a company: managing director(s), whole time director(s), manager, and any person in accordance with whose directions the board is accustomed to act.",
        "section": "AS 18 Para 7"
      },
      {
        "id": "AA4.FC10",
        "front": "Potential Equity Share (AS 20)",
        "back": "A financial instrument or other contract that entitles, or may entitle, its holder to equity shares. Examples: Convertible debentures/preference shares, share warrants, employee stock options, contingently issuable shares.",
        "section": "AS 20 Para 5"
      },
      {
        "id": "AA4.FC11",
        "front": "Substantial Interest (AS 18)",
        "back": "An enterprise is considered to have a substantial interest in another enterprise if that enterprise owns, directly or indirectly, 20% or more interest in the voting power of the other enterprise.",
        "section": "AS 18 Para 5"
      },
      {
        "id": "AA4.FC12",
        "front": "Materiality (AS 1)",
        "back": "Financial statements should disclose all material items, i.e. items the knowledge of which might influence the decisions of the user of the financial statement. Materiality is not always a matter of relative size.",
        "section": "AS 1 Para 21"
      },
      {
        "id": "AA4-FC13",
        "term": "Contingently Issuable Shares (AS 20)",
        "definition": "Equity shares issuable upon satisfaction of certain conditions from contractual arrangements. Included in basic EPS from date conditions are satisfied; in diluted EPS from beginning of period if conditions not yet met.",
        "reference": "AS 20 Paragraph on Contingently Issuable Shares"
      },
      {
        "id": "AA4-FC14",
        "term": "Theoretical Ex-Rights Fair Value (AS 20)",
        "definition": "Calculated by adding aggregate fair value of shares immediately prior to rights exercise to proceeds from exercise, divided by total shares outstanding after exercise.",
        "reference": "AS 20 Rights Issue Calculation"
      },
      {
        "id": "AA4-FC15",
        "term": "Discontinuing Operation (AS 24)",
        "definition": "A component of an enterprise that is being disposed of pursuant to a single plan, represents a separate major line of business or geographical area, and can be distinguished operationally and for financial reporting purposes.",
        "reference": "AS 24 Paragraph 3"
      },
      {
        "id": "AA4-FC16",
        "term": "Initial Disclosure Event (AS 24)",
        "definition": "The earlier of: (a) enterprise entering binding sale agreement for substantially all assets of discontinuing operation, or (b) board approving AND announcing detailed formal plan for discontinuance.",
        "reference": "AS 24 Paragraph 15"
      },
      {
        "id": "AA4-FC17",
        "term": "Interim Period (AS 25)",
        "definition": "A financial reporting period shorter than a full financial year. During first year of operations, a shorter annual period is NOT considered an interim period.",
        "reference": "AS 25 Definitions"
      },
      {
        "id": "AA4-FC18",
        "term": "Interim Financial Report (AS 25)",
        "definition": "A financial report containing either a complete set of financial statements or a set of condensed financial statements for an interim period.",
        "reference": "AS 25 Definitions"
      },
      {
        "id": "AA4-FC19",
        "term": "Anti-Dilutive Potential Equity Shares (AS 20)",
        "definition": "Potential equity shares whose conversion would increase EPS or decrease loss per share from continuing ordinary activities. Such shares are IGNORED in calculating diluted EPS.",
        "reference": "AS 20 Section 5.9"
      },
      {
        "id": "AA4-FC20",
        "term": "Share Application Money Pending Allotment - EPS Treatment (AS 20)",
        "definition": "Treated as dilutive potential equity shares for diluted EPS calculation when not statutorily required to be kept separately and is being utilized in business of the enterprise.",
        "reference": "AS 20 Section 5.6"
      }
    ],
    "practiceProblems": [
      {
        "id": "AA4.PP1",
        "title": "AS 17 - Identification of Reportable Segments",
        "difficulty": 4,
        "problem": "XYZ Ltd. has 5 business segments with the following data for FY 2024-25:\n\nSegment | Revenue (₹ lakhs) | Result (₹ lakhs) | Assets (₹ lakhs)\nA | 450 (including ₹50 inter-segment) | 80 | 200\nB | 320 (including ₹70 inter-segment) | (45) | 180\nC | 180 (all external) | 25 | 120\nD | 150 (including ₹30 inter-segment) | (15) | 80\nE | 100 (all external) | 5 | 70\nTotal | 1,200 | 50 | 650\n\nExternal Revenue: A-₹400 lakhs, B-₹250 lakhs, C-₹180 lakhs, D-₹120 lakhs, E-₹100 lakhs = ₹1,050 lakhs\n\nIdentify reportable segments applying AS 17 criteria.",
        "steps": [
          "Step 1 - Revenue Test (10% of ₹1,200 lakhs = ₹120 lakhs): Segments A (₹450), B (₹320), C (₹180), D (₹150) qualify. E (₹100) fails.",
          "Step 2 - Profit/Loss Test: Combined profits = ₹80 + ₹25 + ₹5 = ₹110 lakhs; Combined losses = ₹45 + ₹15 = ₹60 lakhs. Higher = ₹110 lakhs. 10% = ₹11 lakhs. Segments A (₹80), B (₹45), C (₹25), D (₹15) qualify. E (₹5) fails.",
          "Step 3 - Asset Test (10% of ₹650 lakhs = ₹65 lakhs): Segments A (₹200), B (₹180), C (₹120), D (₹80), E (₹70) - ALL qualify.",
          "Step 4 - Apply 75% Test: External revenue of reportable segments (A, B, C, D, E) = ₹1,050 lakhs. Total enterprise revenue = ₹1,050 lakhs (external). 100% covered, exceeds 75%."
        ],
        "answer": "ALL 5 segments (A, B, C, D, E) are reportable segments. Though Segment E fails the Revenue Test and Profit/Loss Test, it qualifies under the Asset Test (₹70 lakhs > ₹65 lakhs threshold). The 75% overall test is satisfied with 100% coverage.",
        "topic": "AS 17 Segment Reporting"
      },
      {
        "id": "AA4.PP2",
        "title": "AS 3 - Cash Flow Classification",
        "difficulty": 3,
        "problem": "Classify the following items for ABC Ltd. (a manufacturing company) as per AS 3 for FY 2024-25:\n(a) Interest paid on term loan ₹5,00,000\n(b) Dividend received on investment in shares ₹2,00,000\n(c) Insurance claim received for loss of machinery by fire ₹8,00,000\n(d) TDS deducted on interest received from subsidiary company ₹50,000\n(e) Loans given to employees ₹3,00,000\n(f) Interest received from employees on above loan ₹30,000",
        "steps": [
          "Step 1 - Interest paid on term loan: For non-financial enterprise, interest paid = Financing Activity (AS 3 Para 32)",
          "Step 2 - Dividend received on investment: For non-financial enterprise = Investing Activity (AS 3 Para 33)",
          "Step 3 - Insurance claim for loss of machinery: Extraordinary item under Investing Activity as it relates to fixed assets (AS 3 Para 29)",
          "Step 4 - TDS on interest from subsidiary: Interest from subsidiary = Investing activity, hence TDS = Investing Activity (outflow already reduced)",
          "Step 5 - Loans to employees and interest thereon: Loans to employees and interest earned = Operating Activity for all enterprises (AS 3 Para 14)"
        ],
        "answer": "(a) Financing Activity - ₹5,00,000 outflow; (b) Investing Activity - ₹2,00,000 inflow; (c) Investing Activity (Extraordinary) - ₹8,00,000 inflow; (d) Investing Activity - ₹50,000 outflow; (e) Operating Activity - ₹3,00,000 outflow; (f) Operating Activity - ₹30,000 inflow",
        "topic": "AS 3 Cash Flow Statement"
      },
      {
        "id": "AA4.PP3",
        "title": "AS 1 - Change in Accounting Policy Disclosure",
        "difficulty": 3,
        "problem": "Prashant Ltd. had closing inventory of ₹1,63,000 as at 31.03.2025 using FIFO method. The company decided to change to weighted average method from FY 2024-25. Using weighted average, closing inventory = ₹1,47,000. Net Realisable Value = ₹1,95,000. What disclosure is required as per AS 1?",
        "steps": [
          "Step 1 - Identify the change: Change from FIFO to Weighted Average method for inventory valuation - this is a change in accounting policy.",
          "Step 2 - Determine inventory value: Since NRV (₹1,95,000) > Cost under both methods, inventory to be valued at cost. Under new policy = ₹1,47,000.",
          "Step 3 - Calculate impact: Reduction in inventory value = ₹1,63,000 - ₹1,47,000 = ₹16,000. This reduces current year profit by ₹16,000.",
          "Step 4 - Draft disclosure as per AS 1 Para 28"
        ],
        "answer": "Disclosure required: 'The company values its inventory at lower of cost and net realizable value. Since net realizable value of all items of inventory in the current year was greater than respective costs, the company valued its inventory at cost. In the present year i.e. 2024-25, the company has changed to weighted average method, which better reflects the consumption pattern of inventory, for ascertaining inventory costs from the earlier practice of using FIFO for the purpose. The change in policy has reduced current profit and value of inventory by ₹16,000.'",
        "topic": "AS 1 Disclosure of Accounting Policies"
      },
      {
        "id": "AA4.PP4",
        "title": "AS 20 - Basic EPS with Weighted Average Shares",
        "difficulty": 4,
        "problem": "Delta Ltd. has the following share capital movements during FY 2024-25:\n- 1st April 2024: 10,00,000 equity shares of ₹10 each\n- 1st July 2024: Issue of 2,00,000 shares for cash at ₹15\n- 1st October 2024: Bonus issue 1:5 (on shares outstanding on that date)\n- 1st January 2025: Buyback of 50,000 shares at ₹20\nNet Profit after tax for FY 2024-25: ₹48,00,000\n10% Cumulative Preference Shares: ₹20,00,000 (dividend not provided)\nCalculate Basic EPS.",
        "steps": [
          "Step 1 - Adjust for bonus issue retrospectively: Opening shares = 10,00,000 × 6/5 = 12,00,000; Issue on 1.7.24 = 2,00,000 × 6/5 = 2,40,000",
          "Step 2 - Calculate weighted average: (12,00,000 × 12/12) + (2,40,000 × 9/12) - (50,000 × 3/12) = 12,00,000 + 1,80,000 - 12,500 = 13,67,500 shares",
          "Step 3 - Calculate earnings: Net Profit = ₹48,00,000; Less: Cumulative preference dividend (must deduct whether provided or not) = ₹20,00,000 × 10% = ₹2,00,000; Earnings for equity = ₹46,00,000",
          "Step 4 - Calculate Basic EPS = ₹46,00,000 ÷ 13,67,500 = ₹3.36 per share"
        ],
        "answer": "Basic EPS = ₹3.36 per share. Key points: (1) Bonus shares adjusted retrospectively for all periods, (2) Cumulative preference dividend deducted irrespective of provision, (3) Buyback reduces weighted average only from date of buyback.",
        "topic": "AS 20 Earnings Per Share"
      },
      {
        "id": "AA4-PP5",
        "type": "Computational",
        "difficulty": "Medium",
        "topic": "AS 20 - Basic EPS with Bonus Issue and Retrospective Adjustment",
        "problem": "ABC Ltd. had 20,00,000 equity shares outstanding until 30th September 20X2. On 1st October 20X2, it made a bonus issue of 2 shares for each share outstanding. Net profit for 20X2 was ₹60,00,000 and for 20X1 was ₹18,00,000. Compute Basic EPS for both years as required to be reported in 20X2 financial statements.",
        "solution": {
          "approach": [
            "Bonus shares = 20,00,000 × 2 = 40,00,000",
            "Total shares after bonus = 60,00,000",
            "For bonus issue, treat as if occurred at beginning of earliest period",
            "EPS 20X2 = ₹60,00,000 ÷ 60,00,000 = ₹1.00",
            "EPS 20X1 (restated) = ₹18,00,000 ÷ 60,00,000 = ₹0.30"
          ],
          "answer": "Basic EPS 20X2: ₹1.00; Restated Basic EPS 20X1: ₹0.30"
        }
      },
      {
        "id": "AA4-PP6",
        "type": "Computational",
        "difficulty": "Hard",
        "topic": "AS 20 - Rights Issue with Bonus Element",
        "problem": "XYZ Ltd. had 5,00,000 shares prior to rights issue. Rights issue: 1 new share for each 5 outstanding at ₹15. Fair value immediately prior to exercise was ₹21. Net profit: 20X1 = ₹11,00,000; 20X2 = ₹15,00,000. Rights exercised on 1st March 20X2. Compute EPS for 20X2 including comparative for 20X1.",
        "solution": {
          "approach": [
            "TERP = [(21×5,00,000) + (15×1,00,000)] ÷ 6,00,000 = ₹20",
            "Adjustment Factor = 21 ÷ 20 = 1.05",
            "20X1 restated EPS = 11,00,000 ÷ (5,00,000 × 1.05) = ₹2.10",
            "20X2 weighted shares = (5,00,000 × 1.05 × 2/12) + (6,00,000 × 10/12) = 5,87,500",
            "20X2 EPS = 15,00,000 ÷ 5,87,500 = ₹2.55"
          ],
          "answer": "EPS 20X2: ₹2.55; Restated EPS 20X1: ₹2.10"
        }
      },
      {
        "id": "AA4-PP7",
        "type": "Computational",
        "difficulty": "Hard",
        "topic": "AS 20 - Diluted EPS with Stock Options",
        "problem": "Net profit ₹12,00,000. Weighted average equity shares: 5,00,000. Average fair value: ₹20. Shares under option: 1,00,000. Exercise price: ₹15. Compute Basic and Diluted EPS.",
        "solution": {
          "approach": [
            "Basic EPS = 12,00,000 ÷ 5,00,000 = ₹2.40",
            "Shares at fair value = (1,00,000 × 15) ÷ 20 = 75,000",
            "Incremental dilutive shares = 1,00,000 - 75,000 = 25,000",
            "Diluted EPS = 12,00,000 ÷ 5,25,000 = ₹2.29"
          ],
          "answer": "Basic EPS: ₹2.40; Diluted EPS: ₹2.29"
        }
      },
      {
        "id": "AA4-PP8",
        "type": "Conceptual",
        "difficulty": "Medium",
        "topic": "AS 24 - Discontinuing Operations Identification",
        "problem": "Company MN operates Hotels, Airlines, and Software segments. It decides to sell Airline business (25% of revenue) piecemeal by selling aircraft and settling liabilities. Has it commenced discontinuing operations disclosure requirements?",
        "solution": {
          "approach": [
            "Check if single plan exists for disposal - Yes",
            "Check if separate major line of business - Yes (25% revenue)",
            "Check if operationally and financially distinguishable - Yes (separate segment)",
            "All three criteria of AS 24 met"
          ],
          "answer": "Yes, Airline business qualifies as discontinuing operation. Disclosure requirements of AS 24 apply from the initial disclosure event."
        }
      }
    ],
    "caseMCQs": {
      "scenario": "Pinnacle Ltd. is a listed manufacturing company preparing financial statements for FY ending 31st March 2025. The company has the following situations:\n\nSituation 1: The company has 4 business segments with revenues (internal + external): X-₹800 lakhs, Y-₹600 lakhs, Z-₹400 lakhs, W-₹200 lakhs (Total ₹2,000 lakhs). External revenues: X-₹700, Y-₹550, Z-₹350, W-₹150 (Total ₹1,750 lakhs). Segment results: X-₹100 profit, Y-₹80 profit, Z-₹60 loss, W-₹20 loss.\n\nSituation 2: Mr. Sharma, the Managing Director of Pinnacle Ltd., owns 100% shares of Sharma Enterprises. During the year, Pinnacle Ltd. sold goods worth ₹45,00,000 to Sharma Enterprises at normal selling price.\n\nSituation 3: The company changed its inventory valuation from FIFO to Weighted Average. Closing inventory: FIFO ₹28,00,000, Weighted Average ₹24,00,000. The company disclosed only 'Inventory valued at Weighted Average method' in notes.",
      "questions": [
        {
          "id": "AA4.CQ1",
          "q": "Based on the profit/loss test under AS 17, what is the threshold amount for a segment to qualify as reportable?",
          "opts": [
            "₹18 lakhs (10% of ₹180 lakhs combined profit)",
            "₹20 lakhs (10% of ₹200 lakhs total absolute amount)",
            "₹10 lakhs (10% of ₹100 lakhs net profit)",
            "₹8 lakhs (10% of ₹80 lakhs combined loss)"
          ],
          "ans": 0,
          "exp": "Combined profits (X+Y) = ₹180 lakhs; Combined losses (Z+W) = ₹80 lakhs. Since ₹180 lakhs > ₹80 lakhs in absolute terms, threshold = 10% × ₹180 lakhs = ₹18 lakhs. AS 17 Para 27 requires comparison with the GREATER of combined profits or combined losses.",
          "type": "Trap",
          "diff": 3
        },
        {
          "id": "AA4.CQ2",
          "q": "What is the treatment of ₹45,00,000 sale to Sharma Enterprises under AS 18?",
          "opts": [
            "No disclosure required as transaction is at arm's length price",
            "Disclose as related party transaction with Sharma Enterprises",
            "No disclosure as Sharma Enterprises is not a subsidiary",
            "Disclose only if transaction exceeds ₹50,00,000"
          ],
          "ans": 1,
          "exp": "Sharma Enterprises is an enterprise over which a key management personnel (Mr. Sharma, MD) is able to exercise significant influence as he owns 100% shares. Under AS 18 Para 3(e), this creates a related party relationship. Disclosure is mandatory IRRESPECTIVE of whether transaction is at normal selling price.",
          "type": "Concept",
          "diff": 2
        },
        {
          "id": "AA4.CQ3",
          "q": "What is the amount of impact that should have been disclosed due to change in inventory valuation policy?",
          "opts": [
            "Nil - no disclosure of amount required",
            "₹4,00,000 reduction in profit",
            "₹28,00,000 being closing inventory",
            "₹24,00,000 being revised inventory"
          ],
          "ans": 1,
          "exp": "As per AS 1 Para 28, when change in accounting policy has material effect in current period, the AMOUNT by which financial statement items are affected must be disclosed. Impact = ₹28,00,000 - ₹24,00,000 = ₹4,00,000 reduction in profit and inventory value.",
          "type": "Concept",
          "diff": 2
        },
        {
          "id": "AA4.CQ4",
          "q": "For the 75% overall test under AS 17, what percentage of total enterprise revenue is covered by reportable segments X and Y?",
          "opts": [
            "70% (₹1,400 ÷ ₹2,000)",
            "71.43% (₹1,250 ÷ ₹1,750)",
            "80% (₹1,600 ÷ ₹2,000)",
            "62.5% (₹1,250 ÷ ₹2,000)"
          ],
          "ans": 1,
          "exp": "The 75% test uses EXTERNAL revenue only. External revenue of X and Y = ₹700 + ₹550 = ₹1,250 lakhs. Total enterprise external revenue = ₹1,750 lakhs. Percentage = ₹1,250 ÷ ₹1,750 = 71.43%. Since this is less than 75%, additional segments must be identified as reportable.",
          "type": "Trap",
          "diff": 3
        }
      ]
    },
    "mcqs": [
      {
        "id": "AA4.Q1",
        "q": "Under AS 1, when is disclosure of fundamental accounting assumptions mandatory?",
        "opts": [
          "Always in all financial statements",
          "Only when all three assumptions are followed",
          "Only when any assumption is NOT followed",
          "Only for listed companies"
        ],
        "ans": 2,
        "exp": "As per AS 1 Para 17, fundamental accounting assumptions are usually not specifically stated because their acceptance and use are assumed. Disclosure is necessary ONLY if they are not followed.",
        "type": "Concept",
        "diff": 2
      },
      {
        "id": "AA4.Q2",
        "q": "Which of the following is NOT considered cash equivalent under AS 3?",
        "opts": [
          "Treasury bills maturing in 60 days from acquisition",
          "Commercial paper maturing in 45 days from acquisition",
          "Fixed deposit with bank maturing in 4 months from acquisition",
          "Money market fund investment maturing in 75 days"
        ],
        "ans": 2,
        "exp": "As per AS 3 Para 6, cash equivalents are short-term investments due for maturity within THREE MONTHS from date of acquisition. Fixed deposit maturing in 4 months (120 days) exceeds this threshold and is not a cash equivalent.",
        "type": "Trap",
        "diff": 2
      },
      {
        "id": "AA4.Q3",
        "q": "Under AS 18, two companies with a common non-executive director are related parties if:",
        "opts": [
          "Always, by virtue of common directorship",
          "The director holds at least 20% shares in both companies",
          "The director is able to affect policies of both companies in their mutual dealings",
          "Never, as non-executive directors are excluded from AS 18"
        ],
        "ans": 2,
        "exp": "As per AS 18 Para 9(a), two companies are NOT related parties simply because they have a director in common. They become related ONLY if the director is able to affect the policies of BOTH companies in their mutual dealings.",
        "type": "Trap",
        "diff": 2
      },
      {
        "id": "AA4.Q4",
        "q": "For computing Basic EPS under AS 20, preference dividend on cumulative preference shares is deducted:",
        "opts": [
          "Only if declared by the Board of Directors",
          "Only if provided for in the books of accounts",
          "For the full amount required for the period, whether or not provided",
          "Only if actually paid during the period"
        ],
        "ans": 2,
        "exp": "As per AS 20 Para 14, for cumulative preference shares, the FULL amount of required preference dividend for the period is deducted WHETHER OR NOT the dividends have been provided for.",
        "type": "Concept",
        "diff": 2
      },
      {
        "id": "AA4.Q5",
        "q": "Under AS 17, segment assets do NOT include:",
        "opts": [
          "Trade receivables directly attributable to the segment",
          "Plant and machinery used by the segment",
          "Deferred tax assets",
          "Inventory held by the segment"
        ],
        "ans": 2,
        "exp": "As per AS 17 Para 22, segment assets do not include income tax assets (including deferred tax assets) and assets used for general enterprise or head-office purposes.",
        "type": "Concept",
        "diff": 2
      },
      {
        "id": "AA4.Q6",
        "q": "Under AS 3, dividends paid by a non-financial enterprise should be classified as:",
        "opts": [
          "Operating Activity",
          "Investing Activity",
          "Financing Activity",
          "Either Operating or Financing at management's choice"
        ],
        "ans": 2,
        "exp": "As per AS 3 Para 34, dividends paid should be classified as cash flows from FINANCING activities for ALL enterprises (both financial and non-financial).",
        "type": "Concept",
        "diff": 1
      },
      {
        "id": "AA4.Q7",
        "q": "Which of the following is NOT a consideration in selection of accounting policies under AS 1?",
        "opts": [
          "Prudence",
          "Substance over form",
          "Comparability",
          "Materiality"
        ],
        "ans": 2,
        "exp": "As per AS 1 Para 17, major considerations governing selection of accounting policies are: Prudence, Substance over form, and Materiality. Comparability is NOT listed as a consideration for selection of accounting policies.",
        "type": "Trap",
        "diff": 2
      },
      {
        "id": "AA4.Q8",
        "q": "Under AS 18, 'associate of an associate' relationship creates:",
        "opts": [
          "Related party relationship requiring full disclosure",
          "No related party relationship under AS 18",
          "Related party only for consolidated financial statements",
          "Related party only if shareholding exceeds 25%"
        ],
        "ans": 1,
        "exp": "As per AS 18, 'associate of an associate' is NOT a related party. The related party relationship extends only to direct associates and joint ventures, not to indirect relationships through them.",
        "type": "Trap",
        "diff": 3
      },
      {
        "id": "AA4-Q12",
        "question": "Under AS 20, in an amalgamation in the nature of merger, equity shares issued as consideration are included in weighted average calculation from:",
        "options": {
          "a": "Date of amalgamation",
          "b": "Beginning of the reporting period",
          "c": "Date of board approval",
          "d": "Date of court approval"
        },
        "correctAnswer": "b",
        "explanation": "In amalgamation in the nature of merger, financial statements are prepared as if the combined entity existed from beginning of the reporting period. Hence, shares are weighted from beginning of the period, not acquisition date."
      },
      {
        "id": "AA4-Q13",
        "question": "Under AS 24, which of the following does NOT qualify as a discontinuing operation?",
        "options": {
          "a": "Disposal of a business segment in a single transaction",
          "b": "Gradual evolutionary phasing out of a product line",
          "c": "Termination through abandonment of a geographical segment",
          "d": "Piecemeal disposal of a major line of business"
        },
        "correctAnswer": "b",
        "explanation": "Gradual or evolutionary phasing out of a product line does not automatically satisfy the definition of discontinuing operation under AS 24. It must be pursuant to a single plan and represent a separate major line of business."
      },
      {
        "id": "AA4-Q14",
        "question": "Under AS 25, how should seasonal revenue received in Q3 be treated in Q1 interim financial statements?",
        "options": {
          "a": "Anticipated and recognized in Q1",
          "b": "Deferred from Q1 to Q3",
          "c": "Not recognized until earned in Q3",
          "d": "Spread equally across all quarters"
        },
        "correctAnswer": "c",
        "explanation": "Revenues received seasonally or occasionally should not be anticipated or deferred at interim date if such treatment would not be appropriate at year-end. Revenue is recognized when earned."
      },
      {
        "id": "AA4-Q15",
        "question": "For computing Diluted EPS with stock options, shares are treated as issued for no consideration to the extent:",
        "options": {
          "a": "The full number of shares under option",
          "b": "Exercise price exceeds fair value",
          "c": "Fair value exceeds exercise price",
          "d": "Shares cannot be issued at average fair value from proceeds"
        },
        "correctAnswer": "c",
        "explanation": "Under treasury stock method, incremental shares = Total shares under option minus shares that would be issued at fair value from proceeds. The difference represents shares issued for no consideration, creating dilution."
      },
      {
        "id": "AA4-Q16",
        "question": "Under AS 24, pre-tax gain or loss on disposal of assets attributable to discontinuing operation should be disclosed:",
        "options": {
          "a": "Only in notes to accounts",
          "b": "On the face of Statement of Profit and Loss",
          "c": "In Director's Report",
          "d": "Either on face or in notes"
        },
        "correctAnswer": "b",
        "explanation": "AS 24 specifically requires pre-tax profit/loss from discontinuing operations and gain/loss on disposal of related assets to be shown on the face of Statement of Profit and Loss, not merely in notes."
      }
    ],
    "tricky": [
      {
        "id": "AA4.T1",
        "point": "AS 17 - 10% test vs 75% test revenue base",
        "mistake": "Using same revenue base (total or external) for both tests",
        "why": "10% materiality test: Total revenue (internal + external) of all segments; 75% overall test: External revenue only of enterprise. ICAI tests this distinction specifically.",
        "priority": "Very High"
      },
      {
        "id": "AA4.T2",
        "point": "AS 1 - Change in accounting POLICY vs change in accounting ESTIMATE",
        "mistake": "Treating change in method of estimating provision as change in accounting policy",
        "why": "Change in method of making provision for non-moving inventory (e.g., from 12-month basis to technical evaluation) is NOT a change in accounting policy - it's change in estimate. Only the policy to MAKE provision is the accounting policy.",
        "priority": "High"
      },
      {
        "id": "AA4.T3",
        "point": "AS 3 - Exchange gains/losses on foreign currency cash",
        "mistake": "Including exchange gain/loss on foreign currency bank balances in cash flows",
        "why": "Exchange gains/losses due to restatement of foreign currency cash balances are NOT cash flows (no actual inflow/outflow). These are reconciled separately in notes to Cash Flow Statement (AS 3 Para 28).",
        "priority": "High"
      },
      {
        "id": "AA4.T4",
        "point": "AS 18 - Period for identifying related parties",
        "mistake": "Identifying related parties only as at balance sheet date",
        "why": "Related parties must be identified 'at any time during the reporting period' - not just at year-end. If relationship existed for part of year, that party is related for entire year for disclosure purposes.",
        "priority": "High"
      },
      {
        "id": "AA4.T5",
        "point": "AS 20 - Non-cumulative vs Cumulative preference dividend deduction",
        "mistake": "Deducting cumulative preference dividend only if provided in books",
        "why": "Non-cumulative: Deduct only if PROVIDED for the period; Cumulative: Deduct FULL amount WHETHER OR NOT provided. This is a direct testing point in ICAI exams.",
        "priority": "High"
      },
      {
        "id": "AA4.T6",
        "point": "AS 3 - Interest capitalised as part of inventory",
        "mistake": "Treating capitalised interest as financing activity",
        "why": "When interest is included in cost of inventories as per AS 16 read with AS 2, such interest becomes part of operating cash flows (not financing), as inventory is an operating item.",
        "priority": "Medium"
      },
      {
        "id": "AA4-T7",
        "point": "AS 20 - Bonus Issue Factor for two-for-one",
        "trap": "Two-for-one bonus means multiply by factor of THREE (original + 2 bonus = 3 total), not TWO",
        "insight": "The PDF example states: 'upon a two-for-one bonus issue, the number of shares outstanding prior to the issue is multiplied by a factor of three'"
      },
      {
        "id": "AA4-T8",
        "point": "AS 20 - Potential equity shares cancelled mid-year",
        "trap": "Students either ignore cancelled potential shares entirely or include them for full year",
        "insight": "Potential equity shares cancelled during the year are included in diluted EPS calculation only for the portion of the period during which they were outstanding"
      },
      {
        "id": "AA4-T9",
        "point": "AS 24 - Discontinuing operations and going concern",
        "trap": "Assuming discontinuing operation disclosure implies going concern problems",
        "insight": "AS 24 explicitly states that classification as discontinuing operation does NOT, in itself, bring into question the enterprise's ability to continue as going concern"
      },
      {
        "id": "AA4-T10",
        "point": "AS 25 - Materiality assessment for interim reports",
        "trap": "Using annual materiality thresholds for interim period items",
        "insight": "Materiality should be assessed in relation to interim period financial data, not annual data. Items material to interim period must be disclosed even if immaterial annually."
      },
      {
        "id": "AA4-T11",
        "point": "AS 20 - Partly paid shares NOT entitled to dividends",
        "trap": "Including all partly paid shares in Basic EPS calculation",
        "insight": "Partly paid shares where holder is NOT entitled to dividends are treated as POTENTIAL equity shares for Diluted EPS, not included in Basic EPS"
      },
      {
        "id": "AA4-T12",
        "point": "AS 25 - First year of operations shorter period",
        "trap": "Treating the shorter first-year operating period as an interim period",
        "insight": "During first year of operations, if annual reporting period is shorter than a financial year, that shorter period is NOT considered an interim period under AS 25"
      }
    ],
    "amendments": [
      {
        "id": "AA4.A1",
        "topic": "AS 3 - Companies exempt from Cash Flow Statement",
        "what": "Startup private companies added to exemption list from preparing Cash Flow Statement",
        "oldPosition": "Cash flow statement exemption available only to One Person Company (OPC), Small Company, and Dormant Company",
        "newPosition": "Exemption extended to include Startup Private Companies besides OPC, Small Company, and Dormant Company (vide Notification dated 13th June, 2017 under Section 462)",
        "effectiveFrom": "13th June 2017",
        "pdfStatus": "confirmed",
        "priority": "Medium"
      },
      {
        "id": "AA4.A2",
        "topic": "AS 20 - Disclosure exemption for SMCs",
        "what": "SMCs exempted from mandatory disclosure of diluted EPS",
        "oldPosition": "All companies required to disclose both Basic and Diluted EPS",
        "newPosition": "Disclosure of diluted earnings per share (both including and excluding extraordinary items) is NOT mandatory for SMCs. Such companies are however encouraged to make these disclosures.",
        "effectiveFrom": "Applicable from inception of AS 20",
        "pdfStatus": "confirmed",
        "priority": "Medium"
      },
      {
        "id": "AA4.A3",
        "topic": "Schedule III - Materiality threshold for disclosure",
        "what": "Specific quantitative limit for materiality in Statement of Profit and Loss",
        "oldPosition": "General materiality principle without specific threshold",
        "newPosition": "Company should disclose by way of notes additional information regarding any item of income or expenditure which exceeds 1% of the revenue from operations or ₹1,00,000 whichever is higher",
        "effectiveFrom": "Companies Act 2013 Schedule III",
        "pdfStatus": "confirmed",
        "priority": "Medium"
      },
      {
        "id": "AA4-A4",
        "standard": "AS 20",
        "topic": "EPS Presentation Requirement",
        "amendment": "Basic and diluted EPS must be presented on the face of Statement of Profit and Loss with EQUAL PROMINENCE for all periods presented, even if amounts are negative (loss per share).",
        "effectiveFrom": "Current",
        "examRelevance": "High"
      },
      {
        "id": "AA4-A5",
        "standard": "AS 24",
        "topic": "Discontinuing Operations Pre-tax Disclosure Location",
        "amendment": "Pre-tax profit/loss from discontinuing operation and related tax expense must be shown on FACE of Statement of Profit and Loss, not just in notes.",
        "effectiveFrom": "Current",
        "examRelevance": "High"
      },
      {
        "id": "AA4-A6",
        "standard": "AS 25",
        "topic": "Clause 41 Listing Agreement Results",
        "amendment": "Quarterly results under Clause 41 do NOT meet definition of 'interim financial report' under AS 25. Presentation/disclosure requirements of AS 25 not applicable, but recognition and measurement principles still apply.",
        "effectiveFrom": "Current",
        "examRelevance": "Medium"
      }
    ],
    "cases": [],
    "trees": []
  },
  {
    "id": "AA6",
    "name": "Liabilities Based Accounting Standards - AS 15 Employee Benefits & AS 29 Provisions, Contingent Liabilities and Contingent Assets",
    "dangerZones": [
      {
        "id": "AA6.DZ1",
        "point": "Confusing Accumulating vs Non-Accumulating Compensated Absences",
        "mistake": "Students recognize liability for non-accumulating absences (like maternity leave) when service is rendered, instead of recognizing only when the absence occurs",
        "why": "ICAI tests whether students understand that non-accumulating absences do not carry forward and are not linked to past services - hence no provision until absence actually occurs per AS 15 Para 8",
        "priority": "Very High"
      },
      {
        "id": "AA6.DZ2",
        "point": "Provision vs Contingent Liability Classification under AS 29",
        "mistake": "Students create provisions when outflow is only possible (not probable), or fail to recognize that contingent liabilities arise when reliable estimate cannot be made even if outflow is probable",
        "why": "ICAI specifically tests the three-criteria test: present obligation + probable outflow + reliable estimate. Missing any one criterion changes accounting treatment from provision to contingent liability disclosure",
        "priority": "Very High"
      },
      {
        "id": "AA6.DZ3",
        "point": "Defined Contribution Plan vs Defined Benefit Plan Classification",
        "mistake": "Students misclassify gratuity funded through LIC as defined contribution plan, failing to recognize that if employer has obligation to pay benefits directly or pay further amounts if insurer defaults, it remains a defined benefit plan",
        "why": "ICAI tests understanding that risk transfer determines classification - actuarial and investment risk on employee = DCP; on employer = DBP per AS 15 Para 26-27",
        "priority": "High"
      },
      {
        "id": "AA6.DZ4",
        "point": "Actuarial Gains/Losses Recognition Timing",
        "mistake": "Students spread actuarial gains/losses over average remaining working life of employees instead of recognizing immediately in profit and loss",
        "why": "AS 15 (Revised 2005) mandates immediate recognition of actuarial gains and losses in statement of profit and loss - ICAI tests this to ensure students apply current Indian AS rather than older corridor approach",
        "priority": "High"
      },
      {
        "id": "AA6.DZ5",
        "point": "Restructuring Provision - Costs Included",
        "mistake": "Students include retraining costs, marketing costs, and investment in new systems in restructuring provision, which relate to future conduct of business",
        "why": "AS 29 specifically excludes costs associated with ongoing activities - only direct expenditures necessarily entailed by restructuring and not related to ongoing activities qualify per Para 72-73",
        "priority": "High"
      }
    ],
    "formulaGuide": [
      {
        "id": "AA6.FG1",
        "topic": "Provision Recognition Decision Tree under AS 29",
        "nodes": [
          {
            "id": "n1",
            "label": "Is there a present obligation as a result of a past obligating event?",
            "branches": [
              {
                "label": "Yes - Present obligation exists",
                "target": "n2"
              },
              {
                "label": "No - Check if possible obligation exists",
                "target": "n4"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Is it probable that an outflow of resources embodying economic benefits will be required to settle the obligation?",
            "branches": [
              {
                "label": "Yes - Outflow is probable (more likely than not)",
                "target": "n3"
              },
              {
                "label": "No - Outflow is not probable",
                "target": "n5"
              }
            ]
          },
          {
            "id": "n3",
            "label": "Can a reliable estimate be made of the amount of the obligation?",
            "branches": [
              {
                "label": "Yes - Reliable estimate possible",
                "target": "outcomeA"
              },
              {
                "label": "No - Reliable estimate not possible (rare)",
                "target": "outcomeB"
              }
            ]
          },
          {
            "id": "n4",
            "label": "Does a possible obligation exist whose existence will be confirmed by future events?",
            "branches": [
              {
                "label": "Yes - Possible obligation exists",
                "target": "n5"
              },
              {
                "label": "No - No obligation exists",
                "target": "outcomeD"
              }
            ]
          },
          {
            "id": "n5",
            "label": "Is the possibility of outflow of resources remote?",
            "branches": [
              {
                "label": "Yes - Remote possibility",
                "target": "outcomeD"
              },
              {
                "label": "No - Not remote (possible but not probable)",
                "target": "outcomeB"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "RECOGNIZE PROVISION: Debit Expense/Asset, Credit Provision. Disclose: nature, timing, uncertainties, reimbursement amount",
            "reference": "AS 29 Para 14"
          },
          {
            "id": "outcomeB",
            "label": "DISCLOSE CONTINGENT LIABILITY: Brief description of nature, estimate of financial effect, indication of uncertainties, possibility of reimbursement",
            "reference": "AS 29 Para 68"
          },
          {
            "id": "outcomeC",
            "label": "RECOGNIZE PROVISION with disclosure that estimate is uncertain",
            "reference": "AS 29 Para 14 read with Para 36"
          },
          {
            "id": "outcomeD",
            "label": "NO PROVISION, NO DISCLOSURE required",
            "reference": "AS 29 Para 28"
          }
        ]
      },
      {
        "id": "AA6.FG2",
        "topic": "Employee Benefits Classification Decision Tree under AS 15",
        "nodes": [
          {
            "id": "n1",
            "label": "When is the benefit expected to fall due/be settled?",
            "branches": [
              {
                "label": "Wholly within 12 months after period end",
                "target": "n2"
              },
              {
                "label": "After employment ends (post-employment)",
                "target": "n3"
              },
              {
                "label": "More than 12 months after period end (during employment)",
                "target": "outcomeC"
              },
              {
                "label": "On termination of employment before normal retirement",
                "target": "outcomeD"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Type of Short-term Employee Benefit",
            "branches": [
              {
                "label": "Regular period benefits (wages, salaries)",
                "target": "outcomeA1"
              },
              {
                "label": "Compensated absences",
                "target": "n4"
              },
              {
                "label": "Profit sharing/Bonus plans",
                "target": "outcomeA3"
              },
              {
                "label": "Non-monetary benefits",
                "target": "outcomeA1"
              }
            ]
          },
          {
            "id": "n3",
            "label": "Who bears actuarial and investment risk?",
            "branches": [
              {
                "label": "Employee bears risk - fixed contribution by employer",
                "target": "outcomeB1"
              },
              {
                "label": "Employer bears risk - benefit amount defined",
                "target": "outcomeB2"
              }
            ]
          },
          {
            "id": "n4",
            "label": "Can unused leave be carried forward?",
            "branches": [
              {
                "label": "Yes - Accumulating",
                "target": "n5"
              },
              {
                "label": "No - Non-accumulating (e.g., maternity leave)",
                "target": "outcomeA2"
              }
            ]
          },
          {
            "id": "n5",
            "label": "Is employee entitled to cash payment for unused leave on leaving?",
            "branches": [
              {
                "label": "Yes - Vesting",
                "target": "outcomeA4"
              },
              {
                "label": "No - Non-vesting",
                "target": "outcomeA5"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA1",
            "label": "SHORT-TERM BENEFIT: Recognize undiscounted amount as expense when service rendered; liability = amount unpaid at balance sheet date",
            "reference": "AS 15 Para 10-11"
          },
          {
            "id": "outcomeA2",
            "label": "NON-ACCUMULATING ABSENCE: Recognize no liability/expense until time of absence",
            "reference": "AS 15 Para 16"
          },
          {
            "id": "outcomeA3",
            "label": "PROFIT SHARING/BONUS: Recognize when present obligation exists from past event AND reliable estimate can be made",
            "reference": "AS 15 Para 17-18"
          },
          {
            "id": "outcomeA4",
            "label": "VESTING ACCUMULATING: Recognize expected cost as additional amount to be paid for unused entitlement accumulated",
            "reference": "AS 15 Para 14-15"
          },
          {
            "id": "outcomeA5",
            "label": "NON-VESTING ACCUMULATING: Recognize expected cost considering probability of employees leaving before using entitlement",
            "reference": "AS 15 Para 15"
          },
          {
            "id": "outcomeB1",
            "label": "DEFINED CONTRIBUTION PLAN: Charge contribution payable to P&L; no actuarial valuation needed",
            "reference": "AS 15 Para 25-27"
          },
          {
            "id": "outcomeB2",
            "label": "DEFINED BENEFIT PLAN: Actuarial valuation required; recognize: PV of DBO - unrecognized past service cost - FV of plan assets",
            "reference": "AS 15 Para 49-54"
          },
          {
            "id": "outcomeC",
            "label": "OTHER LONG-TERM BENEFITS: Recognize similar to defined benefit plan; actuarial gains/losses recognized immediately",
            "reference": "AS 15 Para 129"
          },
          {
            "id": "outcomeD",
            "label": "TERMINATION BENEFITS: Recognize when detailed formal plan exists and enterprise is demonstrably committed; discount if >12 months",
            "reference": "AS 15 Para 133-138"
          }
        ]
      },
      {
        "id": "AA6.FG3",
        "topic": "Defined Benefit Obligation Components Calculation",
        "nodes": [
          {
            "id": "n1",
            "label": "Calculate Present Value of Defined Benefit Obligation (DBO) at balance sheet date using Projected Unit Credit Method",
            "branches": [
              {
                "label": "DBO calculated",
                "target": "n2"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Deduct: Past service cost not yet recognized",
            "branches": [
              {
                "label": "Amount deducted",
                "target": "n3"
              }
            ]
          },
          {
            "id": "n3",
            "label": "Deduct: Fair value of plan assets at balance sheet date",
            "branches": [
              {
                "label": "Net amount is positive (DBO > Plan Assets)",
                "target": "outcomeA"
              },
              {
                "label": "Net amount is negative (Plan Assets > DBO)",
                "target": "n4"
              }
            ]
          },
          {
            "id": "n4",
            "label": "Apply Asset Ceiling Test: Is surplus recoverable through refunds or reduced contributions?",
            "branches": [
              {
                "label": "Yes - Recoverable",
                "target": "outcomeB"
              },
              {
                "label": "No - Not fully recoverable",
                "target": "outcomeC"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "RECOGNIZE LIABILITY: Net amount = PV of DBO - Unrecognized past service cost - FV of Plan Assets",
            "reference": "AS 15 Para 54"
          },
          {
            "id": "outcomeB",
            "label": "RECOGNIZE ASSET: Lower of (a) amount determined, or (b) PV of economic benefits from refunds/reduced contributions",
            "reference": "AS 15 Para 59"
          },
          {
            "id": "outcomeC",
            "label": "RECOGNIZE ASSET: Limited to PV of economic benefits available through refunds or reduced future contributions",
            "reference": "AS 15 Para 59(b)"
          }
        ]
      },
      {
        "id": "AA6.FG4",
        "topic": "Actual Return on Plan Assets Calculation",
        "nodes": [
          {
            "id": "n1",
            "label": "Start with Fair Value of Plan Assets at period end",
            "branches": [
              {
                "label": "Closing FV available",
                "target": "n2"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Deduct: Fair Value of Plan Assets at period start",
            "branches": [
              {
                "label": "Opening FV deducted",
                "target": "n3"
              }
            ]
          },
          {
            "id": "n3",
            "label": "Deduct: Contributions received during the period",
            "branches": [
              {
                "label": "Contributions deducted",
                "target": "n4"
              }
            ]
          },
          {
            "id": "n4",
            "label": "Add: Benefits paid during the period",
            "branches": [
              {
                "label": "Benefits added back",
                "target": "outcomeA"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "ACTUAL RETURN = Closing FV - Opening FV - Contributions + Benefits Paid",
            "reference": "AS 15 Para 106"
          }
        ]
      }
    ],
    "flashcards": [
      {
        "id": "AA6.FC1",
        "front": "Employee Benefits (AS 15 Definition)",
        "back": "All forms of consideration given by an enterprise in exchange for services rendered by employees. Includes benefits provided to employees and their dependents (spouses, children and others). Payment can be made directly to employees, their dependent or to any other party (e.g., legal heirs, nominees, insurance companies, trust etc.).",
        "section": "AS 15 Para 3"
      },
      {
        "id": "AA6.FC2",
        "front": "Defined Contribution Plans",
        "back": "Post-employment benefit plans under which an enterprise pays fixed contributions into a separate fund and will have no obligation to pay further contributions. Under defined contribution plans, actuarial risk (that benefits will be less than expected) and investment risk (that assets invested will be insufficient to meet expected benefits) fall on the employee.",
        "section": "AS 15 Para 7"
      },
      {
        "id": "AA6.FC3",
        "front": "Provision (AS 29 Definition)",
        "back": "A liability which can be measured only by using a substantial degree of estimation.",
        "section": "AS 29 Para 10"
      },
      {
        "id": "AA6.FC4",
        "front": "Contingent Liability (AS 29 Definition)",
        "back": "(a) A possible obligation that arises from past events and the existence of which will be confirmed only by the occurrence or non-occurrence of one or more uncertain future events not wholly within the control of the enterprise; or (b) A present obligation that arises from past events but is not recognised because: (i) It is not probable that an outflow of resources embodying economic benefits will be required to settle the obligation; or (ii) A reliable estimate of the amount of the obligation cannot be made.",
        "section": "AS 29 Para 10"
      },
      {
        "id": "AA6.FC5",
        "front": "Obligating Event",
        "back": "An event that creates an obligation that results in an enterprise having no realistic alternative to settling that obligation.",
        "section": "AS 29 Para 10"
      },
      {
        "id": "AA6.FC6",
        "front": "Accumulating Compensated Absences",
        "back": "Compensated absences that are carried forward and can be used in future periods if the current period's entitlement is not used in full. May be vesting (employees entitled to cash payment for unused entitlement on leaving) or non-vesting (not entitled to cash payment on leaving).",
        "section": "AS 15 Para 13"
      },
      {
        "id": "AA6.FC7",
        "front": "Actuarial Gains and Losses",
        "back": "Comprise: (a) experience adjustments (the effects of difference between the previous actuarial assumptions and what has actually occurred); and (b) the effects of changes in actuarial assumptions. Actuarial gains and losses should be recognized immediately in the statement of profit and loss as income or expense.",
        "section": "AS 15 Para 92-93"
      },
      {
        "id": "AA6.FC8",
        "front": "Termination Benefits",
        "back": "Employee benefits payable as a result of either an enterprise's decision to terminate an employee's employment before the normal retirement date or an employee's decision to accept voluntary redundancy in exchange for those benefits (e.g., payments under VRS).",
        "section": "AS 15 Para 133"
      },
      {
        "id": "AA6.FC9",
        "front": "Contingent Asset (AS 29 Definition)",
        "back": "A possible asset that arises from past events the existence of which will be confirmed only by the occurrence or non-occurrence of one or more uncertain future events not wholly within the control of the enterprise.",
        "section": "AS 29 Para 10"
      },
      {
        "id": "AA6.FC10",
        "front": "Restructuring (AS 29 Definition)",
        "back": "A programme that is planned and controlled by management, and materially changes either: (a) The scope of a business undertaken by an enterprise; or (b) The manner in which that business is conducted.",
        "section": "AS 29 Para 10"
      }
    ],
    "practiceProblems": [
      {
        "id": "AA6.PP1",
        "title": "Calculation of Expected and Actual Return on Plan Assets",
        "difficulty": 4,
        "problem": "Alpha Ltd. has a defined benefit pension plan. As on 1st April, 20X1, the fair value of plan assets was ₹3,00,000. On 30th September, 20X1, the plan paid out benefits of ₹40,000 and received inward contributions of ₹80,000. On 31st March, 20X2, the fair value of plan assets was ₹4,20,000. The expected rate of return is 10% per annum (5% for six months, reflecting semi-annual compounding). Calculate (a) Expected return on plan assets and (b) Actual return on plan assets for the year 20X1-20X2.",
        "steps": [
          "Step 1: Calculate expected return on opening balance held for 12 months: ₹3,00,000 × 10% = ₹30,000",
          "Step 2: Calculate expected return on net inflow (₹80,000 - ₹40,000 = ₹40,000) held for 6 months: ₹40,000 × 5% = ₹2,000",
          "Step 3: Total Expected Return = ₹30,000 + ₹2,000 = ₹32,000",
          "Step 4: Calculate Actual Return = Closing FV - Opening FV - Contributions + Benefits Paid = ₹4,20,000 - ₹3,00,000 - ₹80,000 + ₹40,000 = ₹80,000"
        ],
        "answer": "Expected Return on Plan Assets = ₹32,000; Actual Return on Plan Assets = ₹80,000. The difference of ₹48,000 (₹80,000 - ₹32,000) represents actuarial gain on plan assets to be recognized in P&L per AS 15.",
        "topic": "AS 15 - Defined Benefit Plans"
      },
      {
        "id": "AA6.PP2",
        "title": "Defined Benefit Obligation and Current Service Cost Calculation",
        "difficulty": 5,
        "problem": "An employee Mr. Sharma joins Beta Ltd. on 1st April, 20X1 with annual salary of ₹12,00,000. The company provides a lump sum retirement benefit of 20% of final annual salary for each completed year of service. Mr. Sharma is expected to retire after 4 years. Salary is expected to grow at 8% per annum. Discount rate is 6% per annum. Calculate (a) Total DBO at retirement, (b) Current service cost for Year 1, (c) Interest cost for Year 2. PV factors @ 6%: Year 1 = 0.840, Year 2 = 0.890, Year 3 = 0.943, Year 4 = 1.000",
        "steps": [
          "Step 1: Calculate expected final salary = ₹12,00,000 × (1.08)^4 = ₹12,00,000 × 1.3605 = ₹16,32,600 (approx ₹16,32,596)",
          "Step 2: Calculate total DBO at retirement = ₹16,32,600 × 20% × 4 years = ₹13,06,080",
          "Step 3: Annual apportioned DBO = ₹13,06,080 ÷ 4 = ₹3,26,520",
          "Step 4: Current Service Cost Year 1 = ₹3,26,520 × PV factor for 3 years (0.840) = ₹2,74,277",
          "Step 5: Opening DBO for Year 2 = ₹2,74,277; Interest Cost Year 2 = ₹2,74,277 × 6% = ₹16,457"
        ],
        "answer": "Total DBO at retirement = ₹13,06,080; Current Service Cost Year 1 = ₹2,74,277; Interest Cost Year 2 = ₹16,457. Per AS 15, DBO is calculated using Projected Unit Credit Method attributing benefit to periods of service.",
        "topic": "AS 15 - Defined Benefit Plans"
      },
      {
        "id": "AA6.PP3",
        "title": "Warranty Provision Calculation",
        "difficulty": 3,
        "problem": "Gamma Ltd. sells electronic appliances with 2-year warranty. Based on past experience, the company estimates: (a) 70% of products sold will have no defects, (b) 20% will have minor defects costing ₹500 per unit to repair, (c) 10% will have major defects costing ₹2,000 per unit to repair. During 20X1-20X2, the company sold 10,000 units. Calculate the warranty provision to be recognized as at 31st March, 20X2 as per AS 29.",
        "steps": [
          "Step 1: Calculate expected cost for minor defects = 10,000 × 20% × ₹500 = ₹10,00,000",
          "Step 2: Calculate expected cost for major defects = 10,000 × 10% × ₹2,000 = ₹20,00,000",
          "Step 3: Calculate expected cost for no defects = 10,000 × 70% × ₹0 = ₹0",
          "Step 4: Total Expected Warranty Provision = ₹10,00,000 + ₹20,00,000 = ₹30,00,000"
        ],
        "answer": "Warranty Provision to be recognized = ₹30,00,000. Per AS 29, where there are similar obligations (product warranties), probability of outflow is determined by considering the class of obligations as a whole using expected value approach.",
        "topic": "AS 29 - Provisions"
      },
      {
        "id": "AA6.PP4",
        "title": "Gain from Curtailment of Defined Benefit Plan",
        "difficulty": 4,
        "problem": "Delta Ltd. discontinues a business segment. Before curtailment: Gross DBO = ₹50,00,000, Fair Value of Plan Assets = ₹42,00,000, Unamortized Past Service Cost = ₹1,50,000. The curtailment reduces the obligation by ₹8,00,000 (16% of gross obligation). Calculate (a) Gain from curtailment, (b) Net liability to be recognized after curtailment.",
        "steps": [
          "Step 1: Calculate proportion of unamortized past service cost relating to curtailed portion = ₹1,50,000 × 16% = ₹24,000",
          "Step 2: Gain from curtailment = Reduction in gross obligation - Related past service cost = ₹8,00,000 - ₹24,000 = ₹7,76,000",
          "Step 3: Reduced gross obligation = ₹50,00,000 × 84% = ₹42,00,000",
          "Step 4: Net liability after curtailment = Reduced DBO - Plan Assets - Remaining PSC = ₹42,00,000 - ₹42,00,000 - (₹1,50,000 × 84%) = -₹1,26,000"
        ],
        "answer": "Gain from curtailment = ₹7,76,000; Net liability after curtailment = ₹42,00,000 - ₹42,00,000 - ₹1,26,000 = Nil (or surplus of ₹1,26,000 subject to asset ceiling test). Per AS 15 Para 109-115, curtailment gains/losses are recognized when curtailment occurs.",
        "topic": "AS 15 - Curtailment and Settlement"
      }
    ],
    "caseMCQs": {
      "scenario": "Zenith Industries Ltd. (FY ending 31st March, 2025) is engaged in manufacturing heavy machinery. The company faces the following situations:\n\nSituation 1: The company has 200 employees entitled to 10 days of paid leave each year. Unused leave can be carried forward for one year. Leave is taken on LIFO basis. At 31st March, 2025, average unused entitlement is 4 days per employee. Based on past experience, 180 employees will take no more than 10 days in 2025-26, and remaining 20 employees will take average of 12 days each. Daily wage rate is ₹1,500.\n\nSituation 2: A customer has filed a lawsuit claiming ₹45,00,000 for product defects. Legal counsel advises that it is probable the company will lose. Legal costs (irrespective of outcome) are estimated at ₹3,00,000. Settlement amount if lost is estimated at ₹40,00,000.\n\nSituation 3: The company operates a defined benefit pension plan. As on 1st April, 2024: Opening DBO = ₹80,00,000; Opening Plan Assets = ₹72,00,000. During the year: Current Service Cost = ₹8,00,000; Interest Cost = ₹6,40,000 (8% discount rate); Expected Return on Plan Assets = ₹5,76,000; Contributions paid = ₹10,00,000; Benefits paid = ₹5,00,000. Actuarial loss on obligation = ₹2,00,000; Actuarial gain on plan assets = ₹80,000.",
      "questions": [
        {
          "id": "AA6.CQ1",
          "q": "What is the provision for accumulating compensated absences to be recognized as at 31st March, 2025?",
          "opts": [
            "₹60,000",
            "₹1,20,000",
            "₹12,00,000",
            "₹6,00,000"
          ],
          "ans": 0,
          "exp": "Per AS 15 Para 14-15, provision equals additional amount expected to be paid for unused entitlement. 20 employees × 2 extra days × ₹1,500 = ₹60,000. The 180 employees taking ≤10 days create no additional liability as they use current year entitlement plus some brought forward.",
          "type": "Trap",
          "diff": 3
        },
        {
          "id": "AA6.CQ2",
          "q": "What is the total amount to be recognized as provision in respect of the lawsuit as at 31st March, 2025?",
          "opts": [
            "₹45,00,000",
            "₹40,00,000",
            "₹43,00,000",
            "₹3,00,000"
          ],
          "ans": 2,
          "exp": "Per AS 29, when outflow is probable and reliably estimable, recognize provision. Legal costs (₹3,00,000) are certain irrespective of outcome - provision required. Settlement (₹40,00,000) is probable - provision required. Total provision = ₹3,00,000 + ₹40,00,000 = ₹43,00,000.",
          "type": "Concept",
          "diff": 2
        },
        {
          "id": "AA6.CQ3",
          "q": "What is the net employee benefit expense to be recognized in profit and loss for the defined benefit plan for FY 2024-25?",
          "opts": [
            "₹8,64,000",
            "₹9,84,000",
            "₹7,84,000",
            "₹8,00,000"
          ],
          "ans": 1,
          "exp": "Per AS 15 Para 61, expense = Current Service Cost + Interest Cost - Expected Return + Net Actuarial Loss = ₹8,00,000 + ₹6,40,000 - ₹5,76,000 + (₹2,00,000 - ₹80,000) = ₹8,00,000 + ₹6,40,000 - ₹5,76,000 + ₹1,20,000 = ₹9,84,000.",
          "type": "Calculation",
          "diff": 4
        },
        {
          "id": "AA6.CQ4",
          "q": "What is the closing DBO as at 31st March, 2025?",
          "opts": [
            "₹89,40,000",
            "₹91,40,000",
            "₹87,40,000",
            "₹94,40,000"
          ],
          "ans": 1,
          "exp": "Closing DBO = Opening DBO + Current Service Cost + Interest Cost - Benefits Paid + Actuarial Loss = ₹80,00,000 + ₹8,00,000 + ₹6,40,000 - ₹5,00,000 + ₹2,00,000 = ₹91,40,000.",
          "type": "Calculation",
          "diff": 3
        },
        {
          "id": "AA6.CQ5",
          "q": "What is the net defined benefit liability to be recognized in Balance Sheet as at 31st March, 2025?",
          "opts": [
            "₹8,04,000",
            "₹7,84,000",
            "₹19,40,000",
            "₹8,84,000"
          ],
          "ans": 3,
          "exp": "Closing Plan Assets = ₹72,00,000 + ₹5,76,000 + ₹10,00,000 - ₹5,00,000 + ₹80,000 = ₹83,56,000 (using Expected Return). Alternatively: ₹72,00,000 + Actual Return + ₹10,00,000 - ₹5,00,000. Net Liability = Closing DBO - Closing Plan Assets = ₹91,40,000 - ₹82,56,000 = ₹8,84,000.",
          "type": "Trap",
          "diff": 4
        }
      ]
    },
    "mcqs": [
      {
        "id": "AA6.Q1",
        "q": "Under AS 15, if an enterprise has 500 employees entitled to carry forward unused leave but past experience shows only 10% will avail more than current year entitlement of 15 days (i.e., they will use 17 days on average), what should be provided if daily wage is ₹800?",
        "opts": [
          "₹80,000 (50 employees × 2 days × ₹800)",
          "₹60,00,000 (500 employees × 15 days × ₹800)",
          "₹6,00,000 (500 employees × 15 days × ₹800 × 10%)",
          "No provision required as leave is non-vesting"
        ],
        "ans": 0,
        "exp": "Per AS 15 Para 14, provision for accumulating absences = additional amount expected to be paid. Only 50 employees (10%) expected to use 2 extra days each. Provision = 50 × 2 × ₹800 = ₹80,000.",
        "type": "Trap",
        "diff": 3
      },
      {
        "id": "AA6.Q2",
        "q": "Which of the following is NOT excluded from the scope of AS 29 'Provisions, Contingent Liabilities and Contingent Assets'?",
        "opts": [
          "Provisions arising from executory contracts that are not onerous",
          "Product warranty obligations",
          "Provisions covered by AS 7 on Construction Contracts",
          "Financial instruments carried at fair value"
        ],
        "ans": 1,
        "exp": "Per AS 29 Para 1, product warranty obligations are covered by AS 29. Executory contracts (except onerous), financial instruments at fair value, insurance contracts, and items covered by other AS are excluded from AS 29 scope.",
        "type": "Concept",
        "diff": 2
      },
      {
        "id": "AA6.Q3",
        "q": "A company's profit-sharing plan provides 5% of net profit to employees serving throughout the year. Net profit is ₹2,00,00,000. Staff turnover is expected to reduce payments to 4.5% of net profit. What expense should be recognized?",
        "opts": [
          "₹10,00,000",
          "₹9,00,000",
          "₹9,50,000",
          "₹0 as turnover creates uncertainty"
        ],
        "ans": 1,
        "exp": "Per AS 15 Para 17-22, expected cost of profit sharing should be recognized considering employee turnover. Expense = ₹2,00,00,000 × 4.5% = ₹9,00,000.",
        "type": "Calculation",
        "diff": 2
      },
      {
        "id": "AA6.Q4",
        "q": "Under AS 29, when should a contingent asset be recognized in financial statements?",
        "opts": [
          "When inflow of economic benefits is probable",
          "When inflow of economic benefits is virtually certain",
          "When inflow of economic benefits is possible but not probable",
          "Contingent assets are never recognized; only disclosed when probable"
        ],
        "ans": 1,
        "exp": "Per AS 29 Para 31-32, contingent assets are not recognized. However, when realization of income is virtually certain, the related asset is not a contingent asset and its recognition is appropriate.",
        "type": "Concept",
        "diff": 2
      },
      {
        "id": "AA6.Q5",
        "q": "Which cost should NOT be included in a restructuring provision under AS 29?",
        "opts": [
          "Termination payments to employees being made redundant",
          "Costs of relocating continuing staff to new locations",
          "Penalties for early termination of leases",
          "Professional fees for legal work related to restructuring"
        ],
        "ans": 1,
        "exp": "Per AS 29 Para 72-73, restructuring provision includes only direct expenditures necessarily entailed by restructuring and not associated with ongoing activities. Retraining/relocating continuing staff, marketing, and investment in new systems are excluded as they relate to future conduct of business.",
        "type": "Trap",
        "diff": 3
      },
      {
        "id": "AA6.Q6",
        "q": "Under AS 15, settlement allowance payable to retiring employees should be:",
        "opts": [
          "Accounted on claim basis when employee retires",
          "Provided every year based on actuarial valuation as a defined benefit",
          "Recognized only when detailed formal plan is announced",
          "Disclosed as contingent liability until retirement"
        ],
        "ans": 1,
        "exp": "Per AS 15 Para 49 and Illustration, settlement allowance is a defined benefit requiring provision every year based on actuarial valuation, as it is a post-employment benefit with obligation arising from past service.",
        "type": "Concept",
        "diff": 2
      }
    ],
    "tricky": [
      {
        "id": "AA6.T1",
        "point": "LIFO Basis for Leave Calculation - Understanding 'Additional Amount' Concept",
        "mistake": "Students calculate provision based on total unused leave balance instead of additional amount expected to be paid as a result of accumulation",
        "why": "AS 15 Para 14 states provision equals 'additional amount' not total balance - if leave is taken LIFO (current year first), provision is only for excess usage over current entitlement expected to be claimed",
        "priority": "Very High"
      },
      {
        "id": "AA6.T2",
        "point": "Informal Practices Creating Constructive Obligation under AS 15",
        "mistake": "Students ignore informal benefits (like festival bonuses) assuming only formal plans require provisioning",
        "why": "AS 15 Para 3(c) includes informal practices giving rise to obligation where enterprise has no realistic alternative but to pay - historical pattern and employee expectations create constructive obligation",
        "priority": "High"
      },
      {
        "id": "AA6.T3",
        "point": "Expected Disposal Gains Not Reducing Provision under AS 29",
        "mistake": "Students reduce restructuring provision by expected gains from disposal of assets linked to restructuring",
        "why": "AS 29 Para 51 explicitly states gains on expected disposal of assets are NOT taken into account in measuring provision, even if closely linked to event giving rise to provision",
        "priority": "High"
      },
      {
        "id": "AA6.T4",
        "point": "Discounting Provisions - General Rule vs Exception",
        "mistake": "Students discount all long-term provisions to present value",
        "why": "AS 29 Para 45 states provisions should NOT be discounted EXCEPT for decommissioning, restoration and similar liabilities recognized as cost of PPE. General provisions use undiscounted expected expenditure",
        "priority": "High"
      },
      {
        "id": "AA6.T5",
        "point": "Short-term vs Long-term Leave Classification Based on Behavioral Pattern",
        "mistake": "Students classify all earned leave as short-term benefit assuming it can be availed within 12 months",
        "why": "AS 15 Para 7.2 and Para 8(b) require both 'falls due' AND 'expected to occur' within 12 months. If 400 days carry forward but pattern shows employees won't avail within 12 months, it's long-term benefit requiring actuarial valuation per Para 129",
        "priority": "Very High"
      }
    ],
    "amendments": [
      {
        "id": "AA6.A1",
        "topic": "AS 15 - Immediate Recognition of Actuarial Gains and Losses",
        "what": "AS 15 (Revised 2005) mandates immediate recognition of actuarial gains and losses in profit and loss statement",
        "oldPosition": "Earlier AS 15 allowed spreading of actuarial gains/losses over average remaining working life of employees (corridor approach)",
        "newPosition": "AS 15 (Revised 2005) Para 93 requires actuarial gains and losses to be recognized immediately in the statement of profit and loss as income or expense",
        "effectiveFrom": "1st April 2006",
        "pdfStatus": "confirmed",
        "priority": "High"
      },
      {
        "id": "AA6.A2",
        "topic": "AS 29 - Discounting of Provisions",
        "what": "AS 29 generally does not require discounting of provisions except for specific liabilities",
        "oldPosition": "General understanding that all long-term provisions should be discounted",
        "newPosition": "AS 29 Para 45 clarifies that provisions should NOT be discounted to present value EXCEPT for decommissioning, restoration and similar liabilities recognized as cost of Property, Plant and Equipment",
        "effectiveFrom": "1st April 2004",
        "pdfStatus": "confirmed",
        "priority": "High"
      },
      {
        "id": "AA6.A3",
        "topic": "SMC Exemptions under AS 15 and AS 29",
        "what": "Small and Medium-sized Companies (SMCs) are provided certain exemptions from AS 15 and AS 29 requirements",
        "oldPosition": "All enterprises required to comply with full requirements",
        "newPosition": "Level II, III, IV enterprises: (a) May not comply with recognition/measurement of non-vesting short-term accumulating compensated absences under AS 15; (b) SMCs exempt from certain disclosure requirements under AS 29 Para 66-67",
        "effectiveFrom": "1st April 2006",
        "pdfStatus": "confirmed",
        "priority": "Medium"
      }
    ],
    "cases": [],
    "trees": []
  },
  {
    "id": "AA7",
    "name": "Accounting Standards Based on Items Impacting Financial Statements",
    "dangerZones": [
      {
        "id": "AA7.DZ1",
        "point": "Adjusting vs Non-adjusting events classification under AS 4",
        "mistake": "Students classify events based on when they occurred rather than whether the condition existed at balance sheet date. For example, treating debtor insolvency after balance sheet date as non-adjusting when the debtor was already in financial difficulty before year-end.",
        "why": "ICAI frequently tests the principle that adjusting events provide evidence of conditions EXISTING at balance sheet date, not when the event physically occurred. The key determinant is existence of condition, not occurrence of event.",
        "priority": "Very High"
      },
      {
        "id": "AA7.DZ2",
        "point": "Prior Period Items vs Change in Accounting Estimate under AS 5",
        "mistake": "Students treat revision of useful life estimates as prior period items and provide for retrospective adjustment. They confuse mathematical errors requiring correction with legitimate estimate revisions based on new information.",
        "why": "ICAI tests whether students understand that prior period items arise from ERRORS or OMISSIONS only, while changes in estimates (like useful life) affect current and future periods prospectively, not retrospectively.",
        "priority": "High"
      },
      {
        "id": "AA7.DZ3",
        "point": "Monetary vs Non-monetary items translation under AS 11",
        "mistake": "Students translate all foreign currency items at closing rate, failing to distinguish that non-monetary items carried at historical cost must use transaction date rate. They also incorrectly translate advances for goods as monetary items.",
        "why": "ICAI tests understanding that only monetary items (cash, receivables, payables) are restated at closing rate. Non-monetary items like fixed assets, inventory at cost, and advances remain at historical rate.",
        "priority": "High"
      },
      {
        "id": "AA7.DZ4",
        "point": "Deferred Tax Asset recognition conditions under AS 22",
        "mistake": "Students create DTA on all timing differences without distinguishing between 'reasonable certainty' requirement for normal cases vs 'virtual certainty supported by convincing evidence' requirement when there are unabsorbed depreciation or carry forward losses.",
        "why": "ICAI specifically tests the stricter recognition criteria for DTA when company has losses. Virtual certainty requires concrete evidence like binding profitable orders, not mere projections.",
        "priority": "Very High"
      },
      {
        "id": "AA7.DZ5",
        "point": "Contingent gains vs contingent losses treatment under AS 4",
        "mistake": "Students apply symmetric treatment to gains and losses. They recognize contingent gains when probability is high, ignoring that gains are never recognized until virtually certain (when it's no longer a contingency).",
        "why": "ICAI tests the prudence concept - contingent losses are provided when likely, but contingent gains are recognized only when virtually certain (i.e., no longer contingent).",
        "priority": "High"
      }
    ],
    "formulaGuide": [
      {
        "id": "AA7.FG1",
        "topic": "Events After Balance Sheet Date - Treatment Decision Tree (AS 4)",
        "nodes": [
          {
            "id": "n1",
            "label": "Did the event occur between Balance Sheet date and approval date?",
            "branches": [
              {
                "label": "Yes",
                "target": "n2"
              },
              {
                "label": "No - Event after approval date",
                "target": "outcomeE"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Did condition giving rise to the event EXIST at Balance Sheet date?",
            "branches": [
              {
                "label": "Yes - Evidence of existing condition",
                "target": "outcomeA"
              },
              {
                "label": "No - New condition arose after Balance Sheet date",
                "target": "n3"
              }
            ]
          },
          {
            "id": "n3",
            "label": "Does the event affect going concern assumption?",
            "branches": [
              {
                "label": "Yes - Going concern threatened",
                "target": "outcomeB"
              },
              {
                "label": "No - Does not affect going concern",
                "target": "n4"
              }
            ]
          },
          {
            "id": "n4",
            "label": "Is the event of such significance that non-disclosure would affect users' decisions?",
            "branches": [
              {
                "label": "Yes - Material for decision making",
                "target": "outcomeC"
              },
              {
                "label": "No - Not significant",
                "target": "outcomeD"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "ADJUSTING EVENT: Adjust assets and liabilities in financial statements. Disclose nature and financial effect.",
            "reference": "AS 4 (Revised) Para 8"
          },
          {
            "id": "outcomeB",
            "label": "NON-ADJUSTING but GOING CONCERN ISSUE: Prepare financial statements on liquidation basis if going concern not valid. Disclose change in basis.",
            "reference": "AS 4 (Revised) Para 13"
          },
          {
            "id": "outcomeC",
            "label": "NON-ADJUSTING EVENT: No adjustment to assets/liabilities. Disclose in Report of Approving Authority (Directors' Report).",
            "reference": "AS 4 (Revised) Para 12"
          },
          {
            "id": "outcomeD",
            "label": "NON-ADJUSTING EVENT: No adjustment required. No disclosure required in financial statements.",
            "reference": "AS 4 (Revised) Para 11"
          },
          {
            "id": "outcomeE",
            "label": "NOT AN EVENT AFTER BALANCE SHEET DATE: Outside scope of AS 4. Will be accounted in subsequent period.",
            "reference": "AS 4 (Revised) Para 3"
          }
        ]
      },
      {
        "id": "AA7.FG2",
        "topic": "Classification of Items in Statement of Profit and Loss (AS 5)",
        "nodes": [
          {
            "id": "n1",
            "label": "What is the nature of the income/expense item?",
            "branches": [
              {
                "label": "Error/omission in prior period financial statements",
                "target": "outcomeA"
              },
              {
                "label": "From ordinary activities of enterprise",
                "target": "n2"
              },
              {
                "label": "Clearly distinct from ordinary activities",
                "target": "n3"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Is the item of such size, nature or incidence requiring separate disclosure?",
            "branches": [
              {
                "label": "Yes - Material unusual item",
                "target": "outcomeB"
              },
              {
                "label": "No - Normal item",
                "target": "outcomeC"
              }
            ]
          },
          {
            "id": "n3",
            "label": "Is the event expected to recur frequently or regularly?",
            "branches": [
              {
                "label": "Yes - Recurring",
                "target": "outcomeC"
              },
              {
                "label": "No - Infrequent/Non-recurring",
                "target": "outcomeD"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "PRIOR PERIOD ITEM: Separately disclose nature and amount in Statement of P&L so impact on current profit is perceived.",
            "reference": "AS 5 Para 15-16"
          },
          {
            "id": "outcomeB",
            "label": "EXCEPTIONAL ITEM (within ordinary activities): Separately disclose nature and amount. Examples: inventory write-down, restructuring costs, litigation settlements.",
            "reference": "AS 5 Para 12-14"
          },
          {
            "id": "outcomeC",
            "label": "ORDINARY ITEM: Include in profit/loss from ordinary activities. No special disclosure required.",
            "reference": "AS 5 Para 10"
          },
          {
            "id": "outcomeD",
            "label": "EXTRAORDINARY ITEM: Separately disclose nature and amount as part of net profit/loss. Examples: earthquake loss, property attachment.",
            "reference": "AS 5 Para 11-12"
          }
        ]
      },
      {
        "id": "AA7.FG3",
        "topic": "Foreign Currency Transaction - Reporting at Balance Sheet Date (AS 11)",
        "nodes": [
          {
            "id": "n1",
            "label": "What type of item is being reported?",
            "branches": [
              {
                "label": "Monetary item (cash, receivables, payables, loans)",
                "target": "outcomeA"
              },
              {
                "label": "Non-monetary item",
                "target": "n2"
              }
            ]
          },
          {
            "id": "n2",
            "label": "How is the non-monetary item carried?",
            "branches": [
              {
                "label": "At historical cost",
                "target": "outcomeB"
              },
              {
                "label": "At fair value or revalued amount",
                "target": "outcomeC"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "Report using CLOSING RATE. Exchange difference to P&L (or capitalize for long-term items relating to depreciable assets under Para 46A option).",
            "reference": "AS 11 Para 11(a)"
          },
          {
            "id": "outcomeB",
            "label": "Report using TRANSACTION DATE RATE (historical rate). No exchange difference arises.",
            "reference": "AS 11 Para 11(b)"
          },
          {
            "id": "outcomeC",
            "label": "Report using RATE AT VALUATION DATE. Exchange difference treated as per revaluation policy.",
            "reference": "AS 11 Para 11(c)"
          }
        ]
      },
      {
        "id": "AA7.FG4",
        "topic": "Deferred Tax Asset Recognition Decision Tree (AS 22)",
        "nodes": [
          {
            "id": "n1",
            "label": "What type of difference exists between accounting income and taxable income?",
            "branches": [
              {
                "label": "Permanent difference",
                "target": "outcomeA"
              },
              {
                "label": "Timing difference",
                "target": "n2"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Does timing difference result in future tax benefit (DTA) or liability (DTL)?",
            "branches": [
              {
                "label": "Future tax payable - DTL",
                "target": "outcomeB"
              },
              {
                "label": "Future tax recoverable - DTA",
                "target": "n3"
              }
            ]
          },
          {
            "id": "n3",
            "label": "Does enterprise have unabsorbed depreciation or carry forward losses?",
            "branches": [
              {
                "label": "No unabsorbed losses",
                "target": "n4"
              },
              {
                "label": "Yes - Has unabsorbed depreciation/losses",
                "target": "n5"
              }
            ]
          },
          {
            "id": "n4",
            "label": "Is there reasonable certainty of future taxable income?",
            "branches": [
              {
                "label": "Yes - Reasonable certainty exists",
                "target": "outcomeC"
              },
              {
                "label": "No - Uncertain",
                "target": "outcomeD"
              }
            ]
          },
          {
            "id": "n5",
            "label": "Is there virtual certainty supported by convincing evidence of future taxable income?",
            "branches": [
              {
                "label": "Yes - Virtual certainty with convincing evidence",
                "target": "outcomeC"
              },
              {
                "label": "No - Only projections/forecasts",
                "target": "outcomeD"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "NO DEFERRED TAX: Permanent differences do not result in DTA or DTL. Only affects current tax.",
            "reference": "AS 22 Para 15"
          },
          {
            "id": "outcomeB",
            "label": "RECOGNIZE DTL: No preconditions. Recognize full DTL at applicable tax rate.",
            "reference": "AS 22 Para 15"
          },
          {
            "id": "outcomeC",
            "label": "RECOGNIZE DTA: Record DTA at applicable tax rate. Review at each balance sheet date.",
            "reference": "AS 22 Para 15-17"
          },
          {
            "id": "outcomeD",
            "label": "DO NOT RECOGNIZE DTA: Insufficient certainty. Re-assess at each balance sheet date.",
            "reference": "AS 22 Para 17"
          }
        ]
      },
      {
        "id": "AA7.FG5",
        "topic": "Foreign Operations Classification and Translation (AS 11)",
        "nodes": [
          {
            "id": "n1",
            "label": "What is the nature of the foreign operation?",
            "branches": [
              {
                "label": "Extension of reporting enterprise (dependent branch)",
                "target": "n2"
              },
              {
                "label": "Operates with significant autonomy",
                "target": "n3"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Are transactions/cash flows directly affected by parent?",
            "branches": [
              {
                "label": "Yes - High proportion with parent",
                "target": "outcomeA"
              },
              {
                "label": "No - Independent operations",
                "target": "n3"
              }
            ]
          },
          {
            "id": "n3",
            "label": "Is operation financed from local borrowings and settles in local currency?",
            "branches": [
              {
                "label": "Yes - Self-sustaining",
                "target": "outcomeB"
              },
              {
                "label": "No - Dependent on parent financing",
                "target": "outcomeA"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "INTEGRAL FOREIGN OPERATION: Translate as if transactions entered by reporting enterprise. Monetary at closing rate, non-monetary at historical rate. Exchange difference to P&L.",
            "reference": "AS 11 Para 24-26"
          },
          {
            "id": "outcomeB",
            "label": "NON-INTEGRAL FOREIGN OPERATION: All assets/liabilities at closing rate, income/expenses at transaction date rate (or average). Exchange difference to Foreign Currency Translation Reserve until disposal.",
            "reference": "AS 11 Para 27-31"
          }
        ]
      }
    ],
    "flashcards": [
      {
        "id": "AA7.FC1",
        "front": "Contingency (AS 4)",
        "back": "Contingency is a condition or situation, the ultimate outcome of which, gain or loss, will be known or determined only on the occurrence, or non-occurrence, of one or more uncertain future events.",
        "section": "AS 4 (Revised) Para 4.2"
      },
      {
        "id": "AA7.FC2",
        "front": "Adjusting Events (AS 4)",
        "back": "Those which provide further evidence of conditions that existed at the balance sheet date. For example, a trade receivable declared insolvent after reporting date and unable to pay full amount against whom provision for doubtful debt was created.",
        "section": "AS 4 (Revised) Para 8"
      },
      {
        "id": "AA7.FC3",
        "front": "Non-adjusting Events (AS 4)",
        "back": "Those which are indicative of conditions that arose subsequent to the balance sheet date. For example, plant got damaged due to occurrence of fire.",
        "section": "AS 4 (Revised) Para 11"
      },
      {
        "id": "AA7.FC4",
        "front": "Prior Period Items (AS 5)",
        "back": "Prior period items are income or expenses which arise in the current period as a result of errors or omissions in the preparation of the financial statements of one or more prior periods.",
        "section": "AS 5 Para 4"
      },
      {
        "id": "AA7.FC5",
        "front": "Extraordinary Items (AS 5)",
        "back": "Income or expenses that arise from events or transactions that are clearly distinct from the ordinary activities of the enterprise and, therefore, are not expected to recur frequently or regularly.",
        "section": "AS 5 Para 5"
      },
      {
        "id": "AA7.FC6",
        "front": "Monetary Items (AS 11)",
        "back": "Monetary items are money held and assets and liabilities to be received or paid in fixed or determinable amounts of money. For example, cash, receivables and payables.",
        "section": "AS 11 Para 3"
      },
      {
        "id": "AA7.FC7",
        "front": "Non-monetary Items (AS 11)",
        "back": "Non-monetary items are assets and liabilities other than monetary items. For example, fixed assets, advances for purchase of goods/fixed assets, inventories and investments in equity shares.",
        "section": "AS 11 Para 3"
      },
      {
        "id": "AA7.FC8",
        "front": "Integral Foreign Operation (AS 11)",
        "back": "A foreign operation, the activities of which are an integral part of those of the reporting enterprise. A foreign operation that is integral to the operations of the reporting enterprise carries on its business as if it were an extension of the reporting enterprise's operations.",
        "section": "AS 11 Para 3"
      },
      {
        "id": "AA7.FC9",
        "front": "Timing Differences (AS 22)",
        "back": "Timing differences are the differences between taxable income and accounting income for a period that originate in one period and are capable of reversal in one or more subsequent periods.",
        "section": "AS 22 Para 4"
      },
      {
        "id": "AA7.FC10",
        "front": "Permanent Differences (AS 22)",
        "back": "Permanent differences are the differences between taxable income and accounting income for a period that originate in one period and do not reverse subsequently.",
        "section": "AS 22 Para 4"
      },
      {
        "id": "AA7.FC11",
        "front": "Virtual Certainty for DTA Recognition (AS 22)",
        "back": "Virtual certainty refers to the extent of certainty, which, for all practical purposes, can be considered certain. Virtual certainty cannot be based merely on forecasts of performance such as business plans. It should be supported by convincing evidence available at the reporting date in a concrete form, for example, a profitable binding export order.",
        "section": "AS 22 Explanation"
      },
      {
        "id": "AA7.FC12",
        "front": "Dividend Declared After Balance Sheet Date (AS 4)",
        "back": "If dividends are declared after the balance sheet date but before the financial statements are approved, the dividends are not recognised as a liability at the balance sheet date because no obligation exists at that time unless a statute requires otherwise. Such dividends are disclosed in the notes.",
        "section": "AS 4 (Revised) Para 12"
      }
    ],
    "practiceProblems": [
      {
        "id": "AA7.PP1",
        "title": "Deferred Tax Computation with Timing Differences",
        "difficulty": 3,
        "problem": "Delta Ltd. provides the following information for FY 2024-25:\nDepreciation as per books: ₹8,00,000\nDepreciation as per Income Tax Act: ₹12,00,000\nProvision for doubtful debts (not allowed under IT Act): ₹1,50,000\nDonation to political party (disallowed): ₹50,000\nThere is adequate evidence of future profit sufficiency. Tax rate is 30%.\nCompute the deferred tax asset/liability to be recognized.",
        "steps": [
          "Identify timing vs permanent differences: Excess tax depreciation (₹12,00,000 - ₹8,00,000 = ₹4,00,000) is timing difference. Provision for doubtful debts (₹1,50,000) is timing difference. Donation to political party (₹50,000) is permanent difference.",
          "Calculate net timing difference: Excess tax depreciation creates DTL = ₹4,00,000. Provision for doubtful debts creates DTA = ₹1,50,000. Net timing difference resulting in DTL = ₹4,00,000 - ₹1,50,000 = ₹2,50,000.",
          "Apply tax rate: Net Deferred Tax Liability = ₹2,50,000 × 30% = ₹75,000.",
          "Permanent difference of ₹50,000 donation has no deferred tax impact - affects only current tax."
        ],
        "answer": "Net Deferred Tax Liability = ₹75,000. The excess depreciation under tax laws creates DTL of ₹1,20,000 and provision for doubtful debts creates DTA of ₹45,000, resulting in net DTL of ₹75,000.",
        "topic": "AS 22 - Deferred Tax"
      },
      {
        "id": "AA7.PP2",
        "title": "Foreign Currency Transaction with Forward Contract",
        "difficulty": 4,
        "problem": "Sigma Ltd. purchased machinery from USA for US$ 2,00,000 on 1st January 2025, payable after 4 months. The company entered into a forward contract for 4 months at ₹84.50 per dollar. Exchange rates: 1st January 2025: ₹83.00 per dollar; 31st March 2025 (Balance Sheet date): ₹85.00 per dollar; 1st May 2025 (payment date): ₹85.50 per dollar. Calculate the loss/gain on forward contract to be recognized in FY 2024-25 and FY 2025-26.",
        "steps": [
          "Calculate premium on forward contract: Forward Rate ₹84.50 - Spot Rate ₹83.00 = ₹1.50 per dollar (premium/loss). Total premium = US$ 2,00,000 × ₹1.50 = ₹3,00,000.",
          "Amortize premium over contract period: Contract period = 4 months. FY 2024-25 (Jan-Mar) = 3 months. Loss to be recognized in FY 2024-25 = ₹3,00,000 × 3/4 = ₹2,25,000.",
          "Loss to be recognized in FY 2025-26 (April): ₹3,00,000 × 1/4 = ₹75,000.",
          "Note: The machinery is recorded at spot rate ₹83.00 = ₹1,66,00,000. Creditor at 31st March restated at closing rate but hedged by forward contract."
        ],
        "answer": "Loss on forward contract: FY 2024-25 = ₹2,25,000; FY 2025-26 = ₹75,000. Total premium of ₹3,00,000 is amortized over 4 months life of contract as per AS 11.",
        "topic": "AS 11 - Forward Exchange Contract"
      },
      {
        "id": "AA7.PP3",
        "title": "Events After Balance Sheet Date Classification",
        "difficulty": 3,
        "problem": "Omega Ltd. has year ending 31st March 2025. Financial statements approved on 15th June 2025. Following events occurred:\n(a) Trade receivable of ₹25 lakhs declared insolvent on 20th April 2025. The debtor was in financial difficulty since January 2025.\n(b) Fire destroyed warehouse on 10th May 2025 causing loss of ₹80 lakhs.\n(c) Company declared dividend of ₹2 per share on 1st June 2025.\nClassify each event and state accounting treatment.",
        "steps": [
          "Event (a) - Debtor insolvency: Condition of financial difficulty existed at balance sheet date (January 2025). This is an ADJUSTING EVENT. Adjust provision for doubtful debts to reflect full ₹25 lakhs as bad debt in FY 2024-25 financial statements.",
          "Event (b) - Fire loss: Condition did not exist at balance sheet date. Fire is a new event arising after balance sheet date. This is NON-ADJUSTING EVENT. No adjustment to financial statements. Disclose in Directors' Report with estimated loss of ₹80 lakhs.",
          "Event (c) - Dividend declared: As per AS 4 (Revised) and Companies Act amendment, dividend declared after balance sheet date is NOT recognized as liability. It is a NON-ADJUSTING EVENT. Disclose in notes to accounts only.",
          "Summarize: Adjusting - (a) ₹25 lakhs bad debt; Non-adjusting requiring disclosure - (b) ₹80 lakhs fire loss; Non-adjusting with note disclosure - (c) Proposed dividend."
        ],
        "answer": "(a) Adjusting event - Provide full ₹25 lakhs as bad debt in FY 2024-25. (b) Non-adjusting event - Disclose ₹80 lakhs loss in Directors' Report. (c) Non-adjusting - Disclose dividend in notes, no liability recognition.",
        "topic": "AS 4 - Events After Balance Sheet Date"
      },
      {
        "id": "AA7.PP4",
        "title": "Integral Foreign Branch Translation",
        "difficulty": 4,
        "problem": "Alpha Ltd. (India) has an integral foreign branch in UK. Branch Trial Balance as on 31st March 2025 shows: Machinery (purchased 1st April 2023): £50,000; Debtors: £15,000; Stock (at cost): £8,000; Creditors: £12,000; Cash: £5,000. Exchange rates: 1st April 2023: ₹100; 31st March 2025: ₹105; Average rate 2024-25: ₹103. Translate the balance sheet items.",
        "steps": [
          "Monetary items at closing rate: Debtors £15,000 × ₹105 = ₹15,75,000. Creditors £12,000 × ₹105 = ₹12,60,000. Cash £5,000 × ₹105 = ₹5,25,000.",
          "Non-monetary items at historical/transaction rate: Machinery £50,000 × ₹100 (purchase date rate) = ₹50,00,000. Stock at cost £8,000 × transaction date rate (assume average) = £8,000 × ₹103 = ₹8,24,000.",
          "Exchange difference on monetary items goes to P&L as per AS 11 for integral operations.",
          "Summary: Machinery ₹50,00,000; Debtors ₹15,75,000; Stock ₹8,24,000; Cash ₹5,25,000; Creditors ₹12,60,000."
        ],
        "answer": "Translated values: Machinery ₹50,00,000 (historical rate); Debtors ₹15,75,000; Cash ₹5,25,000; Stock ₹8,24,000; Creditors ₹12,60,000 (all monetary items at closing rate ₹105). Exchange differences on monetary items recognized in P&L.",
        "topic": "AS 11 - Integral Foreign Operations"
      },
      {
        "id": "AA7.PP5",
        "title": "Deferred Tax with Carry Forward Losses",
        "difficulty": 5,
        "problem": "Beta Ltd. has the following position for FY 2024-25:\nAccounting Loss: ₹50,00,000\nTax Loss (including unabsorbed depreciation ₹20,00,000): ₹70,00,000\nTiming difference on depreciation creating potential DTA: ₹15,00,000\nThe company has a binding export order worth ₹200 crores with 25% margin to be executed in FY 2025-26.\nTax rate: 25%. Should DTA be recognized?",
        "steps": [
          "Identify the situation: Company has unabsorbed depreciation of ₹20,00,000 and carry forward tax loss. AS 22 requires 'virtual certainty supported by convincing evidence' for DTA recognition in such cases.",
          "Evaluate evidence: Binding export order of ₹200 crores with 25% margin = ₹50 crores expected profit. This is convincing evidence as it's a concrete binding order, not mere projection.",
          "Check sufficiency: Tax losses ₹70,00,000 + DTA on timing difference ₹15,00,000 × 25% = ₹3,75,000. Total DTA = ₹70,00,000 × 25% + ₹3,75,000 = ₹17,50,000 + ₹3,75,000 = ₹21,25,000. Future profit ₹50 crores is more than sufficient.",
          "Conclusion: Virtual certainty with convincing evidence exists. DTA of ₹21,25,000 should be recognized."
        ],
        "answer": "DTA of ₹21,25,000 should be recognized. Binding export order constitutes convincing evidence providing virtual certainty of sufficient future taxable income as per AS 22 explanation on virtual certainty.",
        "topic": "AS 22 - DTA with Losses"
      }
    ],
    "caseMCQs": {
      "scenario": "Zenith Manufacturing Ltd. (FY ending 31st March 2025) has the following situations:\n\n1. Foreign currency loan of US$ 5,00,000 taken on 1st October 2024 for purchase of plant. Exchange rates: 1st Oct 2024: ₹82; 31st March 2025: ₹85; Plant useful life: 10 years.\n\n2. Theft of inventory worth ₹12 lakhs occurred in February 2025 but detected in May 2025 before approval of accounts on 15th June 2025.\n\n3. Depreciation: Books ₹40,00,000; Tax ₹55,00,000. Provision for warranty (allowed on payment): ₹8,00,000. Penalty for tax default: ₹2,00,000. Tax rate 30%.",
      "questions": [
        {
          "id": "AA7.CQ1",
          "q": "What is the exchange difference on the foreign currency loan to be recognized in FY 2024-25, assuming company has NOT opted for Para 46A?",
          "opts": [
            "₹15,00,000 charged to P&L as expense",
            "₹15,00,000 capitalized to Plant cost",
            "₹7,50,000 charged to P&L (proportionate)",
            "No exchange difference as it's long-term loan"
          ],
          "ans": 0,
          "exp": "Under AS 11 Para 13, exchange differences on monetary items are recognized in P&L when Para 46A option is not exercised. Difference = US$ 5,00,000 × (₹85 - ₹82) = ₹15,00,000, fully charged to P&L.",
          "type": "Trap",
          "diff": 3
        },
        {
          "id": "AA7.CQ2",
          "q": "How should the theft of inventory worth ₹12 lakhs be treated in FY 2024-25 financial statements?",
          "opts": [
            "Non-adjusting event - disclose in Directors' Report only",
            "Adjusting event - reduce inventory and recognize loss of ₹12,00,000 in FY 2024-25",
            "Prior period item requiring restatement",
            "Extraordinary item with separate disclosure"
          ],
          "ans": 1,
          "exp": "As per AS 4 (Revised), theft occurred in February 2025 (before balance sheet date), so the condition existed at balance sheet date. Detection in May 2025 provides evidence of this existing condition. This is an adjusting event requiring adjustment of ₹12,00,000 in FY 2024-25.",
          "type": "Concept",
          "diff": 2
        },
        {
          "id": "AA7.CQ3",
          "q": "What is the net Deferred Tax Liability/(Asset) to be recognized for FY 2024-25?",
          "opts": [
            "DTL ₹4,50,000",
            "DTL ₹2,10,000",
            "DTA ₹2,10,000",
            "DTL ₹6,90,000"
          ],
          "ans": 1,
          "exp": "Timing differences: Excess tax depreciation (₹55L - ₹40L = ₹15L) creates DTL. Warranty provision ₹8L creates DTA. Net timing difference = ₹15L - ₹8L = ₹7L (DTL). Penalty ₹2L is permanent difference (no DT impact). Net DTL = ₹7,00,000 × 30% = ₹2,10,000.",
          "type": "Trap",
          "diff": 3
        },
        {
          "id": "AA7.CQ4",
          "q": "If company opts for Para 46A for the foreign currency loan, what is the revised carrying amount of Plant as on 31st March 2025?",
          "opts": [
            "₹4,10,00,000",
            "₹4,25,00,000",
            "₹4,23,75,000",
            "₹4,08,50,000"
          ],
          "ans": 2,
          "exp": "Initial cost = US$ 5,00,000 × ₹82 = ₹4,10,00,000. Exchange difference capitalized = ₹15,00,000. Revised cost = ₹4,25,00,000. Depreciation for 6 months (Oct-Mar) on revised cost = ₹4,25,00,000 × 1/10 × 6/12 = ₹2,12,500. Less accumulated depreciation: ₹4,25,00,000 - ₹1,25,000 (original 6 months) = Wait, recalculate: Depreciation on ₹4,25,00,000 for 6 months = ₹4,25,00,000/10 × 6/12 = ₹2,12,500. Carrying amount = ₹4,25,00,000 - ₹1,25,000 = ₹4,23,75,000.",
          "type": "Amendment",
          "diff": 4,
          "_warning": true
        }
      ]
    },
    "mcqs": [
      {
        "id": "AA7.Q1",
        "q": "Under AS 4 (Revised), which of the following is an adjusting event for financial statements for year ended 31st March 2025 (approved on 30th May 2025)?",
        "opts": [
          "Major fire destroying warehouse on 15th April 2025",
          "Court judgment on 20th April 2025 confirming liability for case pending since December 2024",
          "Declaration of final dividend on 25th April 2025",
          "Acquisition of subsidiary announced on 10th May 2025"
        ],
        "ans": 1,
        "exp": "Court judgment confirms a liability that existed at balance sheet date (case was pending since December 2024). This provides additional evidence of condition existing at balance sheet date, making it an adjusting event under AS 4 (Revised).",
        "type": "Concept",
        "diff": 2
      },
      {
        "id": "AA7.Q2",
        "q": "A company changed its depreciation method from WDV to SLM resulting in excess depreciation of ₹5,00,000 for prior years. This should be treated as:",
        "opts": [
          "Prior period item with retrospective adjustment",
          "Change in accounting estimate affecting current and future periods only",
          "Extraordinary item requiring separate disclosure",
          "Change in accounting policy with retrospective restatement"
        ],
        "ans": 1,
        "exp": "As per AS 5 Para 21, when it is difficult to distinguish between change in accounting policy and change in accounting estimate, the change is treated as change in accounting estimate. Change in depreciation method affects current and future periods prospectively.",
        "type": "Trap",
        "diff": 3
      },
      {
        "id": "AA7.Q3",
        "q": "Under AS 11, advance paid of US$ 10,000 for purchase of machinery when exchange rate was ₹83 should be reported at balance sheet date when closing rate is ₹85 at:",
        "opts": [
          "₹8,50,000 (closing rate)",
          "₹8,30,000 (transaction date rate)",
          "₹8,40,000 (average rate)",
          "₹8,50,000 with exchange gain of ₹20,000"
        ],
        "ans": 1,
        "exp": "Advance for purchase of machinery is a non-monetary item as per AS 11. Non-monetary items carried at historical cost are reported using exchange rate at transaction date. No exchange difference arises on non-monetary items.",
        "type": "Trap",
        "diff": 3
      },
      {
        "id": "AA7.Q4",
        "q": "A company has accounting profit of ₹100 lakhs and taxable profit of ₹80 lakhs due to excess tax depreciation. If tax rate is 25%, the deferred tax impact is:",
        "opts": [
          "Deferred Tax Asset of ₹5,00,000",
          "Deferred Tax Liability of ₹5,00,000",
          "Deferred Tax Asset of ₹20,00,000",
          "No deferred tax as accounting profit is higher"
        ],
        "ans": 1,
        "exp": "Timing difference = ₹100L - ₹80L = ₹20L. Taxable profit is lower due to higher tax depreciation. This creates future tax payable when book depreciation exceeds tax depreciation. DTL = ₹20,00,000 × 25% = ₹5,00,000.",
        "type": "Concept",
        "diff": 2
      },
      {
        "id": "AA7.Q5",
        "q": "Exchange differences on translation of non-integral foreign operation's assets and liabilities should be:",
        "opts": [
          "Recognized in Statement of Profit and Loss immediately",
          "Accumulated in Foreign Currency Translation Reserve until disposal",
          "Adjusted against cost of assets",
          "Transferred to General Reserve annually"
        ],
        "ans": 1,
        "exp": "As per AS 11 Para 29, all exchange differences arising on translation of non-integral foreign operation should be accumulated in Foreign Currency Translation Reserve (a separate component of shareholders' funds) until disposal of the net investment.",
        "type": "Concept",
        "diff": 2
      },
      {
        "id": "AA7.Q6",
        "q": "Under AS 5, losses sustained due to earthquake for a manufacturing company should be classified as:",
        "opts": [
          "Ordinary activity requiring no special disclosure",
          "Prior period item",
          "Extraordinary item with separate disclosure of nature and amount",
          "Exceptional item within profit from ordinary activities"
        ],
        "ans": 2,
        "exp": "As per AS 5 Para 11, earthquake losses qualify as extraordinary items for most enterprises as they are clearly distinct from ordinary activities and not expected to recur frequently. Nature and amount must be separately disclosed.",
        "type": "Concept",
        "diff": 1
      },
      {
        "id": "AA7.Q7",
        "q": "For deferred tax measurement when company pays tax under Section 115JB (MAT), the tax rate to be used is:",
        "opts": [
          "MAT rate as it is the current tax rate",
          "Regular tax rate as per Income Tax Act",
          "Higher of MAT rate and regular tax rate",
          "Weighted average of MAT and regular rate"
        ],
        "ans": 1,
        "exp": "As per AS 22 Explanation on Section 115JB, deferred tax assets and liabilities should be measured using regular tax rates and not MAT rate, even when company pays tax under MAT in current period. MAT payment is treated as current tax.",
        "type": "Amendment",
        "diff": 3
      },
      {
        "id": "AA7.Q8",
        "q": "Post-dated cheques received from customers bearing date 31st March but received on 5th April should be:",
        "opts": [
          "Recognized as cash and cash equivalents on 31st March",
          "Not recognized as asset on 31st March as company has no control",
          "Recognized as trade receivables on 31st March",
          "Disclosed as contingent asset"
        ],
        "ans": 1,
        "exp": "As per AS 4 (Revised) example, cheques received after 31st March do not represent condition existing on that date. Company acquires custody after balance sheet date, hence has no control on 31st March. Cannot be recognized as asset.",
        "type": "Trap",
        "diff": 3
      }
    ],
    "tricky": [
      {
        "id": "AA7.1",
        "point": "Detection date vs occurrence date for adjusting events",
        "mistake": "Students classify theft/fraud based on when it was detected (after balance sheet date) rather than when it occurred. If theft occurred before balance sheet date but detected after, it is still an adjusting event.",
        "why": "ICAI tests understanding that the key criterion is when the CONDITION existed, not when it was discovered. AS 4 Para 8.1 states adjusting events 'provide further evidence of conditions that existed at balance sheet date'.",
        "priority": "High"
      },
      {
        "id": "AA7.2",
        "point": "Advances for goods/assets are non-monetary items",
        "mistake": "Students treat advances paid in foreign currency as monetary items and restate at closing rate, creating exchange differences. Advances for purchase of goods or assets are non-monetary as they represent right to receive goods, not cash.",
        "why": "AS 11 specifically defines monetary items as 'assets to be received in fixed amounts of money'. Advance for goods gives right to receive goods, not money. ICAI frequently tests this distinction.",
        "priority": "High"
      },
      {
        "id": "AA7.3",
        "point": "Virtual certainty vs reasonable certainty for DTA",
        "mistake": "Students apply same 'reasonable certainty' test for all DTA recognition. When company has unabsorbed depreciation or carry forward losses, the stricter 'virtual certainty supported by convincing evidence' test applies.",
        "why": "AS 22 Para 17 has specific requirement for losses situation. Projections and business plans are NOT convincing evidence. Only concrete evidence like binding profitable orders qualifies.",
        "priority": "Very High"
      },
      {
        "id": "AA7.4",
        "point": "Permanent differences have no deferred tax impact",
        "mistake": "Students calculate deferred tax on all differences between accounting and taxable income. Permanent differences like penalties, donations to political parties, exempt income never reverse and affect only current tax.",
        "why": "AS 22 Para 15 clearly states 'Permanent differences do not result in deferred tax assets or deferred tax liabilities'. They should be excluded from DT computation.",
        "priority": "High"
      },
      {
        "id": "AA7.5",
        "point": "Writing off old creditors is not a prior period item",
        "mistake": "Students treat write-off of old outstanding balances as prior period items because they originated in earlier years. However, this is not an error or omission - it's a current year decision based on current assessment.",
        "why": "AS 5 defines prior period items as arising from 'errors or omissions' only. Management decision to write off old balance in current year based on current facts is not an error of prior period.",
        "priority": "High"
      },
      {
        "id": "AA7.6",
        "point": "Contingent gains never recognized until virtually certain",
        "mistake": "Students recognize contingent gains when probability is 'likely' or 'probable', applying same threshold as contingent losses. Contingent gains are recognized only when virtually certain (no longer a contingency).",
        "why": "AS 4 Para 10 states 'when realisation of a gain is virtually certain, then such gain is not a contingency and accounting for the gain is appropriate'. This reflects prudence concept.",
        "priority": "High"
      }
    ],
    "amendments": [
      {
        "id": "AA7.A1",
        "topic": "Proposed Dividend Treatment under AS 4",
        "what": "Dividends declared after balance sheet date not recognized as liability",
        "oldPosition": "Prior to amendment, proposed dividend was shown as appropriation of profits and recognized as liability in the year to which it related even if declared after balance sheet date.",
        "newPosition": "As per Companies (Accounting Standards) Amendment Rules, 2016 dated 30 March 2016, if dividends are declared after the balance sheet date but before financial statements are approved, they are not recognised as a liability at balance sheet date. Such dividends are disclosed in notes to accounts only.",
        "effectiveFrom": "Financial year 2016-17 onwards",
        "pdfStatus": "confirmed",
        "priority": "High"
      },
      {
        "id": "AA7.A2",
        "topic": "Para 46A Option for Long-term Foreign Currency Monetary Items",
        "what": "Exchange differences on long-term FC items can be capitalized or accumulated in FCMITDA",
        "oldPosition": "All exchange differences on monetary items to be recognized in P&L in the period in which they arise as per AS 11 Para 13.",
        "newPosition": "Under Para 46A (inserted by Companies Accounting Standards Amendment Rules 2011), for accounting periods from 1st April 2011, exchange differences on long-term foreign currency monetary items: (a) relating to depreciable assets - can be added to/deducted from cost of asset; (b) other cases - can be accumulated in FCMITDA and amortised over balance period of asset/liability. Option is irrevocable.",
        "effectiveFrom": "1st April 2011",
        "pdfStatus": "confirmed",
        "priority": "Very High"
      },
      {
        "id": "AA7.A3",
        "topic": "AS 4 Contingencies Paragraphs - Limited Applicability",
        "what": "Contingencies paragraphs of AS 4 apply only where AS 29 does not cover",
        "oldPosition": "AS 4 dealt comprehensively with all contingencies including provisions, contingent liabilities and contingent assets.",
        "newPosition": "As per Companies (Accounting Standards) Amendment Rules, 2016, all paragraphs of AS 4 (Revised) dealing with contingencies are applicable only to the extent not covered by other Accounting Standards. For example, impairment of financial assets (provision for bad debts) is governed by AS 4, while other provisions and contingent liabilities are governed by AS 29.",
        "effectiveFrom": "30 March 2016",
        "pdfStatus": "confirmed",
        "priority": "High"
      },
      {
        "id": "AA7.A4",
        "topic": "Remittance from Non-integral Foreign Operation",
        "what": "Repatriation of accumulated profits does not constitute disposal",
        "oldPosition": "Position on whether remittance from non-integral foreign operation constitutes disposal was not explicitly clarified.",
        "newPosition": "As per MCA notification dated 18th June 2018, remittance from a non-integral foreign operation by way of repatriation of accumulated profits does not form part of a disposal unless it constitutes return of the investment. This clarifies that normal dividend/profit remittances do not trigger release of FCTR to P&L.",
        "effectiveFrom": "18th June 2018",
        "pdfStatus": "confirmed",
        "priority": "High"
      }
    ],
    "cases": [],
    "trees": []
  }
]