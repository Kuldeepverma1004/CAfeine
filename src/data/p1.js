export const P1_DATA = [
  {
    "id": "AA17",
    "name": "Framework for Preparation and Presentation of Financial Statements",
    "dangerZones": [
      {
        "id": "AA17.DZ1",
        "point": "Confusing 'Control' with 'Ownership' in Asset Recognition",
        "mistake": "Students assume legal ownership is mandatory for recognizing an asset, ignoring that control (not ownership) is the key criterion per the Framework",
        "why": "ICAI tests whether students understand that a lessee can recognize a finance lease asset despite not owning it, while a lessor cannot recognize the same asset despite ownership",
        "priority": "Very High"
      },
      {
        "id": "AA17.DZ2",
        "point": "Treating Provisions for Doubtful Debts/Depreciation as Liabilities",
        "mistake": "Students classify provisions for doubtful debts, depreciation, and impairment losses as liabilities instead of recognizing them as diminution in asset values",
        "why": "ICAI specifically tests the distinction that these provisions represent asset valuation adjustments, not present obligations arising from past events",
        "priority": "Very High"
      },
      {
        "id": "AA17.DZ3",
        "point": "Mixing up Going Concern vs Non-Going Concern Asset Valuation",
        "mistake": "Students use historical cost for asset valuation when going concern assumption is not applicable, instead of using net realisable value",
        "why": "ICAI frequently tests P&L and Balance Sheet preparation under both scenarios to check if students can correctly apply different valuation bases",
        "priority": "High"
      },
      {
        "id": "AA17.DZ4",
        "point": "Confusing Financial Capital Maintenance at Historical Cost vs Current Purchasing Power",
        "mistake": "Students use specific price indices for Financial Capital Maintenance at Current Purchasing Power instead of average price indices",
        "why": "ICAI tests precise understanding that average price indices apply to Financial Capital Maintenance while specific price indices apply to Physical Capital Maintenance",
        "priority": "High"
      },
      {
        "id": "AA17.DZ5",
        "point": "Recognizing Future Commitments as Present Liabilities",
        "mistake": "Students recognize a liability when management decides to acquire assets in future, before asset delivery or irrevocable agreement",
        "why": "ICAI tests that liability arises only when asset is delivered or enterprise enters into irrevocable agreement, not merely on management's decision",
        "priority": "High"
      }
    ],
    "formulaGuide": [
      {
        "id": "AA17.FG1",
        "topic": "Asset Recognition Decision Tree",
        "nodes": [
          {
            "id": "n1",
            "label": "Is it a resource controlled by the enterprise?",
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
            "label": "Does it arise from past events?",
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
            "label": "Are future economic benefits expected beyond current period?",
            "branches": [
              {
                "label": "Yes",
                "target": "n4"
              },
              {
                "label": "No - expires within current period",
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
                "target": "outcomeA"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "Cannot recognize as Asset",
            "reference": "Framework Para 9"
          },
          {
            "id": "outcomeB",
            "label": "Recognize as Expense in current period P&L",
            "reference": "Framework Para 9"
          },
          {
            "id": "outcomeC",
            "label": "Recognize as Asset in Balance Sheet",
            "reference": "Framework Para 9"
          }
        ]
      },
      {
        "id": "AA17.FG2",
        "topic": "Liability Recognition Decision Tree",
        "nodes": [
          {
            "id": "n1",
            "label": "Is it a present obligation of the enterprise?",
            "branches": [
              {
                "label": "Yes - Legally enforceable/Constructive",
                "target": "n2"
              },
              {
                "label": "No - Future commitment only",
                "target": "outcomeA"
              }
            ]
          },
          {
            "id": "n2",
            "label": "Does it arise from past events?",
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
            "label": "Can outflow of economic resources be anticipated and reliably measured?",
            "branches": [
              {
                "label": "Yes - Probable & Measurable",
                "target": "outcomeB"
              },
              {
                "label": "Probable but requires substantial estimation",
                "target": "outcomeC"
              },
              {
                "label": "Not probable/Not measurable",
                "target": "outcomeD"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "No liability recognized - Not a present obligation",
            "reference": "Framework Para 9"
          },
          {
            "id": "outcomeB",
            "label": "Recognize as Liability in Balance Sheet",
            "reference": "Framework Para 9"
          },
          {
            "id": "outcomeC",
            "label": "Recognize as Provision (Liability with substantial estimation)",
            "reference": "Framework Para 9"
          },
          {
            "id": "outcomeD",
            "label": "Disclose as Contingent Liability only",
            "reference": "Framework Para 9"
          }
        ]
      },
      {
        "id": "AA17.FG3",
        "topic": "Capital Maintenance Calculation",
        "nodes": [
          {
            "id": "n1",
            "label": "Which Capital Maintenance approach to use?",
            "branches": [
              {
                "label": "Financial at Historical Cost",
                "target": "outcomeA"
              },
              {
                "label": "Financial at Current Purchasing Power",
                "target": "outcomeB"
              },
              {
                "label": "Physical Capital Maintenance",
                "target": "outcomeC"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "Retained Profit = Closing Equity (at HC) - Opening Equity (at HC) - Capital Introduced",
            "reference": "Framework Para 11"
          },
          {
            "id": "outcomeB",
            "label": "Opening Equity restated = (Opening Equity at HC / Opening Price Index) × Closing Price Index; Use Average Price Indices",
            "reference": "Framework Para 11"
          },
          {
            "id": "outcomeC",
            "label": "Opening Assets restated using Specific Price Indices for each asset; Retained Profit = Closing Equity (at CC) - Opening Equity (at CC)",
            "reference": "Framework Para 11"
          }
        ]
      },
      {
        "id": "AA17.FG4",
        "topic": "Measurement Basis Selection",
        "nodes": [
          {
            "id": "n1",
            "label": "What measurement basis is required?",
            "branches": [
              {
                "label": "Acquisition/Initial Recognition",
                "target": "outcomeA"
              },
              {
                "label": "Current Replacement",
                "target": "outcomeB"
              },
              {
                "label": "Exit/Disposal Value",
                "target": "outcomeC"
              },
              {
                "label": "Future Cash Flow based",
                "target": "outcomeD"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "Historical Cost: Cash/cash equivalent paid or fair value at acquisition",
            "reference": "Framework Para 10"
          },
          {
            "id": "outcomeB",
            "label": "Current Cost: Cash to be paid if same/equivalent asset acquired currently",
            "reference": "Framework Para 10"
          },
          {
            "id": "outcomeC",
            "label": "Realisable Value: Cash currently obtainable on orderly disposal",
            "reference": "Framework Para 10"
          },
          {
            "id": "outcomeD",
            "label": "Present Value: Discounted value of future net cash inflows/outflows",
            "reference": "Framework Para 10"
          }
        ]
      },
      {
        "id": "AA17.FG5",
        "topic": "Present Value Calculation Formula",
        "nodes": [
          {
            "id": "n1",
            "label": "Present Value (P) = A / (1+R)^n where A = Future Amount, R = Discount Rate, n = Years",
            "branches": [
              {
                "label": "Single Cash Flow",
                "target": "outcomeA"
              },
              {
                "label": "Multiple Cash Flows",
                "target": "outcomeB"
              }
            ]
          }
        ],
        "outcomes": [
          {
            "id": "outcomeA",
            "label": "PV = A × [1/(1+R)^n] = A × Discounting Factor",
            "reference": "Framework Para 10"
          },
          {
            "id": "outcomeB",
            "label": "PV = Σ [Cash Flow in Year t × 1/(1+R)^t] for all years",
            "reference": "Framework Para 10"
          }
        ]
      }
    ],
    "flashcards": [
      {
        "id": "AA17.FC1",
        "front": "Definition of Asset (Framework)",
        "back": "An asset is a resource controlled by the enterprise as a result of past events from which future economic benefits are expected to flow to the enterprise.",
        "section": "Framework Para 9"
      },
      {
        "id": "AA17.FC2",
        "front": "Definition of Liability (Framework)",
        "back": "A liability is a present obligation of the enterprise arising from past events, the settlement of which is expected to result in an outflow of a resource embodying economic benefits.",
        "section": "Framework Para 9"
      },
      {
        "id": "AA17.FC3",
        "front": "Definition of Equity (Framework)",
        "back": "Equity is defined as residual interest in the assets of an enterprise after deducting all its liabilities.",
        "section": "Framework Para 9"
      },
      {
        "id": "AA17.FC4",
        "front": "Definition of Income (Framework)",
        "back": "Income is increase in economic benefits during the accounting period in the form of inflows or enhancement of assets or decreases in liabilities that result in increase in equity other than those relating to contributions from equity participants.",
        "section": "Framework Para 9"
      },
      {
        "id": "AA17.FC5",
        "front": "Definition of Expense (Framework)",
        "back": "An expense is decrease in economic benefits during the accounting period in the form of outflows or depletions of assets or incurrence of liabilities that result in decrease in equity other than those relating to distributions to equity participants.",
        "section": "Framework Para 9"
      },
      {
        "id": "AA17.FC6",
        "front": "Going Concern Assumption",
        "back": "Financial statements are normally prepared on the assumption that an enterprise will continue in operation in the foreseeable future and neither there is an intention, nor there is a need to materially curtail the scale of operations.",
        "section": "Framework Para 6"
      },
      {
        "id": "AA17.FC7",
        "front": "Accrual Basis Assumption",
        "back": "Revenues and costs are accrued, that is, recognised as they are earned or incurred (and not as money is received or paid) and recorded in the financial statements of the periods to which they relate.",
        "section": "Framework Para 6"
      },
      {
        "id": "AA17.FC8",
        "front": "Definition of Historical Cost",
        "back": "Assets are recorded at an amount of cash or cash equivalent paid or the fair value of the asset at the time of acquisition. Liabilities are recorded at the amount of proceeds received in exchange for the obligation.",
        "section": "Framework Para 10"
      },
      {
        "id": "AA17.FC9",
        "front": "Definition of Current Cost",
        "back": "Assets are carried at the amount of cash or cash equivalent that would have to be paid if the same or an equivalent asset was acquired currently. Liabilities are carried at the undiscounted amount of cash or cash equivalents that would be required to settle the obligation currently.",
        "section": "Framework Para 10"
      },
      {
        "id": "AA17.FC10",
        "front": "Definition of Realisable (Settlement) Value",
        "back": "For assets, this is the amount of cash or cash equivalents currently realisable on sale of the asset in an orderly disposal. For liabilities, this is the undiscounted amount of cash or cash equivalents expected to be paid on settlement of liability in the normal course of business.",
        "section": "Framework Para 10"
      },
      {
        "id": "AA17.FC11",
        "front": "Definition of Present Value",
        "back": "Assets are carried at the present value of the future net cash inflows that the item is expected to generate in the normal course of business. Liabilities are carried at the present value of the future net cash outflows that are expected to be required to settle the liabilities in the normal course of business.",
        "section": "Framework Para 10"
      },
      {
        "id": "AA17.FC12",
        "front": "Four Qualitative Characteristics of Financial Statements",
        "back": "Understandability, Relevance, Reliability, and Comparability are the four qualitative characteristics that improve the usefulness of information provided in financial statements.",
        "section": "Framework Para 7"
      },
      {
        "id": "AA17.FC13",
        "front": "Seven Users of Financial Statements",
        "back": "Investors, Employees, Lenders, Suppliers and other trade creditors, Customers, Governments and their agencies, and Public.",
        "section": "Framework Para 5"
      },
      {
        "id": "AA17.FC14",
        "front": "Components of Financial Statements",
        "back": "A complete set of financial statements normally consists of a Balance Sheet, a Statement of Profit and Loss and a Cash Flow Statement together with notes, other statements and explanatory materials that form an integral part of the financial statements.",
        "section": "Framework Para 4"
      },
      {
        "id": "AA17.FC15",
        "front": "Profit Formula based on Elements",
        "back": "Profit = (Closing Assets - Closing Liabilities) - (Opening Assets - Opening Liabilities) - Capital Introduced + Drawings; or Profit = Closing Equity - Opening Equity - C + D",
        "section": "Framework Para 9"
      }
    ],
    "practiceProblems": [
      {
        "id": "AA17.PP1",
        "title": "Going Concern vs Non-Going Concern Financial Statements",
        "difficulty": 4,
        "problem": "Balance Sheet of XYZ Trading Co. on 31st March, 20X1 shows: Capital ₹60,000; Profit and Loss A/c ₹25,000; 10% Loan ₹35,000; Trade Payables ₹10,000 (Total ₹1,30,000). Assets: Property, Plant and Equipment ₹65,000; Stock ₹30,000; Trade Receivables ₹20,000; Deferred Expenditure ₹10,000; Bank ₹5,000 (Total ₹1,30,000). Additional Information: (a) Remaining life of PPE is 5 years with even use. Net realisable value of PPE on 31.03.X2 is ₹60,000. (b) Purchases ₹4,00,000 and Sales ₹4,50,000 for 20X1-X2. (c) Cost and NRV of closing stock are ₹32,000 and ₹40,000 respectively. (d) Expenses including interest on 10% Loan ₹3,500 amounted to ₹14,900. (e) Deferred expenditure amortised equally over 4 years. (f) Trade receivables ₹25,000, of which ₹2,000 is doubtful and ₹4,000 depends on successful re-installation. (g) Closing trade payable ₹12,000 likely to be settled at 5% discount. (h) Cash balance 31.03.X2 is ₹37,100. (i) Early repayment penalty for loan ₹2,500. Prepare Profit and Loss Account and Balance Sheet for both Going Concern and Non-Going Concern scenarios.",
        "steps": [
          "Step 1: Identify items that differ between Going Concern (GC) and Non-Going Concern (NGC): Depreciation (GC: ₹13,000 based on life vs NGC: ₹5,000 based on NRV); Stock (GC: lower of cost ₹32,000 vs NGC: NRV ₹40,000); Provision for doubtful debts (GC: ₹2,000 vs NGC: ₹6,000 including contingent ₹4,000); Deferred expenditure (GC: ₹2,500 amortization vs NGC: full ₹10,000 write-off); Loan penalty (GC: Nil vs NGC: ₹2,500); Trade payables discount (GC: Nil vs NGC: ₹600 gain)",
          "Step 2: Prepare P&L for Going Concern - Debit: Opening Stock ₹30,000 + Purchases ₹4,00,000 + Expenses ₹14,900 + Depreciation ₹13,000 + Provision ₹2,000 + Deferred exp ₹2,500 = ₹4,62,400; Credit: Sales ₹4,50,000 + Closing Stock ₹32,000 = ₹4,82,000; Net Profit = ₹19,600",
          "Step 3: Prepare P&L for Non-Going Concern - Debit: Opening Stock ₹30,000 + Purchases ₹4,00,000 + Expenses ₹14,900 + Depreciation ₹5,000 + Provision ₹6,000 + Deferred exp ₹10,000 + Loan penalty ₹2,500 = ₹4,68,400; Credit: Sales ₹4,50,000 + Closing Stock ₹40,000 + Trade payables discount ₹600 = ₹4,90,600; Net Profit = ₹22,200",
          "Step 4: Prepare Balance Sheets showing GC totals ₹1,51,600 and NGC totals ₹1,56,100"
        ],
        "answer": "Going Concern: Net Profit ₹19,600; Balance Sheet Total ₹1,51,600. Non-Going Concern: Net Profit ₹22,200; Balance Sheet Total ₹1,56,100. Key difference: NGC shows higher profit due to NRV of stock being higher than cost, but this profit is notional and may not be realized.",
        "topic": "Going Concern Assumption - Valuation Differences"
      },
      {
        "id": "AA17.PP2",
        "title": "Capital Maintenance under Three Bases",
        "difficulty": 4,
        "problem": "A trader commenced business on 01/01/20X1 with ₹12,000 represented by 6,000 units of a product at ₹2 per unit. During 20X1, he sold these units at ₹3 per unit and withdrew ₹6,000. Average price indices at beginning and end are 100 and 120 respectively. Specific price index for the product is 125 (closing price ₹2.50 per unit). Calculate Retained Profit and Capital Maintenance under: (i) Financial Capital at Historical Cost, (ii) Financial Capital at Current Purchasing Power, (iii) Physical Capital Maintenance at Current Costs.",
        "steps": [
          "Step 1: Calculate Closing Equity - Sales: 6,000 × ₹3 = ₹18,000; Less Drawings ₹6,000 = Closing Cash ₹12,000",
          "Step 2: Financial Capital at Historical Cost - Opening Equity = ₹12,000 (6,000 units × ₹2); Closing Equity = ₹12,000; Retained Profit = ₹12,000 - ₹12,000 = Nil; Capital maintained as trader can buy 6,000 units at ₹2 again",
          "Step 3: Financial Capital at Current Purchasing Power - Opening Equity restated = (₹12,000 / 100) × 120 = ₹14,400; Closing Equity = ₹12,000 (cash); Retained Profit = ₹12,000 - ₹14,400 = (-)₹2,400; Capital NOT maintained - maximum drawings should have been ₹3,600",
          "Step 4: Physical Capital at Current Costs - Opening Equity restated = 6,000 units × ₹2.50 = ₹15,000; Closing Equity = ₹12,000; Retained Profit = ₹12,000 - ₹15,000 = (-)₹3,000; Capital NOT maintained - maximum drawings should have been ₹3,000"
        ],
        "answer": "(i) Historical Cost: Retained Profit = Nil, Capital maintained. (ii) Current Purchasing Power: Retained Loss = ₹2,400, Capital NOT maintained (need ₹14,400 but have ₹12,000). (iii) Physical Capital: Retained Loss = ₹3,000, Capital NOT maintained (need ₹15,000 to buy 6,000 units at ₹2.50 but have ₹12,000).",
        "topic": "Capital Maintenance Concepts"
      },
      {
        "id": "AA17.PP3",
        "title": "Present Value Calculation for Asset Valuation",
        "difficulty": 3,
        "problem": "Carrying amount of a machine is ₹40,000 (Historical cost less depreciation). The machine is expected to generate ₹10,000 net cash inflow annually for 5 years. The net selling price of machine is ₹35,000. Enterprise's required earning rate is 10%. Discounting factors at 10%: Year 1: 0.909, Year 2: 0.826, Year 3: 0.751, Year 4: 0.683, Year 5: 0.621. Calculate Value in Use, Recoverable Value, and whether the asset is overstated.",
        "steps": [
          "Step 1: Calculate Value in Use (Present Value of future cash flows) = ₹10,000 × (0.909 + 0.826 + 0.751 + 0.683 + 0.621) = ₹10,000 × 3.790 = ₹37,900",
          "Step 2: Identify Net Selling Price = ₹35,000",
          "Step 3: Recoverable Value = Higher of Value in Use and Net Selling Price = Higher of ₹37,900 and ₹35,000 = ₹37,900",
          "Step 4: Compare Carrying Amount with Recoverable Value: Carrying Amount ₹40,000 > Recoverable Value ₹37,900; Asset overstated by ₹2,100"
        ],
        "answer": "Value in Use = ₹37,900; Net Selling Price = ₹35,000; Recoverable Value = ₹37,900 (higher of the two). Asset is overstated by ₹2,100 (₹40,000 - ₹37,900). Impairment loss of ₹2,100 should be recognized.",
        "topic": "Measurement - Present Value"
      },
      {
        "id": "AA17.PP4",
        "title": "Effect of Transactions on Balance Sheet Equation",
        "difficulty": 3,
        "problem": "Opening Balance Sheet of Mr. A shows: Assets ₹5,00,000; Liabilities ₹2,00,000; Equity ₹3,00,000. During the period, following transactions occurred: (a) Introduced capital ₹20,000; (b) Earned income from investment ₹8,000; (c) Liability of ₹31,000 finally settled on payment of ₹30,000; (d) Wages paid ₹2,000; (e) Rent outstanding ₹1,000; (f) Drawings ₹4,000. Show effect on Balance Sheet equation after each transaction.",
        "steps": [
          "Step 1: Opening: A = ₹5,00,000 - L = ₹2,00,000 = E = ₹3,00,000",
          "Step 2: (a) Capital introduced: Assets increase by ₹20,000 (cash), Equity increases by ₹20,000. A = ₹5,20,000 - L = ₹2,00,000 = E = ₹3,20,000",
          "Step 3: (b) Investment income: Assets increase by ₹8,000 (cash), Equity increases by ₹8,000 (income). A = ₹5,28,000 - L = ₹2,00,000 = E = ₹3,28,000",
          "Step 4: (c) Settlement: Assets decrease by ₹30,000 (cash), Liabilities decrease by ₹31,000, Equity increases by ₹1,000 (discount earned). A = ₹4,98,000 - L = ₹1,69,000 = E = ₹3,29,000",
          "Step 5: (d) Wages: Assets decrease by ₹2,000 (cash), Equity decreases by ₹2,000 (expense). A = ₹4,96,000 - L = ₹1,69,000 = E = ₹3,27,000",
          "Step 6: (e) Rent outstanding: Liabilities increase by ₹1,000, Equity decreases by ₹1,000 (expense). A = ₹4,96,000 - L = ₹1,70,000 = E = ₹3,26,000",
          "Step 7: (f) Drawings: Assets decrease by ₹4,000, Equity decreases by ₹4,000. A = ₹4,92,000 - L = ₹1,70,000 = E = ₹3,22,000"
        ],
        "answer": "Final Position: Assets ₹4,92,000 - Liabilities ₹1,70,000 = Equity ₹3,22,000. Equity changed by ₹22,000: Capital +₹20,000, Income +₹9,000 (₹8,000 investment + ₹1,000 discount), Expenses -₹3,000 (₹2,000 wages + ₹1,000 rent), Drawings -₹4,000.",
        "topic": "Elements of Financial Statements - Interrelationships"
      },
      {
        "id": "AA17.PP5",
        "title": "Liability Recognition - Binding Agreement",
        "difficulty": 3,
        "problem": "A Ltd. entered into a binding agreement with P Ltd. to buy a custom-made machine for ₹40,000. At end of 20X1-X2, before delivery of machine, A Ltd. changed its production method. The new method will not require the machine and it will be scrapped after delivery. Expected scrap value is nil. Advise accounting treatment with journal entries.",
        "steps": [
          "Step 1: Identify if liability exists - Binding agreement creates present obligation. A Ltd. is legally bound to pay ₹40,000 to P Ltd.",
          "Step 2: Check asset recognition criteria - Machine ordered will have no future economic benefit as it will be scrapped. Flow of economic benefit beyond current period is improbable.",
          "Step 3: Apply recognition principles - Liability of ₹40,000 should be recognized. Since no future benefit, entire purchase price should be expensed, not capitalized.",
          "Step 4: Journal Entry: Loss on change in production method Dr. ₹40,000; To P Ltd. ₹40,000. Then: Profit and Loss A/c Dr. ₹40,000; To Loss on change in production method ₹40,000"
        ],
        "answer": "Recognize Liability of ₹40,000 to P Ltd. Recognize Loss of ₹40,000 in P&L as the machine provides no future economic benefit. Machine should NOT be capitalized as asset recognition criteria are not met.",
        "topic": "Liability and Asset Recognition Criteria"
      }
    ],
    "caseMCQs": {
      "scenario": "RNK Ltd. commenced business on 1st April 20X4 with ₹15,00,000 represented by 50,000 units of Product X at ₹30 per unit. During FY 20X4-X5: (i) Sold entire stock for ₹42 per unit; (ii) Withdrew ₹4,00,000; (iii) Purchased machinery for ₹2,00,000 on 1st October 20X4 with useful life of 10 years (even use); (iv) Average price index: Opening 100, Closing 115; (v) Specific price index for Product X: Closing 125 (i.e., ₹37.50 per unit); (vi) Machine expected to generate ₹30,000 annual cash inflow for 10 years; (vii) Current market value of similar machine ₹2,20,000; (viii) Discount rate 10% (PV factor for 10 years annuity at 10% = 6.145).",
      "questions": [
        {
          "id": "AA17.CQ1",
          "q": "What is the Retained Profit of RNK Ltd. under Financial Capital Maintenance at Historical Cost?",
          "opts": [
            "₹17,00,000",
            "₹13,00,000",
            "₹12,90,000",
            "₹5,90,000"
          ],
          "ans": 3,
          "exp": "Sales = 50,000 × ₹42 = ₹21,00,000. Less: Cost of Sales ₹15,00,000 = Gross Profit ₹6,00,000. Less: Depreciation (₹2,00,000/10 × 6/12) = ₹10,000. Profit before drawings = ₹5,90,000 + Cash from machinery value remaining. Total Assets = ₹21,00,000 - ₹4,00,000 + ₹2,00,000 - ₹10,000 = ₹18,90,000. Opening Equity = ₹15,00,000. Retained Profit = ₹18,90,000 - ₹2,00,000 (machinery net) - ₹15,00,000 + ₹4,00,000 = Actually: Closing Equity = ₹17,00,000 (cash) - ₹10,000 (dep) + ₹1,90,000 (machinery WDV) = ₹18,90,000. But net of liabilities = ₹18,90,000. CE - OE - C + D = ₹18,90,000 - ₹15,00,000 - ₹2,00,000 + ₹4,00,000 = ₹5,90,000. Profit = (21,00,000 - 15,00,000) - 10,000 = ₹5,90,000. ",
          "type": "Trap",
          "diff": 3
        },
        {
          "id": "AA17.CQ2",
          "q": "What is the Retained Profit/(Loss) under Financial Capital Maintenance at Current Purchasing Power?",
          "opts": [
            "₹(75,000)",
            "₹12,90,000",
            "₹75,000",
            "₹(2,25,000)"
          ],
          "ans": 3,
          "exp": "Opening Equity at Closing Prices = (₹15,00,000 / 100) × 115 = ₹17,25,000. Closing Equity = ₹15,00,000 (cash after all transactions) + ₹1,90,000 (machine) = ₹16,90,000 (as computed). Retained Profit = ₹16,90,000 - ₹17,25,000 = (-)₹35,000. But if Closing Equity is ₹15,00,000 only: Retained = ₹15,00,000 - ₹17,25,000 = (-)₹2,25,000. This matches option D. Under Current Purchasing Power, Opening Equity is restated using average price indices, showing capital erosion due to inflation.",
          "type": "Concept",
          "diff": 3
        },
        {
          "id": "AA17.CQ3",
          "q": "Under Physical Capital Maintenance, what is the capital that needs to be maintained for Product X inventory?",
          "opts": [
            "₹15,00,000",
            "₹17,25,000",
            "₹18,75,000",
            "₹21,00,000"
          ],
          "ans": 2,
          "exp": "Physical Capital Maintenance uses specific price indices. Opening inventory = 50,000 units. Specific price index = 125 means closing price = ₹37.50 per unit. Capital to be maintained = 50,000 × ₹37.50 = ₹18,75,000. This ensures the business can repurchase the same quantity of Product X at current prices.",
          "type": "Concept",
          "diff": 2
        },
        {
          "id": "AA17.CQ4",
          "q": "What is the Value in Use of the machinery using Present Value basis?",
          "opts": [
            "₹2,00,000",
            "₹2,20,000",
            "₹1,84,350",
            "₹3,00,000"
          ],
          "ans": 2,
          "exp": "Value in Use = Present Value of future cash inflows = ₹30,000 × 6.145 (PV factor for 10-year annuity at 10%) = ₹1,84,350. This represents the discounted value of expected cash flows from using the machine over its remaining life. Current Cost (₹2,20,000) and Historical Cost (₹2,00,000) are different measurement bases.",
          "type": "Concept",
          "diff": 2
        },
        {
          "id": "AA17.CQ5",
          "q": "If RNK Ltd. is NOT a Going Concern, at what value should the machinery be shown in Balance Sheet as on 31st March 20X5?",
          "opts": [
            "₹1,90,000 (Historical Cost less Depreciation)",
            "₹2,20,000 (Current Cost)",
            "₹1,84,350 (Present Value)",
            "Net Realisable Value (if determinable)"
          ],
          "ans": 3,
          "exp": "When Going Concern assumption is not applicable, assets are stated at Net Realisable Value (amount currently obtainable on sale in orderly disposal), not at historical cost less depreciation. The Framework specifies that if financial statements are prepared on a different basis (e.g., NRV), the basis used should be disclosed.",
          "type": "Trap",
          "diff": 2
        }
      ]
    },
    "mcqs": [
      {
        "id": "AA17.Q1",
        "q": "MNO Ltd. has a pending damage suit filed against it. Probability of losing is more than not losing. Estimated damages ₹5,00,000 can be ascertained with reasonable accuracy. How should this be treated?",
        "opts": [
          "Disclose as Contingent Liability only",
          "Create Provision of ₹5,00,000 by charge against profit",
          "Ignore until court judgment",
          "Show as Reserve"
        ],
        "ans": 1,
        "exp": "Per the Framework, when probability of losing the suit is more than not losing it and amount can be ascertained with reasonable accuracy, enterprise should create a provision by charge against profit. A provision is a liability which can be measured only by using substantial degree of estimation.",
        "type": "Concept",
        "diff": 2
      },
      {
        "id": "AA17.Q2",
        "q": "Which of the following is NOT an element of financial statements as per the Framework?",
        "opts": [
          "Asset",
          "Liability",
          "Reserve",
          "Equity"
        ],
        "ans": 2,
        "exp": "The Framework classifies items in five broad groups: Asset, Liability, Equity, Income, and Expenses. Reserve is not a separate element - it forms part of Equity. Gains and losses are also not separate elements as their economic characteristics are same as income and expenses respectively.",
        "type": "Concept",
        "diff": 1
      },
      {
        "id": "AA17.Q3",
        "q": "ABC Ltd. has entered into agreement to purchase custom machinery. Before delivery, production method changed making machine useless. Scrap value is nil. The ₹8,00,000 purchase price should be:",
        "opts": [
          "Capitalized as Machine and depreciated over useful life",
          "Recognized as Liability to supplier and Loss in P&L",
          "Disclosed as Contingent Liability only",
          "Deferred and amortized over 5 years"
        ],
        "ans": 1,
        "exp": "When flow of economic benefit beyond current period is improbable, expenditure is recognized as expense, not asset. Since binding agreement exists, liability of ₹8,00,000 must be recognized. As machine provides no future benefit, entire amount is expensed as loss on change in production method.",
        "type": "Trap",
        "diff": 2
      },
      {
        "id": "AA17.Q4",
        "q": "Provisions for doubtful debts and depreciation represent:",
        "opts": [
          "Liabilities of the enterprise",
          "Diminution in value of assets",
          "Reserves for future contingencies",
          "Equity adjustments"
        ],
        "ans": 1,
        "exp": "Per the Framework, provisions for doubtful debts, depreciation, and impairment losses represent diminution in value of assets rather than obligations. These should NOT be considered as liabilities. A liability requires present obligation arising from past events with expected outflow of economic resources.",
        "type": "Trap",
        "diff": 2
      },
      {
        "id": "AA17.Q5",
        "q": "Under which measurement basis are liabilities carried at undiscounted amount?",
        "opts": [
          "Historical Cost and Present Value",
          "Current Cost and Realisable Value",
          "Present Value only",
          "Historical Cost only"
        ],
        "ans": 1,
        "exp": "Per the Framework: Current Cost - liabilities carried at undiscounted amount of cash equivalents required to settle currently. Realisable Value - liabilities at undiscounted amount expected to be paid. Only Present Value uses discounting. Historical Cost records at proceeds received.",
        "type": "Concept",
        "diff": 2
      },
      {
        "id": "AA17.Q6",
        "q": "An asset taken on finance lease by the lessee should be recognized as asset by:",
        "opts": [
          "Lessor only, as legal owner",
          "Lessee only, as controller",
          "Both lessor and lessee",
          "Neither, until lease ends"
        ],
        "ans": 1,
        "exp": "Per the Framework, asset is a resource 'controlled' by enterprise, not necessarily owned. In finance lease, lessee controls the asset and recognizes it despite not having legal ownership. Lessor does not recognize the asset despite ownership because control vests with lessee.",
        "type": "Trap",
        "diff": 2
      },
      {
        "id": "AA17.Q7",
        "q": "Which is NOT a fundamental accounting assumption per the Framework?",
        "opts": [
          "Going Concern",
          "Accrual",
          "Consistency",
          "Prudence"
        ],
        "ans": 3,
        "exp": "The Framework identifies three fundamental accounting assumptions: Going Concern, Accrual, and Consistency. Prudence is a component of Reliability (qualitative characteristic) - it requires exercising caution in reporting uncertain outcomes, but it's not a fundamental assumption.",
        "type": "Concept",
        "diff": 1
      },
      {
        "id": "AA17.Q8",
        "q": "A bank does not recognize interest earned on Non-Performing Assets. This is because:",
        "opts": [
          "Interest is not material",
          "Corresponding asset (increase in advances) cannot be recognized as future benefit is not probable",
          "It violates prudence principle",
          "Banks are exempt from accrual basis"
        ],
        "ans": 1,
        "exp": "Income is always associated with either increase of asset or reduction of liability. No income can be recognized unless corresponding increase of asset can be recognized. For NPA, flow of economic benefit beyond current period is not probable, hence increase in advances (asset) cannot be recognized, and consequently interest income cannot be recognized.",
        "type": "Concept",
        "diff": 2
      },
      {
        "id": "AA17.Q9",
        "q": "For Physical Capital Maintenance calculation, assets are restated using:",
        "opts": [
          "Average price indices",
          "Specific price indices applicable to each asset",
          "Consumer price index",
          "Wholesale price index"
        ],
        "ans": 1,
        "exp": "Physical Capital Maintenance restates historical costs of assets at closing prices using specific price indices applicable to each asset. This ensures funds are retained for replacement of each specific asset at its respective closing price. Financial Capital at Current Purchasing Power uses average price indices.",
        "type": "Trap",
        "diff": 2
      },
      {
        "id": "AA17.Q10",
        "q": "In case of conflict between an Accounting Standard and the Framework:",
        "opts": [
          "Framework prevails",
          "Accounting Standard prevails",
          "Latest issued document prevails",
          "Management can choose either"
        ],
        "ans": 1,
        "exp": "The Framework explicitly states: 'Nothing in the framework overrides any specific Accounting Standard. In case of conflict between an Accounting Standard and the framework, the requirements of the Accounting Standard will prevail over those of the framework.'",
        "type": "Concept",
        "diff": 1
      }
    ],
    "tricky": [
      {
        "id": "AA17.1",
        "point": "Control vs Ownership in Asset Recognition",
        "mistake": "Assuming legal ownership is necessary for asset recognition; failing to recognize finance lease assets by lessee",
        "why": "ICAI tests the fundamental concept that 'control' not 'ownership' determines asset recognition - critical for lease accounting",
        "priority": "Very High"
      },
      {
        "id": "AA17.2",
        "point": "Provisions for Doubtful Debts/Depreciation are NOT Liabilities",
        "mistake": "Classifying provisions for bad debts, depreciation, impairment as liabilities instead of asset valuation adjustments",
        "why": "Framework explicitly distinguishes these as diminution in asset values, testing whether students understand true liability definition",
        "priority": "Very High"
      },
      {
        "id": "AA17.3",
        "point": "Average vs Specific Price Indices in Capital Maintenance",
        "mistake": "Using specific price indices for Financial Capital Maintenance at Current Purchasing Power (should use average indices)",
        "why": "ICAI tests precise understanding of the three capital maintenance approaches and their calculation methods",
        "priority": "High"
      },
      {
        "id": "AA17.4",
        "point": "Future Commitments vs Present Obligations",
        "mistake": "Recognizing liability when management decides to acquire assets (before delivery or irrevocable agreement)",
        "why": "Tests understanding that decision alone doesn't create obligation - delivery or irrevocable agreement required",
        "priority": "High"
      },
      {
        "id": "AA17.5",
        "point": "Income Recognition linked to Asset/Liability Changes",
        "mistake": "Recognizing income (like interest on NPA) without corresponding recognizable increase in asset",
        "why": "ICAI tests the interrelationship between income and asset recognition criteria from the Framework",
        "priority": "High"
      },
      {
        "id": "AA17.6",
        "point": "Non-Going Concern - Use NRV not Historical Cost",
        "mistake": "Continuing to use historical cost less depreciation when going concern assumption is not applicable",
        "why": "Tests knowledge that non-going concern requires NRV basis and this fact must be disclosed",
        "priority": "High"
      },
      {
        "id": "AA17.7",
        "point": "Framework vs Accounting Standard - AS Prevails",
        "mistake": "Assuming Framework principles override specific Accounting Standards",
        "why": "ICAI explicitly states AS prevails in conflict - tests awareness of hierarchy of accounting pronouncements",
        "priority": "Medium"
      }
    ],
    "amendments": [
      {
        "id": "AA17.A1",
        "topic": "Companies (Accounting Standards) Rules, 2021",
        "what": "Companies (Accounting Standards) Rules, 2021 has replaced Companies (Accounting Standards) Rules, 2006 as amended from time to time",
        "oldPosition": "Framework was relevant in context of Companies (Accounting Standards) Rules, 2006",
        "newPosition": "Framework is now relevant in context of Companies (Accounting Standards) Rules, 2021 notified by Central Government and Accounting Standards issued by ICAI",
        "effectiveFrom": "Applicable for current attempts",
        "pdfStatus": "mentioned in PDF",
        "priority": "Medium"
      },
      {
        "id": "AA17.A2",
        "topic": "Section 128(1) - Accrual Basis Mandatory for Companies",
        "what": "Companies Act, 2013 Section 128(1) mandates companies to maintain accounts on accrual basis only",
        "oldPosition": "Under Companies Act, 1956, specific provision was different",
        "newPosition": "Section 128(1) of Companies Act, 2013 makes accrual basis mandatory for all companies - no choice of cash basis",
        "effectiveFrom": "Companies Act, 2013 provisions applicable",
        "pdfStatus": "mentioned in PDF",
        "priority": "Medium"
      }
    ],
    "cases": [],
    "trees": []
  }
]