export const P2_DATA = [
  {
    "id": "P2C1",
    "name": "Preliminary - Companies Act, 2013",
    "dangerZones": [
      {
        "id": "P2C1.DZ1",
        "point": "Small Company definition requires BOTH paid-up capital ≤ ₹4 crore AND turnover ≤ ₹40 crore - not either/or",
        "mistake": "Students assume meeting one threshold qualifies as small company, ignoring that both conditions must be satisfied simultaneously",
        "why": "ICAI tests the conjunctive nature of Section 2(85) - the word 'and' between the two criteria is frequently overlooked",
        "priority": "Very High"
      },
      {
        "id": "P2C1.DZ2",
        "point": "Subsidiary of a public company is deemed public company even if its articles say 'private'",
        "mistake": "Students wrongly classify a private company subsidiary of public company as private, attempting to claim private company exemptions",
        "why": "Section 2(71) proviso creates a deemed public company status that overrides the articles - tests understanding of legal fiction",
        "priority": "High"
      },
      {
        "id": "P2C1.DZ3",
        "point": "Associate company requires 'significant influence' of at least 20% voting power - NOT 50%+ which creates subsidiary",
        "mistake": "Students confuse subsidiary (control/50%+) with associate company (20% significant influence) thresholds",
        "why": "Section 2(6) and 2(87) have distinct thresholds - ICAI tests precise percentage knowledge and the difference between control and influence",
        "priority": "High"
      }
    ],
    "formulaGuide": [
      {
        "id": "P2C1.FG1",
        "topic": "Small Company Classification Decision Tree",
        "nodes": [
          {
            "id": "n1",
            "label": "Is it a public company?",
            "branches": [
              {
                "label": "Yes",
                "target": "outcomeA"
              },
              {
                "label": "No (Private/OPC)",
                "target": "n2"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Is it a holding company or subsidiary company?",
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
            "label": "Is it registered under Section 8 (charitable)?",
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
            "label": "Is it governed by any special Act?",
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
            "label": "Is paid-up capital ≤ ₹4 crore AND turnover ≤ ₹40 crore?",
            "branches": [
              {
                "label": "Both Yes",
                "target": "outcomeB"
              },
              {
                "label": "Either/Both No",
                "target": "outcomeA"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "NOT a Small Company - cannot avail small company benefits",
            "reference": "Section 2(85) - Proviso and main definition"
          },
          {
            "id": "outcomeB",
            "label": "Qualifies as Small Company - eligible for relaxations",
            "reference": "Section 2(85) read with Companies (Specification of Definitions Details) Rules, 2014"
          }
        ]
      },
      {
        "id": "P2C1.FG2",
        "topic": "Holding-Subsidiary-Associate Relationship Classification",
        "nodes": [
          {
            "id": "n1",
            "label": "Does Company A control composition of Board of Directors of Company B?",
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
            "label": "Does Company A exercise/control >50% total voting power in Company B?",
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
            "label": "Does Company A have ≥20% total voting power OR control/participation in business decisions?",
            "branches": [
              {
                "label": "Yes",
                "target": "outcomeB"
              },
              {
                "label": "No",
                "target": "outcomeC"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "B is SUBSIDIARY of A; A is HOLDING company of B",
            "reference": "Section 2(87) and Section 2(46)"
          },
          {
            "id": "outcomeB",
            "label": "B is ASSOCIATE company of A (significant influence exists)",
            "reference": "Section 2(6) - Explanation (a)"
          },
          {
            "id": "outcomeC",
            "label": "No holding-subsidiary-associate relationship exists",
            "reference": "Section 2(6), 2(46), 2(87)"
          }
        ]
      },
      {
        "id": "P2C1.FG3",
        "topic": "Financial Year Determination for New Companies",
        "nodes": [
          {
            "id": "n1",
            "label": "When was the company incorporated?",
            "branches": [
              {
                "label": "On or after 1st January",
                "target": "outcomeA"
              },
              {
                "label": "Before 1st January",
                "target": "outcomeB"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "First FY ends on 31st March of FOLLOWING year",
            "reference": "Section 2(41)"
          },
          {
            "id": "outcomeB",
            "label": "First FY ends on 31st March of SAME year",
            "reference": "Section 2(41)"
          }
        ]
      }
    ],
    "flashcards": [
      {
        "id": "P2C1.FC1",
        "front": "Company [Section 2(20)]",
        "back": "Company means a company incorporated under this Act or under any previous company law",
        "section": "Section 2(20)"
      },
      {
        "id": "P2C1.FC2",
        "front": "Associate Company [Section 2(6)]",
        "back": "Associate company, in relation to another company, means a company in which that other company has a significant influence, but which is not a subsidiary company of the company having such influence and includes a joint venture company. Significant influence means control of at least twenty per cent of total voting power, or control of or participation in business decisions under an agreement",
        "section": "Section 2(6)"
      },
      {
        "id": "P2C1.FC3",
        "front": "Subsidiary Company [Section 2(87)]",
        "back": "Subsidiary company or Subsidiary, in relation to any other company (that is to say the holding company), means a company in which the holding company (i) controls the composition of the Board of Directors; or (ii) exercises or controls more than one-half of the total voting power either at its own or together with one or more of its subsidiary companies",
        "section": "Section 2(87)"
      },
      {
        "id": "P2C1.FC4",
        "front": "Net Worth [Section 2(57)]",
        "back": "Net worth means the aggregate value of the paid-up share capital and all reserves created out of the profits, securities premium account and debit or credit balance of profit and loss account, after deducting the aggregate value of the accumulated losses, deferred expenditure and miscellaneous expenditure not written off, as per the audited balance sheet, but does not include reserves created out of revaluation of assets, write-back of depreciation and amalgamation",
        "section": "Section 2(57)"
      },
      {
        "id": "P2C1.FC5",
        "front": "Government Company [Section 2(45)]",
        "back": "Government company means any company in which not less than 51% of the paid-up share capital is held by the Central Government, or by any State Government or Governments, or partly by the Central Government and partly by one or more State Governments, and includes a company which is a subsidiary company of such a Government company",
        "section": "Section 2(45)"
      },
      {
        "id": "P2C1.FC6",
        "front": "One Person Company [Section 2(62)]",
        "back": "One Person Company means a company which has only one person as a member",
        "section": "Section 2(62)"
      },
      {
        "id": "P2C1.FC7",
        "front": "Free Reserves [Section 2(43)]",
        "back": "Free reserves means such reserves which, as per the latest audited balance sheet of a company, are available for distribution as dividend. Any amount representing unrealised gains, notional gains or revaluation of assets, whether shown as a reserve or otherwise, or any change in carrying amount of an asset or of a liability recognized in equity, shall not be treated as free reserves",
        "section": "Section 2(43)"
      },
      {
        "id": "P2C1.FC8",
        "front": "Private Company [Section 2(68)]",
        "back": "Private company means a company having a minimum paid-up share capital as may be prescribed, and which by its articles: (i) restricts the right to transfer its shares; (ii) except in case of One Person Company, limits the number of its members to two hundred; (iii) prohibits any invitation to the public to subscribe for any securities of the company",
        "section": "Section 2(68)"
      },
      {
        "id": "P2C1.FC9",
        "front": "Key Managerial Personnel [Section 2(51)]",
        "back": "Key Managerial Personnel, in relation to a company, means (i) the Chief Executive Officer or the managing director or the manager; (ii) the company secretary; (iii) the whole-time director; (iv) the Chief Financial Officer; (v) such other officer, not more than one level below the directors who is in whole-time employment, designated as key managerial personnel by the Board; and (vi) such other officer as may be prescribed",
        "section": "Section 2(51)"
      },
      {
        "id": "P2C1.FC10",
        "front": "Officer who is in default [Section 2(60)]",
        "back": "Officer who is in default means: (i) whole-time director; (ii) key managerial personnel; (iii) where there is no KMP, such director or directors as specified by the Board, or all directors if no director is specified; (iv) any person under immediate authority of Board or KMP charged with responsibility who authorises, actively participates in, knowingly permits, or knowingly fails to take active steps to prevent, any default",
        "section": "Section 2(60)"
      }
    ],
    "practiceProblems": [
      {
        "id": "P2C1.PP1",
        "title": "Small Company Status Determination",
        "difficulty": 3,
        "problem": "Sunrise Pvt. Ltd. was incorporated in 2020. For the financial year ending 31st March 2024, the company had paid-up share capital of ₹3.5 crore and turnover of ₹45 crore. The company is not a subsidiary or holding company of any other company. For the financial year ending 31st March 2025, the paid-up capital remained same at ₹3.5 crore but turnover reduced to ₹38 crore. Determine whether Sunrise Pvt. Ltd. qualifies as a Small Company for FY 2024-25.",
        "steps": [
          "Step 1: Check if it's a public company - No, it's a private company",
          "Step 2: Check exclusions - Not a holding/subsidiary company, not Section 8 company, not governed by special Act",
          "Step 3: Check paid-up capital threshold - ₹3.5 crore ≤ ₹4 crore (Satisfied)",
          "Step 4: Check turnover threshold for immediately preceding FY (2023-24) - ₹45 crore > ₹40 crore (NOT Satisfied)",
          "Step 5: Since BOTH conditions must be met and turnover exceeded ₹40 crore in preceding year, company does NOT qualify"
        ],
        "answer": "Sunrise Pvt. Ltd. does NOT qualify as a Small Company for FY 2024-25 because while paid-up capital (₹3.5 crore) is within limit, the turnover as per last profit and loss account (FY 2023-24 being ₹45 crore) exceeds ₹40 crore threshold. Section 2(85) requires BOTH conditions to be satisfied.",
        "topic": "Small Company Definition"
      },
      {
        "id": "P2C1.PP2",
        "title": "Holding-Subsidiary-Associate Classification",
        "difficulty": 4,
        "problem": "Alpha Ltd. holds 45% voting power in Beta Ltd. and 25% voting power in Gamma Ltd. Alpha Ltd. has an agreement with Beta Ltd. giving it right to appoint 4 out of 7 directors of Beta Ltd. Gamma Ltd. is not a joint venture. Determine the relationship between these companies.",
        "steps": [
          "Step 1: For Alpha-Beta: Check if Alpha controls Board composition - Yes, Alpha can appoint 4 out of 7 (majority) directors",
          "Step 2: Under Section 2(87), control of Board composition makes Beta a subsidiary of Alpha",
          "Step 3: For Alpha-Gamma: Check voting power - 25% > 20% threshold for significant influence",
          "Step 4: Under Section 2(6), 25% voting power constitutes significant influence, making Gamma an associate of Alpha",
          "Step 5: Alpha is holding company of Beta; Gamma is associate company of Alpha"
        ],
        "answer": "Beta Ltd. is a SUBSIDIARY of Alpha Ltd. (under Section 2(87) - Alpha controls Board composition). Gamma Ltd. is an ASSOCIATE company of Alpha Ltd. (under Section 2(6) - Alpha has 25% voting power which exceeds 20% threshold for significant influence). Alpha Ltd. is the HOLDING company of Beta Ltd.",
        "topic": "Holding-Subsidiary-Associate Relationship"
      },
      {
        "id": "P2C1.PP3",
        "title": "Net Worth Calculation",
        "difficulty": 4,
        "problem": "Calculate the Net Worth of XYZ Ltd. as per Section 2(57) from the following data as per audited balance sheet: Paid-up Share Capital ₹50 lakh, General Reserve ₹20 lakh, Securities Premium ₹15 lakh, Revaluation Reserve ₹30 lakh, Profit & Loss Account (Credit) ₹10 lakh, Reserve created on amalgamation ₹8 lakh, Accumulated Losses ₹5 lakh, Deferred Expenditure ₹3 lakh, Miscellaneous Expenditure not written off ₹2 lakh.",
        "steps": [
          "Step 1: Items to ADD - Paid-up Capital (₹50L) + General Reserve (₹20L) + Securities Premium (₹15L) + P&L Credit (₹10L) = ₹95 lakh",
          "Step 2: Items to DEDUCT - Accumulated Losses (₹5L) + Deferred Expenditure (₹3L) + Misc Expenditure (₹2L) = ₹10 lakh",
          "Step 3: Items EXCLUDED from Net Worth - Revaluation Reserve (₹30L) and Amalgamation Reserve (₹8L)",
          "Step 4: Net Worth = ₹95 lakh - ₹10 lakh = ₹85 lakh"
        ],
        "answer": "Net Worth = ₹85 lakh. Revaluation Reserve (₹30 lakh) and Reserve on Amalgamation (₹8 lakh) are specifically excluded under Section 2(57) proviso as they are not created out of profits.",
        "topic": "Net Worth Definition"
      }
    ],
    "caseMCQs": {
      "scenario": "Zenith Holdings Ltd. is a public company with paid-up share capital of ₹100 crore. It has three subsidiary companies: (i) Peak Pvt. Ltd. - a private company with paid-up capital ₹2 crore and turnover ₹25 crore; (ii) Summit Ltd. - a public company in which Central Government holds 40% and State Government of Maharashtra holds 15%; (iii) Valley Pvt. Ltd. - a private company where Zenith holds 18% voting power but has an agreement for participation in business decisions. For FY ending 31st March 2025, the management is assessing various compliance requirements.",
      "questions": [
        {
          "id": "P2C1.CQ1",
          "q": "What is the status of Peak Pvt. Ltd. for the purpose of Companies Act, 2013?",
          "opts": [
            "Small Company eligible for all private company exemptions",
            "Private Company but deemed Public Company under Section 2(71)",
            "Small Company but deemed Public Company under Section 2(71)",
            "Private Company eligible for small company benefits"
          ],
          "ans": 1,
          "exp": "Under Section 2(71) proviso, a company which is a subsidiary of a public company shall be deemed to be a public company even where such subsidiary continues to be a private company in its articles. Peak Pvt. Ltd., being subsidiary of Zenith Holdings Ltd. (a public company), is deemed public company and cannot claim private/small company exemptions.",
          "type": "Trap",
          "diff": 3
        },
        {
          "id": "P2C1.CQ2",
          "q": "What is the status of Summit Ltd. with respect to Government Company classification?",
          "opts": [
            "Government Company as total government holding is 55%",
            "Not a Government Company as neither Central nor State holds 51% individually",
            "Government Company as Central Government holds more than 25%",
            "Not a Government Company as it is not wholly owned by government"
          ],
          "ans": 0,
          "exp": "Under Section 2(45), Government Company means a company where not less than 51% of paid-up share capital is held by Central Government, or any State Government, or PARTLY by Central Government and PARTLY by one or more State Governments. Here, Central (40%) + Maharashtra State (15%) = 55% which satisfies the definition of holding partly by Central and partly by State Government.",
          "type": "Concept",
          "diff": 2
        },
        {
          "id": "P2C1.CQ3",
          "q": "What is the relationship between Zenith Holdings Ltd. and Valley Pvt. Ltd.?",
          "opts": [
            "Valley is subsidiary of Zenith as Zenith participates in business decisions",
            "Valley is associate company of Zenith as 18% voting power plus business participation agreement",
            "No relationship exists as Zenith holds only 18% which is below 20%",
            "Valley is joint venture of Zenith as there is participation agreement"
          ],
          "ans": 1,
          "exp": "Under Section 2(6), significant influence means control of at least 20% of total voting power, OR control of or participation in business decisions under an agreement. Valley Pvt. Ltd. qualifies as associate company because even though Zenith holds only 18% voting power, the agreement for participation in business decisions establishes significant influence.",
          "type": "Amendment",
          "diff": 3
        }
      ]
    },
    "mcqs": [
      {
        "id": "P2C1.Q1",
        "q": "A company incorporated on 15th January 2024 will have its first financial year ending on:",
        "opts": [
          "31st March 2024",
          "31st December 2024",
          "31st March 2025",
          "14th January 2025"
        ],
        "ans": 2,
        "exp": "Under Section 2(41), where a company is incorporated on or after 1st January of a year, the financial year ends on 31st March of the FOLLOWING year. Since incorporation is on 15th January 2024 (after 1st January), first FY ends on 31st March 2025.",
        "type": "Trap",
        "diff": 2
      },
      {
        "id": "P2C1.Q2",
        "q": "Which of the following is NOT excluded from the definition of 'Free Reserves' under Section 2(43)?",
        "opts": [
          "Revaluation of assets shown as reserve",
          "Securities Premium Account",
          "Unrealised gains shown as reserve",
          "Change in carrying amount of asset recognized in equity"
        ],
        "ans": 1,
        "exp": "Under Section 2(43), free reserves are those available for distribution as dividend. Securities Premium Account is part of Net Worth calculation but NOT excluded from free reserves unless it represents unrealised gains. Options A, C, and D are specifically excluded under the proviso to Section 2(43).",
        "type": "Concept",
        "diff": 3
      },
      {
        "id": "P2C1.Q3",
        "q": "For counting members in a Private Company under Section 2(68), which category is NOT excluded?",
        "opts": [
          "Current employees who are members",
          "Ex-employees who became members during employment and continued membership",
          "Directors and their relatives who are members",
          "Joint holders counted as single member"
        ],
        "ans": 2,
        "exp": "Under Section 2(68), only (A) persons in employment of company and (B) persons formerly in employment who became members during employment and continued after, are excluded from the 200 member count. Directors and relatives are NOT excluded - they are counted. Joint holders are treated as single member, not excluded.",
        "type": "Trap",
        "diff": 3
      },
      {
        "id": "P2C1.Q4",
        "q": "The threshold limits for Small Company as per Companies (Specification of Definitions Details) Rules, 2014 are:",
        "opts": [
          "Paid-up capital ≤ ₹50 lakh AND Turnover ≤ ₹2 crore",
          "Paid-up capital ≤ ₹4 crore AND Turnover ≤ ₹40 crore",
          "Paid-up capital ≤ ₹10 crore OR Turnover ≤ ₹100 crore",
          "Paid-up capital ≤ ₹2 crore AND Turnover ≤ ₹20 crore"
        ],
        "ans": 1,
        "exp": "As per Companies (Specification of Definitions Details) Rules, 2014, the prescribed limits for small company are paid-up capital not exceeding ₹4 crore AND turnover not exceeding ₹40 crore. The base limits in Section 2(85) are ₹50 lakh and ₹2 crore respectively, with prescribed enhanced limits.",
        "type": "Amendment",
        "diff": 1
      }
    ],
    "tricky": [
      {
        "id": "P2C1.1",
        "point": "Small Company requires meeting BOTH capital AND turnover thresholds simultaneously",
        "mistake": "Students select small company status when only one threshold (either capital or turnover) is met",
        "why": "Section 2(85) uses 'and' - both conditions must be satisfied; ICAI specifically tests this conjunctive requirement",
        "priority": "Very High"
      },
      {
        "id": "P2C1.2",
        "point": "Private company subsidiary of public company is DEEMED public company under Section 2(71) proviso",
        "mistake": "Students continue treating it as private company for exemption purposes because articles describe it as private",
        "why": "Legal fiction in proviso overrides articles - tests understanding that statutory deeming prevails over constitutional documents",
        "priority": "High"
      },
      {
        "id": "P2C1.3",
        "point": "Associate company threshold is 20% voting power OR participation in business decisions",
        "mistake": "Students assume 20% is mandatory minimum, ignoring that agreement for business participation also creates associate relationship",
        "why": "Section 2(6) Explanation uses 'or' - ICAI tests alternative routes to significant influence",
        "priority": "High"
      },
      {
        "id": "P2C1.4",
        "point": "Net Worth excludes revaluation reserves, amalgamation reserves, and write-back of depreciation",
        "mistake": "Students include all reserves in Net Worth calculation without checking their source",
        "why": "Section 2(57) specifically excludes reserves not created from profits - tests careful reading of exclusions",
        "priority": "High"
      },
      {
        "id": "P2C1.5",
        "point": "Financial year for company incorporated on/after 1st January ends on 31st March of FOLLOWING year",
        "mistake": "Students select 31st March of same year for January-March incorporations",
        "why": "Section 2(41) has specific rule for post-January incorporations to avoid very short first financial year",
        "priority": "Medium"
      }
    ],
    "amendments": [
      {
        "id": "P2C1.A1",
        "topic": "Small Company Threshold Enhancement",
        "what": "Paid-up capital limit increased to ₹4 crore and turnover limit increased to ₹40 crore",
        "oldPosition": "Paid-up capital ≤ ₹50 lakh and Turnover ≤ ₹2 crore (as per Section 2(85) base limits)",
        "newPosition": "Paid-up capital ≤ ₹4 crore and Turnover ≤ ₹40 crore (as per Companies (Specification of Definitions Details) Rules, 2014 as amended)",
        "effectiveFrom": "15th September 2022",
        "pdfStatus": "confirmed",
        "priority": "High"
      },
      {
        "id": "P2C1.A2",
        "topic": "Financial Year approval authority changed from Tribunal to Central Government",
        "what": "For different financial year requirement of holding/subsidiary/associate of foreign company, approval authority changed",
        "oldPosition": "Application to be made to Tribunal for approval of different financial year",
        "newPosition": "Application to be made to Central Government (not Tribunal) for allowing different financial year",
        "effectiveFrom": "Companies (Amendment) Ordinance, 2019",
        "pdfStatus": "confirmed",
        "priority": "Medium"
      },
      {
        "id": "P2C1.A3",
        "topic": "Government Company definition - Explanation for differential voting rights",
        "what": "Explanation added that paid-up share capital shall be construed as total voting power where shares with differential voting rights issued",
        "oldPosition": "Only paid-up share capital percentage considered for 51% threshold",
        "newPosition": "For companies with DVR shares, total voting power (not just paid-up capital percentage) determines government company status",
        "effectiveFrom": "3rd March 2020",
        "pdfStatus": "confirmed",
        "priority": "Medium"
      }
    ],
    "cases": [
      {
        "id": "P2C1.C1",
        "scenario": "Maple Pvt. Ltd. has paid-up share capital of ₹3 crore and turnover of ₹35 crore. It is a subsidiary company of Oak Pvt. Ltd. The management wants to avail small company benefits for reduced compliance requirements.",
        "question": "Can Maple Pvt. Ltd. qualify as a Small Company?",
        "answer": "No",
        "reasoning": "Under Section 2(85) Proviso (A), a subsidiary company cannot be classified as Small Company irrespective of meeting the paid-up capital and turnover thresholds. The exclusion is absolute and not subject to any exception.",
        "trap": "Students focus only on capital/turnover thresholds without checking the three categorical exclusions in proviso",
        "diff": 3
      },
      {
        "id": "P2C1.C2",
        "scenario": "Delta Ltd. is a public company. It has a subsidiary Sigma Pvt. Ltd. Mr. Raj is a director in Delta Ltd. and holds 1.5% shares in Sigma Pvt. Ltd. The company wants to determine if Sigma Pvt. Ltd. is a related party of Delta Ltd.",
        "question": "Is Sigma Pvt. Ltd. a related party of Delta Ltd. under Section 2(76)?",
        "answer": "Yes",
        "reasoning": "Under Section 2(76)(viii)(A), a subsidiary company is a related party of the holding company. Since Sigma Pvt. Ltd. is subsidiary of Delta Ltd., it automatically qualifies as related party. Mr. Raj's shareholding is irrelevant for this determination.",
        "trap": "Students may focus on director's shareholding percentage and miss the direct subsidiary relationship which is a separate ground under clause (viii)(A)",
        "diff": 3
      },
      {
        "id": "P2C1.C3",
        "scenario": "Pinnacle Ltd. fair valued its land from ₹10 crore to ₹25 crore and credited the surplus of ₹15 crore to 'Retained Earnings' instead of 'Revaluation Reserve'. For computing net worth for compliance purposes, the company included this ₹15 crore as part of net worth.",
        "question": "Is the company's treatment of including ₹15 crore revaluation surplus in Net Worth correct?",
        "answer": "No",
        "reasoning": "Under Section 2(57), reserves created out of revaluation of assets are specifically excluded from net worth, regardless of the name given to such reserve. Even if credited to Retained Earnings, the substance is revaluation surplus which must be excluded from net worth calculation.",
        "trap": "Students may accept the treatment because it's shown under Retained Earnings, missing that substance over form applies and Section 2(57) excludes revaluation gains by whatever name called",
        "diff": 4
      },
      {
        "id": "P2C1.C4",
        "scenario": "Central Government holds 30% and Government of Gujarat holds 25% paid-up share capital in Infrastructure Ltd. The company claims it is not a Government Company as neither Central nor State Government individually holds 51%.",
        "question": "Is Infrastructure Ltd. correct in its claim that it is not a Government Company?",
        "answer": "No",
        "reasoning": "Under Section 2(45), Government Company includes a company where 51% is held 'partly by Central Government and partly by one or more State Governments'. Here, Central (30%) + Gujarat State (25%) = 55%, satisfying the combined holding requirement. The definition does not require any single government to hold 51%.",
        "trap": "Students read 'not less than 51%' and assume it must be held by one government entity, missing the 'partly...partly' language allowing combined holdings",
        "diff": 3
      }
    ],
    "trees": [
      {
        "id": "P2C1.DT1",
        "topic": "Officer in Default Identification",
        "nodes": [
          {
            "id": "n1",
            "label": "Is the person a Whole-Time Director?",
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
            "label": "Is the person a Key Managerial Personnel (CEO/MD/Manager/CS/WTD/CFO)?",
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
            "label": "Is there any KMP in the company?",
            "branches": [
              {
                "label": "No KMP exists",
                "target": "n4"
              },
              {
                "label": "KMP exists",
                "target": "n5"
              }
            ]
          },
          {
            "id": "n4",
            "label": "Has Board specified any director(s) with written consent?",
            "branches": [
              {
                "label": "Yes, director(s) specified",
                "target": "outcomeB"
              },
              {
                "label": "No specification made",
                "target": "outcomeC"
              }
            ]
          },
          {
            "id": "n5",
            "label": "Is person under immediate authority of Board/KMP charged with responsibility AND authorised/participated/permitted/failed to prevent default?",
            "branches": [
              {
                "label": "Yes",
                "target": "outcomeA"
              },
              {
                "label": "No",
                "target": "n6"
              }
            ]
          },
          {
            "id": "n6",
            "label": "Is the person one on whose advice Board acts (non-professional capacity)?",
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
            "label": "Person is OFFICER IN DEFAULT - liable for penalty/punishment",
            "reference": "Section 2(60)"
          },
          {
            "id": "outcomeB",
            "label": "Only SPECIFIED DIRECTOR(S) are officers in default",
            "reference": "Section 2(60)(iii)"
          },
          {
            "id": "outcomeC",
            "label": "ALL DIRECTORS are officers in default",
            "reference": "Section 2(60)(iii)"
          },
          {
            "id": "outcomeD",
            "label": "Person is NOT an officer in default",
            "reference": "Section 2(60)"
          }
        ]
      },
      {
        "id": "P2C1.DT2",
        "topic": "Listed Company Determination",
        "nodes": [
          {
            "id": "n1",
            "label": "Does company have ANY securities listed on recognized stock exchange?",
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
            "label": "Are equity shares listed?",
            "branches": [
              {
                "label": "Yes - equity shares listed",
                "target": "outcomeB"
              },
              {
                "label": "No - only debt/preference listed",
                "target": "n3"
              }
            ]
          },
          {
            "id": "n3",
            "label": "What type of non-equity securities are listed?",
            "branches": [
              {
                "label": "NCDs on private placement (public company)",
                "target": "outcomeA"
              },
              {
                "label": "NCDs on private placement (private company)",
                "target": "outcomeA"
              },
              {
                "label": "NCRPs on private placement",
                "target": "outcomeA"
              },
              {
                "label": "Other securities publicly issued",
                "target": "outcomeB"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "NOT a Listed Company under Section 2(52) read with Rule 2A",
            "reference": "Section 2(52) proviso read with Companies (Specification of Definitions Details) Rules, 2014 Rule 2A"
          },
          {
            "id": "outcomeB",
            "label": "LISTED COMPANY - subject to all listed company compliances",
            "reference": "Section 2(52)"
          }
        ]
      }
    ]
  }
]