# Структура видов затрат

Вид затрат (ВЗ) — аналитическая единица, по которой классифицируются расходы.
В Wilo-ERP используется трёхуровневая группировка, отражающая структуру SAP CO.

---

## Как читать коды

Коды имеют формат `CO-XXX.ASS`. Суффикс `.ASS` означает принадлежность к основной иерархии затрат.
Группы верхнего уровня называются `MFC_PRIM_N`.

| Группа | Что сюда входит |
|--------|----------------|
| `MFC_PRIM_1` | Затраты на персонал: зарплата, соцвзносы, пенсионные |
| `MFC_PRIM_2` | Прочие операционные затраты: обслуживание, страховки, аренда, командировки, реклама и др. |
| `MFC_PRIM_3` | Амортизация: основная, исключительная, дополнительная |

---

## Иерархия (SAP-формат)

Для поиска используйте **Ctrl+F**. В скобках — номер SAP счёта.

```
MFC_PRIM                                 Total primary costs
  MFC_PRIM_1                             Total primary personnel costs
    CO-PERS.ASS                          Personnel expenses
      CO-PAYR.ASS         [30630000]     Payroll
      CO-RED.ASS          [30630100]     Staff redundancy payments
      CO-SOC.ASS          [30630200]     Social security contributions
      CO-PEN.ASS          [30630300]     Pension Plan expenses
      CO-VAR.ASS          [30630400]     Royalty / Variable Payments
    CO-EXPERS.ASS         [30840190]     Employees temp. contracts
  MFC_PRIM_2                             Total primary other costs
    CO-MAIN.ASS           [30840000]     Maintenance
    CO-INSU.ASS           [30840010]     Insurance
    CO-OPERS.ASS          [30840020]     Other personnel expenses
    CO-EDU.ASS            [30840025]     Education costs
    CO-RENT.ASS           [30840030]     Rents / Leasing
    CO-TRENT.ASS          [30840040]     Travelling and Entertainment
      CO-TRAV.ASS         [30840040]     Travelling
      CO-ENT.ASS          [30840040]     Entertainment
    CO-COM.ASS            [30840050]     Communication
    CO-CONS.ASS           [30840060]     Legal, consultancy, audit
    CO-EXSER.ASS          [30840065]     External services
    CO-OTCO.ASS                          Other costs
      CO-OT.ASS           [30840070]     Sundry other expenses
      CO-OFF.ASS          [30840071]     Office supplies
      CO-TAX.ASS          [30840072]     Other Fees
      CO-CONEN.ASS        [30840073]     Cost of operating supplies
      CO-ENERGY.ASS       [30840075]     Energy costs
      CO-MPDEV.ASS        [30840076]     Material product development
      CO-SMTOOL.ASS       [30840077]     Small tools
    CO-EXPREV.ASS         [30840080]     Exp. prev. years not cov. by prov.
    CO-INCPROV.ASS        [30840090]     Income reversal of other provisions
    CO-WAR.ASS            [30840100]     Installation costs warranty
      CO-WARA.ASS         [30840100]     Warranty assessment
      CO-WARC.ASS         [30840100]     Warranty contracting firms
      CO-WARNC.ASS        [30840100]     Warranty non-contracting firms
    CO-ADDWAR.ASS         [30840110]     Addition to provision warranty
    CO-ADV.ASS            [30840150]     Advertising
    CO-FR.ASS             [30840160]     Freights
    CO-PROV.ASS           [30840170]     Provisions / Commissions
    CO-BANK.ASS           [30840180]     Bank Charges
    CO-INCH.ASS                          Internal charges
      CO-INTCHIT.ASS      [30840310]     Internal charges IT
    CO-ALLOC.ASS          [30840320]     Internal Charges
    CO-ALLPR.ASS          [30840330]     Internal Charges Projects
    CO-REVWAR.ASS         [30430210]     Income reversal provision warranty
    CO-INCOTLI.ASS        [30430630]     Income reversal other Liability
    CO-INCTHIR.ASS        [30430640]     Income reinv. costs third party
    CO-CAPSER.ASS         [30430790]     Capitalized Services
    CO-DEPRREC.ASS                       Depreciation on receivables
      CO-INCGENA.ASS      [30430110]     Inc. expected credit loss IFRS9
      CO-INCPD.ASS        [30430120]     Inc. prov. exp. product dispute
      CO-INCBADA.ASS      [30430160]     Inc. release spec. bad-debt allow.
      CO-LOSSREC.ASS      [30830710]     Loss of receivables
      CO-BADDEPT.ASS      [30830720]     Alloc. to spec. bad-debt allow.
      CO-GENALLO.ASS      [30830730]     All. expected credit loss IFRS9
      CO-EXPPD.ASS        [30830740]     Prov. expected product dispute
    CO-RESIC.ASS                         Income and expense Intercompany
      CO-EXPIC.ASS                       Expense services purchased IC
        CO-RENTIC.ASS     [30840120]     Rents / leasing intercompany
        CO-MAN.ASS        [30840130]     Management Fees
        CO-SERVIC.ASS     [30840140]     Other services purch. intercompany
        CO-ITIC.ASS       [30840650]     IT costs Intercompany
        CO-PEIC.ASS       [30840660]     Personnel expense Intercompany
        CO-MAIC.ASS       [30840670]     Marketing expenses Intercompany
      CO-INCIC.ASS                       Income invoicing costs IC
        CO-OINCIC.ASS     [30430600]     Income other services purch. IC
        CO-REINCIC.ASS    [30430610]     Rental income intercompany
        CO-INCMAN.ASS     [30430620]     Income from Management fees
        CO-INCICIT.ASS    [30430650]     Inc. IT costs Intercompany
        CO-INCICPE.ASS    [30430660]     Inc. personnel expense Interco.
        CO-INCICMA.ASS    [30430670]     Inc. Marketing expense Interco.
  MFC_PRIM_3                             Total primary depreciations
    CO-DEPR.ASS           [30740000]     Depreciation IAS
      CO-DEPRACT.ASS                     Depreciation actual
      CO-DEPRADD.ASS                     Depreciation additional
      CO-DEPREXC.ASS      [30740100]     Exceptional depreciation IAS
```

---

## Все коды — плоская таблица

Используйте **Ctrl+F** для поиска по коду, названию или номеру SAP.

| Код | SAP № | Название | Группа |
|-----|-------|---------|--------|
| MFC_PRIM | — | Total primary costs | — |
| MFC_PRIM_1 | — | Total primary personnel costs | MFC_PRIM |
| CO-PERS.ASS | — | Personnel expenses | MFC_PRIM_1 |
| CO-PAYR.ASS | 30630000 | Payroll | CO-PERS.ASS |
| CO-RED.ASS | 30630100 | Staff redundancy payments | CO-PERS.ASS |
| CO-SOC.ASS | 30630200 | Social security contributions | CO-PERS.ASS |
| CO-PEN.ASS | 30630300 | Pension Plan expenses | CO-PERS.ASS |
| CO-VAR.ASS | 30630400 | Royalty / Variable Payments | CO-PERS.ASS |
| CO-EXPERS.ASS | 30840190 | Employees temp. contracts | MFC_PRIM_1 |
| MFC_PRIM_2 | — | Total primary other costs | MFC_PRIM |
| CO-MAIN.ASS | 30840000 | Maintenance | MFC_PRIM_2 |
| CO-INSU.ASS | 30840010 | Insurance | MFC_PRIM_2 |
| CO-OPERS.ASS | 30840020 | Other personnel expenses | MFC_PRIM_2 |
| CO-EDU.ASS | 30840025 | Education costs | MFC_PRIM_2 |
| CO-RENT.ASS | 30840030 | Rents / Leasing | MFC_PRIM_2 |
| CO-TRENT.ASS | 30840040 | Travelling and Entertainment | MFC_PRIM_2 |
| CO-TRAV.ASS | 30840040 | Travelling | CO-TRENT.ASS |
| CO-ENT.ASS | 30840040 | Entertainment | CO-TRENT.ASS |
| CO-COM.ASS | 30840050 | Communication | MFC_PRIM_2 |
| CO-CONS.ASS | 30840060 | Legal, consultancy, audit | MFC_PRIM_2 |
| CO-EXSER.ASS | 30840065 | External services | MFC_PRIM_2 |
| CO-OTCO.ASS | — | Other costs | MFC_PRIM_2 |
| CO-OT.ASS | 30840070 | Sundry other expenses | CO-OTCO.ASS |
| CO-OFF.ASS | 30840071 | Office supplies | CO-OTCO.ASS |
| CO-TAX.ASS | 30840072 | Other Fees | CO-OTCO.ASS |
| CO-CONEN.ASS | 30840073 | Cost of operating supplies | CO-OTCO.ASS |
| CO-ENERGY.ASS | 30840075 | Energy costs | CO-OTCO.ASS |
| CO-MPDEV.ASS | 30840076 | Material product development | CO-OTCO.ASS |
| CO-SMTOOL.ASS | 30840077 | Small tools | CO-OTCO.ASS |
| CO-EXPREV.ASS | 30840080 | Exp. prev. years not cov. by prov. | MFC_PRIM_2 |
| CO-INCPROV.ASS | 30840090 | Income reversal of other provisions | MFC_PRIM_2 |
| CO-WAR.ASS | 30840100 | Installation costs warranty | MFC_PRIM_2 |
| CO-WARA.ASS | 30840100 | Warranty assessment | CO-WAR.ASS |
| CO-WARC.ASS | 30840100 | Warranty contracting firms | CO-WAR.ASS |
| CO-WARNC.ASS | 30840100 | Warranty non-contracting firms | CO-WAR.ASS |
| CO-ADDWAR.ASS | 30840110 | Addition to provision warranty | MFC_PRIM_2 |
| CO-ADV.ASS | 30840150 | Advertising | MFC_PRIM_2 |
| CO-FR.ASS | 30840160 | Freights | MFC_PRIM_2 |
| CO-PROV.ASS | 30840170 | Provisions / Commissions | MFC_PRIM_2 |
| CO-BANK.ASS | 30840180 | Bank Charges | MFC_PRIM_2 |
| CO-INCH.ASS | — | Internal charges | MFC_PRIM_2 |
| CO-INTCHIT.ASS | 30840310 | Internal charges IT | CO-INCH.ASS |
| CO-ALLOC.ASS | 30840320 | Internal Charges | MFC_PRIM_2 |
| CO-ALLPR.ASS | 30840330 | Internal Charges Projects | MFC_PRIM_2 |
| CO-REVWAR.ASS | 30430210 | Income reversal provision warranty | MFC_PRIM_2 |
| CO-INCOTLI.ASS | 30430630 | Income reversal other Liability | MFC_PRIM_2 |
| CO-INCTHIR.ASS | 30430640 | Income reinv. costs third party | MFC_PRIM_2 |
| CO-CAPSER.ASS | 30430790 | Capitalized Services | MFC_PRIM_2 |
| CO-DEPRREC.ASS | — | Depreciation on receivables | MFC_PRIM_2 |
| CO-INCGENA.ASS | 30430110 | Inc. expected credit loss IFRS9 | CO-DEPRREC.ASS |
| CO-INCPD.ASS | 30430120 | Inc. prov. exp. product dispute | CO-DEPRREC.ASS |
| CO-INCBADA.ASS | 30430160 | Inc. release spec. bad-debt allow. | CO-DEPRREC.ASS |
| CO-LOSSREC.ASS | 30830710 | Loss of receivables | CO-DEPRREC.ASS |
| CO-BADDEPT.ASS | 30830720 | Alloc. to spec. bad-debt allow. | CO-DEPRREC.ASS |
| CO-GENALLO.ASS | 30830730 | All. expected credit loss IFRS9 | CO-DEPRREC.ASS |
| CO-EXPPD.ASS | 30830740 | Prov. expected product dispute | CO-DEPRREC.ASS |
| CO-RESIC.ASS | — | Income and expense Intercompany | MFC_PRIM_2 |
| CO-EXPIC.ASS | — | Expense services purchased IC | CO-RESIC.ASS |
| CO-RENTIC.ASS | 30840120 | Rents / leasing intercompany | CO-EXPIC.ASS |
| CO-MAN.ASS | 30840130 | Management Fees | CO-EXPIC.ASS |
| CO-SERVIC.ASS | 30840140 | Other services purch. intercompany | CO-EXPIC.ASS |
| CO-ITIC.ASS | 30840650 | IT costs Intercompany | CO-EXPIC.ASS |
| CO-PEIC.ASS | 30840660 | Personnel expense Intercompany | CO-EXPIC.ASS |
| CO-MAIC.ASS | 30840670 | Marketing expenses Intercompany | CO-EXPIC.ASS |
| CO-INCIC.ASS | — | Income invoicing costs IC | CO-RESIC.ASS |
| CO-OINCIC.ASS | 30430600 | Income other services purch. IC | CO-INCIC.ASS |
| CO-REINCIC.ASS | 30430610 | Rental income intercompany | CO-INCIC.ASS |
| CO-INCMAN.ASS | 30430620 | Income from Management fees | CO-INCIC.ASS |
| CO-INCICIT.ASS | 30430650 | Inc. IT costs Intercompany | CO-INCIC.ASS |
| CO-INCICPE.ASS | 30430660 | Inc. personnel expense Interco. | CO-INCIC.ASS |
| CO-INCICMA.ASS | 30430670 | Inc. Marketing expense Interco. | CO-INCIC.ASS |
| MFC_PRIM_3 | — | Total primary depreciations | MFC_PRIM |
| CO-DEPR.ASS | 30740000 | Depreciation IAS | MFC_PRIM_3 |
| CO-DEPRACT.ASS | — | Depreciation actual | CO-DEPR.ASS |
| CO-DEPRADD.ASS | — | Depreciation additional | CO-DEPR.ASS |
| CO-DEPREXC.ASS | 30740100 | Exceptional depreciation IAS | CO-DEPR.ASS |

---

## Счета SAP GL (листовые виды затрат)

Всего 754 счётов SAP GL, сгруппированных по 62 видам затрат.
Разверните нужный раздел для просмотра списка счётов.

??? note "CO-ADDWAR.ASS — 6 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1698300 | Addition to provision for warranties |
    | 3698300 | Addition to provision for warranties |
    | 3698309 | Plan Addition prov. warranty (CO-ADDWAR) |
    | 3698395 | Add. to provision for warranties accr. |
    | 3842445 | Allocation addition provision warranty |
    | 3842446 | >>> No valid master record |

??? note "CO-ADV.ASS — 32 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1687000 | Advertising |
    | 3639643 | non deductable expenses |
    | 3664715 | Salmson printed matter promo |
    | 3687000 | Insertions |
    | 3687009 | Plan advertising |
    | 3687100 | Lithographies, clichés, photos |
    | 3687200 | Catalogues,brochures,printed papers |
    | 3687300 | Advertising and exhibition material |
    | 3687400 | Addition.cost for advertising and exhib. |
    | 3687500 | Advertising gifts |
    | 3687501 | Advertising gifts < 10 EUR |
    | 3687600 | Advertising consulting cost |
    | 3687610 | Media oper. fee,network promotion fee |
    | 3687700 | Advertising cost/Public relations |
    | 3687800 | Sponsoring |
    | 3687830 | Publications promotional grants |
    | 3687890 | Advertising - Contribution |
    | 3687995 | Promotion - Bid exp. |
    | 3689000 | Contrib.for custom.&adver.cost,house exh |
    | 3689009 | Plan Sales Promotion (CO-ADV) |
    | 3689010 | Sales Promotion |
    | 3689095 | Advertising/sales promo-accrual mth-end |
    | 3689100 | gifts below € 35,00 |
    | 3689101 | Gifts up to 8,40 € net (gross = 10 €) |
    | 3689200 | Gifts over 35,00 € |
    | 3689210 | Gifts to customers (60% tax) |
    | 3689300 | >>> No valid master record |
    | 3689400 | Speeches/Events/Trainings |
    | 3689401 | Customer travels/Incentives |
    | 3689500 | Cost for entertainment at customer event |
    | 3842250 | Allocation advertising/promotion |
    | 3842251 | >>> No valid master record |

??? note "CO-ALLOC.ASS — 13 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 3842565 | Alloc. internal charge |
    | 3842566 | Alloc. Internal charge plan |
    | 3842570 | Alloc. Internal charge RTE |
    | 3842800 | AS Plan Facility |
    | 3842801 | AS Plan Maintenance |
    | 3842802 | AS Plan Energy |
    | 3842805 | AS Deviation Facility |
    | 3842806 | AS Deviation Maintenance |
    | 3842807 | AS Deviation Energy |
    | 3842810 | AS Plan Central HR |
    | 3842815 | AS Deviation Central HR |
    | 3842816 | Internal charge total costs plan |
    | 3842820 | Internal charge Labiratory |

??? note "CO-ALLPR.ASS — 40 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 3843015 | Allocation Project Hours |
    | 3843252 | Cost Allocation Application Sewage |
    | 3843253 | Cost Allocation Standard Office |
    | 3843254 | Cost Allocation Construction Electricity |
    | 3843255 | Cost Allocation Test Workshop |
    | 3843257 | Cost Allocation Application Mixer |
    | 3843260 | Cost Allocation Design Big general |
    | 3843262 | Cost Allocation Design Big Flow |
    | 3843901 | Structure Borne Sound Acoustics |
    | 3843902 | Acoustic Chamber |
    | 3843903 | Acoustic Measuring Systems |
    | 3843904 | Low Temperature Liquid |
    | 3843905 | Mechanical Seal, Pressure Cycling Test |
    | 3843906 | Test-Tube WILO Specimen |
    | 3843907 | Pressure Burst and Holding |
    | 3843908 | High Ambient Temperature |
    | 3843909 | PDWT Particle-driven-wear |
    | 3843910 | Bearing Qualification |
    | 3843911 | TDWT |
    | 3843912 | TCT EDAG |
    | 3843913 | Dry Runner Endurance |
    | 3843914 | TCT/TF/DVGW |
    | 3843915 | Endurance MS45/65 |
    | 3843916 | Endurance MS25 |
    | 3843917 | Qualification-Test E&M |
    | 3843918 | EMC HF-Absorber Cabin |
    | 3843919 | Hydraulic Measurement Small Pumps |
    | 3843920 | Systems |
    | 3843921 | Hydraulic Measurement Big Pumps |
    | 3843922 | Brake (passive) |
    | 3843923 | Motor Test Bench 45kw |
    | 3843924 | Permanent Magnet Rotor Test |
    | 3843925 | DzP Motor Test Bench |
    | 3843926 | Climatic Chamber Thermodynamics |
    | 3843927 | High Temperature Thermodynamics |
    | 3843928 | CNC Milling Machine Low |
    | 3843929 | CNC Milling Machine High (vc560) |
    | 3843930 | CNC Lathing Machine |
    | 3843931 | Additive Manufacturing 3D Printer |
    | 3843939 | Internal charge Plan Research & Techn. |

??? note "CO-BADDEPT.ASS — 4 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1650350 | Allowance to provision trade receivables |
    | 3697400 | Allocation to value adjustment trade rec |
    | 3842395 | Allocation specific bad debt allowance |
    | 3842396 | >>> No valid master record |

??? note "CO-BANK.ASS — 9 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 3639663 | Bank charges |
    | 3639678 | bank charges on doc.remittance |
    | 3639680 | Bank Commission on Security |
    | 3673300 | Bank charges |
    | 3673309 | Plan Bank charges (CO-BANK) |
    | 3673320 | Bank Charges : Letter of credit |
    | 3673500 | Bank charges abroad (paym.in+out) |
    | 3842385 | Allocation bank charges |
    | 3842386 | >>> No valid master record |

??? note "CO-CAPSER.ASS — 5 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1822200 | Capitalisation of development costs Proj |
    | 3548200 | Capitalized service (CO-CAPSER) |
    | 3822200 |  |
    | 3842560 | Alloc. income Marketing Intercompany |
    | 3842561 | >>> No valid master record |

??? note "CO-COM.ASS — 12 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1682195 | Communication cost accruals |
    | 1682400 | Telephone fees D2 / mobile phone |
    | 3682000 | Cost for postage |
    | 3682009 | Plan communication (CO-COM) |
    | 3682100 | Telephone/Telefax |
    | 3682101 | Telephone/Fax/privat part |
    | 3682102 | Telephone/Fax flat reimbursement |
    | 3682195 | Communication cost accruals |
    | 3682200 | Internet/Datex/ISDN |
    | 3682400 | Telephone fees D2 / mobile phone |
    | 3842295 | Allocation communication |
    | 3842296 | >>> No valid master record |

??? note "CO-CONEN.ASS — 18 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1605000 | Fuels, oils for cars |
    | 3602000 | Supplies product, oils, lubricating mat, |
    | 3602009 | Plan supplies (CO-CONEN) |
    | 3602095 | supplies / accrual month end |
    | 3602400 | Withdrawal of material for cost centre |
    | 3602401 | Output cost center for maintenance parts |
    | 3602402 | Outputs cost center - manufact. supples |
    | 3604100 | Wrapping material not product specific |
    | 3605000 | Fuels, oils for cars |
    | 3605001 | FUEL overspend (non tax-deductable) |
    | 3605009 | Plan Fuels |
    | 3607912 | Common packaging |
    | 3607914 | Manufacturing supplies |
    | 3607930 | Gas |
    | 3687940 | petrol expenses |
    | 3687945 | Gasoil expenses |
    | 3842320 | Allocation other operating supplies |
    | 3842321 | >>> No valid master record |

??? note "CO-CONS.ASS — 10 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1677000 | Legal consulting fees (legal, tax, audit |
    | 1677200 | Management consulting |
    | 3639631 | Audit financial fees |
    | 3677000 | Legal consulting fees (legal, tax, audit |
    | 3677009 | Plan consulting fees (CO-CONS) |
    | 3677100 | Auditors |
    | 3677200 | Management consulting |
    | 3677295 | Consulting fees / accrual month end |
    | 3842305 | Allocation legal consultancy, audit |
    | 3842306 | >>> No valid master record |

??? note "CO-DEPRACT.ASS — 6 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1650000 | Depreciation intangible until 31.05.04 |
    | 1650320 | Depreciation intang. assets self-created |
    | 1650400 | Depreciation on fixed assets (mth. acc.) |
    | 1651000 | Depreciation intangible assets |
    | 1653000 | Depreciation on Tangible Fixed Assets |
    | 3842350 | Allocation depreciation IAS |

??? note "CO-DEPRADD.ASS — 2 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1651009 | Plan depreciaton IAS (CO-DEPR) |
    | 3842351 | >>> No valid master record |

??? note "CO-DEPREXC.ASS — 4 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1655000 | Except. depreciation on tang. fixed Ass. |
    | 3655000 | Exc. depreciation on Tang.Fixed Assets |
    | 3842490 | Alloc. Exceptional depreciation |
    | 3842491 | >>> No valid master record |

??? note "CO-EDU.ASS — 10 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1664095 | Education and further education cost |
    | 3664000 | Education and further education cost |
    | 3664400 | Staff entertainment during education |
    | 3664409 | Plan education cost (CO-EDU) |
    | 3664500 | Travelling cost staff at education(e.g.o |
    | 3664595 | Accruals education cost |
    | 3709340 | Training external institution |
    | 3842525 | Alloc. Eduaction |
    | 3842526 | >>> No valid master record |
    | 3843030 | Conference package training center Dortm |

??? note "CO-ENERGY.ASS — 8 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1695195 | energy cost / accrual month end |
    | 3605100 | Energy costs (electricity, gas, water, h |
    | 3605109 | Plan energy cost (CO-ENERGY) |
    | 3605150 | Electric charging station |
    | 3605195 | energy cost / accrual month end |
    | 3605200 | Water / sewage |
    | 3842575 | Allocation energy costs |
    | 3842576 | >>> No valid master record |

??? note "CO-ENT.ASS — 10 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 3685600 | Entertainment of business friend |
    | 3685700 | Other entertainment cost |
    | 3685710 | Entertainment cost not tax deduct. 30% |
    | 3685800 | Cost for room rent meeting WILO/staff |
    | 3842285 | Allocation entertainment |
    | 3842286 | >>> No valid master record |
    | 3843002 | Rent training center Dortmund |
    | 3843003 | Catering costs training center Dortmund |
    | 3843004 | Other services training center Dortmund |
    | 3843005 | Conference package training center Dortm |

??? note "CO-EXPERS.ASS — 6 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 3610855 | Temporary staff direct |
    | 3694100 | Employees on temporary loan |
    | 3694109 | Plan Employees tempor. loan (CO-EXPERS) |
    | 3694195 | Employees on temp. loan accrual mth. end |
    | 3842505 | Alloc. employees on temporary loan |
    | 3842506 | >>> No valid master record |

??? note "CO-EXPPD.ASS — 2 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1697500 | Plan Addit.prov.exp.prod.disp.(CO-EXPPD) |
    | 3842590 | Assessement addition to provision IFRS9 |

??? note "CO-EXPREV.ASS — 4 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1698200 | Extra exp. on utilisation of provisions |
    | 3698200 | Extra exp. on utilisation of provisions |
    | 3842435 | Alloc. exp. prev. year not cov. by prov. |
    | 3842436 | >>> No valid master record |

??? note "CO-EXSER.ASS — 22 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1694295 | Cleaning of buildings accrual |
    | 1694895 | Diverse external services |
    | 3601011 | Residual products-conversion |
    | 3607830 | Subcontracting Manufacturing Tools |
    | 3610300 | >>> No valid master record |
    | 3610400 | Product-related extern.services |
    | 3610450 | Start up costs products |
    | 3610820 | Subcontracting - operating system |
    | 3610840 | Eco-contribution |
    | 3614900 | External storage cost |
    | 3614909 | Plan extern.Storage cost |
    | 3693520 | Honoraires Prestations Diverses |
    | 3694009 | Plan other external services (CO-EXSER) |
    | 3694200 | Cleaning of buildings |
    | 3694210 | disposal cost |
    | 3694500 | Exter.servic.for prod.develpm.construct. |
    | 3694795 | Product-related extern.servic./accr.mth. |
    | 3694800 | Diverse external services |
    | 3694895 | External services/accrual mont end |
    | 3694910 | Testing Charges |
    | 3842310 | Allocation external services |
    | 3842311 | >>> No valid master record |

??? note "CO-FR.ASS — 20 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1614930 | Sundry Transport |
    | 3614009 | Plan Freights (CO-FR) |
    | 3614095 | Freights accruals month end |
    | 3614830 | Transport btw. Establishment/contruction |
    | 3614930 | Sundry Transport |
    | 3614931 | Sundry Transport production |
    | 3614960 | >>> No valid master record |
    | 3615135 | Parcel service domestic |
    | 3615140 | Freights domestic |
    | 3615141 | Freights export |
    | 3615145 | Sea freight |
    | 3615150 | Courier domestic |
    | 3615155 | Air freight |
    | 3615160 | Express domestic |
    | 3615161 | Transportation Managm. freight differenc |
    | 3615165 | Shuttle Service |
    | 3615175 | Re-sending to deliverer |
    | 3664714 | Transport problems |
    | 3842270 | Allocation freights |
    | 3842271 | >>> No valid master record |

??? note "CO-GENALLO.ASS — 6 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1697031 | Addition to general allowance for doubtf |
    | 1697400 | General allowance for doubtful Acc. |
    | 3697031 | Addition to general allowance for doubtf |
    | 3697409 | Plan Gen. allow. doubt. Acc.(CO-GENALLO) |
    | 3842475 | Alloc. general allow. for doubtful acc. |
    | 3842476 | >>> No valid master record |

??? note "CO-INCBADA.ASS — 5 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1545100 | Inc. specific allowance doubtful acc. |
    | 1548106 | Rev. of provision debts receivable |
    | 3548106 | Rev. of provision debts receivable |
    | 3842485 | Alloc. Inc. specific bad debts |
    | 3842486 | >>> No valid master record |

??? note "CO-INCGENA.ASS — 4 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1545400 | Inc. general allowance doubtful acc. |
    | 3545400 | Inc. general allowance doubtful acc. |
    | 3842480 | Alloc. Inc. gen. allow. for doubtf. acc. |
    | 3842481 | >>> No valid master record |

??? note "CO-INCICIT.ASS — 6 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1540555 | Accrual Income intercompany from chargi |
    | 3540550 | Income intercompany costs IT |
    | 3540555 | Income IT Intercompany Accruals |
    | 3540559 | Plan Inc. IT cost Interco. (CO-INCICIT) |
    | 3842520 | Alloc. income IT costs Intercompany |
    | 3842521 | >>> No valid master record |

??? note "CO-INCICMA.ASS — 5 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1540015 | Income IC Marketing |
    | 3540010 | Income IC reinv. Marketing exp. |
    | 3540019 | Plan Inc. Marketing exp. IC (CO-INCICMA) |
    | 3842550 | Alloc. income Marketing Intercompany |
    | 3842551 | >>> No valid master record |

??? note "CO-INCICPE.ASS — 6 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1540565 | Accruals Income IC from charging personn |
    | 3540560 | Income IC charging personnel expense |
    | 3540565 | Income personnel expenses IC Accruals |
    | 3540569 | Plan Inc. personnel exp. IC (CO-INCICPE) |
    | 3842515 | Alloc. income personnel expense IC |
    | 3842516 | >>> No valid master record |

??? note "CO-INCMAN.ASS — 5 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 3540890 | Income IC management fees |
    | 3540895 | Income IC management fee accrual |
    | 3540899 | Plan Inc. Mgm. fees Interco. (CO-INCMAN) |
    | 3842470 | Allocation income management fees |
    | 3842471 | >>> No valid master record |

??? note "CO-INCOTLI.ASS — 4 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1548100 | Income on the reversal other liabilities |
    | 3548100 | Income on reversal of liabilities |
    | 3842495 | Alloc. Income reversal other liabilities |
    | 3842496 | >>> No valid master record |

??? note "CO-INCPD.ASS — 2 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1545450 | Income on release provision expected pro |
    | 3842595 | Assessment reversal of provision IFRS9 |

??? note "CO-INCPROV.ASS — 6 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1548000 | Inc. on the reversal of other provisions |
    | 1548108 | other reversals of provisions |
    | 1548117 | Reversal.of prov.for extrord.liabil char |
    | 3548000 | Income reversal of other provisions |
    | 3842440 | Allocation Inc. reversal of provisions |
    | 3842441 | >>> No valid master record |

??? note "CO-INCTHIR.ASS — 6 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 3540909 | Plan Inc. reinv third party (CO-INCTHIR) |
    | 3540972 | Income reinvoicing costs third party |
    | 3540973 | Income from reinvoicing prod. expense |
    | 3540975 | Acc. Income f. reinvoicing to thrd part. |
    | 3842500 | Alloc. income services Intercompany |
    | 3842501 | >>> No valid master record |

??? note "CO-INSU.ASS — 13 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 3687095 | Taxes,insurances,contribut./accural mth. |
    | 3690000 | Build. and property insur. (fire/mach.) |
    | 3690009 | Plan insurances (CO-INSU) |
    | 3690100 | Insurance for interruption of business |
    | 3690200 | Business and environm.liability insur. |
    | 3690300 | Transport insurance |
    | 3690400 | Debtors insurance |
    | 3690500 | Group accident insurance |
    | 3690700 | /transp., group accid., electr. current |
    | 3690800 | Canceled insurance agreement income |
    | 3691000 | Insurance for cars |
    | 3842260 | Allocation Insurance |
    | 3842261 | >>> No valid master record |

??? note "CO-INTCHIT.ASS — 11 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 3840009 | Plan Intern. serv. charge IT(CO-INTCHIT) |
    | 3842510 | Alloc. internal charges IT |
    | 3842511 | Assessment Other IT Services |
    | 3843000 | Calculative rent PC |
    | 3843001 | Calculative costs PC |
    | 3843050 | IT internal charge Hardware |
    | 3843051 | IT internal charge BS |
    | 3843052 | IT internal charge Communic |
    | 3843053 | IT internal charge Cons/Pro |
    | 3843054 | IT internal charge IT intt. |
    | 3843055 | IT internal charge IT intt. |

??? note "CO-ITIC.ASS — 6 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1610015 | Expenses Intercompany IT costs |
    | 3610010 | Expenses Intercompany IT costs |
    | 3610015 | Accruals Expense IC fr. charging IT cost |
    | 3610019 | Plan Exp. IT Cost Interco. (CO-ITIC) |
    | 3842530 | Alloc. IT costs Intercompany |
    | 3842531 | >>> No valid master record |

??? note "CO-LOSSREC.ASS — 9 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1650360 | Allowance to provision other receivables |
    | 3639696 | Depreciation other expenses |
    | 3639713 | Loss on bad debts |
    | 3697100 | Depriciation on receivables domestic |
    | 3697200 | Deprieciation on receivables abroad |
    | 3697310 | Doubtful Deposits |
    | 3697600 | Depreciations curr. assets-other receiv. |
    | 3842390 | Allocation loss of receivables |
    | 3842391 | >>> No valid master record |

??? note "CO-MAIC.ASS — 8 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1687010 | Advertising expenses IC |
    | 1687015 | accr. marketing expense IC |
    | 1687020 | Advertising gifts IC |
    | 3687010 | Expense Intercompany advertising |
    | 3687019 | Plan Exp. Adv./Marketing IC (CO-MAIC) |
    | 3687020 | Expense Intercompany gifts advertising |
    | 3842555 | Alloc. Marketing costs Intercompany |
    | 3842556 | >>> No valid master record |

??? note "CO-MAIN.ASS — 17 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1616000 | External maintenance bulidings |
    | 1616300 | Maintenance cars |
    | 3606009 | Plan material for maintenance |
    | 3616000 | Maintenance buildings |
    | 3616009 | Plan external maintenance (CO-MAIN) |
    | 3616100 | Maintenance machines |
    | 3616200 | Maintenance other equipment |
    | 3616295 | maintenance/accrual month end |
    | 3616300 | Maintenance cars |
    | 3616301 | Non Deductable Car maintenance Expenses |
    | 3616400 | Maintenance IT |
    | 3616590 | Maintenance-fixtures and fittings progra |
    | 3616611 | Purchase order not received |
    | 3616630 | Security fire |
    | 3664712 | Machinery maintenance |
    | 3842255 | Allocation maintenance |
    | 3842256 | >>> No valid master record |

??? note "CO-MAN.ASS — 6 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1695395 | Expense IC management fees accrual |
    | 3695300 | Expense IC management fees |
    | 3695309 | Plan Exp. Mgmt. fees IC (CO-MAN) |
    | 3695395 | Expense IC management fees accrual |
    | 3842380 | Allocation Management fees |
    | 3842381 | >>> No valid master record |

??? note "CO-MPDEV.ASS — 7 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 3600300 | Material product development |
    | 3600309 | Plan mat. product development (CO-MPDEV) |
    | 3600310 | Material product development Prototypes |
    | 3600395 | Material product development accruals |
    | 3615123 | R&D Product development |
    | 3842580 | Allocation material product development |
    | 3842581 | >>> No valid master record |

??? note "CO-OFF.ASS — 11 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1681000 | Textbooks and professional journals |
    | 3608080 | Supplies IT and equipment |
    | 3680100 | printing papers (not prod.and sell.rel.) |
    | 3680200 | Small office equipment |
    | 3681000 | Textbooks and professional journals |
    | 3681009 | Plan literary tools |
    | 3681040 | Office supplies - PC consumables |
    | 3683009 | Plan offic. supplies (CO-OFF) |
    | 3683095 | Office supplies accruals |
    | 3842290 | Allocation office supplies |
    | 3842291 | >>> No valid master record |

??? note "CO-OINCIC.ASS — 13 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1540500 | Income Intercompany reincoicing costs |
    | 3540500 | Income reinvoicing Intercompany |
    | 3540509 | Plan Inc. reinvoic. Interc. (CO-OINCIC) |
    | 3540595 | Income IC reincoicing costs accruals |
    | 3540600 | Income Intercompany commissions |
    | 3540920 | >>> No valid master record |
    | 3540940 | Reinvoicing services Dortmund |
    | 3540970 | Income Intercompany services |
    | 3540981 | Income Intercompany transport expense |
    | 3540995 | Services Intercompany accruals |
    | 3842460 | Alloc. income services Intercompany |
    | 3842461 | >>> No valid master record |
    | 3910509 | Plan Income from Services IC |

??? note "CO-OPERS.ASS — 54 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1639100 | Anniversary payments |
    | 1645100 | Addition to prov.for flex.retirem. regul |
    | 1648000 | Contributions to re-covery insurance |
    | 1660195 | Contribution payment for eating and milk |
    | 1662195 | Company doctor, medical examination accr |
    | 1664775 | contribution for employees transport acc |
    | 3607913 | Workcloth |
    | 3629000 | Collection premium for the mainten. men |
    | 3629109 | Plan other personnel cost (CO-OPERS) |
    | 3629200 | Premium suggestions for improvement |
    | 3632900 | Lump-sum taxation (wage-tax taken over) |
    | 3639009 | Plan voluntary social expenses |
    | 3639010 | canteen |
    | 3639100 | Anniversary paments |
    | 3639200 | Special paym. staff funds-taxable |
    | 3639280 | Car allowance |
    | 3639300 | Inventor payments |
    | 3639500 | lump-sum taxation/monetary advantage car |
    | 3639501 | Lump-sum taxation/monetary advantage bik |
    | 3639638 | Removal expenses |
    | 3639664 | training expenses laval hotel |
    | 3639700 | Contribution staff equity participation |
    | 3643020 | Welfare expenses - Loyality incentive |
    | 3648000 | Contributions to re-covery insurance |
    | 3648035 | Private health insurance expenses |
    | 3660000 | cost for staff employment |
    | 3660100 | Contribution paym. for eating and milk |
    | 3660150 | cost for housing and removal |
    | 3661000 | Contribution paym. for travell. expenses |
    | 3662000 | Company doctor, medical examination |
    | 3662100 | Welfare Expenses |
    | 3662200 | Employee's Flat Rent |
    | 3664009 | Plan personnel development |
    | 3664095 | Other personnel cost/accrual month end |
    | 3664300 | Care and education of trainees |
    | 3664600 | Symposium,seminars,conferences expenses |
    | 3664750 | Recruitment fees |
    | 3664760 | Training expense hotel/travel |
    | 3664775 | expense for employees transport (e.g. sh |
    | 3664790 | other sundry services |
    | 3664795 | Payments to works council |
    | 3664800 | Staff abroad |
    | 3669000 | other social security contributions |
    | 3669100 | Benefits in kind staff |
    | 3669250 | Factory sports |
    | 3669300 | Working clothes (purchase,rent,cleaning) |
    | 3669400 | Premiums for pupils |
    | 3689110 | Gifts to staff tax deductable |
    | 3689120 | Gifts to staff special reason |
    | 3689130 | Gifts to staff |
    | 3694110 | Personnel temporary attached / loaned |
    | 3842265 | Allocation other personnal expenses |
    | 3842266 | >>> No valid master record |
    | 3843070 | Internal charge HR Recruitment |

??? note "CO-OT.ASS — 25 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1694220 | Service Charges |
    | 1695029 | Indexation IAS 29 expenses |
    | 3602409 | Plan other costs (CO-OT) |
    | 3607600 | prepar.cost,fee f.dimin.quant.,express |
    | 3615121 | Outputs cost center business gestures |
    | 3615125 | Brokerage on export sales |
    | 3615180 | Express reinvoice to customer |
    | 3639610 | General documentation |
    | 3639620 | Service Purchase Returns Income |
    | 3648010 | Social solidarity contribution: ORGANIC |
    | 3678000 | Fees for directors and advisory board |
    | 3692100 | patent annuity offic |
    | 3692200 | patent annuity professional fee |
    | 3692400 | patent information |
    | 3694220 | Service Charges |
    | 3695095 | Other costs accruals |
    | 3695100 | Re-invoicing for affiliated companies |
    | 3695195 | Re-Invoicing for aff. comp. for investm. |
    | 3695200 | Other re-invoicing (staff etc.) |
    | 3710000 | Octroi On Sales |
    | 3711000 | Tender Stamp & Hundies |
    | 3712000 | Erection & Site Expenses |
    | 3842330 | Allocation sundry other expenses |
    | 3842331 | >>> No valid master record |
    | 3920196 | Particiopation DIF |

??? note "CO-PAYR.ASS — 95 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1630095 | Salaries etc. |
    | 1631200 | additional payment for holidays salary |
    | 1632800 | Other payments (staff related) |
    | 3616850 | Given direct labour |
    | 3616860 | Received direct labour |
    | 3620000 | wages, hourly wage etc. |
    | 3620045 | to outs.lab.prod(help of third parties |
    | 3620050 | flexible retirement regulation |
    | 3620100 | Premium pay |
    | 3620109 | Plan premium pay |
    | 3620200 | (basic wage for overtime work) |
    | 3620209 | Plan overtime pay |
    | 3620220 | overtime premium pay (25%, 50%) |
    | 3620300 | Premium pay for late and night work |
    | 3620309 | Plan premiums |
    | 3620400 | Proportional 13.Wage |
    | 3620409 | Plan Proportional 13. Wage |
    | 3620600 | Prem. pay for Sunday and public holiday |
    | 3621100 | Holiday-payment |
    | 3621300 | P.for work on public holiday wage-earner |
    | 3621400 | additional payment for holidays wage-ea. |
    | 3621409 | Plan additional payment for holidays wag |
    | 3622100 | Premium pay for aggravation and dirt |
    | 3622400 | Contri. paym. for motherhood wage-earner |
    | 3622500 | Prop.-creating performance wage-earner |
    | 3622600 | Account-carrynig charges wage-earner |
    | 3626109 | Plan other wages |
    | 3629100 | lump-sum for stand-by service |
    | 3629150 | Other payments/wage-earner |
    | 3630000 | Salaries etc. |
    | 3630009 | Plan salaries (CO-PAYR) |
    | 3630010 | Salar.employees outside the agreed scale |
    | 3630050 | Salar.increase flexible reirement regul. |
    | 3630072 | other payed free-time |
    | 3630095 | Salaries accrual month end |
    | 3630200 | Overtime salary-payment/-lump sum |
    | 3630209 | Plan overtime pay salary earner |
    | 3630220 | Pre.pay overtime,night work, Sunday,publ |
    | 3630300 | Premium pay for late and night work |
    | 3630301 | Co's Contribution to Gratuity Fund |
    | 3630302 | Lumsum Payments - Current Year |
    | 3630303 | Co's Contribution M&P Welfare Soc. |
    | 3630400 | Proportional 13. Salary |
    | 3630409 | Plan Proportional 13. Salary |
    | 3631100 | Holiday-payment |
    | 3631109 | Plan other salaries |
    | 3631200 | additional pay for holiday salary-earner |
    | 3631209 | Plan additional payment for holidays sal |
    | 3632400 | Contrib.pay for motherhood salary-earner |
    | 3632500 | Property-creating performance salary-ea |
    | 3632600 | Account-carrying charges salary-earner |
    | 3632700 | Expenses for busines trips |
    | 3632800 | Other payments (staff related) |
    | 3632801 | Other payments (staff related)production |
    | 3632810 | Other payments (staff related) |
    | 3632850 | One time payment with social securities |
    | 3632851 |  |
    | 3632859 |  |
    | 3636000 | Payment to trainees |
    | 3636100 | help,students,learner/salary-earner |
    | 3636109 | Plan helps salaries |
    | 3639020 | Foreign Wages |
    | 3639070 | Holidays paid taken |
    | 3639080 | Legal holiday for personnel |
    | 3639090 | Allowness bonus |
    | 3639120 | >>> No valid master record |
    | 3639150 | Provision on paid holiday |
    | 3639170 | Accrual allowance year |
    | 3639210 | Provision long sev. Medal |
    | 3639220 | Provision RTT |
    | 3639250 | Compensation without tax |
    | 3639260 | Partial activity conv. Allowance |
    | 3639270 | Additional allowance for partial activit |
    | 3639282 | Other compensation |
    | 3639284 | Benefit in kind |
    | 3639288 | Premium profit share year |
    | 3639292 | personnel expense PERCO |
    | 3639294 | Provision for determinated contract |
    | 3639845 | Employee profit sharing scheme v |
    | 3640050 | pen.insur., increase flex.retirem.regul. |
    | 3640095 | Incidental pers. expense wage accr.month |
    | 3641050 | pens.insur.,incr.flex.retirem.regu.sal. |
    | 3642000 | Contribution to professional association |
    | 3643000 | charge for invalid people |
    | 3643100 | Reimburs.empl.part health&pension insur. |
    | 3647000 | Superannuation security association |
    | 3648020 | Direct statutory sick play |
    | 3664805 | Compensation with tax |
    | 3669150 | premium for the year |
    | 3669170 | direct insurance-wage |
    | 3669200 | direct insurance-salaries |
    | 3842200 | Allocation Payroll |
    | 3842201 | >>> No valid master record |
    | 3842202 | Allocation Payroll Manual |
    | 3950100 | Salary monthly bonus |

??? note "CO-PEIC.ASS — 6 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1615035 | Accruals personnel expenses Intercompany |
    | 3615030 | Expense Intercompany personnel costs |
    | 3615035 | Accruals personnel expenses Intercompany |
    | 3615039 | Plan Exp. personnel cost IC (CO-PEIC) |
    | 3842535 | Alloc. personnel expenses Intercompany |
    | 3842536 | >>> No valid master record |

??? note "CO-PEN.ASS — 11 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1548103 | Reversal of provision f. pensions |
    | 1645000 | Addition to provisions for pensions |
    | 1645095 | Provisions for pensions accruals |
    | 3644000 | Payment for current pensions |
    | 3644009 | Plan payment current pensions (CO-PEN) |
    | 3645000 | Addition to provision for pension |
    | 3645010 | Relief fund |
    | 3645095 | Provisions for pensions accruals |
    | 3664810 | Compensation for retirement |
    | 3842215 | Allocation pension plan expenses |
    | 3842216 | >>> No valid master record |

??? note "CO-PROV.ASS — 8 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1615200 | Commissions/Provisions abroad third part |
    | 3518100 | Delcredere commission |
    | 3518110 | Delcredere commission/accrual |
    | 3615009 | Plan Commissions (CO-PROV) |
    | 3615095 | Comissions/accrual month end |
    | 3615200 | Commissions/Provisions abroad third part |
    | 3842275 | Allocation provisions/commissions |
    | 3842276 | >>> No valid master record |

??? note "CO-RED.ASS — 9 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1629450 | Staff redundancy payments |
    | 1639291 | Severance Compensation |
    | 3620095 | Redundancy payments accrual month end |
    | 3629450 | Staff redundancy payments |
    | 3629459 | Plan staff redundancy payments (CO-RED) |
    | 3639291 | Severance Compensation |
    | 3639600 | Redundancy payments pre.retirement paym. |
    | 3842205 | Allocation stuff redundancy payment |
    | 3842206 | >>> No valid master record |

??? note "CO-REINCIC.ASS — 4 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 3545100 | Income Intercompany rents |
    | 3545109 | Plan Inc. Rents Interco. (CO-REINCIC) |
    | 3842465 | Alloc. income rents/leasing Intercompany |
    | 3842466 | >>> No valid master record |

??? note "CO-RENT.ASS — 23 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1670000 | Rents lands, buildings, garages |
    | 1670300 | Rents for PC primary |
    | 1670860 | Leasing |
    | 1671009 | Plan Leasing IAS |
    | 1671100 | Leasing cars |
    | 3601010 | Oxygen packaging -rental |
    | 3670000 | Rents lands, buildings, garages |
    | 3670001 | Rents lands, buildings, garages Producti |
    | 3670009 | Plan rents, leases (CO-RENT) |
    | 3670095 | Rents,leases,leasing / accrual month end |
    | 3670100 | Rents for other equipment |
    | 3670101 |  |
    | 3670300 | Rents for PC primary |
    | 3670400 | Rents Home office |
    | 3670620 | Rental & joint ownership property costs |
    | 3670740 | Rental - postage machine |
    | 3671000 | Leasing fees for other equipment |
    | 3671100 | Leasing cars |
    | 3671101 | Leasing cars / add.payment staff |
    | 3671102 | Non Deductable Leasing Car Expsense |
    | 3842325 | Allocation rents and leasing |
    | 3842326 | >>> No valid master record |
    | 3940250 | >>> No valid master record |

??? note "CO-RENTIC.ASS — 4 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 3670010 | Expense Intercompany rents/lease |
    | 3670019 | Plan Exp. Rents Interco. (CO-RENTIC) |
    | 3842450 | Allocation rents/leasing intercompany |
    | 3842451 | >>> No valid master record |

??? note "CO-REVWAR.ASS — 4 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1543910 | Reversal - Warranty provision |
    | 3543910 | Reversal- Warranty provision |
    | 3842540 | Alloc. inc. reversal provisions warranty |
    | 3842541 | >>> No valid master record |

??? note "CO-SERVIC.ASS — 11 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1615015 | Services purchased Intercompany |
    | 3518700 | Bonus Intercompany |
    | 3614010 | Expense Intercompany transport costs |
    | 3615000 | Expense Intercompany commissions |
    | 3615010 | Services purchased Intercompany |
    | 3615015 | Accrruals services purchased Intercomp. |
    | 3615019 | Plan Exp. o. serv. purch. IC (CO-SERVIC) |
    | 3690010 | Expense Intercompany Insurance |
    | 3694785 | Administrat. cost affil.comp.+simil.accr |
    | 3842455 | Allocation services purchased Intercomp. |
    | 3842456 | >>> No valid master record |

??? note "CO-SMTOOL.ASS — 5 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 3603000 | Small tools, small materials |
    | 3603009 | Plan small tools (CO-SMTOOL) |
    | 3603095 | Small tools accruals |
    | 3842585 | Allocation small tools |
    | 3842586 | >>> No valid master record |

??? note "CO-SOC.ASS — 40 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1641095 | Accruals Social taxes |
    | 3640000 | Empl.contrib.pension-unemploym.insur/wag |
    | 3640009 | Plan incidental personnel expense wage |
    | 3641000 | Empl.contrib.pension-unemploym.insur/sal |
    | 3641009 | Plan incidental personnel expense salary |
    | 3641095 | Incidental pers.exp.salary accrual month |
    | 3642009 | Plan legal social expenses (CO-SOC) |
    | 3643021 | Welfare expenses - Labour union fee |
    | 3643022 | Welfare expenses - Education fee |
    | 3643023 | Welfare expenses - Retirem. Pension ins. |
    | 3643024 | Welfare expenses - Unemployment ins. |
    | 3643025 | Welfare expenses-Medical insurance |
    | 3643026 | Welfare expenses - Add. Madical insur. |
    | 3643027 | Welfare expenses - Housing fund ins. |
    | 3643028 | Welfare expenses - Life insurance |
    | 3643029 | Welfare expenses - Maternity insurance |
    | 3643030 | Welfare expenses - Accident. injury ins. |
    | 3648030 | Social Security Collection Office (URSSA |
    | 3648031 | Labourer Ni |
    | 3648032 | Setter NI |
    | 3648033 | Life Assurance |
    | 3648034 | Social Security Premiums Income (-) |
    | 3648055 | Mutual organisation contributions |
    | 3648060 | Contribution arpe |
    | 3648075 | Association f. Industr./Comm.Employment |
    | 3648080 | Contributions to other social agencies |
    | 3648085 | Social expenses prov. on paid holiday |
    | 3648090 | Social expenses prov. On bonus sales |
    | 3648095 | Reversal social charges |
    | 3648105 | Accrual social charges 13th month |
    | 3648110 | Provision social expenses on determinate |
    | 3648115 | Provision social expenses on determinate |
    | 3648120 | Accrual social charges medal holder |
    | 3648130 | Tax credit CICE |
    | 3664756 | Compensation DIF |
    | 3709330 | Tax paid by busin. to fund train. progr. |
    | 3709350 | Accrual employee participation training |
    | 3709360 | Accrual tax for investm. In construction |
    | 3842210 | Allocation social security contributions |
    | 3842211 | >>> No valid master record |

??? note "CO-TAX.ASS — 26 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1709000 | Other taxes and contributions |
    | 3639630 | Legal and litigation fees |
    | 3673100 | Contribu.to association and chambers |
    | 3673200 | Contrib.to chamber of Commerce |
    | 3673600 | Other fees (e.g. court fees) |
    | 3687910 | Environmental tax |
    | 3700000 | Trade capital tax |
    | 3700009 | Plan taxes/contribution/fees (CO-TAX) |
    | 3700095 | Other tax accruals |
    | 3701000 | Tax on property |
    | 3702000 | Land tax |
    | 3703000 | Motor tax |
    | 3704000 | Stamp duty |
    | 3705000 | Urban construction tax |
    | 3706000 | Education supplementary tax |
    | 3709000 | Other taxes and contributions |
    | 3709310 | TV tax |
    | 3709370 | Professionalistaion tax |
    | 3709380 | Handicapped tax |
    | 3709390 | Tax advertising expense |
    | 3709400 | Penalty cars |
    | 3709430 | Tax disc and registration document |
    | 3709490 | Tax participation employer training |
    | 3709600 | Business entity tax |
    | 3842315 | Allocation Other fees |
    | 3842316 | >>> No valid master record |

??? note "CO-TRAV.ASS — 13 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1685300 | Cost for trains and flights / rented car |
    | 3685000 | Expenses accomodation |
    | 3685009 | Plan travel / entertainment (CO-TRENT) |
    | 3685095 | Travel & entertainment/accrual month end |
    | 3685100 | Catering |
    | 3685200 | Money paid for driven kilomtres |
    | 3685300 | Cost for trains and flights / rented car |
    | 3685420 | Missions with VAT |
    | 3685500 | Other travel cost (taxi, parking, fees) |
    | 3685502 | Non Deductable Travelling expenses |
    | 3685711 |  |
    | 3842280 | Allocation traveling costs |
    | 3842281 | >>> No valid master record |

??? note "CO-VAR.ASS — 8 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 1630100 | Royalty |
    | 3630100 | Royalty |
    | 3630195 | Royalty |
    | 3639130 | Various premiums on salaries last year |
    | 3639140 | Various premiums on salaries prev. year |
    | 3639180 | Provision Bonus on Sales |
    | 3639190 | Reversal provision Bonus on Sales |
    | 3842220 | Allocation royalty/variable payments |

??? note "CO-WARA.ASS — 2 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 3842300 | Allocation installation costs warrenty |
    | 3842301 | >>> No valid master record |

??? note "CO-WARC.ASS — 3 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 3694400 | Custom.serv.by third-party contr.firms |
    | 3694409 | Plan custom serv by third-party contr.fi |
    | 3694495 | Customer service/accrual month end |

??? note "CO-WARNC.ASS — 4 счётов"
    | SAP Счёт | Название |
    |----------|---------|
    | 3615101 | Indemnity Customer Guarantee |
    | 3694300 | Customer service by noncontracting firms |
    | 3694301 | Custom.serv.by noncontr.firms f. wholes. |
    | 3694309 | Plan cust. serv. by third party (CO-WAR) |
