// Fresenius.js
import React, { useEffect, useRef, useState } from "react";
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Fresenius() {
    const [offset, setOffset] = useState(0);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [ScrollIndex, SetScrollIndex] = useState('1');
    const image_box_link = [
        "https://www.fresenius.com/press-release-q2-2025",
        "https://www.fresenius.com/50YearsOfFresubin",
        "https://report.fresenius.com/2024/sustainability-magazine/",

    ]


    const image_box = [
        {
            title: "Q2/2025 Financial Results ",
            subtitle: "Fresenius raised its full-year revenue guidance. Its resilient business continues to deliver consistent performance. In Q2, the company recorded strong revenue and EPS growth. #FutureFresenius is paying off.",
            footer: "Read the Story"
        },
        {
            title: "Celebrating 50 Years of Fresubin",
            subtitle: "This year marks a major milestone in our company’s history: the 50th anniversary of Fresubin®. What began as a clinical solution in 1975 has grown into a trusted and comprehensive enteral nutrition product brand for patients around the world.",
            footer: "Read the Story"
        },
        {
            title: "Fresenius publishes Sustainability Highlights Magazine “Caring for Tomorrow”",
            subtitle: "In the magazine, we provide insights into sustainability activities of the Fresenius Group, including stories from everyday operations, and introduce the people behind this topic. Curious?",
            footer: "Go to Magazine"
        },
        {
            title: "How Fresenius employees help people with cancer in every phase of the disease",
            subtitle: "They serve patients beyond expectations and always give their best – not just in the fight against cancer, but also when striving for the highest possible quality of life.",
            footer: "Read the Story"
        },
        {
            title: "CAR-T cell therapy: Revolutionary chances of a cure, but costs still too high",
            subtitle: "How Fresenius Kabi is revolutionizing the treatment of cancer patients with the help of the Lovo and Cue cell processing systems.",
            footer: "Read the Story"
        }
    ]

    const [isopen, setisopne] = useState(false);
    const images = [
        "https://www.fresenius.com/sites/default/files/2025-05/AMG%20STAGE.png",
        "https://www.fresenius.com/sites/default/files/2025-07/Screenshot%202025-07-10%20at%2014.09.19.png",
        "https://www.fresenius.com/sites/default/files/2025-04/1600px_og-social-pic%20only_ji.jpg",
        "https://www.fresenius.com/sites/default/files/2025-04/Krebs%20QS%23.png",
        "https://www.fresenius.com/sites/default/files/2024-11/AdobeStock_809410819_1600px.jpg"
    ];
    const linkStyle = {
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "16px",
        color: "#002060",
        display: "block",
        padding: "5px 0"
    };

    const newsList = [
        {
            title: "Fresenius announces licensing agreement with Polpharma Biologics to commercialize a proposed vedolizumab biosimilar candidate",
            body: "Fresenius Kabi, part of the global healthcare    ...",
            date: "August 05, 2025 · Fresenius Kabi"
        },
        {

            body: "company Fresenius, has entered a licensing agreement with Polpharma Biologics S.A., a developer and manufacturer of biosimilar products, based in Poland. Under the agreement, Fresenius Kabi will exclusively commercialize Polpharma Biologics’ vedolizumab biosimilar candidate PB016 globally, except the Middle East and North   ...",
            date: "August 05, 2025 · Fresenius Kabi"
        },
        {

            body: "Africa, pending approval by respective regulatory authorities. PB016 is a biosimilar candidate to Entyvio®*, an integrin receptor antagonist used in the treatment of moderately to severely active ulcerative colitis and Crohn’s disease. “Today marks a significant milestone in our journey to provide patients with access to affordable, high-quality biosimilar treatments,” ...",
            date: "August 05, 2025 · Fresenius Kabi"
        },
        {

            body: "said Dr. Sang-Jin Pak, President Biopharma at Fresenius Kabi. “The in-licensing of PB016 from Polpharma Biologics underscores our commitment to expanding our autoimmune biosimilars portfolio and addressing the unmet needs of patients with chronic inflammatory diseases.” This agreement builds on Fresenius Kabi’s successful track record in the biosimilars    ...",
            date: "August 05, 2025 · Fresenius Kabi"
        },
        {

            body: "market, including the recent FDA and EC approvals of its denosumab and ustekinumab biosimilars. This milestone underscores Fresenius Kabi’s commitment to broadening access to essential, high-quality biosimilar therapies. Through this agreement, Fresenius is strengthening its (Bio)Pharma platform, which is a key pillar of the #FutureFresenius strategy    ...",
            date: "August 05, 2025 · Fresenius Kabi"
        },
        {

            body: "*Entyvio® is a registered trademark of Takeda                                                                                                                                                                                                                          ",
            date: "August 05, 2025 · Fresenius Kabi"
        }
    ]

    const newsList1 = [
        {
            title: "Fresenius Receives European Commission Approval for Denosumab Biosimilars",
            body: "Fresenius announced today that the European Commission has granted approval for their denosumab biosimilars Conexxence®* and    ...",
            date: "July 23, 2025 · Fresenius Kabi"
        },
        {

            body: "Bomyntra®* in Europe. The two approvals cover all indications of the reference products including osteoporosis in postmenopausal women and at-risk men, treatment-related bone loss, prevention of skeletal complications from cancer metastasis to bone, and giant cell tumor of bone. This milestone marks a significant advancement in Fresenius Kabi’s  ...",
            date: "July 23, 2025 · Fresenius Kabi"
        },
        {

            body: "mission to expand access to high-quality biosimilar therapies. It also reinforces the business’ commitment to strengthening its Biopharma platform, a key pillar of the #FutureFresenius strategy. *Conexxence and *Bomyntra are registered trademarks of Fresenius Kabi Deutschland GmbH in selected countries. ..."
            , date: "July 23, 2025 · Fresenius Kabi"
        },
    ]


    const newsList2 = [
        {
            title: "Fresenius expands Biopharma Portfolio in the U.S. with Denosumab Biosimilars availability",
            body: "Fresenius announced today that its Operating Company Fresenius Kabi has introduced two new biosimilars in the U.S., Conexxence®(1)   ...",
            date: "July 01, 2025 · Fresenius"
        },
        {

            body: "(denosumab-bnht) and Bomyntra®(2) (denosumab-bnht).These denosumab biosimilars are approved by the FDA for all indications of the reference products, Prolia®(3) (denosumab) and Xgeva®(4) (denosumab), respectively. The biological medicines are used for the treatment of osteoporosis and other bone-related conditions.This milestone ...",
            date: "July 01, 2025 · Fresenius"
        },
        {

            body: "represents Fresenius’ fifth and sixth biosimilars available in the U.S. It is a showcase of the company’s efforts to drive patient access to high-quality biological medicines. Earlier this year, Fresenius announced a global settlement with Amgen concerning its denosumab biosimilars. The company thereby continues the growth path of its BioPharma platform in line ..."
            , date: "July 01, 2025 · Fresenius"
        },
        {

            body: "with #FutureFresenius.Conexxence®(1) and Bomyntra®(2) are registered trademarks of Fresenius Kabi Deutschland GmbH in selected countries. Prolia®(3) and Xgeva®(4) are registered trademarks of Amgen Inc.Read the full press release here."
            , date: "July 01, 2025 · Fresenius"
        }
    ]


    const newsList3 = [
        {
            title: "Denosumab CHMP Positive Opinion",
            body: "Fresenius announced today that the Committee for Medicinal Products for Human Use (CHMP) of the European Medicines Agency (EMA) has issued a positive opinion for its denosumab biosimilar candidates for the treatment of  ...",
            date: "May 27, 2025 · Fresenius Kabi"
        },
        {

            body: "osteoporosis and other bone-related conditions. The biosimilars are recommended for approval for all indications of the reference products 1Prolia® (denosumab) and 2Xgeva® (denosumab) from AMGEN. The CHMP positive opinion marks an important step in Fresenius Kabi's efforts to enhance patient access to biosimilar products and expand its capabilities  ...",
            date: "May 27, 2025 · Fresenius Kabi"
        },
        {

            body: "and portfolio in biosimilars development. Developing the company's Biopharma platform is a key element of #FutureFresenius. 1Prolia® and 2Xgeva® are registered trademarks of Amgen Inc.  ..."
            , date: "May 27, 2025 · Fresenius Kabi"
        },
    ]

    const newsList4 = [
        {
            title: "Fresenius expands its line of Epinephrine injectables in the U.S.",
            body: "Fresenius today announced that its operating company, Fresenius Kabi, is now offering Epinephrine Injection, USP, in 30 mg per 30 mL multi-dose vials in the United States. Following...",
            date: "May 20, 2025 · Fresenius Kabi1 "
        },
        {

            body: "the introduction of the first generic version of Epinephrine, USP, in a 1 mg per mL vial for U.S. customers in December 2024, the product launch expands Fresenius’ offerings of Epinephrine Injection. Epinephrine Injection 30 mg per 30 mL is a prescription medicine used for emergency treatment of allergic reactions (Type 1), including anaphylaxis, in adults and  ...",
            date: "May 20, 2025 · Fresenius Kabi1 "
        },
        {

            body: "pediatric patients and to increase mean arterial blood pressure in adult patients with hypotension associated with septic shock. In line with #FutureFresenius, Fresenius Kabi has invested more than $1 billion to expand and modernize advanced U.S. pharmaceutical production and distribution facilities. Epinephrine Injection is manufactured in the  ..."
            , date: "May 20, 2025 · Fresenius Kabi1 "
        },
        {

            body: "U.S., reflecting the company’s commitment to domestic production. More than 70% of the pharmaceuticals that Fresenius Kabi sells to U.S. customers are formulated, filled and packaged in the U.S."
            , date: "May 20, 2025 · Fresenius Kabi1 "
        }
    ]

    const newsList5 = [
        {
            title: "Fresenius makes progress on streamlining its production network",
            body: "Fresenius continues reducing complexity and optimizing utilization in the production network of its Operating Company Fresenius Kabi in line with its Vision 2026 and...",
            date: "April 09, 2025 · Fresenius Kabi"
        },
        {

            body: "#FutureFresenius: Today, Fresenius Kabi and EMS have signed an agreement to transfer the ownership of Fresenius Kabi's production site in Anápolis, Brazil, to EMS. The multinational pharmaceutical company has a strong presence in Latin America and will take over the generic injectables production plant, the development center, and the warehouse as well as full staff  ...",
            date: "April 09, 2025 · Fresenius Kabi"
        },
        {

            body: "and will continue production. The transaction is subject to customary closing conditions, including merger approval."
            , date: "April 09, 2025 · Fresenius Kabi"
        },
    ]

    const newsList6 = [
        {
            title: "Fresenius completes divestment of Vamed’s international project business",
            body: "Fresenius today announced that the Biologics License Application (BLA) for the denosumab biosimilars Conexxence®** (denosumab-bnht)  ...",
            date: "April 01, 2025 · Fresenius"
        },
        {

            body: "announced in February 2025. The divestment is part of Fresenius’ structured exit from its Investment Company Vamed and enables Fresenius to further increase focus and management capacity on the ongoing progress of its core businesses Fresenius Kabi and Fresenius Helios, in line with #FutureFresenius.",
            date: "April 01, 2025 · Fresenius"
        },
    ]
    const newsList7 = [
        {
            title: "Fresenius Receives FDA approval for their Denosumab Biosimilars and Secures Global Settlement",
            body: "Fresenius today announced that the Biologics License Application (BLA) for the denosumab biosimilars Conexxence®** (denosumab-bnht) ...",
            date: "March 26, 2025 · Fresenius"
        },
        {

            body: "and Bomyntra®** (denosumab-bnht) of its operating company Fresenius Kabi has been approved by the U.S. Food and Drug Administration (FDA). The denosumab biosimilars are approved for all indications of the reference products Prolia®* (denosumab) and Xgeva®* (denosumab), respectively. Additionally, Fresenius’ operating company has ...",
            date: "March 26, 2025 · Fresenius Kabi"
        },
        {

            body: "reached a global settlement with Amgen, allowing the launch of these biosimilars in the US from mid-2025 and in Europe later end of November 2025 subject to regulatory approval. The FDA approval and the global settlement agreement with Amgen are the latest developments in Fresenius’ continuing commitment to improving patient access to ...",
            date: "March 26, 2025 · Fresenius"
        },
        {

            body: "high-quality biological products through expanding its biosimilars development capabilities and product portfolio. Growing the company's (Bio)Pharma platform is a substantial cornerstone of #FutureFresenius. *Prolia® and Xgeva®* are registered trademarks of Amgen Inc. **Conexxence® and **Bomyntra® are registered trademarks of Fresenius Kabi ...",
            date: "March 26, 2025 · Fresenius"
        },
        {

            body: "Deutschland in selected countries. Read the full press release here. Please click to see full Prescribing Information for Conexxence®. Please click to see full Prescribing Information for Bomyntra®.",
            date: "March 26, 2025 · Fresenius"
        }
    ]
    const newsList8 = [
        {
            title: "Fresenius publishes 2024 Annual Report: #FutureFresenius makes the company more innovative, more focused and more efficient",
            body: "Today, Fresenius published its 2024 Annual Report. As already announced in February, the ...",
            date: "March 26, 2025 · Fresenius"
        },
        {

            body: "healthcare group grew profitably in the past year and achieved its outlook, which was raised twice, through consistently good business performance. Group revenue before special items increased to €21.5 billion, with organic growth of 8%. Fresenius was also able to reduce net debt by €2 billion in 2024. “Our #FutureFresenius program,which we launched ...",
            date: "March 26, 2025 · Fresenius Kabi"
        },
        {

            body: " at the end of 2022, is having an impact. The “new” Fresenius is much more focused. We are concentrating on Fresenius Kabi and Fresenius Helios. These are growing profitably and under their own steam,” said Michael Sen, Chairman of the Management Board of Fresenius. “Growth, higher margins, more cash, lower debt – all this has created value: From the beginning of ...",
            date: "March 26, 2025 · Fresenius"
        },
        {

            body: "October 2022, when we prepared the ReSet, until February 28, 2025, the share price rose by 76%.” For the first time, the Annual Report includes a sustainability report in accordance with the European Sustainability Reporting Standards (ESRS). This replaces the Non-financial Report of previous Annual Reports and expands and supplements reporting topics and  ...",
            date: "March 26, 2025 · Fresenius"
        },
        {

            body: "details. In addition, the ESRS report, like the financial report, is audited externally. The 2024 Annual Report is available in German and English as a PDF file and as an online version. Further publication and event dates for 2025: · 04/24/2025: Publication of Sustainability Highlights Magazine · 05/07/2025: Publication of the financial results for Q1 2025 · 05/23/2025:",
            date: "March 26, 2025 · Fresenius"
        },
        {

            body: "Annual General Meeting · 08/06/2025: Publication of the financial results for Q2 2025 · 11/05/2025: Publication of the financial results for Q3 2025",
            date: "March 26, 2025 · Fresenius"
        }
    ]


    const newsList10 = [
        {
            title: "Denosumab CHMP Positive Opinion",
            body: "Fresenius today announced that its operating company, Fresenius Kabi, is now offering Epinephrine Injection, USP, in 30 mg per 30 mL multi-dose vials in the United States. Following  ...",
            date: "May 20, 2025 · Fresenius Kabi"
        },
        {

            body: "the introduction of the first generic version of Epinephrine, USP, in a 1 mg per mL vial for U.S. customers in December 2024, the product launch expands Fresenius’ offerings of Epinephrine Injection. Epinephrine Injection 30 mg per 30 mL is a prescription medicine used for emergency treatment of allergic reactions (Type 1), including anaphylaxis, in adults and ...",
            date: "May 20, 2025 · Fresenius Kabi"
        },
        {

            body: "pediatric patients and to increase mean arterial blood pressure in adult patients with hypotension associated with septic shock. In line with #FutureFresenius, Fresenius Kabi has invested more than $1 billion to expand and modernize advanced U.S. pharmaceutical production and distribution facilities. Epinephrine Injection is manufactured in the",
            date: "May 20, 2025 · Fresenius Kabi"
        },
        {

            body: " U.S., reflecting the company’s commitment to domestic production. More than 70% of the pharmaceuticals that Fresenius Kabi sells to U.S. customers are formulated, filled and packaged in the U.S.",
            date: "May 20, 2025 · Fresenius Kabi"
        }
    ]
    const [showSearch, setShowSearch] = useState(false);
    const [showSearch1, setShowSearch1] = useState(false);
    const [showcarrer, setshowcarrer] = useState(false);
    const [showStory, setshowStory] = useState(false);
    const [showInvestor, setInvestor] = useState(false);
    const [showMedia, setShowMedia] = useState(false);
    const [gf, setgf] = useState(false);



    const [open, setopen] = useState(false);
    const [shareopen, setshareopen] = useState(false);
    const [creaditcardopen, setcreditcardopen] = useState(false);
    const [right, setright] = useState(false);

    const image_visibility = 3;
    const visibleItems = [];


    const handlerightbtn = () => {
        setright(!right);
    }

    const [fw, setfw] = useState(false);

    const handlefielddwork = () => {
        setfw(!fw);
    }

    const [mgt, setmgt] = useState(false);

    const handlemgt = () => {
        setmgt(!mgt);
    }

    const [Sustainability, setSustainability] = useState(false);
    const [sr, setsr] = useState(false);
    const [say,setsay] = useState('');
    const [openDots, setopenDots] = useState(false);
    const sliderRef = useRef(null);
    const sectionRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
      ];
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const [setcolor,changecolor]=useState('0.1');
      const handleScrollUp = () => {
        sliderRef.current?.scrollIntoView({ behavior: "smooth" });
        changecolor('0.1');
      };

  const handleScrollDown = () => {
    if (currentIndex < sectionRefs.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      sectionRefs[newIndex].current.scrollIntoView({ behavior: "smooth" });
      changecolor('0.9');
    }
  };

    
      const handleDotsPage = () => {
        setopenDots(!openDots);
        setShowSearch(false)
        setshowcarrer(false);
        setshowStory(false)
        setShowSearch1(false);
        setShowMedia(false);
    }

    const handlesr = () => {
        setsr(!sr);
    }

    const handleSustainability = () => {
        setSustainability(!Sustainability);
    }

    const handleshareopen = () => {
        setshareopen(!shareopen);
    }
    const handlecreaditopen = () => {
        setcreditcardopen(!creaditcardopen);
    }
    const handleOpenFunction = () => {
        setopen(!open);
    }


    const handleInvestor_gf = () => {
        setgf(!gf);
    }

    const handleMedia = () => {
        setShowMedia(!showMedia);
        setInvestor(false);
        setshowStory(false);
        setShowSearch1(false);
        setShowSearch(false);
        setshowcarrer(false);
        setShowSearch(false);
        setopenDots(false);
    }
    const handleInvestor = () => {
        setInvestor(!showInvestor);
        setshowStory(false);
        setShowSearch1(false);
        setShowSearch(false);
        setshowcarrer(false)
        setShowMedia(false);
        setShowSearch(false);
        setopenDots(false);
    }
    const handlestory = () => {
        setshowStory(!showStory);
        setShowSearch1(false);
        setShowSearch(false);
        setInvestor(false)
        setshowcarrer(false);
        setShowSearch(false);
        setopenDots(false);
    }
    const handleToggle = () => {
        setShowSearch(!showSearch);
        setShowSearch1(false)
        setshowcarrer(false)
        setopenDots(false)
        setshowStory(false)
        setShowMedia(false)

    };
    const toggle_Healthcare_btn = () => {
        setShowSearch1(!showSearch1);
        setShowSearch(false)
        setshowcarrer(false)
        setInvestor(false)
        setShowSearch(false);
        setopenDots(false);
        setshowStory(false)
    }
    const handleCarrer = () => {
        setshowcarrer(!showcarrer);
        setShowSearch(false)
        setShowMedia(false)
        setInvestor(false)
        setShowSearch1(false)
        setShowSearch(false);
        setopenDots(false);
    }

    const library = [
        {
            img: "https://tse2.mm.bing.net/th/id/OIP.FUt5C5L0bVI_wVdln0s5MQHaD3?pid=ImgDet&w=474&h=247&rs=1&o=7&rm=3",
            p: "Fresenius Company Presentation ",
            footer: "(PDF, 7.44 MB)"
        },
        {
            img: "https://www.fresenius.com/sites/default/files/2024-06/370px_Company_Presentation_2024.jpg",
            p: "Investor Relations Company Presentation ",
            footer: "(PDF, 3.97 MB)"
        },
        {
            img: "https://www.fresenius.com/sites/default/files/2025-02/370px_Annual%20Report_24_0.png",
            p: "Annual Report 2024 (IFRS)",
            footer: " (PDF, 11.26 MB)"
        },
        {
            img: "https://www.fresenius.com/sites/default/files/2022-03/100_years.png",
            p: "100 Years of Fresenius ",
            footer: "(PDF, 6.25 MB)"
        },
        {
            img: "https://www.fresenius.com/sites/default/files/2022-03/525px_Social_Media_Guidelines_en_rdax_240x240_85.jpg",
            p: "Social Media Guidelines ",
            footer: "(PDF, 1.97 MB)"
        }
    ]

    const totla_library = library.length;
    const maxScroll = totla_library - 4; // shows only 4 cards fully at a time

    const [RightVisibility, setRightVisibility] = useState(false);
    const [LeftVisibility, setLeftVisibility] = useState(false);
    const [Rcolor, Rsetcolor] = useState('0.5');
    const [Lcolor, Lsetcolor] = useState('0.9');

    const [newsPosition, setNewsPosition] = useState(0);

    const cardWidth = 350;
    const gap = 20;
    const visibleColumns = 3;
    const totalCards = 11;
    const maxPosition = totalCards - visibleColumns;

    const [dot1, setdot1] = useState('0.9');
    const [dot2, setdot2] = useState('');
    const [dot3, setdot3] = useState('');
    const [dot4, setdot4] = useState('');

    const [scrollVisible1, setscrollVisible1] = useState(0.4);
    const [scrollVisible2, setscrollVisible2] = useState(0.9);
    const [scrollVisible3, setscrollVisible3] = useState(0.4);
    const [scrollVisible4, setscrollVisible4] = useState(0.9);
    const [scrollVisible5, setscrollVisible5] = useState(0.4);
    const [scrollVisible6, setscrollVisible6] = useState(0.9);
    const [scrollVisible7, setscrollVisible7] = useState(0.9);
    const [scrollVisible8, setscrollVisible8] = useState(0.9);
    const [scrollVisible9, setscrollVisible9] = useState(0.9);
    const handleRightNews = () => {
        setNewsPosition(prev => {
            const next = Math.min(prev + 3, maxPosition);

            setdot1(next === 0 ? '0.9' : '0.3');
            setdot2(next === 3 ? '0.9' : '0.3');
            setdot3(next === 6 ? '0.9' : '0.3');
            setdot4(next === 8 ? '0.9' : '0.3');

            setscrollVisible1(next === 0 ? '0.3' : ''); //card4
            if (next == 3) {
                setscrollVisible2('0.4');
            }
            else if (next == 6) {
                setscrollVisible4('0.4');
                setscrollVisible3('0.9');
            }
            else if (next == 8) {
                setscrollVisible5('0.9');
                setscrollVisible6('0.4')
            }

            return next;
        });
    };

    const handleLeftNews = () => {
        setNewsPosition(prev => {
            const prev_dot = Math.max(prev - 3, 0)
            setdot1(prev_dot === 0 ? '0.9' : '0.3');
            setdot2(prev_dot === 2 ? '0.9' : '0.3');
            setdot3(prev_dot === 5 ? '0.9' : '0.3');
            setdot4(prev_dot === 8 ? '0.9' : '0.3');

            if (prev_dot == 5) {
                setscrollVisible7('0.4');
                setscrollVisible6('0.9');
                setscrollVisible4('0.9');
                setscrollVisible8('0.4')
            }
            else if (prev_dot == 2) {
                setscrollVisible4('0.4');
                setscrollVisible8('0.9')
                setscrollVisible2('0.9');
                setscrollVisible9('0.4');
            }
            else if (prev_dot == 0) {
                setscrollVisible9('0.9');
                setscrollVisible1('0.4');
            }
            return prev_dot
        })
    };





    const handleRightClick = () => {
        setOffset(prev => {
            const newOffset = Math.min(prev + 1, maxScroll);

            // Hide right overlay, show left overlay
            setRightVisibility(true);
            setLeftVisibility(1);
            Rsetcolor('0.9');
            Lsetcolor('0.5')
            return newOffset;
        });
    };

    const handleLeftClick = () => {
        setOffset(prev => {
            const newOffset = Math.max(prev - 1, 0);

            // Show right overlay, hide left overlay
            setRightVisibility(false);
            setLeftVisibility(0);
            Lsetcolor('0.9');
            Rsetcolor('0.5')
            return newOffset;
        });
    };

    const [lang, setLang] = useState("en");
    const handleTranslet = () => {
        translatePage(lang === 'en' ? 'de' : 'en');
    }
    const translatePage = (lang) => {
        const select = document.querySelector(".goog-te-combo");
        if (select) {
            select.value = lang;
            select.dispatchEvent(new Event("change")); // trigger Google Translate
        }
        setLang(lang);
    };

    // const VisibleCards = 
    const [news, setnews] = useState(0);
    const [news1, setnews1] = useState(0);
    const [news2, setnews2] = useState(0);
    const [news3, setnews3] = useState(0);
    const [news4, setnews4] = useState(0);
    const [news5, setnews5] = useState(0);
    const [news6, setnews6] = useState(0);
    const [news7, setnews7] = useState(0);
    const [news8, setnews8] = useState(0);
    const [news10, setnews10] = useState(0);
    const handlenews = () => {
        setnews((prev) => (prev + 1) % newsList.length);
    }
    const handlenews1 = () => {
        setnews1((prev) => (prev + 1) % newsList1.length);
    }
    const handlenews2 = () => {
        setnews2((prev) => (prev + 1) % newsList2.length);
    }
    const handlenews3 = () => {
        setnews3((prev) => (prev + 1) % newsList3.length);
    }
    const handlenews4 = () => {
        setnews4((prev) => (prev + 1) % newsList4.length);
    }

    const handlenews5 = () => {
        setnews5((prev) => (prev + 1) % newsList5.length);
    }

    const handlenews6 = () => {
        setnews6((prev) => (prev + 1) % newsList6.length);
    }

    const handlenews7 = () => {
        setnews7((prev) => (prev + 1) % newsList7.length);
    }

    const handlenews8 = () => {
        setnews8((prev) => (prev + 1) % newsList8.length);
    }

    const handlenews10 = () => {
        setnews10((prev) => (prev + 1) % newsList10.length);
    }


    const [i, setIndex] = useState(0);
    const handleNext = () => {
        setIndex((i + 1) % images.length);
    };

    const handlePrev = () => {
        setIndex((i - 1 + images.length) % images.length);
    };




    for (let j = 0; j < image_visibility; j++) {
        visibleItems.push(images[(i + j) % images.length])
    }

    useEffect(() => {
        if (showStory) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto"; // cleanup
        };
    }, [showStory]);
    useEffect(() => {
        if (showInvestor) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto"; // cleanup
        };
    }, [showInvestor]);

    useEffect(() => {
        if (showSearch1) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto"; // cleanup
        };
    }, [showSearch1]);

    useEffect(() => {
        if (showMedia) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto"; // cleanup
        };
    }, [showMedia]);


    useEffect(() => {
        if (showSearch) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto"; // cleanup
        };
    }, [showSearch]);

    useEffect(() => {
        if (showMedia) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto"; // cleanup
        };
    }, [showMedia]);

    useEffect(() => {
        if (showInvestor) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto"; // cleanup
        };
    }, [showInvestor]);

    useEffect(() => {
        if (showcarrer) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto"; // cleanup
        };
    }, [showcarrer]);

    useEffect(() => {
        if (showMedia) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto"; // cleanup
        };
    }, [showMedia]
    );

    return (
        <div >


            {/* Nav Bar */}
            <nav>
                <div className="nav-parent">
                    <div className="nav-child1">
                        <div className="task">
                            <img src="https://tse4.mm.bing.net/th/id/OIP.266XO0GDgFSmrpM-nXncggHaBJ?rs=1&pid=ImgDetMain&o=7&rm=3" />
                        </div>
                    </div>
                    <div className="nav-child2">
                        <ul>
                            <button onClick={toggle_Healthcare_btn}>The Healthcare Group</button>
                            <button onClick={handlestory}>Stories</button>
                            <button onClick={handleInvestor}>Investors</button>
                            <button onClick={handleMedia}>Media</button>
                            <button onClick={handleCarrer}>Careers</button>
                        </ul>
                    </div>
                    <div className="nav-child3">
                        <div className="icon-bar">
                            <button onClick={handleToggle}> <i className="fa fa-search"></i></button>
                            <button onClick={handleTranslet}> <i className="fa fa-language"></i></button>
                            <button onClick={handleDotsPage} className="dot-icon">
                                <i className="fa fa-ellipsis-h"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Search page */}
            <div className={`Search ${showSearch ? 'show' : ''}`}>
                <input type="text" placeholder="Search..." />
                <button><i className="fa fa-search"></i></button>
            </div>

            {/* Dots page */}
            {
                openDots && (
                    <div className="share-services">
                        <div className="section">
                            <span className="title">Share</span>
                            <a href="https://www.facebook.com/">
                                <i className="fab fa-facebook-f"></i> <span>Facebook</span>
                            </a>
                            <a href="https://x.com/?logout=1754999690200">
                                <i className="fab fa-twitter"></i> <span>Twitter</span>
                            </a>
                            <a href="https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=https%3A%2F%2Fwww.fresenius.com%2Findex">
                                <i className="fab fa-linkedin-in"></i> <span>LinkedIn</span>
                            </a>
                            <a href="https://login.xing.com/?locale=en&dest_url=https%3A%2F%2Fwww.xing.com%2Fsocial%2Fshare%2Fspi%3Furl%3Dhttps%253A%252F%252Fwww.fresenius.com%252Findex">
                                <i className="fab fa-xing"></i>
                                <span>Xing</span></a>
                            <a href="mailto:someone@example.com">
                                <i className="fas fa-envelope"></i> <span>E-mail</span></a>
                        </div>

                        <div className="section">
                            <span className="title">Services</span>
                            <button onClick={() => window.print()}>
                                <a href="" >
                                    <i className="fas fa-print"></i> <span>Print</span>
                                </a>
                            </button>
                            <a href="https://www.fresenius.com/contact"><i className="fas fa-user"></i> <span>Contact</span></a>
                            <a href="https://www.fresenius.com/RSSFeeds"><i className="fas fa-rss"></i> <span>RSS</span></a>
                        </div>
                    </div>
                )
            }

            {/* Media */}

            <div className={`media ${showMedia ? 'show' : ''}`}>
                <div className="m-c1">
                    <a href="https://www.fresenius.com/media"><h1>Media</h1></a>
                    <div className="news-parent">
                        <div className="news-child1">
                            <a href="https://www.fresenius.com/news"><h2>News</h2></a>
                            <hr></hr>
                        </div>
                        <div className="news-child2">
                            <a href="https://www.fresenius.com/media-contacts"><h2>Contacts</h2></a>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="news-parent">
                        <div className="news-child1">
                            <a href="https://www.fresenius.com/calendar"><h2>Calendar</h2></a>
                            <hr></hr>

                        </div>
                        <div className="news-child2">
                            <a href="https://www.fresenius.com/media-center"><h2 className="media-center">Media Center</h2></a>
                            <hr></hr>

                        </div>
                    </div>
                </div>
                <div className="hellow"
                    style={{
                        backgroundColor: "white",
                        display: "flex",
                        padding: "30px 0 0 150px",
                        gap: "80px",
                        textAlign: "left"
                    }}
                >

                    <div>
                        <img src=" https://www.fresenius.com/sites/default/files/2025-06/Anke%20klein.png" height="95%" />
                    </div>
                    <div className="hi"
                        style={{
                            // border: "2px solid black",
                            padding: "0 0 0 0",
                            fontSize: "small"
                        }}
                    >
                        <h2
                            style={{
                                color: "navy",
                                fontWeight: "300px",
                                textTransform: "uppercase",
                                fontSize: "18px"
                            }}
                        >Contact</h2>
                        <hr></hr>
                        <p style={{ color: "black", fontSize: "17px", fontWeight: "400px", }}>Anke Schmidt</p>
                        <p className="para" style={{ color: "black", fontSize: "15px", fontWeight: "400px" }}>
                            Chief Communications Officer<br></br>
                            T +49 (0) 6172 686 495
                            <a href="mailto:someone@example.com"
                                style={{
                                    // border:"2px solid black",
                                    marginRight: "25%",
                                    color: "navy",
                                }}
                            >
                                <b> anke.schmidt@fresenius.com</b>
                            </a>
                        </p>

                    </div>
                </div>


                {/* <div className="footer">
                    <div>
                        <img src=" https://www.fresenius.com/sites/default/files/2025-06/Anke%20klein.png" height="60%" />
                    </div>
                    <div className="footer-c">
                        <h2>Contact</h2>
                        <hr></hr>
                        <p style={{ color: "grey" }}>Anke Schmidt</p>
                        <p>Chief Communications Officer<br></br> T +49 (0) 6172 686 495<a href="mailto:someone@example.com">anke.schmidt@fresenius.com</a></p>

                    </div>
                </div> */}
            </div>


            {/* the healthcare group */}
            <div className={`healthcare ${showSearch1 ? 'show' : ''}`}>
                <div className={`innerpage ${fw ? 'show' : ''}`}>

                    <button className="btn" onClick={handlefielddwork}>❮</button>
                    <a className="fow-heading" href="https://www.fresenius.com/fields-of-work">
                        <h1>Fields of Work</h1>
                    </a>
                    <hr style={{ marginLeft: "20%", width: "55%" }}></hr>
                    <div className="fow-bottom-side">
                        {/* colo1 */}
                        <div className="fow-colo1">
                            <a href="https://www.fresenius.com/biosimilars"
                                style={{
                                    //    border:"2px solid black",
                                    marginLeft: "40%",
                                    width: "300px",
                                    padding: "0 0 0 0"
                                }}

                            >
                                <p
                                    style={{
                                        // border:"2px solid black",
                                        fontWeight: "bold",
                                        fontSize: "15px",
                                        marginRight: "200px"
                                    }}

                                >Biosimilars</p>
                            </a>
                            <hr style={{ marginLeft: "40%", width: "90%", marginTop: "20px" }}></hr>

                            <a href="https://www.fresenius.com/infusion-and-nutrition-systems"
                                style={{
                                    //    border:"2px solid black",
                                    marginLeft: "40%",
                                    width: "300px",
                                    padding: "0 0 0 0"
                                }}

                            >
                                <p
                                    style={{
                                        // border:"2px solid black",
                                        fontWeight: "bold",
                                        fontSize: "15px",
                                        marginRight: "70px"
                                    }}

                                >Infusion and Nutrition Systems</p>
                            </a>
                            <hr style={{ marginLeft: "40%", width: "90%", marginTop: "20px" }}></hr>
                            <a href="https://www.fresenius.com/iv-generics-and-fluids"
                                style={{
                                    //    border:"2px solid black",
                                    marginLeft: "40%",
                                    width: "300px",
                                    padding: "0 0 0 0"
                                }}

                            >
                                <p
                                    style={{
                                        // border:"2px solid black",
                                        fontWeight: "bold",
                                        fontSize: "15px",
                                        marginRight: "150px"
                                    }}

                                >IV Generics & Fluids</p>
                            </a>
                            <hr style={{ marginLeft: "40%", width: "90%", marginTop: "20px" }}></hr>
                        </div>
                        <div className="fow-colo1">
                            <a href="https://www.fresenius.com/medical-nutrition"
                                style={{
                                    //    border:"2px solid black",
                                    marginLeft: "40%",
                                    width: "300px",
                                    padding: "0 0 0 0"
                                }}

                            >
                                <p
                                    style={{
                                        // border:"2px solid black",
                                        fontWeight: "bold",
                                        fontSize: "15px",
                                        marginRight: "170px"
                                    }}

                                >Clinical Nutrition</p>
                            </a>
                            <hr style={{ marginLeft: "40%", width: "70%", marginTop: "20px" }}></hr>
                            <a href="https://www.fresenius.com/transfusion-medicine-and-cell-therapies"
                                style={{
                                    //    border:"2px solid black",
                                    marginLeft: "40%",
                                    width: "400px",
                                    textAlign: "left",
                                    padding: "0 0 0 0"
                                }}

                            >
                                <p
                                    style={{
                                        // border:"2px solid black",
                                        fontWeight: "bold",
                                        fontSize: "15px",
                                        marginRight: "150px"
                                    }}

                                >Transfusion Medicine & Cell Therapies</p>
                            </a>
                            <hr style={{ marginLeft: "40%", width: "70%" }}></hr>
                            <a href="https://www.fresenius.com/inpatient-and-outpatient-treatments"
                                style={{
                                    //    border:"2px solid black",
                                    marginLeft: "40%",
                                    width: "500px",
                                    padding: "0 0 0 0"
                                }}

                            >
                                <p
                                    style={{
                                        // border:"2px solid black",
                                        fontWeight: "bold",
                                        fontSize: "15px",
                                        marginRight: "230px"
                                    }}

                                >Inpatient and Outpatient Treatments</p>
                            </a>
                            <hr style={{ marginLeft: "40%", width: "70%", marginTop: "20px" }}></hr>
                        </div>
                        <div className="fow-colo1">
                            <a href="https://www.fresenius.com/health-prevention"
                                style={{
                                    //    border:"2px solid black",
                                    marginLeft: "40%",
                                    width: "400px",
                                    textAlign: "left",
                                    padding: "0 0 0 0"
                                }}

                            >
                                <p
                                    style={{
                                        // border:"2px solid black",
                                        fontWeight: "bold",
                                        fontSize: "15px",
                                        marginRight: "150px"
                                    }}

                                >Occupational Healthcare and Prevention</p>
                            </a>
                            <hr style={{ marginLeft: "40%", width: "70%" }}></hr>
                        </div>
                    </div>
                </div>


                <div className={`innerpage ${Sustainability ? 'show' : ''}`}>
                    <div className="inner-content">
                        <a href="https://www.fresenius.com/sustainability">
                            <p>Sustainability</p></a>
                        <hr />

                    </div>

                    <button className="btn" onClick={handleSustainability}>❮</button>

                    <div className="inner-list">
                        <div>
                            <a className="or" href="https://www.fresenius.com/our-responsibility">
                                <p> Our Responsibility</p>
                            </a>
                            <hr style={{
                                marginLeft: "50px"
                            }} />
                        </div>
                        <div>
                            <a className="paps" href="https://www.fresenius.com/patient-and-product-safety">
                                <p>Patient and Product Safety</p></a>
                            <hr style={{
                                marginLeft: "50px"
                            }} />
                        </div>
                        <div>
                            <a className="env" href="https://www.fresenius.com/environment">
                                <p>Environment</p></a>
                            <hr style={{
                                marginLeft: "60px"
                            }} />
                        </div>

                        <div onClick={handlerightbtn} >
                            <a className="sp" href="#">
                                <p> Sustainability Perspectives</p>
                                <button className="rightbtn">❯</button>
                            </a>
                            <hr style={{
                                marginLeft: "50px"
                            }} />
                        </div>
                        <div>
                            <a className="emp" href="https://www.fresenius.com/employees"><p>Employees</p></a>
                            <hr style={{
                                marginLeft: "50px"
                            }} />
                        </div>
                        <div>
                            <a className="sdg" href="https://www.fresenius.com/sustainable-development-goals"><p>Sustainable Development Goals</p></a>
                            <hr style={{
                                marginLeft: "60px"
                            }} />
                        </div>

                        <div>
                            <a className="omst" href="https://www.fresenius.com/material-sustainability-topics">
                                <p>Our Material Sustainability Topics</p></a>
                            <hr style={{
                                marginLeft: "50px"
                            }} />
                        </div>
                        <div>
                            <a className="or" href="https://www.fresenius.com/human-rights"><p>Human Rights</p></a>
                            <hr style={{
                                marginLeft: "50px"
                            }} />
                        </div>
                        <div>
                            <a className="or" href="https://www.fresenius.com/esg-ratings"><p>ESG Ratings</p></a>
                            <hr style={{
                                marginLeft: "60px"
                            }} />
                        </div>

                        <div>
                            <a className="or" href="https://www.fresenius.com/access-to-health-care">
                                <p>Access to Healthcare</p></a>
                            <hr style={{
                                marginLeft: "50px"
                            }} />
                        </div>
                        <div>
                            <a className="dtai" href="https://www.fresenius.com/digital-transformation-and-innovation">
                                <p>Digital Transformation and Innovation</p></a>
                            <hr style={{
                                marginLeft: "50px"
                            }} />
                        </div>
                        <div>
                            <a className="sab" href="https://www.fresenius.com/sustainability-advisory-board"><p>Sustainability Advisory Board</p></a>
                            <hr style={{
                                marginLeft: "60px"
                            }} />
                        </div>
                    </div>

                </div>
                <div className={`innerpage ${mgt ? 'show' : ''}`}>
                    <div className="inner-content">
                        <a href="https://www.fresenius.com/Corporate-Management">Management</a>
                        <hr style={{
                            marginLeft: "50px"
                        }} />

                    </div>

                    <button className="btn" onClick={handlemgt}>❮</button>

                    <div className="inner-list">

                        {/* coloumn 1 */}
                        <div >
                            <div className="c1" style={{ marginTop: "0%" }}>
                                <a href="https://www.fresenius.com/management-board" style={linkStyle}>Management Board
                                </a>
                                <hr />
                            </div>
                            <div className="c1" style={{ marginTop: "6%" }}>
                                <a href="https://www.fresenius.com/supervisory-board" style={linkStyle}>Supervisory Board</a>
                                <hr />
                            </div>


                        </div>
                        {/* coloumn2 */}
                        <div>
                            <div className="c1" style={{ marginTop: "0%" }}>
                                <a href="https://www.fresenius.com/corporate-governance" style={linkStyle}>Corporate Governance</a>
                                <hr />
                            </div>
                            <div className="c1" style={{ marginTop: "6%" }}>
                                <a href="https://www.fresenius.com/compliance"
                                    style={linkStyle}>Compliance</a>
                                <hr />
                            </div>

                        </div>
                    </div>
                </div>
                {/* Sustainability Perspectives */}
                <div className={`innerpage ${right ? 'show' : ''}`}>

                    <button className="btn" onClick={handlerightbtn}>❮</button>

                    <h2 className="sustainability">
                        <a href="https://www.fresenius.com/sustainability-perspectives">Sustainability Perspectives </a>
                    </h2>
                    <hr style={{ width: "70%" }}></hr>

                    <div className="sustainability_two_colo">
                        <div className="two_colo_1">

                            <a href="https://www.fresenius.com/interview-mapi">
                                <p>
                                    Sustainability at Fresenius: Three questions for Mapi Henríquez de Armas, Director Sustainability at Quirónsalud
                                </p>
                            </a>
                            <hr></hr>
                            <a href="https://www.fresenius.com/sustainability-board-friedberg">
                                <p>
                                    First meeting of the year for the Sustainability Advisory Board in Friedberg
                                </p>
                            </a>
                            <hr></hr>
                        </div>
                        <div className="two_colo_2">
                            <a href="https://www.fresenius.com/node/7116">
                                <p>
                                    Exploring human-centered care at Quirónsalud
                                </p>
                            </a>
                            <hr style={{ marginTop: "50px" }}></hr>
                            <a href="https://www.fresenius.com/interview-sarah-tix">
                                <p>
                                    Interview with Sarah Tix, Head of Group Sustainability
                                </p>
                            </a>
                            <hr style={{ marginTop: "30px" }}></hr>
                        </div>
                    </div>
                </div>



                <div className="h-c1"><a href="https://www.fresenius.com/the-healthcare-group"><h1>The Healthcare Group</h1></a>
                    <hr style={{ color: "grey", width: "63%" }}></hr>
                    <div className="inner" >
                        <h2 className="inner1">
                            {/* <span style={{ marginRight: "20px" }}> */}
                            <a href="https://www.fresenius.com/group-overview">
                                Group Overview
                            </a>
                            {/* </span> */}
                            <hr style={{ color: "grey", width: "90%", marginLeft: "38px" }}></hr>

                        </h2>

                        <h2 onClick={handlefielddwork} className="inner2"><span>Fields of Work</span>
                            <span
                                style={{
                                    border: "2px solid navy",
                                    borderRadius: "50%",
                                    width: "20%",
                                    padding: "2.5px",
                                    marginLeft: "62%"
                                }}

                            >❯</span>
                            <hr style={{ color: "grey", width: "100%", marginRight: "50px" }}></hr>
                        </h2>

                        <h2 className="inner3">
                            <a href="https://www.fresenius.com/else-kr%C3%B6ner-fresenius-foundation">Else Kröner-Fresenius Foundation    </a>
                            <hr style={{ color: "grey", width: "100%", marginLeft: "40px" }}></hr>
                        </h2>

                    </div>

                </div>
                <div className="h-c1">
                    <div className="inner">
                        <h2 className="inner1">
                            {/* <span style={{ marginRight: "20px" }}> */}
                            <a href="https://www.fresenius.com/fresenius-kabi">
                                Fresenius Kabi

                            </a>
                            {/* </span> */}
                            <hr style={{ color: "grey", width: "90%", marginLeft: "47px" }}>

                            </hr>

                        </h2>
                        <h2 className="inner2">
                            <a href="https://www.fresenius.com/worldwide">Worldwide</a>
                            <hr style={{ color: "grey", width: "100%", marginRight: "50px" }}></hr>

                        </h2>


                        <h2 className="inner31">
                            <a href="https://www.fresenius.com/calendar">
                                Calendar</a>
                            <hr style={{ color: "grey", width: "100%", marginLeft: "1px" }}></hr>
                        </h2>
                    </div>
                </div>
                <div className="h-c1">
                    <div className="inner">
                        <h2 className="inner1">

                            <a href="https://www.fresenius.com/fresenius-helios">Fresenius Helios</a>
                            <hr style={{ color: "grey", width: "90%", marginLeft: "36px" }}></hr>

                        </h2>
                        <h2 className="inner2" onClick={handleSustainability}><span>Sustainability</span>
                            <span
                                style={{
                                    border: "2px solid navy",
                                    borderRadius: "50%",
                                    width: "20%",
                                    padding: "2.5px",
                                    marginLeft: "62%"
                                }}

                            >❯</span>
                            <hr style={{ color: "grey", width: "100%", marginRight: "50px" }}></hr>
                        </h2>
                        <h2 className="inner34">
                            <a href="https://www.fresenius.com/contact" >Contacts</a>
                            <hr style={{ color: "grey", width: "100%", marginLeft: "0px" }}></hr>
                        </h2>
                    </div>

                </div>
                <div className="h-c1">
                    <div className="inner">

                        <h2 className="inner4" onClick={handlemgt}><span
                            style={{
                                // border:"2px solid black",
                                marginLeft: "23%"
                            }}

                        >Management</span>
                            <span
                                style={{
                                    border: "2px solid navy",
                                    borderRadius: "50%",
                                    padding: "2.5px",
                                    marginLeft: "42%"
                                }}

                            >❯</span>
                            <hr style={{ color: "grey", width: "100%", marginLeft: "40px" }}></hr>
                        </h2>
                        <h2 className="inner33"> <a href="https://www.fresenius.com/history"> History</a>
                            <hr style={{ color: "grey", width: "48%", marginLeft: "55px" }}></hr>
                        </h2>
                    </div>

                </div>

                <div className={`content1 ${right ? 'show' : ''}`}>
                    <div className="below-img1">
                        <div className="below">
                            <a style={{ textDecoration: "none" }} href="https://www.fresenius.com/fresenius-kabi" >  <h2 className="first-color"> Fresenius Kabi
                                <hr style={{ color: "grey", width: "250px" }} />
                                <p >Products for critically and chronically ill patients</p>
                            </h2>
                            </a>
                        </div>
                        <div className="below">
                            <a style={{ textDecoration: "none" }} href="https://www.fresenius.com/fresenius-helios">  <h2 className="second-color">Fresenius Helios
                                <hr style={{ color: "grey", width: "250px" }} />
                                <p >Europe's leading private healthcare provider</p>
                            </h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* stories */}
            <div className={`story-parent ${showStory ? 'show' : ''}`}>

                <h2>  <a href="https://www.fresenius.com/node/62">
                    Stories</a></h2>
                <div className="stry-img">
                    {/* colo1 */}
                    <div>
                        <a href="https://www.fresenius.com/node/62">
                            <div className="img1">
                                <img src="https://www.fresenius.com/sites/default/files/2025-04/Krebs%20QS%23.png"
                                />
                                <p>How Fresenius employees help people with cancer in every phase of the disease</p>
                            </div>
                        </a>
                        <a href="https://www.fresenius.com/adc-medicines">
                            <div className="img1">
                                <img src="https://www.fresenius.com/sites/default/files/2024-08/richtig.jpg"
                                />
                                <p>CAR T cell therapy: Innovative therapy with the aid of genetically modified cells</p>
                            </div>
                        </a>
                        <a href="https://www.fresenius.com/sustainably-anesthetized">
                            <div className="img1">
                                <img src="https://www.fresenius.com/sites/default/files/2023-09/1600px_HEL-hkbs-Narkosegas-Recycling-14x21-print-6K1A9327_ji.jpg"
                                />
                                <p>Sustainably anesthetized</p>
                            </div>
                        </a>
                    </div>
                    {/* colo2 */}
                    <div>
                        <a href="https://www.fresenius.com/adc-medicines">
                            <div className="img1">
                                <img src="https://www.fresenius.com/sites/default/files/2025-01/1600px_HEL-hkbb-brustzentrum-mammograpie-gespraech-team-Helios-Kliniken.jpg" />
                                <p >“The new ADC medicines represent a real revolution in treatment.”</p>
                            </div>
                        </a>
                        <a href="https://www.fresenius.com/augmented-operation">
                            <div className="img1">
                                <img src="https://www.fresenius.com/sites/default/files/2024-08/1600px_IMG_4302_ji.jpg"
                                />
                                <p>“We combine various innovative solutions to achieve better patient outcomes step by step.”</p>
                            </div>
                        </a>
                        <a href="https://www.fresenius.com/a-robot-at-the-operating-table">
                            <div className="img1">
                                <img src="https://www.fresenius.com/sites/default/files/2021-09/1600px_Roboter%20von%20vorne_2_scharf.jpg" />
                                <p>A robot at the operating table
                                </p>
                            </div>
                        </a>
                    </div>
                    {/* colo3 */}
                    <div>

                        <a href="https://www.fresenius.com/car-t-cell-therapy-revolutionary-chances-of-a-cure">
                            <div className="img1">
                                <img src="https://www.fresenius.com/sites/default/files/2024-11/AdobeStock_809410819_1600px.jpg"
                                />
                                <p>CAR-T cell therapy: Revolutionary chances of a cure, but costs still too high
                                </p>
                            </div>
                        </a>
                        <a href="https://www.fresenius.com/interview-immunotherapies">
                            <div className="img1">
                                <img src="https://www.fresenius.com/sites/default/files/2024-07/1600px_AdobeStock_408465554_1200px_ji.jpg" />
                                <p>"Immunotherapies: Boosting Cures and more Patient Wellbeing"
                                </p>
                            </div>
                        </a>
                        <a href="https://www.fresenius.com/growing-up-with-parenteral-nutrition">
                            <div className="img1">
                                <img src="https://www.fresenius.com/sites/default/files/2021-12/1600px_Fresenius-Kabi_Swiss-Parenteral-Nutrition-Story_ji2.jpg" />
                                <p>Growing up with parenteral nutrition
                                </p>
                            </div>
                        </a>
                    </div>
                    {/* colo4 */}
                    <div>
                        <a href="https://www.fresenius.com/lovo-and-cue-cell-processing-systems">
                            <div className="img1">
                                <img src="https://www.fresenius.com/sites/default/files/2024-11/Lovo2_1600px_ji.jpg"
                                />
                                <p>“The flexibility of our Lovo and Cue cell processing systems was the key to success!”
                                </p>
                            </div>
                        </a>
                        <a href="https://www.fresenius.com/hope-gives-hope">
                            <div className="img1">
                                <img src="https://www.fresenius.com/sites/default/files/2023-12/1600%20hope%20stage_1.jpg" />
                                <p >HOPE gives hope
                                </p>
                            </div>
                        </a>
                        <a href="https://www.fresenius.com/from-a-local-pharmacy-to-a-global-corporation">
                            <div className="img1">
                                <img src="https://www.fresenius.com/sites/default/files/2021-12/stage_4_1600%20%281%29.jpg" />
                                <p >From a local pharmacy to a global corporation
                                </p>
                            </div>
                        </a>

                    </div>
                    <div className="foooo_123">
                        <p>→ Archive "Stories"</p>
                    </div>
                </div>

            </div>

            {/* Investors */}
            <div className={`healthcare ${showInvestor ? 'show' : ''}`}>
                <div className={`inv ${gf ? 'show' : ''}`}>
                    <div className="inv1">
                        <div className="inv1s">
                            <button className="left" onClick={handleInvestor_gf}>❮</button>
                            <a className="gf" href="https://www.fresenius.com/group-figures">
                                Group Figures
                            </a>
                            <hr style={{ marginLeft: "30px" }}></hr>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "100px",
                                }}
                            >

                                <div
                                    style={{
                                        // border:"2px solid black",
                                        width: "400px"
                                    }}
                                >
                                    <a href="https://www.fresenius.com/alternative-performance-measures"
                                        style={{
                                            padding: "20px 0 10px 0",
                                            fontWeight: "600",
                                            color: "navy",
                                            width: "400px",
                                            // border:"2px solid black"
                                        }}
                                    >
                                        <p
                                            style={{
                                                // border:"2px solid black",
                                                width: "400px",
                                                marginLeft: "740px"
                                            }}
                                        > Alternative Performance Measures</p>
                                    </a>
                                    <hr style={{ marginLeft: "30px", width: "100%" }}></hr>
                                </div>
                                <div
                                    style={{
                                        // border: "2px solid black"
                                    }}

                                >
                                    <a href="https://www.fresenius.com/interactive-tool"
                                        style={{
                                            padding: "20px 0 10px 0",
                                            fontWeight: "600",
                                            color: "navy",
                                            // border: "2px solid black"
                                        }}
                                    >
                                        <p
                                            style={{
                                                width: "300px",
                                                // border: "2px solid black"
                                            }}
                                        >Interactive Tool</p>
                                    </a>
                                    <hr style={{ marginLeft: "30px", width: "28%" }}></hr>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className={`inv ${open ? 'show' : ''}`}>
                    <div className="inv1">
                        <button className="left" onClick={handleOpenFunction}>❮</button>
                        <h2 style={{ color: "navy", marginLeft: "25px" }}>Strategy & Outlook</h2>
                        <hr style={{ marginLeft: "25px" }}></hr>
                        <div className="inv1-c">
                            <div>
                                <h2 style={{ color: "navy", fontSize: "large" }}>
                                    <a>Goals and Strategy</a>
                                </h2>
                                <hr style={{ width: "160%", marginLeft: "30px" }}></hr>
                            </div>
                            <div>
                                <h2 style={{ color: "navy", fontSize: "large" }}>
                                    <a>Group Structure</a>
                                </h2>
                                <hr style={{ width: "160%", marginLeft: "30px" }}></hr>
                            </div>
                        </div>
                        <div className="inv1-p">
                            <div>
                                <h2 style={{ color: "navy", fontSize: "large" }}>
                                    <a>Financial Performance Indicators</a>
                                </h2>
                                <hr style={{ width: "100%", marginLeft: "30px" }}></hr>
                            </div>
                            <div>
                                <h2 style={{ color: "navy", fontSize: "large" }}>
                                    <a>Outlook</a>
                                </h2>
                                <hr style={{ width: "270%", marginLeft: "30px" }}></hr>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className={`inv ${shareopen ? 'show' : ''}`}
                    style={{
                        // border: "2px solid black",
                        width: "80%",
                        marginLeft: "5%",
                        height: "36%"
                    }}
                >
                    <button className="left" onClick={handleshareopen} style={{ marginRight: "10px" }}>❮</button>
                    <h3
                        style={{ color: "navy", textAlign: "left", fontSize: "25px" }}
                    >
                        <a href="https://www.fresenius.com/share"
                            style={{
                                color: "navy",
                                marginRight: "100%",
                                padding: "0  0 0 0"
                            }}
                        > Share
                        </a>
                        <hr style={{ color: "grey", width: "60%", marginRight: "205%" }}></hr>
                    </h3>

                    <div
                        style={{
                            display: "flex",
                            gap: "15%",
                            padding: "0  0 0 0"
                        }}
                    >
                        <div>
                            <h3
                                style={{ color: "navy" }}
                            >
                                <a href="https://www.fresenius.com/key-data"
                                    style={{
                                        color: "navy",
                                        marginLeft: "0%",
                                        // border:"2px solid black",
                                        fontSize: "17px",
                                        width: "100px",
                                        textAlign: "left"
                                    }}
                                > Key Data
                                </a>
                                <hr style={{ color: "grey", width: "200%", marginRight: "10%" }}></hr>

                            </h3>
                            <h3
                                style={{ color: "navy" }}
                            >
                                <a href="https://www.fresenius.com/share-price-center"
                                    style={{
                                        color: "navy",
                                        marginLeft: "0%",
                                        // border:"2px solid black",
                                        fontSize: "17px",
                                        width: "100px",
                                        textAlign: "left"
                                    }}
                                > Share Price
                                </a>
                                <hr style={{ color: "grey", width: "200%", marginRight: "10%" }}></hr>

                            </h3>
                            <h3
                                style={{ color: "navy" }}
                            >
                                <a href="https://www.fresenius.com/dividends"
                                    style={{
                                        color: "navy",
                                        marginLeft: "0%",
                                        // border:"2px solid black",
                                        fontSize: "17px",
                                        width: "100px",
                                        textAlign: "left"
                                    }}
                                > Dividends
                                </a>
                                <hr style={{ color: "grey", width: "200%", marginRight: "10%" }}></hr>

                            </h3>
                        </div>
                        <div>
                            <h3
                                style={{ color: "navy" }}
                            >
                                <a href="https://www.fresenius.com/total-return-calculator"
                                    style={{
                                        color: "navy",
                                        marginLeft: "0%",
                                        // border:"2px solid black",
                                        fontSize: "17px",
                                        width: "200px",
                                        textAlign: "left"
                                    }}
                                > Total Return Calculator
                                </a>
                                <hr style={{ color: "grey", width: "140%", marginRight: "10%" }}></hr>

                            </h3>
                            <h3
                                style={{ color: "navy" }}
                            >
                                <a href="https://www.fresenius.com/analysts-and-consensus"
                                    style={{
                                        color: "navy",
                                        marginLeft: "0%",
                                        // border:"2px solid black",
                                        fontSize: "17px",
                                        width: "200px",
                                        textAlign: "left"
                                    }}
                                > Analysts & Consensus
                                </a>
                                <hr style={{ color: "grey", width: "140%", marginRight: "10%" }}></hr>

                            </h3>
                            <h3
                                style={{ color: "navy" }}
                            >
                                <a href="https://www.fresenius.com/shareholder-structure"
                                    style={{
                                        color: "navy",
                                        marginLeft: "0%",
                                        // border:"2px solid black",
                                        fontSize: "17px",
                                        width: "200px",
                                        textAlign: "left"
                                    }}
                                > Shareholder Structure
                                </a>
                                <hr style={{ color: "grey", width: "140%", marginRight: "10%" }}></hr>

                            </h3>

                        </div>
                        <div>
                            <h3
                                style={{ color: "navy" }}
                            >
                                <a href="https://www.fresenius.com/capitalization"
                                    style={{
                                        color: "navy",
                                        marginLeft: "0%",
                                        // border:"2px solid black",
                                        fontSize: "17px",
                                        width: "100px",
                                        textAlign: "left"
                                    }}
                                > Capitalization
                                </a>
                                <hr style={{ color: "grey", width: "200%", marginRight: "10%" }}></hr>

                            </h3>

                            <h3
                                style={{ color: "navy" }}
                            >
                                <a href="https://www.fresenius.com/adr"
                                    style={{
                                        color: "navy",
                                        marginLeft: "0%",
                                        // border:"2px solid black",
                                        fontSize: "17px",
                                        width: "100px",
                                        textAlign: "left"
                                    }}
                                > ADR
                                </a>
                                <hr style={{ color: "grey", width: "200%", marginRight: "10%" }}></hr>

                            </h3>


                        </div>

                    </div>


                </div>


                {/* 4 */}

                <div className={`inv ${creaditcardopen ? 'show' : ''}`}>
                    <div className="cread1">
                        <button className="left" onClick={handlecreaditopen}>❮</button>
                        <h2 style={{ color: "navy", marginLeft: "25px" }}>
                            <a href="https://www.fresenius.com/credit-relations"
                                style={{
                                    color: "navy",
                                    marginRight: "80%"
                                }}
                            >
                                Credit Relations
                            </a>
                        </h2>
                        <hr style={{ marginLeft: "25px" }}></hr>
                        <div className="inv1-c">
                            <div>
                                <h2 style={{ color: "navy", fontSize: "large" }}>
                                    <a href="https://www.fresenius.com/financing-strategy-and-targets" >Financing Strategy & Targets</a>
                                </h2>
                                <hr style={{ width: "100%", marginLeft: "30px" }}></hr>
                            </div>
                            <div>
                                <h2 style={{ color: "navy", fontSize: "large" }}>
                                    <a href="https://www.fresenius.com/bonds-and-convertible-bonds">Financing Instruments</a>
                                </h2>
                                <hr style={{ width: "100%", marginLeft: "30px" }}></hr>
                            </div>
                            <div>
                                <h2 style={{ color: "navy", fontSize: "large" }}>
                                    <a href="https://www.fresenius.com/rating">Rating</a>
                                </h2>
                                <hr style={{ width: "200%", marginLeft: "30px" }}></hr>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="one-one" >
                    <div className="investor"
                    >
                        <a href="https://www.fresenius.com/investors">
                            <h2>Investors</h2>
                        </a>
                        <hr style={{ color: "grey", width: "80%", marginRight: "18%", marginTop: "0" }}></hr>
                    </div>
                    <div className="investor-box1">
                        <div className="investor-child1">
                            <a href="https://www.fresenius.com/investors-highlights">
                                <h2>Highlights</h2>
                            </a>
                            <hr style={{ width: "270%", marginLeft: "30%" }}></hr>
                        </div>
                        <div className="investor-child2">
                            <a href="https://www.fresenius.com/financial-reports-and-presentations">
                                <h2>Financial Reports & Presentation</h2>
                            </a>
                            <hr style={{ width: "110%", marginLeft: "10%" }}></hr>
                        </div>
                        <div onClick={handleInvestor_gf}
                            className={`investor-child3 ${gf ? 'show' : ''}`}
                        >
                            <div className="colo">
                                <h2 style={{ color: "navy" }}>Group Figures</h2>
                                <button className="circle">❯</button>
                            </div>
                            <hr style={{ width: "100%" }}></hr>
                        </div>
                    </div>

                    <div className="investor-box1">
                        <div className="investor-child4" onClick={handleOpenFunction}>
                            <a><h2>Strategy & Outlook

                                <div className="circle1">❯</div></h2></a>

                            <hr style={{ width: "175%", marginLeft: "30px" }}></hr>
                        </div>
                        <div className="investor-child5">
                            <a href="https://www.fresenius.com/events-and-roadshows"><h2>Events & Roadshows</h2></a>
                            <hr style={{ width: "160%", marginLeft: "15%" }}></hr>
                        </div>
                        <div className="investor-child6"
                            onClick={handlecreaditopen}>
                            <div className="colo">
                                <h2 style={{ color: "navy", width: "180px" }}>Credit Relations</h2>
                                <button className="circle">❯</button>
                            </div>
                            <hr style={{ width: "85%", marginRight: "100px" }}></hr>
                        </div>
                    </div>
                    <div className="investor-box1">
                        <div className="investor-child7" onClick={handleshareopen}>
                            <div className="oops">
                                <h2 style={{ color: "navy", width: "180px" }}>Share</h2>
                                <button className="circle-123">❯</button>
                            </div>
                            <hr style={{ width: "95%", marginLeft: "30px" }}></hr>
                        </div>
                        <div className="investor-child8">
                            <a href="https://www.fresenius.com/ad-hoc-news">
                                <h2>Ad-hoc News</h2>
                            </a>
                            <hr style={{ width: "160%", marginLeft: "80px" }}></hr>
                        </div>
                        <div className="investor-child9">
                            <a href="https://www.fresenius.com/faq"><h2>FAQ
                            </h2>
                            </a>
                            <hr style={{ width: "420%", marginLeft: "30px" }}></hr>
                        </div>
                    </div>
                    <div className="investor-box1">
                        <div className="investor-child10">
                            <a href="https://www.fresenius.com/investor-news"><h2>Investor News</h2></a>

                            <hr style={{ width: "230%", marginLeft: "30px" }}></hr>
                        </div>
                        <div className="investor-child11">
                            <a href="https://www.fresenius.com/capital-markets-day"><h2>Capital Markets Day</h2></a>
                            <hr style={{ width: "160%", marginLeft: "30px" }}></hr>
                        </div>
                        <div className="investor-child12">
                            <a href="https://www.fresenius.com/contacts_ir"><h2
                            >Contacts

                            </h2></a>
                            <hr style={{ width: "280%", marginLeft: "30%  " }}></hr>
                        </div>
                    </div>
                    <div className="investor-box1">
                        <div className="investor-child13">
                            <a href="https://www.fresenius.com/financial-results"><h2>Financial Results</h2></a>

                            <hr style={{ width: "210%" }}></hr>
                        </div>
                        <div className="investor-child14">
                            <a href="https://www.fresenius.com/annual-general-meeting"><h2>Annual General Meeting</h2></a>
                            <hr style={{ width: "140%", marginLeft: "30px" }}></hr>
                        </div>
                    </div>
                </div>

                <div className={`Investor_Footer_67 ${gf || open || creaditcardopen || shareopen ? 'show' : ''}`}>
                    <div className="Investor_img">
                        <img src="https://www.fresenius.com/sites/default/files/2025-04/270px_Nick_Stone.jpg" />
                    </div>
                    <div className="Contact_details">
                        <h2>Contact</h2>
                        <hr></hr>
                        <h3>Nick Stone</h3>
                        <p>Senior Vice President Investor Relations
                            Head of Investor Relations
                        </p>
                        <a href="">ir-fre@fresenius.com</a>
                    </div>
                </div>
            </div>
            {/* Carrers */}
            <div className={`btn-carrer ${showcarrer ? 'show' : ''}`}>
                <h1>Careers</h1>
                <hr></hr>
                <p>Careers</p>
                <div className="c-p">
                    <p>You will be now forwarded to the Fresenius Career page.</p>
                    <p> If the automatic redirect is not working, please click on the following link.</p>
                </div>
                <div className="f-c">
                    <a href="https://karriere.fresenius.de/en-US/"> <p>Fresenius Career</p></a>
                </div>
                {/* Footer */}
                <div className="footer123">
                    <div className="footer_123">
                        <div className="FollowUs">
                            <h3>FOLLOW US</h3>
                            <div className="followus_parent">
                                <div className="follows_child1">
                                    <a href="https://www.facebook.com/fresenius.group">
                                        <div className="facebook">
                                            <i class="fab fa-facebook"></i>
                                            <p>Fans</p>
                                        </div>
                                    </a>
                                    <a href="https://x.com/fresenius">
                                        <div className="twitter">
                                            <i class="fab fa-twitter"></i>
                                            <p>Follower</p>
                                        </div>
                                    </a>
                                    <a href="https://www.instagram.com/fresenius.group/">                                    <div className="instagram">
                                        <i class="fab fa-instagram"></i>
                                        <p>Follower</p>
                                    </div>
                                    </a>
                                    <a href="https://www.youtube.com/user/FreseniusTV">
                                        <div className="youtube">
                                            <i class="fab fa-youtube"></i>
                                            <p> 5970 Follower</p>
                                        </div>
                                    </a>
                                    <a href="https://www.xing.com/pages/freseniusgroup">
                                        <div className="x">

                                            <i class="fab fa-x-twitter"></i>
                                        </div>

                                    </a>
                                    <a href="https://www.linkedin.com/company/fresenius-se">
                                        <div className="linkdin">
                                            <i class="fab fa-linkedin"></i>
                                        </div>
                                    </a>

                                </div>
                                <div className="follows_child2">
                                    <div className="follows_heading">
                                        <h3>THE HEALTHCARE GROUP</h3>
                                    </div>
                                    <div className="content-chilld-follow">
                                        <a href="https://www.fresenius.com/fresenius-websites">
                                            <p> → Fresenius-Websites</p></a>
                                        <a href="https://www.fresenius.com/group-overview">
                                            <p>→ Group Overview</p> </a>
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div className="footer_contact_123">

                            <h2>CONTACT US</h2>
                            <p>Fresenius SE & Co. KGaA
                                Else-Kröner-Str. 1 <br></br>
                                61352 Bad Homburg v.d.H.
                                Germany <br></br>
                                T +49 (0) 6172 608-0 <br></br>
                                pr-fre@fresenius.com</p>
                            <div className="contact-child1">
                                <a href="https://www.fresenius.com/contact" ><p className="p_123">→ Contacts</p></a>
                                <a href="https://www.fresenius.com/grievance-mechanism" >
                                    <p className="p_456">→ Our Grievance Mechanism</p></a>
                            </div>

                        </div>
                        <div className="visitus">
                            <h2>VISIT US</h2>
                            <div className="map">
                                <a href="https://www.google.de/maps/place/Fresenius+SE+%26+Co.+KGaA/@50.215223,8.623481,17z/data=!3m1!4b1!4m2!3m1!1s0x47bd07bf832c38dd:0x1d236d854b6ddda">
                                    <img src="https://www.fresenius.com/sites/default/files/2021-11/370px_castamap-else-kroener-strasse-1.jpg" /></a>

                            </div>
                            <div className="footer_visit_123">

                                <a href="/FRS_Anfahrtsplan.pdf" download="FRS_Anfahrtsplan"   >


                                    <p>  <i className="fa fa-download"></i>  How to get here (PDF, 2242,72kb)</p>

                                </a>
                                <a href="https://www.fresenius.com/worldwide"><p>→ Worldwide</p></a>
                            </div>

                        </div>
                        <h3 className="after-hprizantal">
                            <hr></hr>
                            <span>Fresenius SE & Co. KGaA</span>
                            <div className="end">
                                <a href="https://www.fresenius.com/Imprint">Imprint </a>
                                <a href="https://www.fresenius.com/data-protection">| Data Protection</a>
                                <a href="https://www.fresenius.com/Legal-Disclaimer">| Legal Disclaimer</a>
                            </div>
                        </h3>

                    </div>
                </div>

            </div>

            {/* Main Section */}
           <header   >
                <div className="slider" ref={sliderRef} >

                    <button className="carouselLeft-btn" onClick={handleNext}>❮</button>
                    <button className="carouselRight-btn" onClick={handleNext}>❯</button>
                    <img src={images[i]} alt="Slide" className="slide-image" />


                    {/* Box Description */}
                    {/* <div class="container"> */}
                    <div className="extra-img">
                        <h1>{image_box[i].title}</h1>
                        <p>{image_box[i].subtitle}</p>
                        <footer className="extra-img-footer">
                            <p>→  {image_box[i].footer}</p>
                        </footer>
                        <div className="footer-img">
                            {
                                visibleItems.map((img, i) => (

                                    <img key={i} src={img} alt={`Slide ${i}`} style={{
                                        width: "200px",

                                    }} />

                                ))}    </div>
                    </div>
                    {/* </div> */}

                    {/* Stock Info Bar */}
                    <div className="content-child1">

                        <a href="https://www.fresenius.com/share-price-center">
                            <ul>

                                <li><small >FRESENIUS SE & CO. KGaA</small></li>
                                <li><small>07.08.2025 - 17:35</small></li>
                                <li className="large-content"> 42,28€</li>
                                <li className="large-content" style={{ color: 'green' }}>+1,53%</li>
                            </ul>
                        </a>

                    </div>




                </div>

                {/* Below Image Content */}
                <div className="below-img" ref={sectionRefs[1]}>
                    <div className="f1">
                        <a style={{ textDecoration: "none" }} href="https://www.fresenius.com/fresenius-kabi" >  <h2 className="first-color"> Fresenius Kabi
                            <hr style={{ color: "grey", width: "200px" }} />
                            <p >Products for critically and chronically ill patients</p>
                        </h2>
                        </a>
                    </div>
                    <div className="f1">
                        <a style={{ textDecoration: "none" }} href="https://www.fresenius.com/fresenius-helios">  <h2 className="second-color">Fresenius Helios
                            <hr style={{ color: "grey", width: "200px" }} />
                            <p >Europe's leading private healthcare provider</p>
                        </h2>
                        </a>
                    </div>
                </div>
                {/* News */}


                <div className="news-window" ref={sectionRefs[2]}>

                    <button className={`news-btn news-left ${newsPosition == 0 ? 'disable' : ''}`} onClick={handleLeftNews}>❮</button>
                    <button className={`news-btn news-right ${newsPosition == maxPosition ? 'disable' : ''}`} onClick={handleRightNews}>❯</button>
                    <h2>News</h2>
                    <div
                        className="news-cards"
                        style={{
                            transform: `translateX(-${newsPosition * 379}px)`, // 350px card + 20px gap
                            transition: "transform 0.5s ease"

                        }}
                    >
                        {/* Card1 */}
                        <a href="https://www.fresenius.com/press-release-q2-2025">
                            <div className="card1-parent">
                                <img src="https://www.fresenius.com/sites/default/files/2025-05/AMG%20STAGE.png" />
                                <h1 className="title">Fresenius Q2/25: Guidance raised - Resilient business continues to deliver consistent performance</h1>
                                <p className="subtitle">Michael Sen, CEO of Fresenius: “Fresenius has demonstrated a resilient and consistent performance in the first half of 2025, with <span>another quarter of strong momentum reflected </span></p>
                                <div className="card1-footer">
                                    <p>August 06,2025.Fresenius</p>
                                    <p>→</p>
                                </div>
                            </div>
                        </a>


                        {/* Card2 */}
                        <div className="card2-wrapper"

                            style={{ opacity: `${scrollVisible9}` }}

                        >
                            <div className="card2-parent" onClick={handlenews}>
                                <h2 className="title">Brief News</h2>
                                {newsList[news].title ? (
                                    <div className="card2-title">
                                        <h3>{newsList[news].title}</h3>
                                        <p className="card2-p">{newsList[news].body}</p>
                                        <div className="card2-footer">
                                            <p>{newsList[news].date}</p>
                                            <p>{news + 1}/{newsList.length}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="subtitle">
                                        <div className="child2-subtitle">
                                            <p>{newsList[news].body}</p>
                                        </div>
                                        <div className="card2-footer">
                                            <p>{newsList[news].date}</p>
                                            <p>{news + 1}/{newsList.length}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="card2-parent" onClick={handlenews1}>
                                <h2 className="title">Brief News</h2>
                                {newsList1[news1].title ? (
                                    <div className="card2-title">
                                        <h3>{newsList1[news1].title}</h3>
                                        <p className="card2-p">{newsList1[news1].body}</p>
                                        <div className="card2-footer">
                                            <p>{newsList1[news1].date}</p>
                                            <p>{news1 + 1}/{newsList1.length}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="subtitle">
                                        <div className="child2-subtitle">
                                            <p>{newsList1[news1].body}</p>
                                        </div>
                                        <div className="card2-footer">
                                            <p>{newsList1[news1].date}</p>
                                            <p>{news1 + 1}/{newsList1.length}</p>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>


                        {/* card3 */}

                        <div className="card3-wrapper"
                            style={{ opacity: `${scrollVisible2}` }}
                        >
                            <div className="card2-parent" onClick={handlenews2}>
                                <h2 className="title">Brief News</h2>
                                {
                                    newsList2[news2].title ? (
                                        <div className="card2-title">
                                            <h3>{newsList2[news2].title}</h3>
                                            <p className="card2-p">{newsList2[news2].body}</p>
                                            <div className="card2-footer">
                                                <p>{newsList2[news2].date}</p>
                                                <p>{news2 + 1}/{newsList2.length}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="subtitle">
                                            <div className="child2-subtitle">
                                                <p>{newsList2[news2].body}</p>
                                            </div>
                                            <div className="card2-footer">
                                                <p>{newsList2[news2].date}</p>
                                                <p>{news2 + 1}/{newsList2.length}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="card0-parent">
                                <a href="https://www.fresenius.com/node/7099">
                                    <img src="https://www.fresenius.com/sites/default/files/2025-05/Foto%20Anke%20Schmidt.PNG"
                                    />
                                    <div className="card0-child1">
                                        <p><strong>Anke Schmidt appointed Head of Corporate Communications at Fresenius</strong></p>
                                        <p><small>March 27, 2025 · Fresenius</small></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* card4 */}
                        <div className="card4-wrapper"
                            style={{ opacity: `${scrollVisible1}` }}
                        >
                            <div className="card2-parent" onClick={handlenews3}>
                                <h2 className="title">Brief News</h2>
                                {
                                    newsList3[news3].title ? (
                                        <div className="card2-title">
                                            <h3>{newsList3[news3].title}</h3>
                                            <p className="card2-p">{newsList3[news3].body}</p>
                                            <div className="card2-footer">
                                                <p>{newsList3[news3].date}</p>
                                                <p>{news3 + 1}/{newsList3.length}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="subtitle">
                                            <div className="child2-subtitle">
                                                <p>{newsList3[news3].body}</p>
                                            </div>
                                            <div className="card2-footer">
                                                <p>{newsList3[news3].date}</p>
                                                <p>{news3 + 1}/{newsList3.length}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="card0-parent">
                                <a href="https://www.fresenius.com/press-release-sale-fmc-shares">
                                    <img src="https://www.fresenius.com/sites/default/files/2025-05/fresenius-annual-general-meeting-7479.jpg"
                                    />
                                    <div className="card0-child1">
                                        <p><strong>2025 Annual General Meeting: Shareholders approve all agenda items</strong></p>
                                        <p><small>March 23, 2025 · Fresenius</small></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* card 5 */}


                        <a href="https://www.fresenius.com/node/7091"
                            style={{ opacity: `${scrollVisible8}` }}
                        >
                            <div className="card5-parent">
                                <img src="https://www.fresenius.com/sites/default/files/2025-05/_62_7131.jpg" />
                                <h1 className="title">2025 Annual General Meeting: Fresenius builds on strong momentum as it enters the Rejuvenate phase of #FutureFresenius</h1>
                                <p className="subtitle">The disciplined implementation of</p>
                                <div className="card1-footer">
                                    <p>May 23, 2025  .Fresenius</p>
                                    <p>→</p>
                                </div>
                            </div>
                        </a>
                        {/* card 6 */}
                        <div className="card6-wrapper"
                            style={{ opacity: `${scrollVisible4}` }}
                        >
                            <div className="card6-parent" onClick={handlenews10}>
                                <h2 className="title">Brief News</h2>
                                {
                                    newsList10[news10].title ? (
                                        <div className="card2-title">
                                            <h3>{newsList10[news10].title}</h3>
                                            <p className="card2-p">{newsList10[news10].body}</p>
                                            <div className="card2-footer">
                                                <p>{newsList10[news10].date}</p>
                                                <p>{news10 + 1}/{newsList10.length}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="subtitle">
                                            <div className="child2-subtitle">
                                                <p>{newsList10[news10].body}</p>
                                            </div>
                                            <div className="card2-footer">
                                                <p>{newsList10[news10].date}</p>
                                                <p>{news10 + 1}/{newsList10.length}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="card0-parent">
                                <a href="https://www.fresenius.com/100JahreElseKroenerPress">
                                    <img src="https://www.fresenius.com/sites/default/files/2025-05/Bild%20(3).png"
                                    />
                                    <div className="card0-child1">
                                        <p><strong>Visionary trailblazer: Fresenius and the Else Kröner-Fresenius Foundation celebrate 100 years of Else Kröner</strong></p>
                                        <p><small>May 17, 2025 · Fresenius</small></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* card7 */}
                        <a
                            style={{ opacity: `${scrollVisible3}` }}
                            href="https://www.fresenius.com/node/7067">
                            <div className="card7-parent">
                                <img src="https://www.fresenius.com/sites/default/files/2025-05/_62_7131.jpg" />
                                <h1 className="title">Fresenius Q1/25: Strong start to 2025 – #FutureFresenius Rejuvenate phase kicked-off with excellent momentum</h1>
                                <p className="subtitle">Michael Sen, CEO of Fresenius: “We've kick-started 2025 with an excellent performance <span>across the business and confirm our full-year guidance</span></p>
                                <div className="card1-footer">
                                    <p>May 7, 2025   .Fresenius</p>
                                    <p>→</p>
                                </div>
                            </div>
                        </a>
                        {/* card8 */}
                        <div className="card8-wrapper"
                            style={{ opacity: `${scrollVisible6}` }}
                        >
                            <div className="card6-parent" onClick={handlenews5}>
                                <h2 className="title">Brief News</h2>
                                {
                                    newsList5[news5].title ? (
                                        <div className="card2-title">
                                            <h3>{newsList5[news5].title}</h3>
                                            <p className="card2-p">{newsList5[news5].body}</p>
                                            <div className="card2-footer">
                                                <p>{newsList5[news5].date}</p>
                                                <p>{news5 + 1}/{newsList5.length}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="subtitle">
                                            <div className="child2-subtitle">
                                                <p>{newsList5[news5].body}</p>
                                            </div>
                                            <div className="card2-footer">
                                                <p>{newsList5[news5].date}</p>
                                                <p>{news5 + 1}/{newsList5.length}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="card6-parent" onClick={handlenews5}>
                                <h2 className="title">Brief News</h2>
                                {
                                    newsList6[news6].title ? (
                                        <div className="card2-title">
                                            <h3>{newsList6[news6].title}</h3>
                                            <p className="card2-p">{newsList6[news6].body}</p>
                                            <div className="card2-footer">
                                                <p>{newsList6[news6].date}</p>
                                                <p>{news6 + 1}/{newsList6.length}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="subtitle">
                                            <div className="child2-subtitle">
                                                <p>{newsList6[news6].body}</p>
                                            </div>
                                            <div className="card2-footer">
                                                <p>{newsList6[news6].date}</p>
                                                <p>{news6 + 1}/{newsList6.length}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        {/* card 9 */}
                        <div className="card9-wrapper"
                            style={{ opacity: `${scrollVisible7}` }}
                        >
                            <div className="card6-parent" onClick={handlenews7}>
                                <h2 className="title">Brief News</h2>
                                {
                                    newsList7[news7].title ? (
                                        <div className="card2-title">
                                            <h3>{newsList7[news7].title}</h3>
                                            <p className="card2-p">{newsList7[news7].body}</p>
                                            <div className="card2-footer">
                                                <p>{newsList7[news7].date}</p>
                                                <p>{news7 + 1}/{newsList7.length}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="subtitle">
                                            <div className="child2-subtitle">
                                                <p>{newsList7[news7].body}</p>
                                            </div>
                                            <div className="card2-footer">
                                                <p>{newsList7[news7].date}</p>
                                                <p>{news7 + 1}/{newsList7.length}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="card6-parent" onClick={handlenews8}>
                                <h2 className="title">Brief News</h2>
                                {
                                    newsList8[news8].title ? (
                                        <div className="card2-title">
                                            <h3>{newsList8[news8].title}</h3>
                                            <p className="card2-p">{newsList8[news8].body}</p>
                                            <div className="card2-footer">
                                                <p>{newsList8[news8].date}</p>
                                                <p>{news8 + 1}/{newsList8.length}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="subtitle">
                                            <div className="child2-subtitle">
                                                <p>{newsList8[news8].body}</p>
                                            </div>
                                            <div className="card2-footer">
                                                <p>{newsList8[news8].date}</p>
                                                <p>{news8 + 1}/{newsList8.length}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        {/* card 10 */}
                        <div className="card10-wrapper"
                            style={{ opacity: `${scrollVisible5}` }}
                        >
                            <div className="card10-parent">
                                <a href="https://www.fresenius.com/node/7033">
                                    <img src="https://www.fresenius.com/sites/default/files/2025-03/Fresenius_KabiLab_M%C3%A4rz2025.JPG" />
                                    <div className="card10-child1">
                                        <p><strong>Fresenius expands corporate headquarters in Bad Homburg with new innovation center</strong></p>
                                        <p><small>March 17, 2025 · Fresenius</small></p>
                                    </div>
                                </a>
                            </div>
                            <div className="card10-parent">
                                <a href="https://www.fresenius.com/press-release-pricing-fmc-shares">
                                    <img src="https://www.fresenius.com/sites/default/files/2025-03/Fresenius_KabiLab_M%C3%A4rz2025.JPG" />
                                    <div className="card10-child1">
                                        <p><strong>Fresenius completes sale of shares in Fresenius Medical Care AG </strong></p>
                                        <p><small>March 4, 2025 · Fresenius</small></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* card 11 */}
                        <div className="card10-parent">
                            <a href="https://www.fresenius.com/press-release-sale-fmc-shares">
                                <img src="https://www.fresenius.com/sites/default/files/2025-03/Fresenius_KabiLab_M%C3%A4rz2025.JPG" />
                                <div className="card10-child1">
                                    <p><strong>Fresenius announces its intention to reduce its stake in Fresenius Medical Care AG to 25% plus one share</strong></p>
                                    <p><small>March 3, 2025 · Fresenius</small></p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <button className="news-btn-dots news-left-dots"
                        style={{
                            opacity: `${dot1}`
                        }}
                    >

                    </button>
                    <button className="news-btn-dots news-right-dots"
                        style={{
                            opacity: `${dot2}`
                        }}
                    ></button>
                    <button className="news-btn-dots news-left-dots"
                        style={{
                            opacity: `${dot3}`
                        }}
                    >

                    </button>
                    <button className="news-btn-dots news-right-dots"
                        style={{
                            opacity: `${dot4}`
                        }}
                    ></button>
                    <div className="news-footer">
                        <a href="https://www.fresenius.com/Legal-Disclaimer">→ All News</a>
                        <a href="https://www.fresenius.com/news">→ Disclaimer</a>
                    </div>
                </div>


                <div className="conferencecall" ref={sectionRefs[3]}>

                    <div className="child1">
                        <img src="https://www.fresenius.com/sites/default/files/2024-10/360px_CC_Calendar_1_1.jpg" />
                        <span className="badge">Latest</span>
                    </div>
                    <div className="child2">
                        <h2>August 06, 2025 - 01:30 pm <span>| Bad Homburg, Germany</span></h2>
                        <h1>Conference Call Q2 2025</h1>
                        <div className="resource">
                            {/* Left links */}
                            <div className="left-links">
                                <a href="./FRE_Q2_25_ Aide_Memoire.pdf" download="FRE_Q2_25_ Aide_Memoire.pdf" >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyItems: "center",
                                            alignItems: "center"
                                        }}
                                    >
                                        <i className="fa-solid fa-download"></i>
                                        <p
                                            style={{
                                                fontSize: "14px",
                                                color: "navy",
                                                fontWeight: "bold"
                                            }}
                                        >  Q2/25 Aide Memoire</p>
                                    </div>
                                </a>

                                <a href="./FRE_Q2_2025_Presentation.pdf"
                                    download="FRE_Q2_2025_Presentation.pdf"
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyItems: "center",
                                            alignItems: "center"
                                        }}
                                    >
                                        <i className="fa-solid fa-download"></i>
                                        <p
                                            style={{
                                                fontSize: "14px",
                                                color: "navy",
                                                fontWeight: "bold"
                                            }}
                                        >Presentation</p>
                                    </div>
                                </a>
                                <a href="./FSE_IN_Q2_2025_en.pdf" download="FSE_IN_Q2_2025_en.pdf">
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyItems: "center",
                                            alignItems: "center"
                                        }}
                                    >
                                        <i className="fa-solid fa-download"></i>
                                        <p
                                            style={{
                                                fontSize: "14px",
                                                color: "navy",
                                                fontWeight: "bold"
                                            }}
                                        >Investor News</p></div>
                                </a>
                                <a href="./Fresenius_Transcript_Q2_25_20250806"
                                    download="Fresenius_Transcript_Q2_25_20250806"
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyItems: "center",
                                            alignItems: "center"
                                        }}
                                    >
                                        <i className="fa-solid fa-download"></i>
                                        <p
                                            style={{
                                                fontSize: "14px",
                                                color: "navy",
                                                fontWeight: "bold"
                                            }}
                                        > Transcript</p>
                                    </div></a>
                                <a href="./event.ics" download="event.ics"><div
                                    style={{
                                        display: "flex",
                                        justifyItems: "center",
                                        alignItems: "center"
                                    }}
                                ><i className="fa-solid fa-download"></i> <p
                                    style={{
                                        fontSize: "14px",
                                        color: "navy",
                                        fontWeight: "bold"
                                    }}
                                >Import (ICS)</p></div></a>
                            </div>

                            {/* Right link */}
                            <div className="right-link">
                                <a href="https://streamstudio.world-television.com/CCUIv3/registration.aspx?ticket=1016-1504-42078&target=en-default-&status=ondemand&browser=ns-0-1-0-0-0">
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyItems: "center",
                                            alignItems: "center",
                                            // border:"2px solid black",
                                            height: "20px",
                                            color: "navy",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i> <p>Webcast</p></div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Committed To Life Section */}
                <div className="CommittedToLife" ref={sectionRefs[4]}>
                    <div className="CommittedToLife-child1">
                        <h1>#CommittedToLife</h1>
                        <p className="CommittedToLife-child1-p">
                            We save and improve human lives with affordable, accessible, and innovative healthcare products and the highest quality in clinical care.
                        </p>
                        <hr className="horizantal" />
                        <a href="https://www.fresenius.com/group-overview" className="CommittedToLife-a-child1"> →&nbsp;&nbsp;&nbsp;<span>Learn more about the Fresenius Group</span>
                        </a>
                    </div>
                    <div className="video-thumbnail" onClick={() => { setisopne(true) }}>
                        <img className="video-thumbnail-img" src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/Vd3bj2jPe/female-scientist-working-with-scientist-tablet-woman-scientist-using-tablet-computer-in-modern-laboratory-scientist-woman-working-in-lab-scientific-research-on-tablet-pc-at-research-lab_hg7wk3fzcx_thumbnail-1080_01.png" />

                        <button className="playbutton" onClick={() => setisopne(true)}>▶</button>

                        {isopen && (
                            <div
                                style={{
                                    position: "fixed",
                                    top: "0",
                                    left: "0",
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    zIndex: 2000
                                }}
                                onClick={() => setisopne(false)}
                            >
                                <div
                                    style={{
                                        backgroundColor: "white",
                                        padding: "20px",
                                        width: "80%",
                                        height: "80%",
                                        marginBottom: "120px",
                                        maxWidth: "600%",
                                        textAlign: "right",
                                        borderRadius: "8px",
                                        background: "none",

                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <iframe
                                            width="100%"
                                            height="700px"
                                            src="https://www.youtube.com/embed/Yw6NtZ7FJcg?autoplay=1"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>

                                        <button
                                            onClick={() => setisopne(false)}
                                            style={{
                                                border: "none",
                                                fontSize: "40px",
                                                position: "absolute",
                                                top: "10px",
                                                right: "20px",
                                                background: "none",
                                                color: "white",
                                                cursor: "pointer"
                                            }}
                                        >
                                            X
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
                {/* `Library` */}
                <div className="library-parent" ref={sectionRefs[5]}>
                    <h3 className="library-content">Library</h3>

                    {/*  Button */}
                    <button
                        className="btn btn-left"
                        onClick={handleLeftClick}
                    >
                        ❮
                    </button>

                    <button
                        className="btn btn-right"
                        onClick={handleRightClick}
                        disabled={offset >= maxScroll}
                    >
                        ❯
                    </button>

                    {/* image */}
                    <div className="list-library">
                        <button onClick={handleLeftClick} className="library-dot1"
                            style={{
                                opacity: `${Lcolor}`
                            }}

                        ></button>
                        <button onClick={handleRightClick} className="library-dot2"
                            style={{
                                opacity: `${Rcolor}`
                            }}
                        ></button>


                        <div className="library-display "
                            style={{
                                display: "flex",
                                transform: `translateX(-${offset * 15}%)`,
                                transition: "transform 0.5s ease",
                            }}
                        >

                            {/* coloum1 */}
                            <a href="./10061-01_Fresenius_CP_250512-1_EN_1.pdf" download="10061-01_Fresenius_CP_250512-1_EN_1.pdf">
                                <div className={`colo1 ${LeftVisibility === 1 ? 'partial-visible' : ''}`}>
                                    <img src={library[0].img} />
                                    <hr />
                                    <p>{library[0].p}<span
                                        style={{
                                            marginLeft: "14px",
                                            color: "grey"
                                        }}
                                    >{library[0].footer}</span></p>
                                </div>
                            </a>
                            {/* coloumn2 */}

                            <a href="./Fresenius_IR_Company_Presentation_June_2025.pdf" download="Fresenius_IR_Company_Presentation_June_2025.pdf"> <div className="colo2">
                                <img src={library[1].img} />
                                <hr />
                                <p>⬇ {library[1].p}<span
                                    style={{
                                        marginLeft: "14px",
                                        color: "grey"
                                    }}
                                >{library[1].footer}</span></p>
                            </div>
                            </a>
                            {/* coloumn3 */}
                            <a href="./Fresenius_Annual_Report_2024.pdf" download="Fresenius_Annual_Report_2024.pdf"> <div className="colo3">
                                <img src={library[2].img} />
                                <hr />
                                <p>⬇ {library[2].p}<span
                                    style={{
                                        marginLeft: "14px",
                                        color: "grey"
                                    }}
                                >{library[2].footer}</span></p>
                            </div>
                            </a>

                            {/* coloumn4 */}
                            <a href="./100Years_Fresenius_s.pdf" download="100Years_Fresenius_s.pdf"> <div className="colo4">
                                <img src={library[3].img} />
                                <hr />
                                <p>⬇ {library[3].p}<span
                                    style={{
                                        marginLeft: "14px",
                                        color: "grey"
                                    }}
                                >{library[3].footer}</span></p>
                            </div>
                            </a>

                            {/* coloumn5 */}
                            <a href="./FRS_SocialMedia_en.pdf" download="FRS_SocialMedia_en.pdf"> <div className={`colo5 ${RightVisibility == false ? "active" : ""}`}>
                                <img src={library[4].img} />
                                <hr />
                                <p>⬇ {library[4].p}<span
                                    style={{
                                        marginLeft: "14px",
                                        color: "grey"
                                    }}
                                >{library[4].footer}</span></p>
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className="dots">
                    </div>
                </div>
            </header >
            {/* Footer */}
            <div className="footer123" ref={sectionRefs[6]}>
                <div className="footer_123">
                    <div className="FollowUs">
                        <h3>FOLLOW US</h3>
                        <div className="followus_parent">
                            <div className="follows_child1">
                                <a href="https://www.facebook.com/fresenius.group">
                                    <div className="facebook">
                                        <i class="fab fa-facebook"></i>
                                        <p>Fans</p>
                                    </div>
                                </a>
                                <a href="https://x.com/fresenius">
                                    <div className="twitter">
                                        <i class="fab fa-twitter"></i>
                                        <p>Follower</p>
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/fresenius.group/">                                    <div className="instagram">
                                    <i class="fab fa-instagram"></i>
                                    <p>Follower</p>
                                </div>
                                </a>
                                <a href="https://www.youtube.com/user/FreseniusTV">
                                    <div className="youtube">
                                        <i class="fab fa-youtube"></i>
                                        <p> 5970 Follower</p>
                                    </div>
                                </a>
                                <a href="https://www.xing.com/pages/freseniusgroup">
                                    <div className="x">

                                        <i class="fab fa-x-twitter"></i>
                                    </div>

                                </a>
                                <a href="https://www.linkedin.com/company/fresenius-se">
                                    <div className="linkdin">
                                        <i class="fab fa-linkedin"></i>
                                    </div>
                                </a>

                            </div>
                            <div className="follows_child2">
                                <div className="follows_heading">
                                    <h3>THE HEALTHCARE GROUP</h3>
                                </div>
                                <div className="content-chilld-follow">
                                    <a href="https://www.fresenius.com/fresenius-websites">
                                        <p> → Fresenius-Websites</p></a>
                                    <a href="https://www.fresenius.com/group-overview">
                                        <p>→ Group Overview</p> </a>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="footer_contact_123">

                        <h2>CONTACT US</h2>
                        <p>Fresenius SE & Co. KGaA
                            Else-Kröner-Str. 1 <br></br>
                            61352 Bad Homburg v.d.H.
                            Germany <br></br>
                            T +49 (0) 6172 608-0 <br></br>
                            pr-fre@fresenius.com</p>
                        <div className="contact-child1">
                            <a href="https://www.fresenius.com/contact" ><p className="p_123">→ Contacts</p></a>
                            <a href="https://www.fresenius.com/grievance-mechanism" >
                                <p className="p_456">→ Our Grievance Mechanism</p></a>
                        </div>

                    </div>
                    <div className="visitus">
                        <h2>VISIT US</h2>
                        <div className="map">
                            <a href="https://www.google.de/maps/place/Fresenius+SE+%26+Co.+KGaA/@50.215223,8.623481,17z/data=!3m1!4b1!4m2!3m1!1s0x47bd07bf832c38dd:0x1d236d854b6ddda">
                                <img src="https://www.fresenius.com/sites/default/files/2021-11/370px_castamap-else-kroener-strasse-1.jpg" /></a>

                        </div>
                        <div className="footer_visit_123">

                            <a href="/FRS_Anfahrtsplan.pdf" download="FRS_Anfahrtsplan"   >


                                <p>  <i className="fa fa-download"></i>  How to get here (PDF, 2242,72kb)</p>

                            </a>
                            <a href="https://www.fresenius.com/worldwide"><p>→ Worldwide</p></a>
                        </div>

                    </div>
                    <h3 className="after-hprizantal">
                        <hr></hr>
                        <span>Fresenius SE & Co. KGaA</span>
                        <div className="end">
                            <a href="https://www.fresenius.com/Imprint">Imprint </a>
                            <a href="https://www.fresenius.com/data-protection">| Data Protection</a>
                            <a href="https://www.fresenius.com/Legal-Disclaimer">| Legal Disclaimer</a>
                        </div>
                    </h3>

                </div>
            </div>


                <button className="btn-down up " 
                    style={{
                        opacity:`${setcolor}`,
                        scrollBehavior:"smooth"
                    }}
                    onClick={handleScrollUp}
                
                >
                    <i class="fa fa-arrow-up"></i>
                </button>


                <button className="btn-down down "
                onClick={handleScrollDown}
                >
                    <i class="fa fa-arrow-down"></i>
                </button>
        </div >

    );
}

export default Fresenius;



