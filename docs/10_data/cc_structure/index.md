# Структура МВЗ

МВЗ (Место возникновения затрат) — аналитическая единица, по которой собираются затраты.
В Wilo-ERP каждый МВЗ входит в иерархию: от корневого узла `RU1` (Wilo Rus) до конкретного участка или региона.

---

## Как читать коды

Код строится добавлением суффикса к `RU1`. Длина и структура суффикса указывают на уровень и принадлежность:

| Код | Название | Уровень |
|-----|---------|---------|
| `RU1` | Wilo Rus | Корень |
| `RU1OP` | Operations | Дивизион |
| `RU1OP1P` | Production Ногинск | Направление |
| `RU1OP1P4` | Total Structural Costs | Группа |
| `RU1OP1P41` | StruCo Prod. Management | Подгруппа |
| `RU1OP1P411` | Pl. & Production | МВЗ |

Узлы **нижнего уровня** (без дочерних) — участники расчётов.
Остальные — группировочные, используются в отчётности для агрегации.

---

## Иерархия (SAP-формат)

Для поиска используйте **Ctrl+F**.

```
RU1                          WILO RUS
  RU1ADMI                    Administration
    RU1FICO                  Finance & Controlling
      RU1CONTR               Controlling
        RU1CONTMM            Group Controlling Mgmt
        RU1CONTRG            Group Controlling
        RU1CONTRL            Local Controlling
      RU1FIACTA              Accounting & Taxes
        RU1FIACTAG           Group Accounting & Taxes
        RU1FIACTAL           Local Accounting & Taxes
        RU1FIACTMM           Group Acctg & Taxes Mgmt
    RU1GROTH                 Group functions other
    RU1HR                    Human Resources
      RU1HRMAN               HR Management
      RU1LHR                 Local HR
    RU1IT                    IT Service
      RU1FINSE               Group Finance & Financial Services
      RU1GIT                 Group IT
      RU1ILIT                Local IT
      RU1ITMAN               IT Management
    RU1MAN                   Management
    RU1SSM                   Strategic Sales & Marketing
  RU1OP                      Operations
    RU1FA                    Facilities
      RU1GFM                 Group Facility Management
      RU1LF                  Local Facilities
        RU1LFMDO             Local Facility Management
        RU1LIS               Local Infrastructure & Service
        RU1LLB               Land and Buildings
        RU1LMAIN             Local Maintenance
    RU1GPST                  Group Production Systems & Technology
    RU1GROTH                 Group functions other
    RU1OP1P                  OP PL NOGI Total
      RU1GHR                 Group HR
      RU1OP1P0               Bu Mat./Scr./Inb. Freight
      RU1OP1P1               Direct Labour
      RU1OP1P2               Machine & Equipment
        RU1OP1P21            Production
        RU1OP1P29            External Tools
      RU1OP1P3               External Tools
      RU1OP1P4               Total Structural Costs
        RU1OP1P41            StruCo Prod. Management
          RU1OP1P411         Pl. & Production
          RU1OP1P412         WPS / Op. Excellence
          RU1OP1P413         Prod. Unit Management
        RU1OP1P42            StruCo Prod. Support
        RU1OP1P43            StruCo Process Engineering
        RU1OP1P44            StruCo Supply Planning
        RU1OP1P45            StruCo Procurement
        RU1OP1P46            StruCo Logistics
        RU1OP1P47            StruCo Quality
        RU1OP1P48            StruCo Other Prod.
          RU1OP1P481         Enviro. & Safety
          RU1OP1P482         IT
          RU1OP1P483         Acc. & Controlling
          RU1OP1P484         Human Resources
          RU1OP1P485         Insurances
          RU1OP1P486         Admin others
      RU1OP1P9               Other Cost Centers
        RU1OP1P91            General Cost Centers
        RU1OP1P92            Calculation Cost Centers
        RU1OP1P93            ACOS Cost Centers
        RU1OP1P94            Generic Cost Centers
        RU1OP1P99            Old Cost Centers
    RU1PSCM                  Procurement & Supply Chain Management
      RU1LOG                 Group Logistics
      RU1PDS                 Group Demand and Supply
      RU1PROC                Group Procurement
      RU1PSCMM               Procurement & SCM Management
    RU1QUAL                  Group Quality
  RU1OTH                     Other Cost Centers / Controlling
    RU1ALLOC                 Allocations
    RU1MISC                  Miscellaneous
    RU1OLD                   Old
    RU1RDTLEM                Technology Lead Engineering Motors
      RU1PBUPRCO             Functional Area x PRCO
  RU1RD                      R&D
    RU10POTH                 Others
      RU1PBUACOS             Functional Area x PBU ACOS
      RU1PBUAMCO             Functional Area x PBU AMCO
    RU1RDMS                  Product Line Engineering Multi Stream
    RU1RDPCI                 Product Compliance Intelligence
    RU1RDQV                  Qualification & Verification
    RU1RDRP                  Research & Predevelopment
    RU1RDSEG                 R&D Strategy, Excellence & Governance
    RU1RDSPM                 Strategic Project Management
    RU1RDSS                  Product Line Engineering Systems
    RU1RDSSDR                PLE Single Stream DR
    RU1RDSSWR                PLE Single Stream WR
    RU1RDTLE                 Technology Lead Engineering
  RU1SAL                     Sales
    RU1SALSB                 Service Business
      RU1GRSERV              Group Service
      RU1OEMSEA              OEM South East Asia
    RU1SMUL                  Sales Allocations
    RU1SREM                  Sales Region Emerging Markets
      RU1SACN                Sales Area China
      RU1SAEUAS              Sales Area Eurasia
        RU1SAAZ              Azerbaijan
        RU1SABY              Belarus
        RU1SAEURGL           Global
        RU1SAGE              Georgia
        RU1SAIL              Israel
        RU1SAKZ              Kazakhstan
        RU1SARU              Russian Fed.
        RU1SAUZ              Uzbekistan
      RU1SAIND               Sales Area India
      RU1SAKR                Sales Area Korea
        RU1SAZA              South Africa
      RU1SALA                Sales Area Latin America
        RU1SAAR              Argentina
        RU1SABR              Brazil
        RU1SACL              Chile
        RU1SALAGL            Global
      RU1SAMENA              Sales Area MENA
        RU1SADZ              Algeria
        RU1SAEG              Egypt
        RU1SALB              Lebanon
        RU1SAMA              Morocco
        RU1SAMEGL            Global
        RU1SATN              Tunisia
      RU1SAMSA               Sales Area MSA
        RU1SAAE              Utd. Arab Emirates
        RU1SACM              Cameroon
        RU1SAGH              Ghana
        RU1SAIC              Ivory Coast
        RU1SAKE              Kenya
        RU1SAMSAGL           Global
        RU1SANE              Nigeria
      RU1SANOAM              Sales Area North America
        RU1SACA              Canada
        RU1SANOGL            Global
        RU1SAUA              Ukraine
        RU1SAUS              USA
      RU1SASEA               Sales Area South East Asia
        RU1SABD              Bangladesh
        RU1SAID              Indonesia
        RU1SAMY              Malaysia
        RU1SASEGL            Global
        RU1SASG              Singapore
        RU1SATW              Taiwan
        RU1SAU               Australia
      RU1SATR                Sales Area Turkey
    RU1SRMM                  Sales Region Mature Markets
      RU1SADACH              Sales Area DACH
        RU1SAAT              Austria
        RU1SACH              Switzerland
        RU1SAGER             Germany
        RU1SALI              Liechtenstein
      RU1SAEUEA              Sales Area EU East
        RU1SABG              Bulgaria
        RU1SACR              Croatia
        RU1SACZ              Czech Republic
        RU1SAEUGL            Global
        RU1SAHU              Hungary
        RU1SAPL              Poland
        RU1SARO              Romania
        RU1SARS              Serbia/Monten.
        RU1SASI              Slovenia
        RU1SASK              Slovakia
      RU1SAEUNO              Sales Area EU North
        RU1SABE              Belgium
        RU1SADK              Denmark
        RU1SAES              Spain
        RU1SAEUNGL           Global
        RU1SAFI              Finland
        RU1SAIE              Ireland
        RU1SALT              Lithuania
        RU1SALV              Latvia
        RU1SANL              Netherlands
        RU1SANO              Norway
        RU1SASE              Sweden
        RU1SAUK              United Kingdom
      RU1SAEUSW              Sales Area EU South West
        RU1SACY              Cyprus
        RU1SADAGL            Global
        RU1SAEUSGL           Global
        RU1SAFR              France
        RU1SAGP              Guadeloupe
        RU1SAGR              Greece
        RU1SAIT              Italy
        RU1SAPT              Portugal
    RU1SROEM                 Sales Region OEM
      RU1OEMCN               OEM China
        RU1OEMZA             South Africa
      RU1OEMDACH             OEM DACH
        RU1OEMAT             Austria
        RU1OEMCH             Switzerland
        RU1OEMDAGL           Global
        RU1OEMGER            Germany
        RU1OEMLI             Liechtenstein
      RU1OEMEM               OEM Emerging Markets
      RU1OEMEUAS             OEM Eurasia
        RU1OEMAZ             Azerbaijan
        RU1OEMBY             Belarus
        RU1OEMEURG           Global
        RU1OEMGE             Georgia
        RU1OEMIL             Israel
        RU1OEMKZ             Kazakhstan
        RU1OEMRU             Russian Fed.
      RU1OEMEUEA             OEM EU East
        RU1OEMBG             Bulgaria
        RU1OEMCR             Croatia
        RU1OEMCZ             Czech Republic
        RU1OEMEUGL           Global
        RU1OEMHU             Hungary
        RU1OEMPL             Poland
        RU1OEMRO             Romania
        RU1OEMRS             Serbia/Monten.
        RU1OEMSI             Slovenia
        RU1OEMSK             Slovakia
      RU1OEMEUNO             OEM EU North
        RU1OEMBE             Belgium
        RU1OEMDK             Denmark
        RU1OEMENGL           Global
        RU1OEMES             Spain
        RU1OEMFI             Finland
        RU1OEMIE             Ireland
        RU1OEMLT             Lithuania
        RU1OEMLV             Latvia
        RU1OEMNL             Netherlands
        RU1OEMNO             Norway
        RU1OEMSE             Sweden
        RU1OEMUK             United Kingdom
      RU1OEMEUSW             OEM EU South West
        RU1OEMCY             Cyprus
        RU1OEMEUSG           Global
        RU1OEMFR             France
        RU1OEMGP             Guadeloupe
        RU1OEMGR             Greece
        RU1OEMIT             Italy
        RU1OEMPT             Portugal
      RU1OEMIND              OEM India
      RU1OEMKR               OEM Korea
      RU1OEMLA               OEM Latin America
        RU1OEMAR             Argentina
        RU1OEMBR             Brazil
        RU1OEMCL             Chile
        RU1OEMLAGL           Global
        RU1OEMMX             Mexico
      RU1OEMMENA             OEM MENA
        RU1OEMDZ             Algeria
        RU1OEMEG             Egypt
        RU1OEMLB             Lebanon
        RU1OEMMA             Morocco
        RU1OEMMEGL           Global
        RU1OEMTN             Tunisia
        RU1OEMUZ             Uzbekistan
      RU1OEMMM               OEM Mature Markets
      RU1OEMMSA              OEM MSA
        RU1OEMAE             Utd. Arab Emirates
        RU1OEMCM             Cameroon
        RU1OEMGH             Ghana
        RU1OEMIC             Ivory Coast
        RU1OEMKE             Kenya
        RU1OEMMSAG           Global
        RU1OEMNE             Nigeria
      RU1OEMNOAM             OEM North America
        RU1OEMCA             Canada
        RU1OEMNOGL           Global
        RU1OEMUA             Ukraine
        RU1OEMUS             USA (OEM)
      RU1OEMTR               OEM Turkey
      RU1SASEA               Sales Area South East Asia (OEM)
    RU1SVREM                 Service Region Emerging Markets
      RU1SVCN                Service Area China
      RU1SVEUAS              Service Area Eurasia
        RU1SVAZ              Azerbaijan
        RU1SVBY              Belarus
        RU1SVEURGL           Global
        RU1SVGE              Georgia
        RU1SVIL              Israel
        RU1SVKZ              Kazakhstan
        RU1SVRU              Russian Fed.
        RU1SVUZ              Uzbekistan
      RU1SVIND               Service Area India
      RU1SVKR                Service Area Korea
      RU1SVLA                Service Area Latin America
        RU1SVAR              Argentina
        RU1SVBR              Brazil
        RU1SVCL              Chile
        RU1SVLAGL            Global
        RU1SVMX              Mexico
        RU1SVUS              USA
      RU1SVMENA              Service Area MENA
        RU1SVAE              Utd. Arab Emirates
        RU1SVDZ              Algeria
        RU1SVEG              Egypt
        RU1SVLB              Lebanon
        RU1SVMA              Morocco
        RU1SVMEGL            Global
        RU1SVTN              Tunisia
      RU1SVMSA               Service Area MSA
        RU1SVCM              Cameroon
        RU1SVGH              Ghana
        RU1SVIC              Ivory Coast
        RU1SVKE              Kenya
        RU1SVMSAGL           Global
        RU1SVNE              Nigeria
        RU1SVZA              South Africa
      RU1SVNOAM              Service Area North America
        RU1SVCA              Canada
        RU1SVNOGL            Global
      RU1SVTR                Service Area Turkey
      RU1SVSEA               Service Area South East Asia
        RU1SVBD              Bangladesh
        RU1SVID              Indonesia
        RU1SVMY              Malaysia
        RU1SVSEGL            Global
        RU1SVSG              Singapore
        RU1SVTW              Taiwan
        RU1SVU               Australia
        RU1SVVN              Vietnam
    RU1SVRMM                 Service Region Mature Markets
      RU1SBLF                Service Local Functions
      RU1SVDACH              Service Area DACH
        RU1SVAT              Austria
        RU1SVCH              Switzerland
        RU1SVGER             Germany
        RU1SVLI              Liechtenstein
        RU1OEMVN             Vietnam (OEM)
      RU1SVEUEA              Service Area EU East
        RU1SVBG              Bulgaria
        RU1SVCR              Croatia
        RU1SVCZ              Czech Republic
        RU1SVEUGL            Global
        RU1SVHU              Hungary
        RU1SVPL              Poland
        RU1SVRO              Romania
        RU1SVRS              Serbia/Monten.
        RU1SVSI              Slovenia
        RU1SVSK              Slovakia
        RU1SVUA              Ukraine
        RU1SVUK              United Kingdom
      RU1SVEUNO              Service Area EU North
        RU1SVBE              Belgium
        RU1SVDK              Denmark
        RU1SVES              Spain
        RU1SVEUNGL           Global
        RU1SVFI              Finland
        RU1SVIE              Ireland
        RU1SVLT              Lithuania
        RU1SVLV              Latvia
        RU1SVNL              Netherlands
        RU1SVNO              Norway
        RU1SVSE              Sweden
      RU1SVEUSW              Service Area EU South West
        RU1SVCY              Cyprus
        RU1SVDAGL            Global
        RU1SVEUSGL           Global
        RU1SVFR              France
        RU1SVGP              Guadeloupe
        RU1SVGR              Greece
        RU1SVIT              Italy
        RU1SVPT              Portugal
```

---

## Действующая структура МВЗ

Полная иерархия с реальными центрами затрат. Группы без МВЗ исключены.
Числовые коды (например `25101`) — фактические МВЗ, буквенные (`RU1OP`) — группировочные узлы.
Для поиска — **Ctrl+F**.

```
RU1                   WILO RUS
  RU1ADMI               Administration
    RU1FICO               Finance & Controlling
      RU1CONTR              Controlling
        RU1CONTRL             Local Controlling
          25801         FICO MANAGEMENT
          25802         CONTROLLING
      RU1FIACTA             Accounting & Taxes
        RU1FIACTAL            Local Accounting & Taxes
          25183         Wilo Academy
          25803         ACCOUNTING
          25804         LEGAL
          25811         IT MANAGEMENT
          25812         IC IT Charges
          25831         HR MANAGEMENT
          25833         HR MANAGEMENT
          25991         Subst 2541 PRCO own
    RU1MAN                Management
      25816         IFRS 16
      25882         ADMINISTRATION
      25886         Management Fee
      25888         Facility Project Manager
      25891         Building Cost GADM
    RU1SSM                Strategic Sales & Marketing
      25887         Strategic Management
    RU1SVREM              Service Region Emerging Market
      RU1SVEUAS             Service Area Eurasia
        RU1SVRU               Russian Fed.
          25301         SERVICE CENTRAL FUNCTIONS
          25302         FIELD SERVICE NORTH-WEST REGION
          25303         FIELD SERVICE SIBERIA REGION
          25304         FIELD SERVICE FAR EAST REGION
          25305         FIELD SERVICE URAL REGION
          25306         FIELD SERVICE VOLGA REGION
          25307         FIELD SERVICE SOUTH REGION
          25308         FIELD SERVICE CENTRAL REGION
          25309         IN HOUSE REPAIR
          25310         FIELD SERVICE MOSCOW REGION
          25311         FIELD SERVICE QUALITY
          25313         Service Central Functions
          25321         SERVICE CENTRAL FUNC
          25322         SERVICE CENTRAL FUNC
          25323         SERVICE CENTRAL FUNC
          25391         Building Cost SALC
  RU1OP                 Operations
    RU1OP1P               OP PL NOGI Total
      RU1OP1P2              OP PL NOGI Machine & Equipment
        RU1OP1P21             OP PL NOGI Production
          25001         Managing Director NEW
          25410         NL_IL_BL
          25411         TWU_REXA_FA
          25412         UPD: BOOST_FFS
          25413         HELIX_MS
          25414         CNTRL_BOX
          25416         MECH SECTION
          25422         SPARE_PARTS
          25423         MANIFOLDS
          25424         TEST BENCH
      RU1OP1P3              OP PL NOGI External Tools
        25912         External Tools
      RU1OP1P4              OP PL NOGI Total Stru. Costs
        RU1OP1P29             OP PL NOGI External Tools
          25415         MAINTENANCE
        RU1OP1P41             OP PL NOGI StruCo Prod. Mngmnt
          RU1OP1P411            OP PL NOGI StruCo Pl. & Prod.
            25401         ASSEMBLY MANAGEMENT
            25407         PROJECT OFFICE SpIC
            25408         PROJECT OFFICE SpIC
            25417         PRODUCTION MANAGER
            25651         INDIRECT PRODUCTION TECH
          25418         SHIFT LEADERS
        RU1OP1P43             OP PL NOGI StruCo Process Eng.
          25420         Automation Design
          25425         Mechanical design
        RU1OP1P44             OP PL NOGI StruCo Supply Plann
          25419         PPC (INCL. PROCUREMENT)
        RU1OP1P45             OP PL NOGI StruCo Procurement
          25604         PURCHASING MANAGEMENT
        RU1OP1P46             OP PL NOGI StruCo Logistics
          25007         INTERNAL LOGISTICS
          25696         Central Warehouse Production
        RU1OP1P47             OP PL NOGI StruCo Quality
          25421         QUALITY DEPARTMENT
        RU1OP1P48             OP PL NOGI StruCo Other Prod.
          RU1OP1P481            OP PL NOGI StruCo Enviro.&Safe
            25406         HSE
          RU1OP1P482            OP PL NOGI StruCo IT
            25981         Allocation IT
          RU1OP1P483            OP PL NOGI StruCo Acc. & Cont.
            25982         Allocation Acc/Contr
          RU1OP1P484            OP PL NOGI StruCo Human Resour
            25983         Allocation Human Resources
            25985         Dual Education Project
          RU1OP1P485            OP PL NOGI StruCo Insurances &
            25490         Allocations Insurances & Taxes
          RU1OP1P486            OP PL NOGI StruCo Admin others
            25002         Facility Variance NEW
      RU1OP1P9              OP PL NOGI Other Cost Centers
        RU1OP1P91             OP PL NOGI General Cost Centers
          25491         Building Cost PRCO
          25619         Building Cost WHS
          25682         CENTRAL WAREHOUSE
          25697         Central Warehouse Trading Goods
          25698         External Warehouse
          25909         BUILDING COST
          25998         Oefault Cost Center Material PRCO
        RU1OP1P92             OP PL NOGI Calculation Cost Centers
          25971         Allocation SCP
          25972         Allocation Boosters Plus
          25973         Allocation Boosters
          25974         Allocation FFS
          25975         Allocation Helix
          25976         Allocation Control Boxes
          25977         Allocation AMP
          25978         Allocation Manifolds
          25979         Allocation Resale
          25995         Allocation OvHd 2531
          25996         Allocation Pump Equipment
        RU1OP1P93             ACOS cost centers
          25993         Subst 2541 ACOS own
        RU1OP1P94             Generic cost centers
          25988         Subst 2541 PRCO TG
          25989         Subst 2541 ACOS TG
          25992         Subst 2541 PRCO IC Mat
          25994         Subst 2541 ACOS IC Mat
  RU1OTH                Other Cost Center / Controllin
    25499         Other operating result (Production)
    25997         Sales
    25999         Other operating result
  RU1SAL                Sales
    RU1SREM               Sales Region Emerging Markets
      RU1SAEUAS             Sales Area Eurasia
        RU1SAAZ               Azerbaijan
          25191         REPRESENTATIVE OFFICE IN AZERBAIJAN
        RU1SABY               Belarus
          25198         REGION EAST BELARUS
        RU1SAEURGL            Global
          25190         REPRESENTATIVE OFFICE IN ARMENIA
          25194         REPRESENTATIVE OFFICE IN KYRGYZSTAN
          25195         REPRESENTATIVE OFFICE IN MONGOLIA
          25196         REPRESENTATIVE OFFICE IN TURKMENISTAN
          25197         REPRESENTATIVE OFFICE IN TAJIKISTAN
          25832         Human Resources
          25881         CEO
          25883         Sales manager CAM
          25885         REGION LATAM
        RU1SAGE               Georgia
          25192         REPRESENTATIVE OFFICE IN GEORGIA
        RU1SAIL               Israel
          25193         REPRESENTATIVE OFFICE IN ISRAEL
        RU1SAKZ               Kazakhstan
          25199         REGION CAM KAZAKHSTAN
        RU1SARU               Russian Fed.
          25101         MARKETING DPT
          25102         SALES MANAGEMENT BS
          25103         SALES MANAGEMENT IND/WM
          25151         SALES OFFICE MOSCOW
          25152         SALES OFFICE TULA
          25153         SALES OFFICE YAROSLAVL'
          25154         SALES OFFICE ROSTOV-ON-DON
          25155         SALES OFFICE KRASNODAR
          25156         SALES OFFICE PYATIGORSK
          25157         SALES OFFICE VOLGOGRAD
          25159         SALES OFFICE SOCHI
          25160         SALES OFFICE KAZAN'
          25161         SALES OFFICE NIZHNY NOVGOROD
          25162         SALES OFFICE SARATOV
          25163         SALES OFFICE SAMARA
          25164         SALES OFFICE SANKT-PETERBURG
          25165         SALES OFFICE ARKHANGELSK
          25166         SALES OFFICE KALININGRAD
          25167         SALES OFFICE KHABAROVSK
          25168         SALES OFFICE VLADIVOSTOK
          25169         SALES OFFICE YAKUTSK
          25170         SALES OFFICE NOVOSIBIRSK
          25171         SALES OFFICE IRKUTSK
          25172         SALES OFFICE KRASNOYARSK
          25173         SALES OFFICE NOVOKUZNETSK
          25174         SALES OFFICE OMSK
          25175         SALES OFFICE EKATERINBURG
          25176         SALES OFFICE PERM'
          25177         SALES OFFICE CHELYABINSK
          25178         SALES OFFICE TYUMEN'
          25179         SALES OFFICE UFA
          25180         SALES OFFICE ORENBURG
          25181         SALES OFFICE SEVOSTOPOL
          25184         SALES OFFICE VORONEZH
          25185         SALES OFFICE OREL
          25222         SALES ADMINISTRATION
          25279         GIP DEPARTMENT
          25280         ENIGINEERING DEPARTMENT
          25286         SALES SUPPORT DEPARTAMENT
          25601         PL MANAGEMENT
          25602         LOGISTICS
          25603         ORDER MANAGEMENT
          25605         Outbound Freight
          25606         Outbound Freight Export
          25607         Inter Warehouse Freight
          25681         WAREHOUSE KRASNOYARSK
          25683         WAREHOUSE EKATERINBURG
          25684         WAREHOUSE KHABAROVSK
          25685         WAREHOUSE KALININGRAD
          25686         WAREHOUSE SAMARA
          25687         WAREHOUSE ROSTOV
          25688         WAREHOUSE PYATIGORSK
          25690         WAREHOUSE PETERSBURG
          25691         WAREHOUSE NOVOSIBIRS
          25692         WAREHOUSE IRKUTSK
          25694         WAREHOUSE VLADIVOSTOK
          25695         WAREHOUSE YAKUTSK
          25884         Managing Director
      RU1SAMENA             Sales Area MENA
        RU1SAUZ               Uzbekistan
          25182         REPRESENTATIVE OFFICE IN UZBEKISTAN
    RU1SROEM              Sales Region OEM
      RU1OEMEUAS            OEM Eurasia
        RU1OEMRU              Russian Fed.
          25104         OEM Business
```

---

## Реальные центры затрат (листовые МВЗ)

Это фактические МВЗ, участвующие в расчётах — те, что появляются в отчётах.
Всего **164 МВЗ**. Используйте **Ctrl+F** для поиска по номеру, названию или ответственному.

| CC ID | Название | Группа МВЗ | Ответственный | Func. Area | Profit Center |
|-------|---------|-----------|--------------|------------|---------------|
| 25801 | FICO MANAGEMENT | RU1CONTRL | Andrey Rozhnov | FNNC | 229208RU |
| 25802 | CONTROLLING | RU1CONTRL | Irina Luzhina | CONT | 229208RU |
| 25183 | Wilo Academy | RU1FIACTAL | Pavel Speranskiy | HUMA | 229208RU |
| 25803 | ACCOUNTING | RU1FIACTAL | Galina Shoniya | ACTX | 229208RU |
| 25804 | LEGAL | RU1FIACTAL | Roman Kuznetsov | HUMA | 229208RU |
| 25811 | IT MANAGEMENT | RU1FIACTAL | Lavrenchuk Mikhail | ITLO | 229208RU |
| 25812 | IC IT Charges | RU1FIACTAL | Lavrenchuk Mikhail | ITLO | 16999999 |
| 25831 | HR MANAGEMENT | RU1FIACTAL | N.N. | HUMA | 229208RU |
| 25833 | HR MANAGEMENT | RU1FIACTAL | N.N. | HUMA | 229208RU |
| 25991 | Subst 2541 PRCO own | RU1FIACTAL | Controlling | PRCO | 14992541 |
| 25499 | Other operating result (Production) | RU1LMAIN | Controlling | OPRE | 99999990 |
| 25997 | Sales | RU1LMAIN | Controlling | SALE | 111208RU |
| 25999 | Other operating result | RU1LMAIN | Controlling | OPRE | 99999990 |
| 25104 | OEM Business | RU1OEMRU | N.N. | SALC | 122208RU |
| 25001 | Managing Director | RU1OP1P21 | Alexander Zimin | PRCO | 111208RU |
| 25410 | NL_IL_BL | RU1OP1P21 | Reiter Alexey | PRCO | 14992541 |
| 25411 | TWU_REXA_FA | RU1OP1P21 | Denisov Denis | PRCO | 14992541 |
| 25412 | UPD: BOOST_FFS | RU1OP1P21 | Reiter Alexey | PRCO | 14992541 |
| 25413 | HELIX_MS | RU1OP1P21 | Reiter Alexey | PRCO | 14992541 |
| 25414 | CNTRL_BOX | RU1OP1P21 | Reiter Alexey | PRCO | 14992541 |
| 25416 | MECH SECTION | RU1OP1P21 | Reiter Aleksey | PRCO | 14992541 |
| 25422 | SPARE_PARTS | RU1OP1P21 | Reiter Aleksey | PRCO | 14992541 |
| 25423 | MANIFOLDS | RU1OP1P21 | Reiter Aleksey | PRCO | 14992541 |
| 25424 | TEST BENCH | RU1OP1P21 | Controlling | PRCO | 14992541 |
| 25415 | MAINTENANCE | RU1OP1P29 | Alexander Tumanov | PRCO | 14992541 |
| 25912 | External Tools | RU1OP1P3 | Khayretdinov Damir | PRCO | 14992541 |
| 25418 | SHIFT LEADERS | RU1OP1P41 | Reiter Aleksey | PRCO | 14992541 |
| 25401 | ASSEMBLY MANAGEMENT | RU1OP1P411 | Zimin Alexander | PRCO | 14992541 |
| 25407 | PROJECT OFFICE SpIC | RU1OP1P411 | Khayretdinov Damir | PRCO | 14992541 |
| 25408 | PROJECT OFFICE SpIC | RU1OP1P411 | Khayretdinov Damir | PRCO | 14992541 |
| 25417 | PRODUCTION MANAGER | RU1OP1P411 | Reiter Aleksey | PRCO | 14992541 |
| 25651 | INDIRECT PRODUCTION TECH | RU1OP1P411 | Pavel Filippenkov | PRCO | 14992541 |
| 25420 | Automation Design | RU1OP1P43 | Sychkov Dmitry | PRCO | 14992541 |
| 25425 | Mechanical design | RU1OP1P43 | Makhnev Andrey | PRCO | 14992541 |
| 25419 | PPC (INCL. PROCUREMENT) | RU1OP1P44 | Alexander Zimin | PRCO | 14992541 |
| 25604 | PURCHASING MANAGEMENT | RU1OP1P45 | Oleg Strashko | PRCO | 14992541 |
| 25007 | INTERNAL LOGISTICS | RU1OP1P46 | Svetlana Krylova | PRCO | 14992541 |
| 25696 | Central Warehouse Production | RU1OP1P46 | Razumov Aleksey | PRCO | 14992541 |
| 25421 | QUALITY DEPARTMENT | RU1OP1P47 | Zvyagintsev S. | PRCO | 14992541 |
| 25406 | HSE | RU1OP1P481 | Natalia Lebedeva | PRCO | 14992541 |
| 25981 | Allocation IT | RU1OP1P482 | Controlling | PRCO | 14992541 |
| 25982 | Allocation Acc/Contr | RU1OP1P483 | Controlling | PRCO | 14992541 |
| 25983 | Allocation Human Resources | RU1OP1P484 | Controlling | PRCO | 14992541 |
| 25985 | Dual Education Project | RU1OP1P484 | Irina Lavrentyeva | PRCO | 14992541 |
| 25490 | Allocations Insurances & Taxes | RU1OP1P485 | Controlling | PRCO | 14992541 |
| 25002 | Facility Variance | RU1OP1P486 | Natalia Lebedeva | PRCO | 14992541 |
| 25491 | Building Cost PRCO | RU1OP1P91 | Controlling | PRCO | 14992541 |
| 25619 | Building Cost WHS | RU1OP1P91 | Controlling | PRCO | 14992541 |
| 25682 | CENTRAL WAREHOUSE | RU1OP1P91 | Razumov Aleksey | PRCO | 14992541 |
| 25697 | Central Warehouse Trading Goods | RU1OP1P91 | Razumov Aleksey | PRCO | 14991111 |
| 25698 | External Warehouse | RU1OP1P91 | Razumov Aleksey | PRCO | 14992541 |
| 25909 | BUILDING COST | RU1OP1P91 | Controlling | PRCO | 14992541 |
| 25998 | Default Cost Center Material PRCO | RU1OP1P91 | Controlling | PRCO | 14992541 |
| 25971 | Allocation SCP | RU1OP1P92 | Controlling | PRCO | 14992541 |
| 25972 | Allocation Boosters Plus | RU1OP1P92 | Controlling | PRCO | 14992541 |
| 25973 | Allocation Boosters | RU1OP1P92 | Controlling | PRCO | 14992541 |
| 25974 | Allocation FFS | RU1OP1P92 | Controlling | PRCO | 14992541 |
| 25975 | Allocation Helix | RU1OP1P92 | Controlling | PRCO | 14992541 |
| 25976 | Allocation Control Boxes | RU1OP1P92 | Controlling | PRCO | 14992541 |
| 25977 | Allocation AMP | RU1OP1P92 | Controlling | PRCO | 14992541 |
| 25978 | Allocation Manifolds | RU1OP1P92 | Controlling | PRCO | 14992541 |
| 25979 | Allocation Resale | RU1OP1P92 | Controlling | PRCO | 14992541 |
| 25995 | Allocation OvHd 2531 | RU1OP1P92 | Controlling | PRCO | 14992541 |
| 25996 | Allocation Pump Equipment | RU1OP1P92 | Controlling | PRCO | 14992541 |
| 25993 | Subst 2541 ACOS own | RU1OP1P93 | Controlling | ACOS | 14992541 |
| 25988 | Subst 2541 PRCO TG | RU1OP1P94 | Controlling | PRCO | 14991112 |
| 25989 | Subst 2541 ACOS TG | RU1OP1P94 | Controlling | ACOS | 14991112 |
| 25992 | Subst 2541 PRCO IC Mat | RU1OP1P94 | Controlling | PRCO | 14991111 |
| 25994 | Subst 2541 ACOS IC Mat | RU1OP1P94 | Controlling | ACOS | 14991111 |
| 25191 | REPRESENTATIVE OFFICE IN AZERBAIJAN | RU1SAAZ | N.N. | SALC | 111208AZ |
| 25198 | REGION EAST BELARUS | RU1SABY | Kozus Evgenij | SALC | 111208BY |
| 25190 | REPRESENTATIVE OFFICE IN ARMENIA | RU1SAEURGL | N.N. | SALC | 11120899 |
| 25194 | REPRESENTATIVE OFFICE IN KYRGYZSTAN | RU1SAEURGL | N.N. | SALC | 11120899 |
| 25195 | REPRESENTATIVE OFFICE IN MONGOLIA | RU1SAEURGL | N.N. | SALC | 11120899 |
| 25196 | REPRESENTATIVE OFFICE IN TURKMENISTAN | RU1SAEURGL | N.N. | SALC | 11120899 |
| 25197 | REPRESENTATIVE OFFICE IN TAJIKISTAN | RU1SAEURGL | N.N. | SALC | 11120899 |
| 25832 | Human Resources | RU1SAEURGL | N. Embulaeva | SALC | 11129998 |
| 25881 | CEO | RU1SAEURGL | Jens Dallendoerfer | SALC | 11129998 |
| 25883 | Sales manager CAM | RU1SAEURGL | N.N. | SALC | 11120899 |
| 25885 | REGION LATAM | RU1SAEURGL | N.N. | SALC | 11120899 |
| 25192 | REPRESENTATIVE OFFICE IN GEORGIA | RU1SAGE | N.N. | SALC | 111208GE |
| 25193 | REPRESENTATIVE OFFICE IN ISRAEL | RU1SAIL | N.N. | SALC | 111208IL |
| 25199 | REGION CAM KAZAKHSTAN | RU1SAKZ | N.N. | SALC | 111208KZ |
| 25101 | MARKETING DPT | RU1SARU | Anastasia Nosova | SALC | 111208RU |
| 25102 | SALES MANAGEMENT BS | RU1SARU | Konstantin Shinkaruk | SALC | 111208RU |
| 25103 | SALES MANAGEMENT IND/WM | RU1SARU | Timur Aimaletdinov | SALC | 111208RU |
| 25151 | SALES OFFICE MOSCOW | RU1SARU | Teneta Izabella | SALC | 111208RU |
| 25152 | SALES OFFICE TULA | RU1SARU | Artem Ptakhin | SALC | 111208RU |
| 25153 | SALES OFFICE YAROSLAVL | RU1SARU | Karulin Alexey | SALC | 111208RU |
| 25154 | SALES OFFICE ROSTOV-ON-DON | RU1SARU | Sterlev Dmitry | SALC | 111208RU |
| 25155 | SALES OFFICE KRASNODAR | RU1SARU | Noskov Andrey | SALC | 111208RU |
| 25156 | SALES OFFICE PYATIGORSK | RU1SARU | Sinebryukhov Roman | SALC | 111208RU |
| 25157 | SALES OFFICE VOLGOGRAD | RU1SARU | Zhivotov Valentin | SALC | 111208RU |
| 25159 | SALES OFFICE SOCHI | RU1SARU | Usatyy Nikolay | SALC | 111208RU |
| 25160 | SALES OFFICE KAZAN | RU1SARU | Lyakhov Andrey | SALC | 111208RU |
| 25161 | SALES OFFICE NIZHNY NOVGOROD | RU1SARU | Kornev Aleksandr | SALC | 111208RU |
| 25162 | SALES OFFICE SARATOV | RU1SARU | Ulyanov Alexander | SALC | 111208RU |
| 25163 | SALES OFFICE SAMARA | RU1SARU | Rogozhin Alexander | SALC | 111208RU |
| 25164 | SALES OFFICE SANKT-PETERBURG | RU1SARU | Kostyakov Igor | SALC | 111208RU |
| 25165 | SALES OFFICE ARKHANGELSK | RU1SARU | Chulanova Alyona | SALC | 111208RU |
| 25166 | SALES OFFICE KALININGRAD | RU1SARU | Zhukov Alexey | SALC | 111208RU |
| 25167 | SALES OFFICE KHABAROVSK | RU1SARU | Varlamov Denis | SALC | 111208RU |
| 25168 | SALES OFFICE VLADIVOSTOK | RU1SARU | Osadchii Dmitry | SALC | 111208RU |
| 25169 | SALES OFFICE YAKUTSK | RU1SARU | Nalivayko Konstantin | SALC | 111208RU |
| 25170 | SALES OFFICE NOVOSIBIRSK | RU1SARU | Davydov Andrey | SALC | 111208RU |
| 25171 | SALES OFFICE IRKUTSK | RU1SARU | Malashenko Dmitry | SALC | 111208RU |
| 25172 | SALES OFFICE KRASNOYARSK | RU1SARU | Izosimin Roman | SALC | 111208RU |
| 25173 | SALES OFFICE NOVOKUZNETSK | RU1SARU | Vasilyev Anton | SALC | 111208RU |
| 25174 | SALES OFFICE OMSK | RU1SARU | Kolos Eugenia | SALC | 111208RU |
| 25175 | SALES OFFICE EKATERINBURG | RU1SARU | Trapeznikov V. | SALC | 111208RU |
| 25176 | SALES OFFICE PERM | RU1SARU | Raspopov Sergey | SALC | 111208RU |
| 25177 | SALES OFFICE CHELYABINSK | RU1SARU | Volkov Andrey | SALC | 111208RU |
| 25178 | SALES OFFICE TYUMEN | RU1SARU | Ivanov Sergey | SALC | 111208RU |
| 25179 | SALES OFFICE UFA | RU1SARU | Kabirov Damir | SALC | 111208RU |
| 25180 | SALES OFFICE ORENBURG | RU1SARU | Kashirin Ivan | SALC | 111208RU |
| 25181 | SALES OFFICE SEVOSTOPOL | RU1SARU | N.N. | SALC | 111208RU |
| 25184 | SALES OFFICE VORONEZH | RU1SARU | Artem Ptakhin | SALC | 111208RU |
| 25185 | SALES OFFICE OREL | RU1SARU | Artem Ptakhin | SALC | 111208RU |
| 25222 | SALES ADMINISTRATION | RU1SARU | Nikolay Samoylov | SALC | 111208RU |
| 25279 | GIP DEPARTMENT | RU1SARU | Denisenko D. | SALC | 111208RU |
| 25280 | ENIGINEERING DEPARTMENT | RU1SARU | Denisenko D. | SALC | 111208RU |
| 25286 | SALES SUPPORT DEPARTAMENT | RU1SARU | Denisenko D. | SALC | 111208RU |
| 25601 | PL MANAGEMENT | RU1SARU | Svetlana Krylova | SALC | 111208RU |
| 25602 | LOGISTICS | RU1SARU | Gudz Maxim | SALC | 111208RU |
| 25603 | ORDER MANAGEMENT | RU1SARU | Loginov Andrei | SALC | 111208RU |
| 25605 | Outbound Freight | RU1SARU | Gudz Maxim | DISC | 119208RU |
| 25606 | Outbound Freight Export | RU1SARU | Svetlana Krylova | DISC | 119208RU |
| 25607 | Inter Warehouse Freight | RU1SARU | Svetlana Krylova | DISC | 119208RU |
| 25681 | WAREHOUSE KRASNOYARSK | RU1SARU | Svetlana Krylova | SALC | 111208RU |
| 25683 | WAREHOUSE EKATERINBURG | RU1SARU | Svetlana Krylova | SALC | 111208RU |
| 25684 | WAREHOUSE KHABAROVSK | RU1SARU | Svetlana Krylova | SALC | 111208RU |
| 25685 | WAREHOUSE KALININGRAD | RU1SARU | Svetlana Krylova | SALC | 111208RU |
| 25686 | WAREHOUSE SAMARA | RU1SARU | Svetlana Krylova | SALC | 111208RU |
| 25687 | WAREHOUSE ROSTOV | RU1SARU | Svetlana Krylova | SALC | 111208RU |
| 25688 | WAREHOUSE PYATIGORSK | RU1SARU | Svetlana Krylova | SALC | 111208RU |
| 25690 | WAREHOUSE PETERSBURG | RU1SARU | Svetlana Krylova | SALC | 111208RU |
| 25691 | WAREHOUSE NOVOSIBIRSK | RU1SARU | Svetlana Krylova | SALC | 111208RU |
| 25692 | WAREHOUSE IRKUTSK | RU1SARU | Svetlana Krylova | SALC | 111208RU |
| 25694 | WAREHOUSE VLADIVOSTOK | RU1SARU | Svetlana Krylova | SALC | 111208RU |
| 25695 | WAREHOUSE YAKUTSK | RU1SARU | Svetlana Krylova | SALC | 111208RU |
| 25884 | Managing Director | RU1SARU | Nikolay Samoylov | SALC | 111208RU |
| 25182 | REPRESENTATIVE OFFICE IN UZBEKISTAN | RU1SAUZ | Radishevsky S. | SALC | 111208UZ |
| 25301 | SERVICE CENTRAL FUNCTIONS | RU1SVRU | Anfisa Vasilieva | SALC | 131208RU |
| 25302 | FIELD SERVICE NORTH-WEST REGION | RU1SVRU | Anfisa Vasilieva | PRCO | 131208RU |
| 25303 | FIELD SERVICE SIBERIA REGION | RU1SVRU | Anfisa Vasilieva | PRCO | 131208RU |
| 25304 | FIELD SERVICE FAR EAST REGION | RU1SVRU | Anfisa Vasilieva | PRCO | 131208RU |
| 25305 | FIELD SERVICE URAL REGION | RU1SVRU | Anfisa Vasilieva | PRCO | 131208RU |
| 25306 | FIELD SERVICE VOLGA REGION | RU1SVRU | Anfisa Vasilieva | PRCO | 131208RU |
| 25307 | FIELD SERVICE SOUTH REGION | RU1SVRU | Anfisa Vasilieva | PRCO | 131208RU |
| 25308 | FIELD SERVICE CENTRAL REGION | RU1SVRU | Anfisa Vasilieva | PRCO | 131208RU |
| 25309 | IN HOUSE REPAIR | RU1SVRU | Anfisa Vasilieva | PRCO | 131208RU |
| 25310 | FIELD SERVICE MOSCOW REGION | RU1SVRU | Anfisa Vasilieva | PRCO | 131208RU |
| 25311 | FIELD SERVICE QUALITY | RU1SVRU | Anfisa Vasilieva | PRCO | 131208RU |
| 25313 | Service Central Functions | RU1SVRU | Vasilieva | PRCO | 131208RU |
| 25321 | SERVICE CENTRAL FUNC | RU1SVRU | Anfisa Vasilieva | SALC | 131208RU |
| 25322 | SERVICE CENTRAL FUNC | RU1SVRU | Anfisa Vasilieva | SALC | 131208RU |
| 25323 | SERVICE CENTRAL FUNC | RU1SVRU | Anfisa Vasilieva | SALC | 131208RU |
| 25391 | Building Cost SALC | RU1SVRU | Controlling | SALC | 131208RU |
| 25816 | IFRS 16 | RU1SVVN | Controlling | GADM | 229208RU |
| 25882 | ADMINISTRATION | RU1SVVN | Marina Yudina | GADM | 229208RU |
| 25886 | Management Fee | RU1SVVN | Andrey Rozhnov | GADM | 22999999 |
| 25887 | Strategic Management | RU1SVVN | Andrey Rozhnov | STRA | 22999999 |
| 25888 | Facility Project Manager | RU1SVVN | Natalia Lebedeva | GADM | 229208RU |
| 25891 | Building Cost GADM | RU1SVVN | Controlling | GADM | 229208RU |

---

## Все коды — плоская таблица

Используйте **Ctrl+F** для поиска по коду или названию.

| Код | Название | Родитель |
|-----|---------|---------|
| RU1 | WILO RUS | — |
| RU1ADMI | Administration | RU1 |
| RU1FICO | Finance & Controlling | RU1ADMI |
| RU1CONTR | Controlling | RU1FICO |
| RU1CONTMM | Group Controlling Mgmt | RU1CONTR |
| RU1CONTRG | Group Controlling | RU1CONTR |
| RU1CONTRL | Local Controlling | RU1CONTR |
| RU1FIACTA | Accounting & Taxes | RU1FICO |
| RU1FIACTAG | Group Accounting & Taxes | RU1FIACTA |
| RU1FIACTAL | Local Accounting & Taxes | RU1FIACTA |
| RU1FIACTMM | Group Acctg & Taxes Mgmt | RU1FIACTA |
| RU1GROTH | Group functions other | RU1ADMI |
| RU1HR | Human Resources | RU1ADMI |
| RU1HRMAN | HR Management | RU1HR |
| RU1LHR | Local HR | RU1HR |
| RU1IT | IT Service | RU1ADMI |
| RU1FINSE | Group Finance & Financial Services | RU1IT |
| RU1GIT | Group IT | RU1IT |
| RU1ILIT | Local IT | RU1IT |
| RU1ITMAN | IT Management | RU1IT |
| RU1MAN | Management | RU1ADMI |
| RU1SSM | Strategic Sales & Marketing | RU1ADMI |
| RU1OP | Operations | RU1 |
| RU1FA | Facilities | RU1OP |
| RU1GFM | Group Facility Management | RU1FA |
| RU1LF | Local Facilities | RU1FA |
| RU1LFMDO | Local Facility Management | RU1LF |
| RU1LIS | Local Infrastructure & Service | RU1LF |
| RU1LLB | Land and Buildings | RU1LF |
| RU1LMAIN | Local Maintenance | RU1LF |
| RU1GPST | Group Production Systems & Technology | RU1OP |
| RU1GROTH | Group functions other | RU1OP |
| RU1OP1P | OP PL NOGI Total | RU1OP |
| RU1GHR | Group HR | RU1OP1P |
| RU1OP1P0 | Bu Mat./Scr./Inb. Freight | RU1OP1P |
| RU1OP1P1 | Direct Labour | RU1OP1P |
| RU1OP1P2 | Machine & Equipment | RU1OP1P |
| RU1OP1P21 | Production | RU1OP1P2 |
| RU1OP1P29 | External Tools | RU1OP1P2 |
| RU1OP1P3 | External Tools | RU1OP1P |
| RU1OP1P4 | Total Structural Costs | RU1OP1P |
| RU1OP1P41 | StruCo Prod. Management | RU1OP1P4 |
| RU1OP1P411 | Pl. & Production | RU1OP1P41 |
| RU1OP1P412 | WPS / Op. Excellence | RU1OP1P41 |
| RU1OP1P413 | Prod. Unit Management | RU1OP1P41 |
| RU1OP1P42 | StruCo Prod. Support | RU1OP1P4 |
| RU1OP1P43 | StruCo Process Engineering | RU1OP1P4 |
| RU1OP1P44 | StruCo Supply Planning | RU1OP1P4 |
| RU1OP1P45 | StruCo Procurement | RU1OP1P4 |
| RU1OP1P46 | StruCo Logistics | RU1OP1P4 |
| RU1OP1P47 | StruCo Quality | RU1OP1P4 |
| RU1OP1P48 | StruCo Other Prod. | RU1OP1P4 |
| RU1OP1P481 | Enviro. & Safety | RU1OP1P48 |
| RU1OP1P482 | IT | RU1OP1P48 |
| RU1OP1P483 | Acc. & Controlling | RU1OP1P48 |
| RU1OP1P484 | Human Resources | RU1OP1P48 |
| RU1OP1P485 | Insurances | RU1OP1P48 |
| RU1OP1P486 | Admin others | RU1OP1P48 |
| RU1OP1P9 | Other Cost Centers | RU1OP1P |
| RU1OP1P91 | General Cost Centers | RU1OP1P9 |
| RU1OP1P92 | Calculation Cost Centers | RU1OP1P9 |
| RU1OP1P93 | ACOS Cost Centers | RU1OP1P9 |
| RU1OP1P94 | Generic Cost Centers | RU1OP1P9 |
| RU1OP1P99 | Old Cost Centers | RU1OP1P9 |
| RU1PSCM | Procurement & Supply Chain Management | RU1OP |
| RU1LOG | Group Logistics | RU1PSCM |
| RU1PDS | Group Demand and Supply | RU1PSCM |
| RU1PROC | Group Procurement | RU1PSCM |
| RU1PSCMM | Procurement & SCM Management | RU1PSCM |
| RU1QUAL | Group Quality | RU1OP |
| RU1OTH | Other Cost Centers / Controlling | RU1 |
| RU1ALLOC | Allocations | RU1OTH |
| RU1MISC | Miscellaneous | RU1OTH |
| RU1OLD | Old | RU1OTH |
| RU1RDTLEM | Technology Lead Engineering Motors | RU1OTH |
| RU1PBUPRCO | Functional Area x PRCO | RU1RDTLEM |
| RU1RD | R&D | RU1 |
| RU10POTH | Others | RU1RD |
| RU1PBUACOS | Functional Area x PBU ACOS | RU10POTH |
| RU1PBUAMCO | Functional Area x PBU AMCO | RU10POTH |
| RU1RDMS | Product Line Engineering Multi Stream | RU1RD |
| RU1RDPCI | Product Compliance Intelligence | RU1RD |
| RU1RDQV | Qualification & Verification | RU1RD |
| RU1RDRP | Research & Predevelopment | RU1RD |
| RU1RDSEG | R&D Strategy, Excellence & Governance | RU1RD |
| RU1RDSPM | Strategic Project Management | RU1RD |
| RU1RDSS | Product Line Engineering Systems | RU1RD |
| RU1RDSSDR | PLE Single Stream DR | RU1RD |
| RU1RDSSWR | PLE Single Stream WR | RU1RD |
| RU1RDTLE | Technology Lead Engineering | RU1RD |
| RU1SAL | Sales | RU1 |
| RU1SALSB | Service Business | RU1SAL |
| RU1GRSERV | Group Service | RU1SALSB |
| RU1OEMSEA | OEM South East Asia | RU1SALSB |
| RU1SMUL | Sales Allocations | RU1SAL |
| RU1SREM | Sales Region Emerging Markets | RU1SAL |
| RU1SACN | Sales Area China | RU1SREM |
| RU1SAEUAS | Sales Area Eurasia | RU1SREM |
| RU1SAAZ | Azerbaijan | RU1SAEUAS |
| RU1SABY | Belarus | RU1SAEUAS |
| RU1SAEURGL | Global | RU1SAEUAS |
| RU1SAGE | Georgia | RU1SAEUAS |
| RU1SAIL | Israel | RU1SAEUAS |
| RU1SAKZ | Kazakhstan | RU1SAEUAS |
| RU1SARU | Russian Fed. | RU1SAEUAS |
| RU1SAUZ | Uzbekistan | RU1SAEUAS |
| RU1SAIND | Sales Area India | RU1SREM |
| RU1SAKR | Sales Area Korea | RU1SREM |
| RU1SAZA | South Africa | RU1SAKR |
| RU1SALA | Sales Area Latin America | RU1SREM |
| RU1SAAR | Argentina | RU1SALA |
| RU1SABR | Brazil | RU1SALA |
| RU1SACL | Chile | RU1SALA |
| RU1SALAGL | Global | RU1SALA |
| RU1SAMENA | Sales Area MENA | RU1SREM |
| RU1SADZ | Algeria | RU1SAMENA |
| RU1SAEG | Egypt | RU1SAMENA |
| RU1SALB | Lebanon | RU1SAMENA |
| RU1SAMA | Morocco | RU1SAMENA |
| RU1SAMEGL | Global | RU1SAMENA |
| RU1SATN | Tunisia | RU1SAMENA |
| RU1SAMSA | Sales Area MSA | RU1SREM |
| RU1SAAE | Utd. Arab Emirates | RU1SAMSA |
| RU1SACM | Cameroon | RU1SAMSA |
| RU1SAGH | Ghana | RU1SAMSA |
| RU1SAIC | Ivory Coast | RU1SAMSA |
| RU1SAKE | Kenya | RU1SAMSA |
| RU1SAMSAGL | Global | RU1SAMSA |
| RU1SANE | Nigeria | RU1SAMSA |
| RU1SANOAM | Sales Area North America | RU1SREM |
| RU1SACA | Canada | RU1SANOAM |
| RU1SANOGL | Global | RU1SANOAM |
| RU1SAUA | Ukraine | RU1SANOAM |
| RU1SAUS | USA | RU1SANOAM |
| RU1SASEA | Sales Area South East Asia | RU1SREM |
| RU1SABD | Bangladesh | RU1SASEA |
| RU1SAID | Indonesia | RU1SASEA |
| RU1SAMY | Malaysia | RU1SASEA |
| RU1SASEGL | Global | RU1SASEA |
| RU1SASG | Singapore | RU1SASEA |
| RU1SATW | Taiwan | RU1SASEA |
| RU1SAU | Australia | RU1SASEA |
| RU1SATR | Sales Area Turkey | RU1SREM |
| RU1SRMM | Sales Region Mature Markets | RU1SAL |
| RU1SADACH | Sales Area DACH | RU1SRMM |
| RU1SAAT | Austria | RU1SADACH |
| RU1SACH | Switzerland | RU1SADACH |
| RU1SAGER | Germany | RU1SADACH |
| RU1SALI | Liechtenstein | RU1SADACH |
| RU1SAEUEA | Sales Area EU East | RU1SRMM |
| RU1SABG | Bulgaria | RU1SAEUEA |
| RU1SACR | Croatia | RU1SAEUEA |
| RU1SACZ | Czech Republic | RU1SAEUEA |
| RU1SAEUGL | Global | RU1SAEUEA |
| RU1SAHU | Hungary | RU1SAEUEA |
| RU1SAPL | Poland | RU1SAEUEA |
| RU1SARO | Romania | RU1SAEUEA |
| RU1SARS | Serbia/Monten. | RU1SAEUEA |
| RU1SASI | Slovenia | RU1SAEUEA |
| RU1SASK | Slovakia | RU1SAEUEA |
| RU1SAEUNO | Sales Area EU North | RU1SRMM |
| RU1SABE | Belgium | RU1SAEUNO |
| RU1SADK | Denmark | RU1SAEUNO |
| RU1SAES | Spain | RU1SAEUNO |
| RU1SAEUNGL | Global | RU1SAEUNO |
| RU1SAFI | Finland | RU1SAEUNO |
| RU1SAIE | Ireland | RU1SAEUNO |
| RU1SALT | Lithuania | RU1SAEUNO |
| RU1SALV | Latvia | RU1SAEUNO |
| RU1SANL | Netherlands | RU1SAEUNO |
| RU1SANO | Norway | RU1SAEUNO |
| RU1SASE | Sweden | RU1SAEUNO |
| RU1SAUK | United Kingdom | RU1SAEUNO |
| RU1SAEUSW | Sales Area EU South West | RU1SRMM |
| RU1SACY | Cyprus | RU1SAEUSW |
| RU1SADAGL | Global | RU1SAEUSW |
| RU1SAEUSGL | Global | RU1SAEUSW |
| RU1SAFR | France | RU1SAEUSW |
| RU1SAGP | Guadeloupe | RU1SAEUSW |
| RU1SAGR | Greece | RU1SAEUSW |
| RU1SAIT | Italy | RU1SAEUSW |
| RU1SAPT | Portugal | RU1SAEUSW |
| RU1SROEM | Sales Region OEM | RU1SAL |
| RU1OEMCN | OEM China | RU1SROEM |
| RU1OEMZA | South Africa | RU1OEMCN |
| RU1OEMDACH | OEM DACH | RU1SROEM |
| RU1OEMAT | Austria | RU1OEMDACH |
| RU1OEMCH | Switzerland | RU1OEMDACH |
| RU1OEMDAGL | Global | RU1OEMDACH |
| RU1OEMGER | Germany | RU1OEMDACH |
| RU1OEMLI | Liechtenstein | RU1OEMDACH |
| RU1OEMEM | OEM Emerging Markets | RU1SROEM |
| RU1OEMEUAS | OEM Eurasia | RU1SROEM |
| RU1OEMAZ | Azerbaijan | RU1OEMEUAS |
| RU1OEMBY | Belarus | RU1OEMEUAS |
| RU1OEMEURG | Global | RU1OEMEUAS |
| RU1OEMGE | Georgia | RU1OEMEUAS |
| RU1OEMIL | Israel | RU1OEMEUAS |
| RU1OEMKZ | Kazakhstan | RU1OEMEUAS |
| RU1OEMRU | Russian Fed. | RU1OEMEUAS |
| RU1OEMEUEA | OEM EU East | RU1SROEM |
| RU1OEMBG | Bulgaria | RU1OEMEUEA |
| RU1OEMCR | Croatia | RU1OEMEUEA |
| RU1OEMCZ | Czech Republic | RU1OEMEUEA |
| RU1OEMEUGL | Global | RU1OEMEUEA |
| RU1OEMHU | Hungary | RU1OEMEUEA |
| RU1OEMPL | Poland | RU1OEMEUEA |
| RU1OEMRO | Romania | RU1OEMEUEA |
| RU1OEMRS | Serbia/Monten. | RU1OEMEUEA |
| RU1OEMSI | Slovenia | RU1OEMEUEA |
| RU1OEMSK | Slovakia | RU1OEMEUEA |
| RU1OEMEUNO | OEM EU North | RU1SROEM |
| RU1OEMBE | Belgium | RU1OEMEUNO |
| RU1OEMDK | Denmark | RU1OEMEUNO |
| RU1OEMENGL | Global | RU1OEMEUNO |
| RU1OEMES | Spain | RU1OEMEUNO |
| RU1OEMFI | Finland | RU1OEMEUNO |
| RU1OEMIE | Ireland | RU1OEMEUNO |
| RU1OEMLT | Lithuania | RU1OEMEUNO |
| RU1OEMLV | Latvia | RU1OEMEUNO |
| RU1OEMNL | Netherlands | RU1OEMEUNO |
| RU1OEMNO | Norway | RU1OEMEUNO |
| RU1OEMSE | Sweden | RU1OEMEUNO |
| RU1OEMUK | United Kingdom | RU1OEMEUNO |
| RU1OEMEUSW | OEM EU South West | RU1SROEM |
| RU1OEMCY | Cyprus | RU1OEMEUSW |
| RU1OEMEUSG | Global | RU1OEMEUSW |
| RU1OEMFR | France | RU1OEMEUSW |
| RU1OEMGP | Guadeloupe | RU1OEMEUSW |
| RU1OEMGR | Greece | RU1OEMEUSW |
| RU1OEMIT | Italy | RU1OEMEUSW |
| RU1OEMPT | Portugal | RU1OEMEUSW |
| RU1OEMIND | OEM India | RU1SROEM |
| RU1OEMKR | OEM Korea | RU1SROEM |
| RU1OEMLA | OEM Latin America | RU1SROEM |
| RU1OEMAR | Argentina | RU1OEMLA |
| RU1OEMBR | Brazil | RU1OEMLA |
| RU1OEMCL | Chile | RU1OEMLA |
| RU1OEMLAGL | Global | RU1OEMLA |
| RU1OEMMX | Mexico | RU1OEMLA |
| RU1OEMMENA | OEM MENA | RU1SROEM |
| RU1OEMDZ | Algeria | RU1OEMMENA |
| RU1OEMEG | Egypt | RU1OEMMENA |
| RU1OEMLB | Lebanon | RU1OEMMENA |
| RU1OEMMA | Morocco | RU1OEMMENA |
| RU1OEMMEGL | Global | RU1OEMMENA |
| RU1OEMTN | Tunisia | RU1OEMMENA |
| RU1OEMUZ | Uzbekistan | RU1OEMMENA |
| RU1OEMMM | OEM Mature Markets | RU1SROEM |
| RU1OEMMSA | OEM MSA | RU1SROEM |
| RU1OEMAE | Utd. Arab Emirates | RU1OEMMSA |
| RU1OEMCM | Cameroon | RU1OEMMSA |
| RU1OEMGH | Ghana | RU1OEMMSA |
| RU1OEMIC | Ivory Coast | RU1OEMMSA |
| RU1OEMKE | Kenya | RU1OEMMSA |
| RU1OEMMSAG | Global | RU1OEMMSA |
| RU1OEMNE | Nigeria | RU1OEMMSA |
| RU1OEMNOAM | OEM North America | RU1SROEM |
| RU1OEMCA | Canada | RU1OEMNOAM |
| RU1OEMNOGL | Global | RU1OEMNOAM |
| RU1OEMUA | Ukraine | RU1OEMNOAM |
| RU1OEMUS | USA (OEM) | RU1OEMNOAM |
| RU1OEMSEA | OEM South East Asia | RU1SROEM |
| RU1OEMBD | Bangladesh | RU1OEMSEA |
| RU1OEMID | Indonesia | RU1OEMSEA |
| RU1OEMMY | Malaysia | RU1OEMSEA |
| RU1OEMSEGL | Global | RU1OEMSEA |
| RU1OEMSG | Singapore | RU1OEMSEA |
| RU1OEMTW | Taiwan | RU1OEMSEA |
| RU1OEMU | Australia | RU1OEMSEA |
| RU1OEMTR | OEM Turkey | RU1SROEM |
| RU1SVREM | Service Region Emerging Markets | RU1SAL |
| RU1SVCN | Service Area China | RU1SVREM |
| RU1SVEUAS | Service Area Eurasia | RU1SVREM |
| RU1SVAZ | Azerbaijan | RU1SVEUAS |
| RU1SVBY | Belarus | RU1SVEUAS |
| RU1SVEURGL | Global | RU1SVEUAS |
| RU1SVGE | Georgia | RU1SVEUAS |
| RU1SVIL | Israel | RU1SVEUAS |
| RU1SVKZ | Kazakhstan | RU1SVEUAS |
| RU1SVRU | Russian Fed. | RU1SVEUAS |
| RU1SVUZ | Uzbekistan | RU1SVEUAS |
| RU1SVIND | Service Area India | RU1SVREM |
| RU1SVKR | Service Area Korea | RU1SVREM |
| RU1SVLA | Service Area Latin America | RU1SVREM |
| RU1SVAR | Argentina | RU1SVLA |
| RU1SVBR | Brazil | RU1SVLA |
| RU1SVCL | Chile | RU1SVLA |
| RU1SVLAGL | Global | RU1SVLA |
| RU1SVMX | Mexico | RU1SVLA |
| RU1SVUS | USA | RU1SVLA |
| RU1SVMENA | Service Area MENA | RU1SVREM |
| RU1SVAE | Utd. Arab Emirates | RU1SVMENA |
| RU1SVDZ | Algeria | RU1SVMENA |
| RU1SVEG | Egypt | RU1SVMENA |
| RU1SVLB | Lebanon | RU1SVMENA |
| RU1SVMA | Morocco | RU1SVMENA |
| RU1SVMEGL | Global | RU1SVMENA |
| RU1SVTN | Tunisia | RU1SVMENA |
| RU1SVMSA | Service Area MSA | RU1SVREM |
| RU1SVCM | Cameroon | RU1SVMSA |
| RU1SVGH | Ghana | RU1SVMSA |
| RU1SVIC | Ivory Coast | RU1SVMSA |
| RU1SVKE | Kenya | RU1SVMSA |
| RU1SVMSAGL | Global | RU1SVMSA |
| RU1SVNE | Nigeria | RU1SVMSA |
| RU1SVZA | South Africa | RU1SVMSA |
| RU1SVNOAM | Service Area North America | RU1SVREM |
| RU1SVCA | Canada | RU1SVNOAM |
| RU1SVNOGL | Global | RU1SVNOAM |
| RU1SVTR | Service Area Turkey | RU1SVREM |
| RU1SVSEA | Service Area South East Asia | RU1SVREM |
| RU1SVBD | Bangladesh | RU1SVSEA |
| RU1SVID | Indonesia | RU1SVSEA |
| RU1SVMY | Malaysia | RU1SVSEA |
| RU1SVSEGL | Global | RU1SVSEA |
| RU1SVSG | Singapore | RU1SVSEA |
| RU1SVTW | Taiwan | RU1SVSEA |
| RU1SVU | Australia | RU1SVSEA |
| RU1SVVN | Vietnam | RU1SVSEA |
| RU1SVRMM | Service Region Mature Markets | RU1SAL |
| RU1SBLF | Service Local Functions | RU1SVRMM |
| RU1SVDACH | Service Area DACH | RU1SVRMM |
| RU1SVAT | Austria | RU1SVDACH |
| RU1SVCH | Switzerland | RU1SVDACH |
| RU1SVGER | Germany | RU1SVDACH |
| RU1SVLI | Liechtenstein | RU1SVDACH |
| RU1OEMVN | Vietnam (OEM) | RU1SVDACH |
| RU1SVEUEA | Service Area EU East | RU1SVRMM |
| RU1SVBG | Bulgaria | RU1SVEUEA |
| RU1SVCR | Croatia | RU1SVEUEA |
| RU1SVCZ | Czech Republic | RU1SVEUEA |
| RU1SVEUGL | Global | RU1SVEUEA |
| RU1SVHU | Hungary | RU1SVEUEA |
| RU1SVPL | Poland | RU1SVEUEA |
| RU1SVRO | Romania | RU1SVEUEA |
| RU1SVRS | Serbia/Monten. | RU1SVEUEA |
| RU1SVSI | Slovenia | RU1SVEUEA |
| RU1SVSK | Slovakia | RU1SVEUEA |
| RU1SVUA | Ukraine | RU1SVEUEA |
| RU1SVUK | United Kingdom | RU1SVEUEA |
| RU1SVEUNO | Service Area EU North | RU1SVRMM |
| RU1SVBE | Belgium | RU1SVEUNO |
| RU1SVDK | Denmark | RU1SVEUNO |
| RU1SVES | Spain | RU1SVEUNO |
| RU1SVEUNGL | Global | RU1SVEUNO |
| RU1SVFI | Finland | RU1SVEUNO |
| RU1SVIE | Ireland | RU1SVEUNO |
| RU1SVLT | Lithuania | RU1SVEUNO |
| RU1SVLV | Latvia | RU1SVEUNO |
| RU1SVNL | Netherlands | RU1SVEUNO |
| RU1SVNO | Norway | RU1SVEUNO |
| RU1SVSE | Sweden | RU1SVEUNO |
| RU1SVEUSW | Service Area EU South West | RU1SVRMM |
| RU1SVCY | Cyprus | RU1SVEUSW |
| RU1SVDAGL | Global | RU1SVEUSW |
| RU1SVEUSGL | Global | RU1SVEUSW |
| RU1SVFR | France | RU1SVEUSW |
| RU1SVGP | Guadeloupe | RU1SVEUSW |
| RU1SVGR | Greece | RU1SVEUSW |
| RU1SVIT | Italy | RU1SVEUSW |
| RU1SVPT | Portugal | RU1SVEUSW |
