export type PortfolioTrack = 'developer' | 'instructor';
export type PortfolioLanguage = 'ko' | 'en';

export interface PortfolioMetric {
  label: string;
  value: string;
}

export interface PortfolioCase {
  title: string;
  period: string;
  description: string;
  details: readonly string[];
  tags: readonly string[];
  href?: string;
}

export interface PortfolioSection {
  title: string;
  description?: string;
  items: readonly PortfolioCase[];
}

export interface PortfolioVisualIntro {
  label: string;
  title: string;
  lead: string;
  highlights: readonly string[];
  timeline: readonly {
    year: string;
    title: string;
    description: string;
  }[];
}

export interface PortfolioEvidenceItem {
  title: string;
  description: string;
  markers: readonly string[];
}

export interface PortfolioEvidence {
  title: string;
  description: string;
  items: readonly PortfolioEvidenceItem[];
}

export interface PortfolioVisualAsset {
  title: string;
  description: string;
  image: string;
  alt: string;
  label: string;
}

export interface PortfolioVisualBoard {
  title: string;
  description: string;
  feature: PortfolioVisualAsset;
  items: readonly PortfolioVisualAsset[];
}

export interface PortfolioContent {
  eyebrow: string;
  title: string;
  description: string;
  summaryTitle: string;
  summary: readonly string[];
  metrics: readonly PortfolioMetric[];
  projectSectionTitle: string;
  projectSectionDescription: string;
  visualIntro: PortfolioVisualIntro;
  visualBoard: PortfolioVisualBoard;
  evidence: PortfolioEvidence;
  labels: {
    documentInfo: string;
    usageNotice: string;
    analyticsNotice: string;
    lastUpdated: string;
    downloadPdf: string;
  };
  meta: {
    privateDocumentNote?: string;
    usageNotice: string;
    analyticsNotice: string;
  };
  sections: readonly PortfolioSection[];
}

export const portfolioContent = {
  developer: {
    ko: {
      eyebrow: 'Developer Portfolio',
      title: '요구사항을 서버 기능과 운영 흐름으로 구조화하는 백엔드 개발자',
      description:
        'Java/Spring Boot 기반 BI·데이터 포탈 서버 개발 경험을 중심으로, 문제 정의와 구현 범위, 운영 대응 과정을 보여줍니다.',
      summaryTitle: '정리 기준',
      summary: [
        '비즈니스 요구사항을 API, 데이터 모델, 검증 흐름으로 나누어 구현합니다.',
        '고객사 운영 조건과 보안·배포 제약을 개발 과정에 반영합니다.',
        '프로젝트 경험은 한 문서 안에서 문제, 역할, 결과 중심으로 정리합니다.'
      ],
      metrics: [
        { label: '주요 역할', value: '백엔드 개발' },
        { label: '핵심 도메인', value: 'BI·데이터 포탈' },
        { label: '기술 기반', value: 'Java / Spring Boot' }
      ],
      projectSectionTitle: '대표 프로젝트',
      projectSectionDescription: '현재 공개 가능한 프로젝트와 사이트 구축 과정을 우선 배치합니다.',
      visualIntro: {
        label: 'Introduce.',
        title: '공유 가능한 형태로 문제와 구현 과정을 남기는 개발자',
        lead:
          '기능을 구현하는 데서 끝내지 않고, 요구사항과 운영 맥락, 의사결정 근거가 다음 사람에게 전달되도록 정리합니다.',
        highlights: [
          '서버 기능을 API·데이터·검증 흐름으로 분해',
          '배포와 운영 조건을 고려한 구현 범위 조정',
          '프로젝트 경험을 문서와 기록으로 재사용 가능하게 정리'
        ],
        timeline: [
          {
            year: '26',
            title: '사이트 시스템 구축',
            description: '이력서, 포트폴리오, 경험 기록, 블로그를 하나의 개인 브랜딩 흐름으로 연결'
          },
          {
            year: '25',
            title: 'BI·데이터 포탈 개발',
            description: '고객사 요구사항을 서버 기능과 운영 대응 흐름으로 구현'
          },
          {
            year: '21',
            title: '협업 프로젝트 리드',
            description: '백엔드 API, 데이터 흐름, 배포 파이프라인을 프로젝트 결과물로 연결'
          }
        ]
      },
      visualBoard: {
        title: 'Visual Proof.',
        description: '포트폴리오는 텍스트보다 결과 화면, 구조, 산출물의 증거가 먼저 보이도록 구성합니다.',
        feature: {
          title: '사이트 시스템 구축 화면',
          description: '이력서, 포트폴리오, 경험 기록, 블로그를 연결하는 개인 사이트 시스템의 대표 화면입니다.',
          image: '/portfolio/images/portfolio-evidence/main-home.png',
          alt: 'Hadevyi 공식 홈페이지 화면 캡처',
          label: 'Site system'
        },
        items: [
          {
            title: '포트폴리오 문서 화면',
            description: '상세 페이지로 이동하지 않고 한 문서 안에서 요약과 증거를 확인할 수 있도록 구성합니다.',
            image: '/portfolio/images/portfolio-evidence/portfolio-home.png',
            alt: '포트폴리오 웹 문서 화면 캡처',
            label: 'Portfolio'
          },
          {
            title: '개발자 프로필 자료',
            description: '제출 문서에서 사람, 역할, 프로젝트 근거가 분리되지 않도록 프로필 자료를 함께 유지합니다.',
            image: '/portfolio/images/portfolio-evidence/developer-profile.png',
            alt: '개발자 이력서 프로필 이미지',
            label: 'Profile'
          }
        ]
      },
      evidence: {
        title: '구현 근거',
        description: '상세 프로젝트는 공개 가능한 범위 안에서 문제, 역할, 결과, 증거 중심으로 보강합니다.',
        items: [
          {
            title: '요구사항을 기능 단위로 분해',
            description: '업무 요청을 API, 데이터 구조, 검증 조건으로 나누어 구현 범위를 명확히 합니다.',
            markers: ['Problem', 'API', 'Data']
          },
          {
            title: '운영 조건까지 포함한 서버 구현',
            description: '권한, 배포, 고객사 환경 제약을 고려해 기능이 실제 운영 흐름에서 동작하도록 조정합니다.',
            markers: ['Deploy', 'Auth', 'Ops']
          },
          {
            title: '기록 가능한 산출물로 정리',
            description: '문서, 블로그, 포트폴리오로 재사용 가능한 형태의 개발 기록을 남깁니다.',
            markers: ['Docs', 'Review', 'Archive']
          }
        ]
      },
      labels: {
        documentInfo: '문서 정보',
        usageNotice: '이용 및 저작권 안내',
        analyticsNotice: '분석 도구 안내',
        lastUpdated: '최종 업데이트',
        downloadPdf: 'PDF 다운로드'
      },
      meta: {
        privateDocumentNote:
          "상세 기술 경험은 비공개 '경력기술서'로 별도 관리하며, 필요 시 제출할 수 있습니다.",
        usageNotice:
          '본 포트폴리오는 제출 및 검토 목적의 열람만 허용됩니다.\n별도 허가 없는 대량 크롤링, 무단 수집, 복제, 재배포, 재사용, 사칭 및 허위 사용은 금합니다.\n위반 시 민형사상 책임을 포함한 관련 법적 조치를 진행할 수 있습니다.',
        analyticsNotice:
          '본 포트폴리오 페이지는 방문 통계 확인을 위해 Google Analytics를 사용할 수 있습니다.\nGoogle Analytics는 방문 페이지, 접속 환경, 대략적인 지역 정보 등 비식별 분석 데이터를 수집할 수 있습니다.\n수집된 데이터는 포트폴리오 열람 현황을 파악하고 페이지 사용성을 개선하는 목적으로만 활용됩니다.'
      },
      sections: []
    },
    en: {
      eyebrow: 'Developer Portfolio',
      title: 'Backend developer structuring requirements into server features and operations',
      description:
        'A portfolio focused on Java/Spring Boot BI and data portal server work, showing problem definition, implementation scope, and operational response.',
      summaryTitle: 'How this portfolio is organized',
      summary: [
        'I break business requirements into APIs, data models, and validation flows.',
        'I reflect client operating conditions, security constraints, and deployment requirements in implementation.',
        'Project details are kept in one document around the problem, my role, and the result.'
      ],
      metrics: [
        { label: 'Primary role', value: 'Backend development' },
        { label: 'Core domain', value: 'BI and data portal' },
        { label: 'Technical base', value: 'Java / Spring Boot' }
      ],
      projectSectionTitle: 'Featured projects',
      projectSectionDescription: 'Publicly shareable projects and site-building work are listed first.',
      visualIntro: {
        label: 'Introduce.',
        title: 'Developer who leaves problems and implementation paths in shareable form',
        lead:
          'I do not stop at implementing features. I document requirements, operational context, and decision grounds so the next person can follow the work.',
        highlights: [
          'Break server features into APIs, data, and validation flows',
          'Adjust implementation scope around deployment and operating constraints',
          'Turn project experience into reusable documents and records'
        ],
        timeline: [
          {
            year: '26',
            title: 'Site system build',
            description: 'Connecting resume, portfolio, experience records, and blog into one personal branding flow'
          },
          {
            year: '25',
            title: 'BI and data portal development',
            description: 'Turning client requirements into server features and operational response flows'
          },
          {
            year: '21',
            title: 'Collaborative project lead',
            description: 'Connecting requirements, Git collaboration, and deployment into project outcomes'
          }
        ]
      },
      visualBoard: {
        title: 'Visual proof.',
        description: 'The portfolio is structured so screens, artifacts, and visual evidence appear before long explanations.',
        feature: {
          title: 'Site system screen',
          description: 'A representative screen of the personal site system connecting resume, portfolio, experience records, and blog.',
          image: '/portfolio/images/portfolio-evidence/main-home.png',
          alt: 'Screenshot of the Hadevyi official homepage',
          label: 'Site system'
        },
        items: [
          {
            title: 'Portfolio document screen',
            description: 'The portfolio keeps summary and evidence in one document instead of sending readers into deeper pages.',
            image: '/portfolio/images/portfolio-evidence/portfolio-home.png',
            alt: 'Screenshot of the portfolio web document',
            label: 'Portfolio'
          },
          {
            title: 'Developer profile material',
            description: 'Profile material stays with role and project evidence so the submitted document remains self-contained.',
            image: '/portfolio/images/portfolio-evidence/developer-profile.png',
            alt: 'Developer resume profile image',
            label: 'Profile'
          }
        ]
      },
      evidence: {
        title: 'Implementation proof',
        description: 'Project details will be strengthened around problem, role, result, and evidence within what can be shared publicly.',
        items: [
          {
            title: 'Break requirements into feature units',
            description: 'I clarify scope by splitting requests into APIs, data structures, and validation conditions.',
            markers: ['Problem', 'API', 'Data']
          },
          {
            title: 'Build server features with operations in mind',
            description: 'I account for permissions, deployment, and client environment constraints so features work in real operating flows.',
            markers: ['Deploy', 'Auth', 'Ops']
          },
          {
            title: 'Organize work into reusable artifacts',
            description: 'I keep development records that can be reused as documents, blog posts, and portfolio evidence.',
            markers: ['Docs', 'Review', 'Archive']
          }
        ]
      },
      labels: {
        documentInfo: 'Document information',
        usageNotice: 'Usage and copyright notice',
        analyticsNotice: 'Analytics notice',
        lastUpdated: 'Last updated',
        downloadPdf: 'Download PDF'
      },
      meta: {
        privateDocumentNote:
          'Detailed technical experience is managed separately and can be provided when needed.',
        usageNotice:
          'This portfolio may be viewed only for submission and review purposes.\nBulk crawling, unauthorized collection, copying, redistribution, reuse, impersonation, or false use without permission is prohibited.\nViolations may result in legal action, including civil and criminal liability.',
        analyticsNotice:
          'This portfolio page may use Google Analytics to review visit statistics.\nGoogle Analytics may collect non-identifying analytics data such as visited pages, access environment, and approximate location information.\nCollected data is used only to understand portfolio page views and improve page usability.'
      },
      sections: []
    }
  },
  instructor: {
    ko: {
      eyebrow: 'Instructor Portfolio',
      title: '현업 개발 경험을 가진 백엔드 강사',
      description:
        '현업 서버 개발 경험을 배경으로, 자료구조·알고리즘 강의, 프로젝트 실습 코칭, 개발자 커리어 멘토링 경험을 목적별로 정리합니다.',
      summaryTitle: '정리 기준',
      summary: [
        '학습자가 개념을 구현과 결과물로 연결하도록 강의 흐름을 설계합니다.',
        '프로젝트 산출물, Git 협업, 이력서·포트폴리오 정리를 함께 피드백합니다.',
        '현업 개발 경험은 강의 신뢰 근거로만 두고 교육 활동과 산출물 피드백을 중심에 둡니다.'
      ],
      metrics: [
        { label: '강의/멘토링', value: '10건' },
        { label: '주요 영역', value: '백엔드 강의·프로젝트 코칭' },
        { label: '교육 경험', value: 'SSAFY / 제로베이스 / 대학' }
      ],
      projectSectionTitle: '대표 활동',
      projectSectionDescription: '공개 가능한 강의와 멘토링 활동을 목적별로 정리합니다.',
      visualIntro: {
        label: 'Introduce.',
        title: '현업 경험을 학습자가 구현할 수 있는 흐름으로 바꾸는 강사',
        lead:
          '개념 설명, 실습, 프로젝트 산출물, 커리어 준비가 분리되지 않도록 학습자가 결과물을 만들 수 있는 흐름으로 연결합니다.',
        highlights: [
          '자료구조·알고리즘을 구현 관점으로 설명',
          '프로젝트 명세, Git 협업, 배포 과정을 코칭',
          '이력서와 포트폴리오에 남길 수 있는 산출물 피드백'
        ],
        timeline: [
          {
            year: '28',
            title: '백엔드 스쿨 파트 강사',
            description: '기초 자료구조와 알고리즘을 백엔드 학습 흐름에 맞춰 강의'
          },
          {
            year: '27',
            title: 'ICT콤플렉스 전문가 멘토',
            description: 'SW 개발과 개발자 취업 분야의 프로젝트·커리어 상담'
          },
          {
            year: '22',
            title: 'SSAFY 프로젝트 실습코치',
            description: '교육생 프로젝트의 요구사항 정리, 협업, 배포 과정을 코칭'
          }
        ]
      },
      visualBoard: {
        title: 'Visual Proof.',
        description: '강사 포트폴리오는 강의자 이미지, 수업 흐름, 산출물 피드백이 크게 보여야 신뢰도가 생깁니다.',
        feature: {
          title: '강사 프로필 자료',
          description: '강의, 멘토링, 프로젝트 코칭 경험을 제출 문서 안에서 직접 확인할 수 있도록 크게 배치합니다.',
          image: '/portfolio/images/portfolio-evidence/instructor-profile.png',
          alt: '강사 이력서 프로필 이미지',
          label: 'Instructor'
        },
        items: [
          {
            title: '포트폴리오 문서 화면',
            description: '강의와 멘토링 활동도 상세 페이지 없이 한 문서에서 활동, 역할, 근거를 확인하도록 구성합니다.',
            image: '/portfolio/images/portfolio-evidence/portfolio-home.png',
            alt: '포트폴리오 웹 문서 화면 캡처',
            label: 'Portfolio'
          },
          {
            title: '사이트 시스템 화면',
            description: '이력서와 포트폴리오가 같은 시스템 안에서 관리되는 구조를 보여줍니다.',
            image: '/portfolio/images/portfolio-evidence/main-home.png',
            alt: 'Hadevyi 공식 홈페이지 화면 캡처',
            label: 'System'
          }
        ]
      },
      evidence: {
        title: '교육 근거',
        description: '강의와 멘토링 경험은 수업 내용보다 학습자가 만든 결과와 피드백 방식이 드러나도록 정리합니다.',
        items: [
          {
            title: '개념을 구현으로 연결',
            description: '자료구조와 알고리즘을 문제 풀이 설명에 머물지 않고 코드 작성 흐름으로 연결합니다.',
            markers: ['Lecture', 'Code', 'Practice']
          },
          {
            title: '프로젝트 산출물 피드백',
            description: '명세서, Git 협업, 배포 경험이 포트폴리오에 남을 수 있도록 결과물을 재구성합니다.',
            markers: ['Spec', 'Git', 'Deploy']
          },
          {
            title: '커리어 문서 코칭',
            description: '수강생의 프로젝트 경험을 이력서와 포트폴리오 문장으로 정리하도록 피드백합니다.',
            markers: ['Resume', 'Portfolio', 'Review']
          }
        ]
      },
      labels: {
        documentInfo: '문서 정보',
        usageNotice: '이용 및 저작권 안내',
        analyticsNotice: '분석 도구 안내',
        lastUpdated: '최종 업데이트',
        downloadPdf: 'PDF 다운로드'
      },
      meta: {
        usageNotice:
          '본 포트폴리오는 제출 및 검토 목적의 열람만 허용됩니다.\n별도 허가 없는 대량 크롤링, 무단 수집, 복제, 재배포, 재사용, 사칭 및 허위 사용은 금합니다.\n위반 시 민형사상 책임을 포함한 관련 법적 조치를 진행할 수 있습니다.',
        analyticsNotice:
          '본 포트폴리오 페이지는 방문 통계 확인을 위해 Google Analytics를 사용할 수 있습니다.\nGoogle Analytics는 방문 페이지, 접속 환경, 대략적인 지역 정보 등 비식별 분석 데이터를 수집할 수 있습니다.\n수집된 데이터는 포트폴리오 열람 현황을 파악하고 페이지 사용성을 개선하는 목적으로만 활용됩니다.'
      },
      sections: [
        {
          title: '강의와 멘토링',
          description: '이력서의 강사 트랙과 동일한 방향으로 공개 가능한 교육 활동을 정리합니다.',
          items: [
            {
              period: '2025.09 - 2027.08',
              title: 'ICT콤플렉스 전문가 멘토',
              description: '전국 ICT콤플렉스 | SW개발·개발자 취업 분야',
              details: ['프로젝트 방향 설정과 개발자 커리어 상담을 지원'],
              tags: ['멘토링', '커리어', '프로젝트']
            },
            {
              period: '2025.03 - 2028.02',
              title: '제로베이스 백엔드 스쿨 파트 강사',
              description: '데이원컴퍼니(제로베이스) | 기초 자료구조 및 알고리즘',
              details: ['백엔드 학습자가 구현 흐름과 문제 해결 방식을 연결하도록 강의'],
              tags: ['백엔드', '자료구조', '알고리즘']
            },
            {
              period: '2021.12 - 2022.11',
              title: '삼성청년SW아카데미 프로젝트 실습코치',
              description: 'SSAFY 6기·7기 교육생 대상 SW 개발 및 프로젝트 코칭',
              details: ['요구사항 정리, 명세서 작성, 서버 배포와 운영 실습을 코칭'],
              tags: ['프로젝트 코칭', '배포', '협업']
            }
          ]
        },
        {
          title: '커리큘럼과 산출물 피드백',
          description: '수강생이 학습 내용을 포트폴리오와 협업 경험으로 전환할 수 있도록 돕습니다.',
          items: [
            {
              period: '2025.09 - 2025.10',
              title: '취업준비 서류정리 멘토링',
              description: '인제대학교 | 산학연프로젝트 4학년 대상',
              details: ['2개 팀의 프로젝트 경험을 이력서와 포트폴리오 목적에 맞게 재구성하도록 피드백'],
              tags: ['이력서', '포트폴리오', '프로젝트 정리']
            },
            {
              period: '2025.01 - 2025.02',
              title: 'Git 토이프로젝트 멘토링',
              description: '인제대학교 | 산학연프로젝트 Git 협업 실습',
              details: ['정기 세션과 GitHub 댓글·PR 리뷰를 병행해 실습 중 생긴 질문을 피드백'],
              tags: ['Git', 'GitHub', 'PR 리뷰']
            }
          ]
        }
      ]
    },
    en: {
      eyebrow: 'Instructor Portfolio',
      title: 'Backend instructor with hands-on industry experience',
      description:
        'A portfolio organized around data structure and algorithm lectures, project coaching, and developer career mentoring, with practical backend experience as context.',
      summaryTitle: 'How this portfolio is organized',
      summary: [
        'I design lecture flows that help learners connect concepts to implementation and outcomes.',
        'I review project artifacts, Git collaboration, resumes, and portfolio structure together.',
        'Practical development experience is used as credibility and context, while teaching activities and artifact feedback remain the focus.'
      ],
      metrics: [
        { label: 'Lectures / mentoring', value: '10 cases' },
        { label: 'Main areas', value: 'Backend teaching and project coaching' },
        { label: 'Teaching contexts', value: 'SSAFY / Zerobase / Universities' }
      ],
      projectSectionTitle: 'Representative activities',
      projectSectionDescription: 'Publicly shareable lectures and mentoring activities are organized by purpose.',
      visualIntro: {
        label: 'Introduce.',
        title: 'Instructor turning industry experience into an implementable learning flow',
        lead:
          'I connect concept explanation, practice, project artifacts, and career preparation so learners can build outcomes rather than isolated notes.',
        highlights: [
          'Explain data structures and algorithms from an implementation perspective',
          'Coach project specs, Git collaboration, and deployment flow',
          'Review artifacts that can remain in resumes and portfolios'
        ],
        timeline: [
          {
            year: '28',
            title: 'Backend School part instructor',
            description: 'Teaching basic data structures and algorithms in a backend learning flow'
          },
          {
            year: '27',
            title: 'ICT Complex expert mentor',
            description: 'Project and career consultation in software development and developer employment'
          },
          {
            year: '22',
            title: 'SSAFY project practice coach',
            description: 'Coaching requirements, collaboration, and deployment for learner projects'
          }
        ]
      },
      visualBoard: {
        title: 'Visual proof.',
        description: 'An instructor portfolio needs large visual material for teaching presence, class flow, and artifact feedback.',
        feature: {
          title: 'Instructor profile material',
          description: 'The teaching, mentoring, and project coaching context is placed prominently within the submitted document.',
          image: '/portfolio/images/portfolio-evidence/instructor-profile.png',
          alt: 'Instructor resume profile image',
          label: 'Instructor'
        },
        items: [
          {
            title: 'Portfolio document screen',
            description: 'Lecture and mentoring activities stay in one document so readers can check activity, role, and evidence without deeper pages.',
            image: '/portfolio/images/portfolio-evidence/portfolio-home.png',
            alt: 'Screenshot of the portfolio web document',
            label: 'Portfolio'
          },
          {
            title: 'Site system screen',
            description: 'This shows that resume and portfolio materials are managed within the same site system.',
            image: '/portfolio/images/portfolio-evidence/main-home.png',
            alt: 'Screenshot of the Hadevyi official homepage',
            label: 'System'
          }
        ]
      },
      evidence: {
        title: 'Teaching proof',
        description: 'Teaching and mentoring experience is organized to show learner outcomes and feedback methods, not only class topics.',
        items: [
          {
            title: 'Connect concepts to implementation',
            description: 'I connect data structures and algorithms to code-writing flow, beyond problem explanation.',
            markers: ['Lecture', 'Code', 'Practice']
          },
          {
            title: 'Review project artifacts',
            description: 'I help restructure specs, Git collaboration, and deployment experience into portfolio-ready outcomes.',
            markers: ['Spec', 'Git', 'Deploy']
          },
          {
            title: 'Coach career documents',
            description: 'I review how learners express project experience in resumes and portfolios.',
            markers: ['Resume', 'Portfolio', 'Review']
          }
        ]
      },
      labels: {
        documentInfo: 'Document information',
        usageNotice: 'Usage and copyright notice',
        analyticsNotice: 'Analytics notice',
        lastUpdated: 'Last updated',
        downloadPdf: 'Download PDF'
      },
      meta: {
        usageNotice:
          'This portfolio may be viewed only for submission and review purposes.\nBulk crawling, unauthorized collection, copying, redistribution, reuse, impersonation, or false use without permission is prohibited.\nViolations may result in legal action, including civil and criminal liability.',
        analyticsNotice:
          'This portfolio page may use Google Analytics to review visit statistics.\nGoogle Analytics may collect non-identifying analytics data such as visited pages, access environment, and approximate location information.\nCollected data is used only to understand portfolio page views and improve page usability.'
      },
      sections: [
        {
          title: 'Lectures and mentoring',
          description: 'Publicly shareable education activities are organized in the same direction as the instructor resume.',
          items: [
            {
              period: '2025.09 - 2027.08',
              title: 'ICT Complex expert mentor',
              description: 'National ICT Complex | Software development and developer career fields',
              details: ['Supported project direction setting and developer career consultation'],
              tags: ['Mentoring', 'Career', 'Project']
            },
            {
              period: '2025.03 - 2028.02',
              title: 'Zerobase Backend School part instructor',
              description: 'Day1 Company (Zerobase) | Basic data structures and algorithms',
              details: ['Taught backend learners how to connect implementation flow with problem solving'],
              tags: ['Backend', 'Data structures', 'Algorithms']
            },
            {
              period: '2021.12 - 2022.11',
              title: 'Samsung SW Academy for Youth project practice coach',
              description: 'Coached SSAFY 6th and 7th cohort learners on software development projects',
              details: ['Coached requirements organization, specification writing, server deployment, and operations practice'],
              tags: ['Project coaching', 'Deployment', 'Collaboration']
            }
          ]
        },
        {
          title: 'Curriculum and artifact feedback',
          description: 'I help learners turn what they studied into portfolio-ready project and collaboration records.',
          items: [
            {
              period: '2025.09 - 2025.10',
              title: 'Job preparation document mentoring',
              description: 'Inje University | Industry-academic project seniors',
              details: ['Reviewed two teams and helped restructure project experience for resumes and portfolios'],
              tags: ['Resume', 'Portfolio', 'Project writing']
            },
            {
              period: '2025.01 - 2025.02',
              title: 'Git toy project mentoring',
              description: 'Inje University | Industry-academic project Git collaboration practice',
              details: ['Combined regular sessions with GitHub comments and PR reviews to answer practice questions'],
              tags: ['Git', 'GitHub', 'PR review']
            }
          ]
        }
      ]
    }
  }
} as const satisfies Record<PortfolioTrack, Record<PortfolioLanguage, PortfolioContent>>;

export const projectContent = {
  ko: {
    'home-hub': {
      title: 'Hadevyi 공식 홈페이지 구축',
      summary: '개인 브랜딩의 첫 진입점이 되는 메인 홈페이지를 Astro 기반 정적 멀티페이지 구조로 설계하고 있습니다.',
      status: '진행 중'
    },
    'content-ops': {
      title: '콘텐츠 운영 시스템 설계',
      summary: '하나의 아이디어를 이력서, 포트폴리오, 경험 기록, 블로그 글로 분기할 수 있도록 콘텐츠 운영 구조를 정의하고 있습니다.',
      status: '진행 중'
    }
  },
  en: {
    'home-hub': {
      title: 'Building the Hadevyi official homepage',
      summary: 'Designing the main homepage as the first entry point for personal branding with an Astro-based static multi-page structure.',
      status: 'In progress'
    },
    'content-ops': {
      title: 'Designing a content operations system',
      summary: 'Defining a content structure that can branch one idea into a resume, portfolio, experience record, and blog post.',
      status: 'In progress'
    }
  }
} as const satisfies Record<PortfolioLanguage, Record<string, { title: string; summary: string; status: string }>>;
