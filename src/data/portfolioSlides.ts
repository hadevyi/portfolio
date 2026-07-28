import type { PortfolioLanguage, PortfolioTrack } from './portfolio';

export type PortfolioSlideVariant =
  | 'cover'
  | 'career-map'
  | 'career'
  | 'timeline'
  | 'skills'
  | 'proof'
  | 'process'
  | 'outcome'
  | 'achievement'
  | 'ai-practice'
  | 'placeholder';

export interface PortfolioSlideItem {
  label: string;
  title: string;
  description?: string;
  meta?: string;
  employmentType?: string;
  role?: string;
  work?: string;
  outcome?: string;
  scope?: string;
  image?: {
    src: string;
    alt: string;
  };
  icon?: string;
  tags?: readonly string[];
  entries?: readonly string[];
  specs?: readonly {
    label: string;
    value: string;
  }[];
  entryDetails?: readonly {
    date: string;
    title: string;
    description?: string;
  }[];
}

export interface PortfolioProjectRail {
  title: string;
  period: string;
  message: string;
  items: readonly Pick<PortfolioSlideItem, 'label' | 'title'>[];
}

export interface PortfolioVisualPlaceholder {
  label: string;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
}

export interface PortfolioSlide {
  eyebrow: string;
  title: string;
  message: string;
  variant: PortfolioSlideVariant;
  decisionFlow?: readonly {
    title: string;
    description: string;
  }[];
  compactProjectLayout?: boolean;
  projectRail?: PortfolioProjectRail;
  visualPlaceholder?: PortfolioVisualPlaceholder;
  image?: {
    src: string;
    alt: string;
  };
  primaryItems: readonly PortfolioSlideItem[];
  secondaryItems?: readonly PortfolioSlideItem[];
  tags?: readonly string[];
}

const createPlanningSlides = (language: PortfolioLanguage, start = 1, count = 9): PortfolioSlide[] =>
  Array.from({ length: count }, (_, index) => {
    const pageNumber = String(index + start).padStart(2, '0');

    return {
      eyebrow: language === 'ko' ? `페이지 ${pageNumber}` : `Page ${pageNumber}`,
      title: '',
      message: '',
      variant: 'placeholder',
      primaryItems: []
    };
  });

const developerProjectSlides = (language: PortfolioLanguage): PortfolioSlide[] => {
  if (language === 'ko') {
    return [
      {
        eyebrow: '프로젝트 01 · Safers',
        title: 'Safers',
        message: '동물과 환경 정보를 가상공간의 체험으로 전달한 Web·Metaverse 서비스',
        variant: 'proof',
        compactProjectLayout: true,
        projectRail: {
          title: 'Safers',
          period: '2021.10.12–11.19 (총 6주)',
          message: '멸종위기 동물과 환경 문제를 메타버스에서 체험하고 학습하는 서비스',
          items: [
            { label: '도메인', title: 'Web · Metaverse' },
            { label: '팀', title: '5인 팀 · 팀장' },
            { label: '역할', title: '백엔드 · 인프라 · ML · 발표' }
          ]
        },
        image: {
          src: '/portfolio/images/portfolio-evidence/safers-architecture.png',
          alt: 'Safers 애플리케이션 아키텍처 다이어그램'
        },
        primaryItems: [
          {
            label: '기술 구성',
            title: '사용 기술과 버전',
            specs: [
              { label: '언어', value: 'Java 8' },
              { label: '백엔드', value: 'Spring Boot 2.5.6 · JPA' },
              { label: '웹·플랫폼', value: 'Vue 2.6.14 · Unity 2019.4.32f1 · Photon 2.38' },
              { label: '데이터·인프라', value: 'MySQL 8.0.22 · AWS EC2/S3 · Jenkins 2.303.2 · nginx 1.18.0' },
              { label: 'ML', value: 'Teachable Machine Image 0.8.5 · MobileNet 2.1.0' }
            ]
          },
          {
            label: '담당 구현',
            title: '주요 담당 범위',
            scope: '백엔드 · API · 배포 · ML',
            entries: [
              '회원·동물·맵·미션·로그 데이터 구조 설계',
              '사용자·게시판·Unity 연동 등 핵심 API 설계 및 구현에 참여',
              'Unity WebGL과 서버 데이터 연동',
              'AWS EC2·S3 기반 서비스 환경 구성',
              'Jenkins·nginx 기반 CI/CD 구성',
              '이미지 미션 판별 ML 적용'
            ]
          }
        ]
      },
      {
        eyebrow: '프로젝트 01 · Safers',
        title: '서비스 흐름 기반 API 설계',
        message: '',
        variant: 'process',
        compactProjectLayout: true,
        projectRail: {
          title: 'Safers',
          period: '2021.10.12–11.19 (총 6주)',
          message: '멸종위기 동물과 환경 문제를 메타버스에서 체험하고 학습하는 서비스',
          items: [
            { label: '도메인', title: 'Web · Metaverse' },
            { label: '팀', title: '5인 팀 · 팀장' },
            { label: '역할', title: '백엔드 · 인프라 · ML · 발표' }
          ]
        },
        visualPlaceholder: {
          label: 'API FLOW CHART',
          title: '엔드포인트·클라이언트·서버·DB 흐름도',
          description: '사용자 인증부터 미션 완료와 다음 콘텐츠 조회까지의 요청 흐름',
          image: {
            src: '/portfolio/images/portfolio-evidence/safers-api-sequence.png',
            alt: 'Safers 사용자 인증과 미션 완료 API 시퀀스 다이어그램'
          }
        },
        primaryItems: [
          {
            label: '01',
            title: '공통 코드·콘텐츠 데이터 설계',
            description: '서비스 확장에 대응할 수 있는 구조를 설계했습니다.',
            entries: [
              '공통 코드 4그룹과 세부 코드 14개 직접 설계',
              '맵 3개·동물 32종·미션 30개의 데이터와 초기값 구성',
              '상태값과 다음 미션 관계를 API 흐름에 연결'
            ]
          },
          {
            label: '02',
            title: 'Unity WebGL·서버 연동 설계',
            entries: [
              '로그인 이후 사용자 인증 및 초기 상태 조회 흐름 연결',
              'Vue·Unity WebGL과 Spring Boot API 간 회원·미션·동물 데이터 연동',
              '미션 결과 저장부터 다음 콘텐츠 상태 갱신까지의 API 흐름 구성'
            ]
          }
        ]
      },
      {
        eyebrow: '프로젝트 01 · Safers',
        title: '성과 및 외부 검증',
        message: '',
        variant: 'outcome',
        compactProjectLayout: true,
        projectRail: {
          title: 'Safers',
          period: '2021.10.12–11.19 (총 6주)',
          message: '멸종위기 동물과 환경 문제를 메타버스에서 체험하고 학습하는 서비스',
          items: [
            { label: '도메인', title: 'Web · Metaverse' },
            { label: '팀', title: '5인 팀 · 팀장' },
            { label: '역할', title: '백엔드 · 인프라 · ML · 발표' }
          ]
        },
        visualPlaceholder: {
          label: '외부 검증 자료',
          title: '서비스 활용 가능성 확인',
          description: '기관 문의와 서비스 소개를 통해 외부 활용 가능성을 확인했습니다.',
          image: {
            src: '/portfolio/images/portfolio-evidence/safers-external-validation.png',
            alt: '국립생태원 문의 화면과 해외 기관에 보낸 Safers 서비스 소개 이메일'
          }
        },
        primaryItems: [
          {
            label: '01',
            title: '운영 기반 구축',
            entries: [
              'Jenkins·SSH 문제 해결 및 자동 배포 흐름 정착',
              '배포 버전 오류의 재현·수정·재배포 흐름 정리',
              '팀에서 반복 활용할 수 있도록 배포 대응 절차 문서화'
            ]
          },
          {
            label: '02',
            title: '외부 검증 및 프로젝트 성과',
            entries: [
              '국립생태원에 서비스 활용을 문의하고 긍정 답변 확인',
              'IUCN Red List 정보 활용 관련 외부 소통',
              'SSAFY 5기 자율 프로젝트 8팀 중 1위',
              '4개 캠퍼스·750명 규모에서 최상위 8개 팀으로 전국 입상'
            ]
          }
        ]
      },
      {
        eyebrow: '프로젝트 02 · Motion Pose',
        title: 'Node-RED Motion Pose',
        message: '카메라 기반 동작 인식을 Node-RED와 SmartThings 환경에서 활용할 수 있게 만든 공개 프로젝트',
        variant: 'proof',
        compactProjectLayout: true,
        projectRail: {
          title: 'Node-RED Motion Pose',
          period: '2021.08.23–10.08 (총 7주)',
          message: '카메라 기반 동작 인식을 Node-RED와 SmartThings 환경에서 활용할 수 있게 만든 공개 프로젝트',
          items: [
            { label: '도메인', title: 'AI · IoT · Node-RED' },
            { label: '팀', title: '5인 팀 · 팀장' },
            { label: '역할', title: 'Node-RED 개발 · 발표 · 배포' }
          ]
        },
        visualPlaceholder: {
          label: 'NODE·PACKAGE STRUCTURE',
          title: '9개 Node-RED 노드와 배포 구조',
          description: '신체·손 동작 인식, 등록·탐색, 모니터링 기능을 재사용 가능한 노드로 분리한 구조',
          image: {
            src: '/portfolio/images/portfolio-evidence/motion-pose-nodes.png',
            alt: 'Motion Pose에서 개발한 9개 Node-RED 노드 목록'
          }
        },
        primaryItems: [
        {
          label: '기술 구성',
          title: '사용 기술과 버전',
          specs: [
            { label: '실행 환경', value: 'Node.js 14.17.3 · Node-RED 2.0.6' },
            { label: '동작 인식', value: 'MediaPipe BlazePose · Hands' },
            { label: '통신·서버', value: 'Socket.IO 4.2.0 · Express 4.17.1' },
            { label: '배포', value: 'npm package 1.1.3 · Node-RED Library' }
          ]
        },
        {
          label: '담당 구현',
          title: '주요 담당 범위',
          scope: '손동작 인식 · Node-RED · 배포 · 외부 기여',
          entries: [
            'Hands Pose Node의 손동작 인식 흐름 구현',
            '손동작 등록과 인식 결과 탐색 기능 구현',
            'Node-RED에서 재사용 가능한 노드 단위로 기능화',
            '9개 노드를 npm·Node-RED Library에 배포',
            'Samsung Automation Studio PR #46·#47 기여'
          ]
        }
        ]
      },
      {
        eyebrow: '프로젝트 02 · Motion Pose',
        title: '입력부터 결과까지 이어지는 동작 인식 흐름',
        message: '',
        variant: 'process',
        compactProjectLayout: true,
        projectRail: {
          title: 'Node-RED Motion Pose',
          period: '2021.08.23–10.08 (총 7주)',
          message: '카메라 기반 동작 인식을 Node-RED와 SmartThings 환경에서 활용할 수 있게 만든 공개 프로젝트',
          items: [
            { label: '도메인', title: 'AI · IoT · Node-RED' },
            { label: '팀', title: '5인 팀 · 팀장' },
            { label: '역할', title: 'Node-RED 개발 · 발표 · 배포' }
          ]
        },
        visualPlaceholder: {
          label: 'NODE FLOW CHART',
          title: '카메라 입력부터 결과 전달까지',
          description: '카메라 입력이 동작 인식과 등록·탐색을 거쳐 Node-RED 흐름으로 연결되는 과정',
          image: {
            src: '/portfolio/images/portfolio-evidence/motion-pose-sequence-diagram.png',
            alt: 'Motion Pose의 카메라 입력부터 동작 인식과 결과 전달까지의 시퀀스 다이어그램'
          }
        },
        primaryItems: [
          {
            label: '01',
            title: '카메라 입력·랜드마크 추출',
            entries: [
              '웹캠·SmartThings 외부 카메라 입력을 pose-detect-webcam·pose-detect-iotcam 노드로 분리',
              'MediaPipe BlazePose·Hands 기반 신체·손 랜드마크 추출',
              '실시간 프레임 처리 결과를 다음 인식 단계로 전달'
            ]
          },
          {
            label: '02',
            title: '등록·탐색 결과와 Node-RED 연동',
            entries: [
              'pose-register·pose-find 노드로 동작 데이터 저장 및 유사도 탐색',
              'hand-register·hand-find 노드로 손동작 등록·탐색 기능 구성',
              'monitor·WebSocket으로 인식 결과를 자동화 플로우에 전달',
              '감지·등록·탐색 기능을 Node-RED에서 조합 가능한 구조로 모듈화'
            ]
          }
        ]
      },
      {
        eyebrow: '프로젝트 02 · Motion Pose',
        title: '오픈소스 배포·기여·발표',
        message: '',
        variant: 'outcome',
        compactProjectLayout: true,
        projectRail: {
          title: 'Node-RED Motion Pose',
          period: '2021.08.23–10.08 (총 7주)',
          message: '카메라 기반 동작 인식을 Node-RED와 SmartThings 환경에서 활용할 수 있게 만든 공개 프로젝트',
          items: [
            { label: '도메인', title: 'AI · IoT · Node-RED' },
            { label: '팀', title: '5인 팀 · 팀장' },
            { label: '역할', title: 'Node-RED 개발 · 발표 · 배포' }
          ]
        },
        visualPlaceholder: {
          label: '오픈소스 활동 기록',
          title: 'npm·Node-RED Library·오픈소스 기여 기록',
          description: '패키지 공개, 오픈소스 PR 병합, 프로젝트 발표 활동을 정리했습니다.',
          image: {
            src: '/portfolio/images/portfolio-evidence/motion-pose-prs.png',
            alt: 'Samsung Automation Studio에 병합된 Motion Pose PR #46과 #47'
          }
        },
        primaryItems: [
          {
            label: '01',
            title: 'npm·Node-RED Library 배포',
            entries: [
              '동작 인식 Node-RED 노드 9개를 npm package 1.1.3으로 공개',
              'Node-RED Library 등록 및 웹캠·SmartThings 카메라 입력 지원',
              '한 주간 600건 이상 다운로드 기록'
            ]
          },
          {
            label: '02',
            title: '오픈소스 기여·발표',
            entries: [
              'Samsung Automation Studio PR #46·#47 병합',
              '공개 PR에서 10개 이상의 코드 리뷰 코멘트를 받고 구현 보완',
              'SSDC 2021 Share에서 배포·오픈소스·IoT 활용 흐름 발표'
            ]
          }
        ]
      }
    ];
  }

  return [
    {
      eyebrow: 'Project 01 · Safers',
      title: 'Safers',
      message: 'A web and metaverse service that delivers environmental information through interactive experiences.',
      variant: 'proof',
      compactProjectLayout: true,
      projectRail: {
        title: 'Safers',
        period: 'Oct 12–Nov 19, 2021 (6 weeks)',
        message: 'A service that delivers environmental information through interactive experiences.',
        items: [
          { label: 'Domain', title: 'Web · Metaverse' },
          { label: 'Team', title: 'Five-person team · Team lead' },
          { label: 'Role', title: 'Backend · Infrastructure · ML · Presentation' }
        ]
      },
      image: {
        src: '/portfolio/images/portfolio-evidence/safers-architecture.png',
        alt: 'Safers application architecture diagram'
      },
      primaryItems: [
        {
          label: 'Technology',
          title: 'Technologies and versions',
          description: 'The main technologies and runtime environment used for the project.',
          specs: [
            { label: 'Language', value: 'Java 8' },
            { label: 'Backend', value: 'Spring Boot 2.5.6 · JPA' },
            { label: 'Web · platform', value: 'Vue 2.6.14 · Unity 2019.4.32f1 · Photon 2.38' },
            { label: 'Data · infra', value: 'MySQL 8.0.22 · AWS EC2/S3 · Jenkins 2.303.2 · nginx 1.18.0' },
            { label: 'ML', value: 'Teachable Machine Image 0.8.5 · MobileNet 2.1.0' }
          ]
        },
        {
          label: 'Implementation',
          title: 'Key responsibilities',
          scope: 'Backend · API · Deployment · ML',
          entries: [
            'Designed data structures for users, animals, maps, missions, and logs',
            'Contributed to the design and implementation of core APIs for users, boards, and Unity integration',
            'Connected Unity WebGL with server data',
            'Configured the service environment on AWS EC2 and S3',
            'Built the Jenkins and nginx CI/CD flow',
            'Applied ML-based image mission validation'
          ]
        }
      ]
    },
    {
      eyebrow: 'Project 01 · Safers',
      title: 'API design across the service flow',
      message: '',
      variant: 'process',
      compactProjectLayout: true,
      projectRail: {
        title: 'Safers',
        period: 'Oct 12–Nov 19, 2021 (6 weeks)',
        message: 'A service that delivers environmental information through interactive experiences.',
        items: [
          { label: 'Domain', title: 'Web · Metaverse' },
          { label: 'Team', title: 'Five-person team · Team lead' },
          { label: 'Role', title: 'Backend · Infrastructure · ML · Presentation' }
        ]
      },
      visualPlaceholder: {
        label: 'API FLOW CHART',
        title: 'Endpoint · client · server · database flow',
        description: 'Request flow from user authentication to mission completion and the next content query.',
        image: {
          src: '/portfolio/images/portfolio-evidence/safers-api-sequence.png',
          alt: 'Safers API sequence diagram for authentication and mission completion'
        }
      },
      primaryItems: [
          {
            label: '01',
            title: 'Shared code and content data design',
            description: 'Designed a structure that supports future service expansion.',
            entries: [
              'Designed four shared-code groups and fourteen detail codes',
              'Defined data and initial values for three maps, thirty-two animals, and thirty missions',
              'Connected state values and next-mission relations to the API flow'
            ]
          },
          {
            label: '02',
            title: 'Unity WebGL and server integration design',
            entries: [
              'Connected the user-authentication and initial-state flow after login',
              'Integrated user, mission, and animal data between Vue, Unity WebGL, and Spring Boot APIs',
              'Structured the API flow from mission-result storage to next-content state updates'
            ]
          }
      ]
    },
    {
      eyebrow: 'Project 01 · Safers',
      title: 'Outcome and external validation',
      message: '',
      variant: 'outcome',
      compactProjectLayout: true,
      projectRail: {
        title: 'Safers',
        period: 'Oct 12–Nov 19, 2021 (6 weeks)',
        message: 'A service that delivers environmental information through interactive experiences.',
        items: [
          { label: 'Domain', title: 'Web · Metaverse' },
          { label: 'Team', title: 'Five-person team · Team lead' },
          { label: 'Role', title: 'Backend · Infrastructure · ML · Presentation' }
        ]
      },
      visualPlaceholder: {
        label: 'EXTERNAL VALIDATION',
        title: 'Service applicability confirmation',
        description: 'Confirmed external applicability through institutional inquiries and service introduction.',
        image: {
          src: '/portfolio/images/portfolio-evidence/safers-external-validation.png',
          alt: 'National Institute of Ecology inquiry page and Safers service introduction email'
        }
      },
      primaryItems: [
          {
          label: '01',
          title: 'Operational foundation',
          entries: [
            'Resolved Jenkins·SSH issues and established an automated deployment flow',
            'Documented the reproduction, fix, and redeployment flow for deployment-version errors',
            'Documented deployment response procedures for repeated team use'
          ]
          },
          {
          label: '02',
          title: 'External validation and project result',
          entries: [
            'Confirmed a positive response from the National Institute of Ecology',
            'Communicated externally about using IUCN Red List information',
            'Placed first among eight teams in the SSAFY 5th autonomous project',
            'Won nationally as one of the top eight teams across four campuses and 750 participants'
          ]
          }
      ]
    },
    {
      eyebrow: 'Project 02 · Motion Pose',
      title: 'Node-RED Motion Pose',
      message: 'A public project that made camera-based motion recognition usable in Node-RED and SmartThings environments.',
      variant: 'proof',
      compactProjectLayout: true,
      projectRail: {
        title: 'Node-RED Motion Pose',
        period: 'Aug 23–Oct 8, 2021 (7 weeks)',
        message: 'A public project that made camera-based motion recognition usable in Node-RED and SmartThings environments.',
        items: [
          { label: 'Domain', title: 'AI · IoT · Node-RED' },
          { label: 'Team', title: '5-person team · Team lead' },
          { label: 'Role', title: 'Node-RED development · Presentation · Distribution' }
        ]
      },
      visualPlaceholder: {
        label: 'NODE · PACKAGE STRUCTURE',
        title: 'Nine Node-RED nodes and distribution structure',
        description: 'A structure that separates motion recognition, registration, discovery, and monitoring into reusable nodes.',
        image: {
          src: '/portfolio/images/portfolio-evidence/motion-pose-nodes.png',
          alt: 'Nine Node-RED nodes developed for Motion Pose'
        }
      },
      primaryItems: [
        {
          label: 'Technology',
          title: 'Technologies and versions',
          description: 'The technologies used for motion recognition and Node-RED distribution.',
          specs: [
            { label: 'Runtime', value: 'Node.js 14.17.3 · Node-RED 2.0.6' },
            { label: 'Recognition', value: 'MediaPipe BlazePose · Hands' },
            { label: 'Communication · server', value: 'Socket.IO 4.2.0 · Express 4.17.1' },
            { label: 'Distribution', value: 'npm package 1.1.3 · Node-RED Library' }
          ]
        },
        {
          label: 'Implementation',
          title: 'Key responsibilities',
          scope: 'Hand recognition · Node-RED · Distribution · Contribution',
          entries: [
            'Built the hand-recognition flow for the Hands Pose Node',
            'Implemented hand registration and result discovery',
            'Packaged the features as reusable Node-RED nodes',
            'Published nine nodes to npm and the Node-RED Library',
            'Contributed PRs #46 and #47 to Samsung Automation Studio'
          ]
        }
      ]
    },
    {
      eyebrow: 'Project 02 · Motion Pose',
      title: 'From input to result: motion-recognition flow',
      message: '',
      variant: 'process',
      compactProjectLayout: true,
      projectRail: {
        title: 'Node-RED Motion Pose',
        period: 'Aug 23–Oct 8, 2021 (7 weeks)',
        message: 'A public project that made camera-based motion recognition usable in Node-RED and SmartThings environments.',
        items: [
          { label: 'Domain', title: 'AI · IoT · Node-RED' },
          { label: 'Team', title: '5-person team · Team lead' },
          { label: 'Role', title: 'Node-RED development · Presentation · Distribution' }
        ]
      },
      visualPlaceholder: {
        label: 'NODE FLOW CHART',
        title: 'From camera input to result delivery',
        description: 'The flow from camera input through motion recognition, registration, discovery, and Node-RED delivery.',
        image: {
          src: '/portfolio/images/portfolio-evidence/motion-pose-sequence-diagram.png',
          alt: 'Motion Pose sequence diagram from camera input through recognition and result delivery'
        }
      },
        primaryItems: [
          {
            label: '01',
          title: 'Camera input · landmark extraction',
          entries: [
            'Separated webcam and SmartThings camera inputs with pose-detect-webcam and pose-detect-iotcam',
            'Extracted body and hand landmarks with MediaPipe BlazePose and Hands',
            'Passed real-time frame results to the next recognition step'
          ]
          },
          {
            label: '02',
          title: 'Registration · discovery · Node-RED integration',
          entries: [
            'Saved motion data and searched for similarity with pose-register and pose-find',
            'Configured hand registration and discovery with hand-register and hand-find',
            'Delivered recognition results to the automation flow through monitor and WebSocket',
            'Modularized detection, registration, and discovery for composition in Node-RED'
          ]
          }
      ]
    },
    {
      eyebrow: 'Project 02 · Motion Pose',
      title: 'Open-source release · contribution · presentation',
      message: '',
      variant: 'outcome',
      compactProjectLayout: true,
      projectRail: {
        title: 'Node-RED Motion Pose',
        period: 'Aug 23–Oct 8, 2021 (7 weeks)',
        message: 'A public project that made camera-based motion recognition usable in Node-RED and SmartThings environments.',
        items: [
          { label: 'Domain', title: 'AI · IoT · Node-RED' },
          { label: 'Team', title: '5-person team · Team lead' },
          { label: 'Role', title: 'Node-RED development · Presentation · Distribution' }
        ]
      },
      visualPlaceholder: {
        label: 'OPEN-SOURCE ACTIVITY RECORD',
        title: 'npm · Node-RED Library · open-source contribution record',
        description: 'Package release, open-source PR merges, and project presentation activities.',
        image: {
          src: '/portfolio/images/portfolio-evidence/motion-pose-prs.png',
          alt: 'Merged Motion Pose pull requests #46 and #47 in Samsung Automation Studio'
        }
      },
        primaryItems: [
          {
            label: '01',
          title: 'npm · Node-RED Library release',
          entries: [
            'Published nine motion-recognition nodes as npm package 1.1.3',
            'Registered the package in the Node-RED Library and supported webcam and SmartThings cameras',
            'Recorded more than 600 downloads in one week'
          ]
          },
          {
            label: '02',
          title: 'Open-source contribution and presentation',
          entries: [
            'Merged PRs #46 and #47 into Samsung Automation Studio',
            'Received 10+ code review comments on public PRs and refined the implementation',
            'Presented the release, open-source contribution, and IoT use case flow at SSDC 2021 Share'
          ]
          }
      ]
    }
  ];
};

export const portfolioSlides = {
  developer: {
    ko: [
      {
        eyebrow: '표지',
        title: '운영 요구를 제품 기능으로 전환하는 백엔드 개발자',
        message:
          'Java/Spring Boot 기반 서버를 개발·운영하며, 복잡한 요구를 API·데이터·공통 기능으로 구조화합니다.',
        variant: 'cover',
        image: {
          src: '/portfolio/images/portfolio-evidence/developer-profile.png',
          alt: '개발자 당현아 프로필 이미지'
        },
        primaryItems: [
          { label: '역할', title: '백엔드 개발자', description: 'Java/Spring Boot 서버 기능 개발 및 운영' },
          { label: '초점', title: 'API · 데이터 · 운영', description: '요구사항을 구현 가능한 서버 흐름으로 정리' },
          { label: '강점', title: '공유 가능한 구조', description: '팀이 이해하고 이어갈 수 있는 구조와 기록' }
        ],
        tags: ['Java', 'Spring Boot', '백엔드', '운영']
      },
      {
        eyebrow: '커리어 맵',
        title: '커리어 맵',
        message:
          '연구와 교육을 거쳐 운영 요구를 제품 기능으로 구조화하는 현업 개발로 이어진 경력',
        variant: 'career-map',
        primaryItems: [
          {
            label: '2019',
            title: 'ETRI 연구 인턴',
            description: 'AI 기반 영상 편집 과제에서 프레임 편집 UI와 배경 제거 실험 흐름 구현',
            meta: 'Python 3.6, Tkinter, OpenCV, GrabCut\nPillow, NumPy, Keras, scikit-learn',
            employmentType: '방학 중 학생 인턴 · 연구연수생',
            role: '영상 편집 도구 개발\n2인 팀 프로젝트',
            work:
              'Tkinter 기반 프레임 편집 UI 구현\nGrabCut 기반 수동 배경 제거 기능 구현\nCNN 기반 자동 배경 제거 실험\n학습 레이어와 입력 사이즈 조정\n사용자가 실험 조건을 선택할 수 있는 흐름 구성',
            outcome:
              '수동 편집 결과와 자동 판별 결과를 F-measure 기준으로 비교\n사용자가 실험 조건을 선택하고 결과를 확인할 수 있는 도구 흐름으로 연결'
          },
          {
            label: '2021-22',
            title: 'SSAFY 프로젝트 실습코치',
            description: '교육생 프로젝트 코칭 · 코치 운영 기준 정리',
            meta: '프로젝트 및 발표 코칭, Git, Linux/CLI 배포\n서버 운영 지원, 운영 정보 문서화',
            employmentType: '계약 프리랜서',
            role: '프로젝트 실습코치(6-7기 담당)\n신규 코치 OJT 및 업무 안내',
            work:
              '6회 프로젝트 기간 동안 66개 팀의 기획부터 발표까지 코칭\n삼성전자 연계 프로젝트 코칭과 운영 지원\n실습코치 업무 보고, 서류 처리 양식, 베스트 케이스 샘플 정리\n라이브 개발 세션 약 15회 진행 및 정식 업무 매뉴얼화\n오픈소스 관리와 트윈캠퍼스 서울 담당 업무 운영',
            outcome:
              '6기·7기 프로젝트 운영 범위와 신규 코치 업무 기준 정리\n외부 연계 프로젝트, 라이브 세션, 운영 문서화 업무를 정식 프로세스로 정돈'
          },
          {
            label: '2024-Now',
            title: 'Bigxdata Data솔루션팀 / 선임',
            description:
              '초기 BI 포탈을 데이터 포털 제품으로 확장하며 제품 기능과 운영 기반을 구축',
            meta: 'Java 8-17, Spring Boot 2.x-3.4.5, JPA/MyBatis/QueryDSL\nPostgreSQL/Oracle/MariaDB/MySQL, Swagger',
            employmentType: '정규직 · 선임',
      role: '제품 기능·공통 관리·데이터 카탈로그 담당\n제품 구조 전환·다양한 운영 환경 대응',
      work:
        'DBMS 관리 기능을 기획·설계·개발·테스트까지 제품 기능으로 구현\nPostgreSQL·Oracle 지원과 Flyway 기반 DB 변경 관리 적용\n메일·템플릿 공통 기능을 개발하고 다양한 운영 환경의 영향도 검토\n약 3~4개월간 패치 배포의 설계·업무 배정·구현 흐름 담당\n제품 구조 전환 과정에서 시각화·DBMS 기능을 개발하고 공통 관리·데이터 카탈로그·큐레이션까지 담당 범위 확장',
      outcome:
        'DBMS 관리 기능을 다양한 운영 환경에 적용 가능한 제품 기능으로 연결\n제품 구조 전환 과정에서 확장 가능한 기능 구조 마련에 기여\n데이터 포털 확장과 공통 관리·카탈로그 기능 기반 마련'
          }
        ]
      },
      {
        eyebrow: '사용 가능한 기술',
        title: '사용 가능한 기술',
        message:
          '실무와 프로젝트에서 사용한 기술을 활용 수준별로 정리했습니다.',
        variant: 'career',
        primaryItems: [
          {
            label: '언어',
            title: 'Java',
            description: 'Java 8~17 기반 서버 로직을 구현하고 런타임 오류와 응답 모델 영향을 검증했습니다.',
            meta: '4',
            icon: '/portfolio/images/tech/java.svg',
            tags: ['Java 8-17', '서버 로직', '오류 추적']
          },
          {
            label: '프레임워크',
            title: 'Spring Boot',
            description: 'Spring Boot 2~3.4.5 기반 제품에서 API, 데이터 접근, WAS 구성을 고려해 개발했습니다.',
            meta: '5',
            icon: '/portfolio/images/tech/springboot.svg',
            tags: ['Boot 2-3.4', 'JPA/MyBatis', 'Tomcat']
          },
          {
            label: 'API 설계',
            title: 'REST API',
            description: 'API 설계부터 구현까지 수행하고 권한·환경 조건에 따른 API 흐름을 개발했습니다.',
            meta: '4',
            icon: '/portfolio/images/tech/rest-api.svg',
            tags: ['권한 분기', '조건형 API', 'Swagger']
          },
          {
            label: '데이터베이스',
            title: 'DBMS',
            description: 'PostgreSQL, MariaDB, MySQL 기반 서비스 DB 설계와 마이그레이션, 조회 개선을 수행했습니다.',
            meta: '4',
            icon: '/portfolio/images/tech/dbms.svg',
            tags: ['PostgreSQL', '마이그레이션', '인덱스']
          },
          {
            label: '웹 서버',
            title: 'Nginx',
            description: '서비스 운영 요구에 맞춰 서버 버전 업그레이드와 보안 헤더 설정을 점검했습니다.',
            meta: '4',
            icon: '/portfolio/images/tech/nginx.svg',
            tags: ['버전 대응', '보안 헤더', '운영 점검']
          },
          {
            label: '클라우드',
            title: 'AWS',
            description: '개발·운영 환경에서 로드밸런싱, RDS, 모니터링 구성을 경험했습니다.',
            meta: '3',
            icon: '/portfolio/images/tech/aws.svg',
            tags: ['로드밸런싱', 'RDS', '모니터링']
          },
          {
            label: '버전 관리',
            title: 'Git',
            description: '팀 컨벤션을 만들고 적용하며, 운영 중인 컨벤션에 맞춰 변경 흐름을 관리했습니다.',
            meta: '4',
            icon: '/portfolio/images/tech/git.svg',
            tags: ['컨벤션', '커밋 단위', 'Push']
          },
          {
            label: '협업 도구',
            title: 'Atlassian',
            description: 'Jira와 Confluence 정보를 구조화하고 팀 단위 주기 공유사항을 정리했습니다.',
            meta: '4',
            icon: '/portfolio/images/tech/atlassian.svg',
            tags: ['Jira', 'Confluence', '팀 공유']
          },
          {
            label: '개발 지원',
            title: 'AI 활용',
            description: '팀 공용 AI setup과 스킬 구조를 정리해 실제 팀 컨벤션으로 적용했습니다.',
            meta: '5',
            icon: '/portfolio/images/tech/ai-support.svg',
            tags: ['Codex', 'Claude', '문서화']
          }
        ],
        secondaryItems: [
          {
            label: '제품화',
            title: '제품화 과정 참여',
            description: '기존 프로젝트를 제품형 포털 서비스로 확장하는 과정에서 기능 흐름을 정리하며 개발에 참여했습니다.',
            tags: ['제품형 서비스', '복수 환경', '제품화']
          },
          {
            label: '구조 전환',
            title: '확장 구조 전환 경험',
            description: '제품 구조 전환 과정에서 기능 경계와 공통 흐름을 고려해 확장 가능한 구조로 개발했습니다.',
            tags: ['제품 확장', '구조 전환', '공통 영역']
          },
          {
            label: '공통 기능',
            title: '공통·허브 기능 기여',
            description: '특정 기능 모듈 경험을 바탕으로 공통·허브성 기능까지 담당 범위를 넓혔습니다.',
            tags: ['공통 기능', '허브성 기능', '확장 기능']
          },
          {
            label: '개발 체계',
            title: '팀 개발 체계 정리',
            description: 'AI 활용 흐름을 팀 컨벤션으로 정리하고, Confluence 지식과 온보딩 자료를 꾸준히 관리했습니다.',
            tags: ['AI 컨벤션', 'Confluence', '온보딩 자료']
          }
        ]
      },
      ...developerProjectSlides('ko'),
      {
        eyebrow: '개발 방식',
        title: '개발 방식과 AI 활용',
        message: 'Codex와 Claude를 개발 흐름에 활용하고, 결과는 팀 기준과 검증 절차를 거쳐 반영했습니다.',
        variant: 'ai-practice',
        decisionFlow: [
          { title: '반복 작업 발견', description: '재사용할 업무 흐름 인지' },
          { title: '팀 사용 사례 확인', description: '사용 방식과 요구 파악' },
          { title: '적용 범위 합의', description: '리더 검토와 회의로 기준 조율' },
          { title: '공용 환경 구현', description: 'setup·skill·가이드 구성' },
          { title: '실제 업무 검증', description: '반복 업무에 적용하고 확인' },
          { title: '팀 문서화·공개', description: '재사용 기준과 자료로 정리' }
        ],
        primaryItems: [
          {
            label: '팀 기준',
            title: '공용 AI 환경 정리',
            entryDetails: [
              {
                date: '01',
                title: '공용 setup·skill 구조 정리',
                description: '반복 작업에 적용할 기본 환경과 재사용 단위 구성'
              },
              {
                date: '02',
                title: '팀 사용 기준 문서화',
                description: '업무 맥락과 보안 범위를 고려한 사용 원칙 정리'
              }
            ]
          },
          {
            label: '검증과 책임',
            title: '검증 후 반영',
            entryDetails: [
              {
                date: '01',
                title: '테스트·빌드·diff로 변경 확인',
                description: '실제 실행 결과로 동작과 영향 범위 검증'
              },
              {
                date: '02',
                title: '공식 문서와 프로젝트 코드 대조',
                description: '버전과 환경에 맞는 적용 가능성 확인'
              }
            ]
          },
          {
            label: '팀 적용과 확장',
            title: '반복 업무의 공용화',
            entryDetails: [
              {
                date: '01',
                title: '팀 회의에서 적용 범위 공유',
                description: '사용 사례와 의견을 바탕으로 공용화 범위 결정'
              },
              {
                date: '02',
                title: 'Confluence·온보딩 자료 정리',
                description: '팀원이 다시 사용할 수 있는 기준과 예시 작성'
              }
            ]
          }
        ]
      }
    ],
    en: [
      {
        eyebrow: 'Cover',
        title: 'Backend developer turning operational needs into product features',
        message:
          'I build and operate Java/Spring Boot servers, turning complex requirements into API, data, and shared product capabilities.',
        variant: 'cover',
        image: {
          src: '/portfolio/images/portfolio-evidence/developer-profile.png',
          alt: 'Developer profile image of Dang Hyeona'
        },
        primaryItems: [
          { label: 'Role', title: 'Backend Developer', description: 'Java/Spring Boot server feature development and operations' },
          { label: 'Focus', title: 'API · Data · Operation', description: 'Turning requirements into implementable server flows' },
          { label: 'Strength', title: 'Shareable Structure', description: 'Structures and records that teams can understand and continue' }
        ],
        tags: ['Java', 'Spring Boot', 'Backend', 'Operation']
      },
      {
        eyebrow: 'Career Map',
        title: 'Development flow through work experience',
        message:
          'A path from research and education to production development focused on turning operational needs into product capabilities',
        variant: 'career-map',
        primaryItems: [
          {
            label: '2019',
            title: 'ETRI Research Intern',
            description: 'Frame-editing UI and background-removal experiment flow for an AI-based video editing project',
            meta: 'Python 3.6, Tkinter, OpenCV, GrabCut\nPillow, NumPy, Keras, scikit-learn',
            employmentType: 'Summer intern · research trainee',
            role: 'Video editing tool development\n2-person project team',
            work:
              'Built a Tkinter-based frame editing UI\nImplemented GrabCut-based manual background removal\nExperimented with CNN-based automatic background removal\nAdjusted learning layers and input sizes\nConfigured a flow where users can select experiment conditions',
            outcome:
              'Compared manual editing and automatic detection results using the F-measure\nConnected the experiment to a tool flow where users can select conditions and review results'
          },
          {
            label: '2021-22',
            title: 'SSAFY Project Practice Coach',
            description: 'Student project coaching · coach operations standards',
            meta: 'Project and presentation coaching, Git, Linux/CLI deployment\nServer operation support, operation documentation',
            employmentType: 'Contract freelance',
            role: 'Project practice coach for SSAFY 6th-7th cohorts\nNew-coach OJT and work guidance',
          work:
            'Coached 66 teams from planning through presentation across six project cycles\nSupported coaching and operations for Samsung Electronics-linked projects\nOrganized reporting templates, document workflows, and best-case samples for practice coaches\nLed about 15 live development sessions and formalized the workflow as an operation manual\nOperated open-source management and Twin Campus Seoul responsibilities',
            outcome:
              'Defined project operation scope and new-coach work standards for SSAFY 6th-7th cohorts\nOrganized external-linked projects, live sessions, and operation documentation into formal processes'
          },
          {
            label: '2024-Now',
            title: 'Bigxdata Data Solutions Team / Senior',
            description:
              'Expanded an initial BI portal into a data portal product while building product capabilities and operational foundations.',
            meta: 'Java 8-17, Spring Boot 2.x-3.4.5, JPA/MyBatis/QueryDSL\nPostgreSQL/Oracle/MariaDB/MySQL, Swagger',
            employmentType: 'Full-time · senior',
      role: 'Product features, shared management, and data catalog ownership\nProduct structure transition and diverse operating environments',
      work:
        'Built a DBMS management feature end to end, from planning and design through development and testing.\nSupported PostgreSQL and Oracle with Flyway-based database change management.\nBuilt shared email delivery and template features while reviewing impact across diverse operating environments.\nCovered patch-release design, task assignment, and implementation for about three to four months.\nImplemented visualization and DBMS features during the product structure transition, then expanded ownership into shared management, data catalog, and curation features.',
      outcome:
        'Connected DBMS management capabilities to product features usable across diverse operating environments.\nContributed to a product structure transition that improved feature extensibility.\nBuilt a foundation for data portal expansion through shared management and catalog capabilities.'
          }
        ]
      },
      {
        eyebrow: 'Technical Skills',
        title: 'Technical Skills',
        message:
          'Technologies organized by usage level across work and project experience.',
        variant: 'career',
        primaryItems: [
          {
            label: 'Language',
            title: 'Java',
            description: 'Built Java 8-17 server logic and verified runtime errors and response model impact.',
            meta: '4',
            icon: '/portfolio/images/tech/java.svg',
            tags: ['Java 8-17', 'Server Logic', 'Debugging']
          },
          {
            label: 'Framework',
            title: 'Spring Boot',
            description: 'Developed Spring Boot 2-3.4.5 product features with API, data access, and WAS structure in mind.',
            meta: '5',
            icon: '/portfolio/images/tech/springboot.svg',
            tags: ['Boot 2-3.4', 'JPA/MyBatis', 'Tomcat']
          },
          {
            label: 'API Design',
            title: 'REST API',
            description: 'Handled API design through implementation, including auth and environment-based API flows.',
            meta: '4',
            icon: '/portfolio/images/tech/rest-api.svg',
            tags: ['Auth Branch', 'Condition API', 'Swagger']
          },
          {
            label: 'Database',
            title: 'DBMS',
            description: 'Worked on service DB design, migration, and query improvement with PostgreSQL, MariaDB, and MySQL.',
            meta: '4',
            icon: '/portfolio/images/tech/dbms.svg',
            tags: ['PostgreSQL', 'Migration', 'Index']
          },
          {
            label: 'Web Server',
            title: 'Nginx',
            description: 'Reviewed server version upgrades and security header settings for service operations.',
            meta: '4',
            icon: '/portfolio/images/tech/nginx.svg',
            tags: ['Version Response', 'Security Headers', 'Ops Check']
          },
          {
            label: 'Cloud',
            title: 'AWS',
            description: 'Worked with load balancing, RDS, and monitoring setup for development and operations environments.',
            meta: '3',
            icon: '/portfolio/images/tech/aws.svg',
            tags: ['Load Balancing', 'RDS', 'Monitoring']
          },
          {
            label: 'Version Control',
            title: 'Git',
            description: 'Created and applied team conventions while adapting to established production conventions.',
            meta: '4',
            icon: '/portfolio/images/tech/git.svg',
            tags: ['Convention', 'Commit Scope', 'Push']
          },
          {
            label: 'Collaboration Tool',
            title: 'Atlassian',
            description: 'Structured Jira and Confluence information and organized recurring team-level shared updates.',
            meta: '4',
            icon: '/portfolio/images/tech/atlassian.svg',
            tags: ['Jira', 'Confluence', 'Team Share']
          },
          {
            label: 'Development Support',
            title: 'AI-assisted Development',
            description: 'Organized shared AI setup and skill structure that became an actual team convention.',
            meta: '5',
            icon: '/portfolio/images/tech/ai-support.svg',
            tags: ['Codex', 'Claude', 'Documentation']
          }
        ],
        secondaryItems: [
          {
            label: 'PRODUCT',
            title: 'Productization Experience',
            description: 'Participated in expanding an existing project into a productized portal service by organizing feature flows.',
            tags: ['Productized Service', 'Multiple Environments', 'Productization']
          },
          {
            label: 'ARCH',
            title: 'Scalable Structure Transition',
            description: 'Developed an extensible structure by considering feature boundaries and shared flows during a product structure transition.',
            tags: ['Product Scaling', 'Structure Transition', 'Shared Area']
          },
          {
            label: 'COMMON',
            title: 'Shared & Hub Feature Contribution',
            description: 'Expanded my ownership from specific feature modules into shared areas and hub-like features.',
            tags: ['Shared Feature', 'Hub-like Feature', 'Extension']
          },
          {
            label: 'SYSTEM',
            title: 'Team Development System',
            description: 'Organized AI usage flows as a team convention and continuously managed Confluence knowledge and onboarding materials.',
            tags: ['AI Convention', 'Confluence', 'Onboarding Materials']
          }
        ]
      },
      ...developerProjectSlides('en'),
      {
        eyebrow: 'Development Practice',
        title: 'Development Practice and AI',
        message: 'I use Codex and Claude in the development flow, applying changes only after team standards and verification.',
        variant: 'ai-practice',
        decisionFlow: [
          { title: 'Spot recurring work', description: 'Identify a reusable work pattern' },
          { title: 'Review team usage', description: 'Understand current use and needs' },
          { title: 'Agree on scope', description: 'Align criteria through review and discussion' },
          { title: 'Build shared setup', description: 'Configure setup, skills, and guidance' },
          { title: 'Verify in practice', description: 'Apply to recurring work and check results' },
          { title: 'Document and share', description: 'Turn it into reusable team guidance' }
        ],
        primaryItems: [
          {
            label: 'Team Standards',
            title: 'Shared AI Environment',
            entryDetails: [
              {
                date: '01',
                title: 'Structuring shared setup and skills',
                description: 'Building the base environment and reusable units'
              },
              {
                date: '02',
                title: 'Documenting team usage criteria',
                description: 'Defining usage principles around context and security'
              }
            ]
          },
          {
            label: 'Verification and Ownership',
            title: 'Verify Before Applying',
            entryDetails: [
              {
                date: '01',
                title: 'Checking tests, builds, and diffs',
                description: 'Verifying behavior and impact through execution'
              },
              {
                date: '02',
                title: 'Comparing docs with project code',
                description: 'Checking fit with the actual version and environment'
              }
            ]
          },
          {
            label: 'Team Adoption and Scale',
            title: 'Making Recurring Work Shared',
            entryDetails: [
              {
                date: '01',
                title: 'Sharing scope in team discussions',
                description: 'Defining the shared scope from use cases and feedback'
              },
              {
                date: '02',
                title: 'Preparing Confluence and onboarding materials',
                description: 'Writing criteria and examples for continued reuse'
              }
            ]
          }
        ]
      }
    ]
  },
  instructor: {
    ko: [
      {
        eyebrow: '표지',
        title: '현업 개발 경험을 가진 백엔드 강사',
        message:
          '실무에서 서버를 개발하고 운영한 경험을 바탕으로, 학습자가 개념을 구현과 프로젝트 산출물로 연결하도록 돕습니다.',
        variant: 'cover',
        image: { src: '/portfolio/images/portfolio-evidence/instructor-profile.png', alt: '강사 당현아 프로필 이미지' },
        primaryItems: [
          { label: '분야', title: '백엔드 · 프로젝트 코칭', description: '백엔드 학습과 프로젝트 수행 흐름 코칭' },
          { label: '경험', title: '현업 백엔드 개발', description: '현업 서버 개발과 운영 경험 기반 설명' },
          { label: '멘토링', title: '이력서 · 포트폴리오', description: '프로젝트 경험을 문서와 산출물로 정리하도록 피드백' },
          { label: '강의', title: '자료구조 · 알고리즘', description: '개념 이해와 구현 흐름을 연결하는 강의' }
        ],
        tags: ['강의', '멘토링', '프로젝트 코칭']
      },
      ...createPlanningSlides('ko')
    ],
    en: [
      {
        eyebrow: 'Cover',
        title: 'Backend instructor with hands-on industry experience',
        message:
          'I use practical server development and operations experience as context while focusing this portfolio on lectures, mentoring, and project coaching.',
        variant: 'cover',
        image: { src: '/portfolio/images/portfolio-evidence/instructor-profile.png', alt: 'Instructor profile image of Dang Hyeona' },
        primaryItems: [
          { label: 'Area', title: 'Backend · Project Coaching', description: 'Coaching backend learning and project execution flow' },
          { label: 'Experience', title: 'Production Backend', description: 'Explaining from hands-on server development and operations experience' },
          { label: 'Mentoring', title: 'Resume · Portfolio', description: 'Reviewing project experience into documents and artifacts' },
          { label: 'Lecture', title: 'Data Structures · Algorithms', description: 'Connecting concepts to implementation flow' }
        ],
        tags: ['Lecture', 'Mentoring', 'Project Coaching']
      },
      ...createPlanningSlides('en')
    ]
  }
} as const satisfies Record<PortfolioTrack, Record<PortfolioLanguage, readonly PortfolioSlide[]>>;
