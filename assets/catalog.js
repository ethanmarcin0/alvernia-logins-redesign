// Shared content catalog. Edit here; no server or fetch is needed.
window.ALVERNIA_SERVICES = [
  {
    "id": "office",
    "name": "Office 365",
    "description": "Email, Teams, OneDrive, and your Microsoft workspace.",
    "category": "University Operations",
    "icon": "mail",
    "aliases": "email outlook microsoft sharepoint word excel",
    "variants": [
      {
        "audience": "Students",
        "sourceName": "Office 365 (Email, SharePoint, Teams, OneDrive, Word, etc.)",
        "links": [
          {
            "label": "Login",
            "url": "https://sts.alvernia.edu/adfs/ls/?domain_hint=alvernia.edu&wa=wsignin1.0&wtrealm=urn%3afederation%3aMicrosoftOnline&wctx=%26LoginOptions%3D2%26wa%3Dwsignin1.0%26wreply%3Dhttps:%252F%252Fportal.office.com%252F"
          },
          {
            "label": "Login Instructions",
            "url": "https://alverniauniversity-my.sharepoint.com/personal/academic_support_alvernia_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Facademic%5Fsupport%5Falvernia%5Fedu%2FDocuments%2FClass%20Visit%20PPTs%20%26%20Handouts%2FAU%20Student%20Tech%20Guide%2Dlinked%20auStudentTechGuide%2Epdf&parent=%2Fpersonal%2Facademic%5Fsupport%5Falvernia%5Fedu%2FDocuments%2FClass%20Visit%20PPTs%20%26%20Handouts&ga=1"
          },
          {
            "label": "Microsoft Online Password Reset",
            "url": "https://passwordreset.microsoftonline.com/"
          }
        ]
      },
      {
        "audience": "Faculty/Staff",
        "sourceName": "Office 365 (Email, SharePoint, Teams, OneDrive, Word, etc.)",
        "links": [
          {
            "label": "Login",
            "url": "https://sts.alvernia.edu/adfs/ls/?domain_hint=alvernia.edu&wa=wsignin1.0&wtrealm=urn%3afederation%3aMicrosoftOnline&wctx=%26LoginOptions%3D2%26wa%3Dwsignin1.0%26wreply%3Dhttps:%252F%252Fportal.office.com%252F"
          },
          {
            "label": "Login Instructions",
            "url": "https://alverniauniversity-my.sharepoint.com/personal/academic_support_alvernia_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Facademic%5Fsupport%5Falvernia%5Fedu%2FDocuments%2FClass%20Visit%20PPTs%20%26%20Handouts%2FAU%20Student%20Tech%20Guide%2Dlinked%20auStudentTechGuide%2Epdf&parent=%2Fpersonal%2Facademic%5Fsupport%5Falvernia%5Fedu%2FDocuments%2FClass%20Visit%20PPTs%20%26%20Handouts&ga=1"
          },
          {
            "label": "Microsoft Online Password Reset",
            "url": "https://passwordreset.microsoftonline.com/"
          }
        ]
      }
    ]
  },
  {
    "id": "asc",
    "name": "Academic Success Center",
    "description": "Find tutoring, study groups, and writing support.",
    "category": "Academics",
    "icon": "book",
    "aliases": "tutoring study groups writing grammarly asc",
    "variants": [
      {
        "audience": "Students",
        "sourceName": "Academic Success Center (Tutoring & Study Groups)",
        "links": [
          {
            "label": "Login",
            "url": "https://alvernia.mywconline.com"
          },
          {
            "label": "Grammarly Pro",
            "url": "https://www.grammarly.com/business/join-invite-link/activate?key=zu9xld0h&q_mailing_7TWioKGK91wgspZ1KJVuuXaRUVxkLR3wgJYK5=RpGrFMGXkLCneJP2rJEnJ53vo3xzKhTB3qqabZMi6mTQS5UH2S95r376S&sid=5r8zLg7q1XzMYTeXkku8"
          },
          {
            "label": "ASC FAQ's",
            "url": "https://sway.cloud.microsoft/swTdThHqcXQdQg7w"
          }
        ]
      }
    ]
  },
  {
    "id": "accommodations",
    "name": "Accommodations",
    "description": "Access support and manage accommodation requests.",
    "category": "Student Services",
    "icon": "access",
    "aliases": "accessibility disability symplicity",
    "variants": [
      {
        "audience": "Students",
        "sourceName": "Accommodations",
        "links": [
          {
            "label": "Apply (first time)",
            "url": "https://alvernia-accommodate.symplicity.com/public_accommodation"
          },
          {
            "label": "Login",
            "url": "https://alvernia-accommodate.symplicity.com/"
          }
        ]
      },
      {
        "audience": "Faculty/Staff",
        "sourceName": "Accommodations",
        "links": [
          {
            "label": "Login",
            "url": "https://alvernia-accommodate.symplicity.com/"
          }
        ]
      }
    ]
  },
  {
    "id": "arc",
    "name": "ARC Housing Portal",
    "description": "Your home on campus. Housing applications and resources.",
    "category": "Campus Life",
    "icon": "home",
    "aliases": "residence residential communities erezlife housing dorm",
    "variants": [
      {
        "audience": "Students",
        "sourceName": "ARC: Alvernia Residential Communities Portal",
        "links": [
          {
            "label": "Login",
            "url": "https://alvernia.erezlife.com/"
          },
          {
            "label": "Spring 2027 Incoming Resident Housing Application Instructions",
            "url": "https://www.alvernia.edu/sites/default/files/documents/Spring%202027%20Incoming%20Resident%20Housing%20Application%20Instructions.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": "bookstore",
    "name": "Bookstore",
    "description": "Course materials, textbook orders, and university essentials.",
    "category": "Academics",
    "icon": "book",
    "aliases": "textbooks supplies follett book store",
    "variants": [
      {
        "audience": "Students",
        "sourceName": "Bookstore",
        "links": [
          {
            "label": "Bookstore Website",
            "url": "https://alvernia.bkstr.com/"
          }
        ]
      },
      {
        "audience": "Faculty/Staff",
        "sourceName": "Book Store",
        "links": [
          {
            "label": "Faculty Login",
            "url": "https://adoptions.efollett.com/OnlineAdoptionsWeb/onlineAdoptions.html?storeNumber=562&langId=en_US"
          }
        ]
      }
    ]
  },
  {
    "id": "canvas",
    "name": "Canvas",
    "description": "Your courses, assignments, and conversations.",
    "category": "Academics",
    "icon": "sun",
    "aliases": "learning lms class homework catalog accelerateau",
    "variants": [
      {
        "audience": "Students",
        "sourceName": "Canvas",
        "links": [
          {
            "label": "Alvernia.edu email",
            "url": "https://alvernia.instructure.com/login/saml"
          },
          {
            "label": "Catalog (personal email)",
            "url": "https://alvernia.instructure.com/login/canvas"
          }
        ]
      },
      {
        "audience": "Faculty/Staff",
        "sourceName": "Canvas",
        "links": [
          {
            "label": "Login",
            "url": "https://alvernia.instructure.com/login/saml"
          }
        ]
      }
    ]
  },
  {
    "id": "complio",
    "name": "Complio",
    "description": "Manage student health and academic compliance documents.",
    "category": "Student Services",
    "icon": "health",
    "aliases": "student health portal medical clinical compliance",
    "variants": [
      {
        "audience": "Students",
        "sourceName": "Complio – Alvernia Student Health Portal",
        "links": [
          {
            "label": "Login",
            "url": "http://alverniacompliance.com/index.html"
          },
          {
            "label": "User Guide",
            "url": "https://alverniauniversity.sharepoint.com/sites/HealthandAcademicCompliance/Shared%20Documents/Forms/AllItems.aspx?CT=1767814993391&OR=OWA%2DNT%2DMail&CID=51c44630%2Dd415%2D1d3e%2D16b4%2D7e0bba20333e&clickParams=eyJYLUFwcE5hbWUiOiJNaWNyb3NvZnQgT3V0bG9vayBXZWIgQXBwIiwiWC1BcHBWZXJzaW9uIjoiMjAyNjAxMDIwMDMuMDEiLCJPUyI6IldpbmRvd3MgMTEifQ%3D%3D"
          }
        ]
      }
    ]
  },
  {
    "id": "degree",
    "name": "Degree Audit uAchieve",
    "description": "See your degree progress and plan what comes next.",
    "category": "Academics",
    "icon": "cap",
    "aliases": "graduation degree requirements advising audit",
    "variants": [
      {
        "audience": "Students",
        "sourceName": "Degree Audit uAchieve",
        "links": [
          {
            "label": "Login",
            "url": "https://alvernia.uachieve.com/selfservice"
          },
          {
            "label": "Student Login Instructions",
            "url": "https://www.alvernia.edu/sites/default/files/documents/Student%20Degree%20Audit%20Directions.doc.pdf"
          }
        ]
      },
      {
        "audience": "Faculty/Staff",
        "sourceName": "Degree Audit uAchieve",
        "links": [
          {
            "label": "Login",
            "url": "https://alvernia.uachieve.com/selfservice"
          },
          {
            "label": "Advisor Login Instructions",
            "url": "https://www.alvernia.edu/sites/default/files/documents/Advisor%20Degree%20Audit%20Directions_0.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": "volunteer",
    "name": "Get Connected",
    "description": "Discover volunteer opportunities with the Holleran Center.",
    "category": "Campus Life",
    "icon": "heart",
    "aliases": "volunteer services community service holleran",
    "variants": [
      {
        "audience": "Students",
        "sourceName": "Get Connected Volunteer Services (Holleran Center)",
        "links": [
          {
            "label": "Login",
            "url": "https://volunteer.alvernia.edu/"
          }
        ]
      }
    ]
  },
  {
    "id": "handshake",
    "name": "Handshake",
    "description": "Explore internships, jobs, and your next opportunity.",
    "category": "Student Services",
    "icon": "briefcase",
    "aliases": "career employment internship job",
    "variants": [
      {
        "audience": "Students",
        "sourceName": "Handshake",
        "links": [
          {
            "label": "Login",
            "url": "https://alvernia.joinhandshake.com/login"
          },
          {
            "label": "Student Guide",
            "url": "https://pax.alvernia.edu/organization/resources/documents/view/1963510"
          }
        ]
      }
    ]
  },
  {
    "id": "myalvernia",
    "name": "myAlvernia",
    "description": "Your university portal, resources, and parent access.",
    "category": "Student Services",
    "icon": "grid",
    "aliases": "my alvernia portal cashnet parent payments",
    "variants": [
      {
        "audience": "Students",
        "sourceName": "myAlvernia",
        "links": [
          {
            "label": "Login",
            "url": "https://alverniauniversity.sharepoint.com/sites/AlverniaSelf-ServicePortal"
          },
          {
            "label": "Parent Access",
            "url": "https://commerce.cashnet.com/alverniapay?LT=P"
          }
        ]
      }
    ]
  },
  {
    "id": "selfservice",
    "name": "Self-Service",
    "description": "Registration, schedules, and your student information.",
    "category": "Academics",
    "icon": "user",
    "aliases": "register classes registration schedule grades financial aid",
    "variants": [
      {
        "audience": "Students",
        "sourceName": "Self-Service",
        "links": [
          {
            "label": "Login",
            "url": "https://selfservice.alvernia.edu/SELFSERV/Home/LogIn?ReturnUrl=%2FSELFSERV%2F"
          },
          {
            "label": "Login Instructions",
            "url": "https://web.alvernia.edu/faq/index.php?action=artikel&cat=23&id=169&artlang=en&highlight=myalvernia+login&_gl=1*6gv0ka*_ga*MTI1NzM1ODg2My4xNjk4ODYzNjQ4*_ga_7LTL25YXL8*MTY5OTI5ODc2OC40LjAuMTY5OTI5ODc3MC41OC4wLjA."
          }
        ]
      }
    ]
  },
  {
    "id": "omnilert",
    "name": "Omnilert",
    "description": "Manage your university emergency alert preferences.",
    "category": "Campus Life",
    "icon": "bell",
    "aliases": "emergency safety alerts weather notifications",
    "variants": [
      {
        "audience": "Students",
        "sourceName": "Omnilert",
        "links": [
          {
            "label": "Login",
            "url": "https://alvernia.omnilert.net/"
          }
        ]
      }
    ]
  },
  {
    "id": "pax",
    "name": "PAX",
    "description": "Find organizations, campus experiences, and ways to belong.",
    "category": "Campus Life",
    "icon": "compass",
    "aliases": "promoting alvernia experiences clubs events organizations",
    "variants": [
      {
        "audience": "Students",
        "sourceName": "PAX (Promoting Alvernia eXperiences)",
        "links": [
          {
            "label": "Login",
            "url": "https://pax.alvernia.edu/organizations"
          }
        ]
      }
    ]
  },
  {
    "id": "print",
    "name": "Print Portal",
    "description": "Access your university printing account.",
    "category": "University Operations",
    "icon": "printer",
    "aliases": "printing paper print balance",
    "variants": [
      {
        "audience": "Students",
        "sourceName": "Print Portal",
        "links": [
          {
            "label": "Login",
            "url": "https://print.alvernia.edu:9192/user"
          }
        ]
      }
    ]
  },
  {
    "id": "report",
    "name": "Report It",
    "description": "Share a student concern or connect with Clare’s Cupboard.",
    "category": "Student Services",
    "icon": "flag",
    "aliases": "maxient concern friend cupboard food support",
    "variants": [
      {
        "audience": "Students",
        "sourceName": "Report It",
        "links": [
          {
            "label": "Report",
            "url": "https://cm.maxient.com/reporting.php?AlverniaUniv"
          }
        ]
      }
    ]
  },
  {
    "id": "shuttle",
    "name": "Shuttle Services",
    "description": "Find university shuttle information and transportation.",
    "category": "Campus Life",
    "icon": "bus",
    "aliases": "bus transportation ride transit",
    "variants": [
      {
        "audience": "Students",
        "sourceName": "Shuttle Services",
        "links": [
          {
            "label": "Learn More",
            "url": "https://www.alvernia.edu/alvernia-shuttle-services"
          }
        ]
      }
    ]
  },
  {
    "id": "softdocs",
    "name": "SoftDocs",
    "description": "Access Etrieve forms and university documents.",
    "category": "University Operations",
    "icon": "file",
    "aliases": "etrieve content forms documents paperwork",
    "variants": [
      {
        "audience": "Students",
        "sourceName": "SoftDocs",
        "links": [
          {
            "label": "Etrieve | Content",
            "url": "https://alvernia.etrieve.cloud/central/forms"
          }
        ]
      },
      {
        "audience": "Faculty/Staff",
        "sourceName": "SoftDocs",
        "links": [
          {
            "label": "Etrieve | Content",
            "url": "https://alvernia.etrieve.cloud/central/forms"
          }
        ]
      }
    ]
  },
  {
    "id": "transferology",
    "name": "Transferology",
    "description": "Explore transfer credit and course equivalencies.",
    "category": "Academics",
    "icon": "arrows",
    "aliases": "transfer credits equivalencies registrar",
    "variants": [
      {
        "audience": "Students",
        "sourceName": "Transferology",
        "links": [
          {
            "label": "Learn More",
            "url": "https://www.transferology.com/school/alvernia"
          }
        ]
      },
      {
        "audience": "Faculty/Staff",
        "sourceName": "Transferology",
        "links": [
          {
            "label": "Learn More",
            "url": "https://www.transferology.com/school/alvernia"
          },
          {
            "label": "Email registrar",
            "url": "mailto:RegistrarsOffice@alvernia.edu"
          }
        ]
      }
    ]
  },
  {
    "id": "typhon",
    "name": "Typhon",
    "description": "DNP clinical and professional documentation.",
    "category": "Academics",
    "icon": "health",
    "aliases": "nursing dnp clinical professional documents",
    "variants": [
      {
        "audience": "Students",
        "sourceName": "Typhon- DNP Clinical and Professional Documents",
        "links": [
          {
            "label": "Login",
            "url": "https://www3.typhongroup.net/np/data/login.asp?facility=3090"
          },
          {
            "label": "Instructions",
            "url": "https://web.alvernia.edu/faq/index.php?action=artikel&cat=23&id=269&artlang=en"
          }
        ]
      }
    ]
  },
  {
    "id": "astra",
    "name": "Astra Event Scheduler",
    "description": "Plan and schedule university spaces and events.",
    "category": "University Operations",
    "icon": "calendar",
    "aliases": "room scheduling space reservation events",
    "variants": [
      {
        "audience": "Faculty/Staff",
        "sourceName": "Astra Event Scheduler",
        "links": [
          {
            "label": "Login",
            "url": "https://www.aaiscloud.com/alverniau"
          },
          {
            "label": "Login Instructions",
            "url": "https://pax.alvernia.edu/organization/resources/documents/view/967409"
          }
        ]
      }
    ]
  },
  {
    "id": "auadvise",
    "name": "AUAdvise",
    "description": "Connect with advising tools and student success resources.",
    "category": "Academics",
    "icon": "users",
    "aliases": "advisor advise advising eab",
    "variants": [
      {
        "audience": "Faculty/Staff",
        "sourceName": "AUAdvise",
        "links": [
          {
            "label": "Login",
            "url": "https://alvernia.campus.eab.com/cas/schools/318-alvernia_university/ldap_sessions/new"
          },
          {
            "label": "FAQs",
            "url": "https://alvernia.topdesk.net/tas/public/ssp/content/detail/knowledgeitem?origin=knowledgeBaseStartPage&unid=73a9c7db4cc74d19b50613fc5b394ae1&from=0da67a3b-d66d-4bdf-a627-d1a3ae4059dd"
          }
        ]
      }
    ]
  },
  {
    "id": "facilities",
    "name": "Facilities Work Order",
    "description": "Request maintenance and support for campus facilities.",
    "category": "University Operations",
    "icon": "tool",
    "aliases": "maintenance repair schooldude workorder",
    "variants": [
      {
        "audience": "Faculty/Staff",
        "sourceName": "Facilities Work Order",
        "links": [
          {
            "label": "Login",
            "url": "http://www.myschoolbuilding.com/myschoolbuilding/mygateway.asp?acctnum=102547668"
          }
        ]
      }
    ]
  },
  {
    "id": "finance",
    "name": "Finance",
    "description": "Payroll, accounts payable, and requisitions.",
    "category": "University Operations",
    "icon": "briefcase",
    "aliases": "adp workforce now pn3 payroll purchasing finance",
    "variants": [
      {
        "audience": "Faculty/Staff",
        "sourceName": "Finance",
        "links": [
          {
            "label": "ADP Workforce Now (Payroll Provider)",
            "url": "http://www.workforcenow.adp.com"
          },
          {
            "label": "PN3 for Payables",
            "url": "https://pn3.alvernia.edu/PN3Payables"
          },
          {
            "label": "PN3 for Requisitions",
            "url": "https://pn3.alvernia.edu/PN3Requisition"
          }
        ]
      }
    ]
  },
  {
    "id": "panopto",
    "name": "Panopto",
    "description": "Watch, create, and share academic video.",
    "category": "Academics",
    "icon": "video",
    "aliases": "lecture recordings videos audio",
    "variants": [
      {
        "audience": "Faculty/Staff",
        "sourceName": "Panopto",
        "links": [
          {
            "label": "Login",
            "url": "https://alvernia.hosted.panopto.com/Panopto/Pages/Home.aspx"
          },
          {
            "label": "FAQs",
            "url": "https://web.alvernia.edu/faq/index.php?action=show&cat=79"
          },
          {
            "label": "What can Panopto do for you?",
            "url": "https://alvernia.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d931479e-f376-453f-916c-08f61772cd6b"
          }
        ]
      }
    ]
  },
  {
    "id": "credit",
    "name": "University Credit Card Spend Management",
    "description": "Access university credit card and spending tools.",
    "category": "University Operations",
    "icon": "credit",
    "aliases": "us bank purchasing expenses spend management",
    "variants": [
      {
        "audience": "Faculty/Staff",
        "sourceName": "University Credit Card Spend Management",
        "links": [
          {
            "label": "Access Online",
            "url": "https://www.access-online.com/cpsApp1/AxolPreAuthServlet?requestCmdId=login"
          }
        ]
      }
    ]
  },
  {
    "id": "weave",
    "name": "WEAVE",
    "description": "University assessment and continuous improvement tools.",
    "category": "University Operations",
    "icon": "chart",
    "aliases": "assessment accreditation outcomes",
    "variants": [
      {
        "audience": "Faculty/Staff",
        "sourceName": "WEAVE",
        "links": [
          {
            "label": "Login",
            "url": "https://app.weaveeducation.com/login"
          },
          {
            "label": "Login Instruction",
            "url": "https://pax.alvernia.edu/organization/resources/documents/view/1897144"
          }
        ]
      }
    ]
  }
];
