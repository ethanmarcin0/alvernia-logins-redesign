# TASK — Alvernia Logins redesign

**Primary audience:** Alvernia University students.  
**Selected page:** Classic, Refined (`classic.html`).  
**Planning:** Discussed and approved in the project chat before implementation on November 5, 2026.  
**This file:** Assembled on November 6, 2026 from that plan and the subsequent decisions. The file itself was not created before implementation; its timing should be disclosed to the instructor.

## Problem and visitor task

Students need to reach campus systems quickly. The existing login directory felt like a spreadsheet, had large unused areas, and made important links difficult to scan. The goal is a professional, welcoming directory with clearer branding, readable text, useful filters, and direct links to the existing services.

**Main visitor task:** Find the appropriate Canvas or university email sign-in, using quick links or search, without entering credentials into this prototype.

Students are the one primary audience for this assignment. Faculty/staff resources remain available because the redesigned directory preserves the university's existing content.

## Intended changes

- Retain the familiar Classic direction and use the homepage's maroon and gold palette.
- Replace promotional wording with direct labels: Quick links, All campus services, and Technology support.
- Increase the university wordmark, Logins heading, service names, and supporting link text.
- Use full-width audience sections with two card columns on desktop and one on phones, avoiding the previous unequal-column gap.
- Support search aliases, audience/category filters, saved links, and recoverable empty states.
- Preserve existing destinations and distinct options such as Canvas university-email versus personal-email access.

The alternative Modern concept is included for comparison. CMS integration, new authentication, live chatbots, paid APIs, maps, Cesium, and 3D features are outside this project.

## Three acceptance criteria

| ID | Acceptance criterion | Recorded result |
| --- | --- | --- |
| AC1 | Students can find Canvas and Office 365, with the correct university destinations and supporting links retained. | PASS — source parity and rendered destination checks; see T01 and T08 in [TEST_LOG.md](TEST_LOG.md). |
| AC2 | Search and audience/category filters work together. Students + Academics + `registration` returns Self-Service; Clear filters restores the full directory. | PASS — recorded browser checks; see T02. |
| AC3 | A student can save Canvas, find it in Saved, and retain the saved selection after reload when browser storage is available. | PASS — recorded browser checks; see T03. |

Phone layout, keyboard use, and failure/empty-state checks are recorded separately in T04–T07. These are agent checks, not claims of independent student or peer testing.

## Student decisions recorded in the chat

The student requested two prototypes, chose Classic, removed the marketing-style headings, requested closer homepage colors, and asked for larger branding and a fix for the lower-right whitespace. The student also selected a portable ZIP handoff. These decisions directed the agent's implementation; detailed attribution is in [AI_USE.md](AI_USE.md).

## Peer feedback and remaining submission work

On November 6 the student reported that a classmate called the page a "huge improvement" and identified colors and whitespace as revision areas. They scrolled up and down to review the appearance without following links. The student confirmed that the classmate visually reviewed the revised version and found it improved. This completes a reported visual review/retest; it does not establish a functional peer test of finding Canvas or email. See T09.

- [x] Working prototype, source code, and after screenshots included.
- [x] TASK.md, AI_USE.md, and TEST_LOG.md included with their actual documentation dates.
- [x] Record the classmate's scrolling/visual review and revised-version visual retest.
- [ ] Add a focused functional peer visitor task, such as finding the appropriate Canvas sign-in without guidance, if required to satisfy the instructor's visitor-task criterion.
- [ ] Add before screenshots of the original page, including a narrow-screen view where required. Existing screenshot files are after views.
- [ ] Provide a 60–90 second demonstration recording or the instructor-approved in-class equivalent.
- [ ] Confirm instructor approval of the ZIP fallback, or supply the required live website and repository URLs. No live URL or repository URL has been supplied here.
- [ ] Review [REFLECTION.md](REFLECTION.md) for accuracy and add the result if a functional peer task is completed.

See [README.md](README.md) for opening instructions and [HANDOFF.md](HANDOFF.md) for integration notes. This is a design proposal for review, not an installation on Alvernia's production website.

## Additional request — November 9, 2026

Restore the university dropdown menus to Classic's white header, using the supplied screenshot and the current university navigation as references. Preserve the larger branding and existing directory features; support desktop and collapsed phone menus, keyboard operation, and local Find It search. Implementation and checks are recorded in T11 of TEST_LOG.md. This was a later revision, not part of the original November 5 plan.
