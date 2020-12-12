---
title: Security
tags:
  - node
emoji: 👮‍♂️
created: 2020-03-10T14:58:40.000Z
modified: 2020-03-26T23:06:06.000Z
---

[OWASP Top Ten](https://owasp.org/www-project-top-ten/)

## Node

- [Node Security best practices](https://github.com/goldbergyoni/nodebestpractices#6-security-best-practices)
- [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)

### Express middlewares

- [helmet](https://github.com/helmetjs/helmet)
- [express-defend](https://github.com/akos-sereg/express-defend)
- [guestlist](https://github.com/i-like-robots/guestlist)

## Threat modelling

### [STRIDE](https://en.wikipedia.org/wiki/STRIDE_%28security%29)

| Threat                                                                                                                                            | Desired property  |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| [**S**poofing](https://en.wikipedia.org/wiki/Spoofing_attack)                                                                                     | Authenticity      |
| [**T**ampering](<https://en.wikipedia.org/wiki/Tampering_(crime)>)                                                                                | Integrity         |
| [**R**epudiation](https://en.wikipedia.org/wiki/Non-repudiation)                                                                                  | Non-repudiability |
| **I**nformation disclosure ([privacy breach](https://en.wikipedia.org/wiki/Data_privacy) or [data leak](https://en.wikipedia.org/wiki/Data_leak)) | Confidentiality   |
| [**D**enial of Service](https://en.wikipedia.org/wiki/Denial-of-service_attack)                                                                   | Availability      |
| [**E**levation of Privilege](https://en.wikipedia.org/wiki/Privilege_escalation)                                                                  | Authorisation     |

### [Attack tree](https://en.wikipedia.org/wiki/Attack_tree)

Attack trees are conceptual diagrams showing how an asset, or target, might be attacked. Attack trees have been used in a variety of applications. In the field of information technology, they have been used to describe threats on computer systems and possible attacks to realize those threats. However, their use is not restricted to the analysis of conventional information systems. They are widely used in the fields of defense and aerospace for the analysis of threats against tamper resistant electronics systems (e.g., avionics on military aircraft).[1] Attack trees are increasingly being applied to computer control systems (especially relating to the electric power grid ).[2] Attack trees have also been used to understand threats to physical systems.

### [DREAD](<https://en.wikipedia.org/wiki/DREAD_(risk_assessment_model)>)

DREAD is part of a system for risk-assessing computer security threats previously used at Microsoft and although currently used by OpenStack and other corporations[citation needed] it was abandoned by its creators [1]. It provides a mnemonic for risk rating security threats using five categories.

The categories are:

- **Damage** – how bad would an attack be?
- **Reproducibility** – how easy is it to reproduce the attack?
- **Exploitability** – how much work is it to launch the attack?
- **Affected** users – how many people will be impacted?
- **Discoverability** – how easy is it to discover the threat?
