import type { PortfolioLanguage, PortfolioTrack } from './portfolio';

export type PortfolioSlideVariant =
  | 'cover'
  | 'activity-overview'
  | 'representative-career'
  | 'teaching-areas'
  | 'career-map'
  | 'career'
  | 'timeline'
  | 'skills'
  | 'proof'
  | 'process'
  | 'teaching-cycle'
  | 'teaching-case'
  | 'feedback'
  | 'teaching-principles'
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
  period?: string;
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
  periodLabel?: string;
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

export interface PortfolioSupportingImage {
  src: string;
  alt: string;
  caption?: string;
  crop?: 'service-1' | 'service-2' | 'personal-2';
}

export interface PortfolioSlide {
  eyebrow: string;
  title: string;
  message: string;
  variant: PortfolioSlideVariant;
  summaryLabel?: string;
  careerStats?: readonly {
    label: string;
    value: string;
    description?: string;
  }[];
  careerFormats?: readonly {
    label: string;
    description: string;
  }[];
  decisionFlow?: readonly {
    title: string;
    description: string;
  }[];
  foundation?: {
    label: string;
    value: string;
  };
  phaseLabels?: readonly [string, string];
  compactProjectLayout?: boolean;
  projectRail?: PortfolioProjectRail;
  visualPlaceholder?: PortfolioVisualPlaceholder;
  supportingImages?: readonly PortfolioSupportingImage[];
  image?: {
    src: string;
    alt: string;
  };
  primaryItems: readonly PortfolioSlideItem[];
  secondaryItems?: readonly PortfolioSlideItem[];
  tags?: readonly string[];
}

const instructorSlides = (language: PortfolioLanguage): PortfolioSlide[] => {
  if (language === 'ko') {
    return [
      {
        eyebrow: '표지',
        title: '개발·교육·사업을 연결해온 백엔드 강사',
        message: '현업 개발과 원투원프로그래밍 1인 사업을 바탕으로,\n학습자의 개념·구현·결과물 연결을 코칭했습니다.',
        variant: 'cover',
        image: { src: '/portfolio/images/portfolio-evidence/instructor-profile.png', alt: '강사 당현아 프로필 이미지' },
        primaryItems: [
          { label: '분야', title: '백엔드 · 프로젝트 코칭', description: '백엔드 학습과 프로젝트 수행 흐름 코칭' },
          { label: '경험', title: '현업 백엔드 개발', description: '현업 서버 개발과 운영 경험 기반 설명' },
          { label: '멘토링', title: '이력서 · 포트폴리오', description: '프로젝트 경험을 문서와 산출물로 정리하도록 피드백' }
        ],
        tags: ['백엔드 강의', '자료구조·알고리즘', '1:1 프로그래밍', '프로젝트 실습 코칭', 'Git 협업·PR 리뷰', '커리어 문서 멘토링']
      },
      {
        eyebrow: '강사 경력',
        title: '대표 강사 경력',
        message: '전체 활동 규모를 먼저 보고, 아래 대표 경력에서 기관·역할·대상을 확인할 수 있습니다.',
        variant: 'representative-career',
        careerStats: [
          { label: '교육 활동 누적', value: '약 6년', description: '겹치는 기간과 공백을 제외한 실제 활동 기준' },
          { label: '공개 교육·멘토링 기록', value: '14건', description: '공개된 교육·멘토링 경험 기록 기준' },
          { label: '교육 방식', value: '6종', description: '활동 형태별 진행 방식 기준' }
        ],
        careerFormats: [
          { label: '1:1', description: '학습 목표와 수준에 맞춘 개인 맞춤형 수업' },
          { label: '프로젝트', description: '팀 단위 구현과 협업을 함께 다루는 실습' },
          { label: '강의', description: '실시간·녹화 기반의 개념·코드 실습 강의' },
          { label: '특강', description: '하나의 주제를 압축해 전달하는 단기 집중 세션' },
          { label: '멘토링', description: '성장과 진로를 함께 정리하는 지속적인 대화' },
          { label: '코칭', description: '진행 상황을 점검하고 결과물 완성을 돕는 피드백' }
        ],
        primaryItems: [
          {
            label: '01',
            title: 'ICT콤플렉스 전문가 멘토',
            description: 'ICT CoC 전문가 멘토풀 | 공공 멘토링',
            period: '2025.09–2027.08',
            employmentType: '전문가 멘토',
            role: 'SW개발 · 개발자 취업 코칭',
            scope: '개발자 · 예비·기창업자 · 학생'
          },
          {
            label: '02',
            title: '제로베이스 백엔드 파트 강사',
            description: '데이원컴퍼니(제로베이스) | 백엔드 스쿨',
            period: '2025.03–2028.02',
            employmentType: '파트 강사',
            role: '자료구조 · 알고리즘 강의',
            scope: '약 12강 · Java 예제 · 문제 풀이'
          },
          {
            label: '03',
            title: 'SSAFY 프로젝트 실습코치',
            description: '멀티캠퍼스·삼성청년SW아카데미 | 6·7기',
            period: '2021.12–2022.11',
            employmentType: '계약 프리랜서',
            role: '공통·SSDC·자율 프로젝트 지원',
            scope: '66개 팀 · 6회 · 라이브 약 15회'
          },
          {
            label: '04',
            title: '원투원프로그래밍',
            description: '개인 사업 | 온라인 1:1 프로그래밍 교육',
            period: '2020.04–2020.10',
            employmentType: '개인사업 대표',
            role: '교육 운영 · 커리큘럼 설계 · 강의',
            scope: '상담 · 체험강의 · 수업 · 과제·피드백'
          }
        ],
        secondaryItems: [
          { label: '특강', title: '동양미래대학교 다솜', description: '현직자 특강 · 나의 커리어 디자인하기' },
          { label: '공개 강좌', title: 'SW중심대학', description: '개발자 성장과 학습 방법 7강 기획·강의·제작' },
          { label: '멘토링', title: '인제대학교 SW중심대학사업단', description: '프로젝트·이력서·포트폴리오·Git 협업 피드백' }
        ]
      },
      {
        eyebrow: '교육 영역',
        title: '강의와 코칭에서 다루는 주제',
        message: '개인 수업, 강의, 프로젝트 코칭, 멘토링에서 반복해온 교육 내용을 정리했습니다.',
        variant: 'teaching-areas',
        primaryItems: [
          {
            label: '01',
            title: '기초 프로그래밍',
            description: '개인별 목표와 현재 수준에 맞춰 문법과 문제 해결의 기본기를 다룹니다.',
            entries: ['학습 목표와 현재 수준에 맞춰 수업 범위 설정', '문법·문제 해결을 과제와 피드백으로 반복']
          },
          {
            label: '02',
            title: '자료구조·알고리즘',
            description: '자료구조의 선택 이유를 Java 구현과 문제 풀이로 연결합니다.',
            entries: ['판서로 자료구조의 특징과 선택 기준 설명', '샘플 코드와 예제로 구현·풀이 과정 점검']
          },
          {
            label: '03',
            title: '팀 프로젝트·협업',
            description: '팀이 기능을 완성하고 협업 과정과 결과를 발표할 수 있도록 지원합니다.',
            entries: ['요구사항을 기능 단위와 산출물로 정리', 'Git 협업·배포·발표 흐름을 단계별로 피드백']
          },
          {
            label: '04',
            title: '프로젝트 기록·커리어 문서',
            description: '프로젝트 경험을 지원 문서에서 설명 가능한 기록으로 정리하도록 돕습니다.',
            entries: ['직무 목표에 맞춰 이력서·포트폴리오 구조화', 'Git 기록과 피드백 반영 과정을 점검']
          }
        ]
      },
      {
        eyebrow: '교육 흐름',
        title: '강의 설계와 운영 사이클',
        message: '제안부터 후기 반영까지, 학습자와 목표를 기준으로 수업을 설계·운영·개선합니다.',
        variant: 'teaching-cycle',
        foundation: {
          label: '상시 준비',
          value: '관심 주제 학습 · 예제·실습 자료화'
        },
        phaseLabels: ['설계', '운영·개선'],
        primaryItems: [
          { label: '01', title: '강의 제안·요청 확인', description: '주제, 기간, 운영 조건을 확인합니다.' },
          { label: '02', title: '대상·학습 목표 설정', description: '학습자 수준과 수업 후 결과를 정합니다.' },
          { label: '03', title: '사전 조사 (필요 시)', description: '수요와 질문을 확인해 사례와 난이도를 조정합니다.' },
          { label: '04', title: '강의안·실습 자료 준비', description: '예제, 실습, 과제와 보조 자료를 구성합니다.' },
          { label: '05', title: '강의 운영', description: '설명·실습·질의응답으로 이해도를 확인합니다.' },
          { label: '06', title: '후기 수집·다음 강의 보완', description: '후기를 정리해 자료와 운영 방식을 개선합니다.' }
        ]
      },
      {
        eyebrow: '대표 사례 01',
        title: '백엔드 개념을 구현으로 연결하는 강의',
        message: '제로베이스 백엔드 스쿨 녹화 강의에서 자료구조와 기초 알고리즘을 Java 구현과 문제 풀이로 설명합니다.',
        variant: 'teaching-case',
        compactProjectLayout: true,
        projectRail: {
          title: '제로베이스 백엔드 스쿨',
          period: '2025.03–진행 중',
          message: '개념 이해를 코드 작성과 문제 해결 과정으로 연결하는 백엔드 녹화 강의입니다.',
          items: [
            { label: '대상', title: '백엔드 학습자' },
            { label: '범위', title: '자료구조 · 기초 알고리즘' },
            { label: '역할', title: '파트 강사 · 녹화' }
          ]
        },
        supportingImages: [
          {
            src: '/portfolio/images/portfolio-evidence/zerobase-mentor-network.jpeg',
            alt: '제로베이스 백엔드 스쿨 현직자 강사진 및 취업 연계 자료',
            caption: '현직자 강사진으로 참여한 백엔드 취업 스쿨'
          },
          {
            src: '/portfolio/images/portfolio-evidence/zerobase-lecture-materials.jpeg',
            alt: '제로베이스 백엔드 스쿨 강의 자료와 커리큘럼',
            caption: '자료구조·기초 알고리즘을 직접 판서한 강의 자료'
          }
        ],
        primaryItems: [
          { label: '01', title: '자료구조와 기초 알고리즘을 단계별 구성', entries: ['환경 설정부터 핵심 개념까지 학습 순서 구성', '직접 작성한 판서와 Java 예제로 녹화 강의 제작'] },
          { label: '02', title: '문제 풀이로 구현 감각 연결', entries: ['문제의 입력·상태·출력 흐름 설명', '풀이 과정과 복잡도를 비교하며 적용 기준 정리'] }
        ]
      },
      {
        eyebrow: '대표 사례 02',
        title: '공개 콘텐츠로 확장한 온라인 강좌',
        message: 'SW중심대학 온라인 공개 강좌를 기획·강의·제작하며 개발자 성장과 학습 방법을 공개 콘텐츠로 정리했습니다.',
        variant: 'teaching-case',
        compactProjectLayout: true,
        projectRail: {
          title: 'SW중심대학 온라인 공개 강좌',
          periodLabel: '구성',
          period: '7강 공개 강좌',
          message: '개발자 성장과 학습 방법을 학습자가 스스로 따라갈 수 있는 온라인 강좌로 제작했습니다.',
          items: [
            { label: '대상', title: '개발자·학습자' },
            { label: '범위', title: '성장 · 학습 방법' },
            { label: '역할', title: '기획 · 강의 · 제작' }
          ]
        },
        supportingImages: [
          {
            src: '/portfolio/images/portfolio-evidence/sw-centered-course-list.jpeg',
            alt: 'SW중심대학 온라인 공개 강좌 목록',
            caption: '개발자 성장과 학습 방법을 다룬 7개 강좌 구성'
          },
          {
            src: '/portfolio/images/portfolio-evidence/sw-centered-youtube-playlist.jpeg',
            alt: 'SW중심대학 온라인 공개 강좌 유튜브 재생목록',
            caption: '공개 채널에서 운영한 7강 재생목록과 강의 시간'
          }
        ],
        primaryItems: [
          { label: '01', title: '7강으로 설계한 개발자 성장 로드맵', entries: ['코딩의 역할·코드 관리·시간 관리·트러블슈팅 등 성장 주제를 순서화', '각 차시를 독립 수강 가능한 30~40분대 영상으로 구성'] },
          { label: '02', title: '공개 채널에 맞춘 강의 제작', entries: ['강의별 제목·썸네일·재생목록을 통일해 탐색과 복습 흐름 제공', '기획·강의·영상 제작을 맡아 7강 공개 콘텐츠 완성'] }
        ]
      },
      {
        eyebrow: '대표 사례 03',
        title: '개인 목표에 맞춘 1:1 교육 서비스 설계',
        message: '원투원프로그래밍에서 상담부터 체험 강의, 수업, 과제와 피드백까지의 교육 경험을 직접 설계했습니다.',
        variant: 'teaching-case',
        compactProjectLayout: true,
        projectRail: {
          title: '원투원프로그래밍',
          period: '2020.04–2020.10',
          message: '학습 목표와 현재 수준을 기준으로 수업을 설계한 온라인 1:1 프로그래밍 교육입니다.',
          items: [
            { label: '대상', title: '개인 학습자' },
            { label: '운영 범위', title: '상담 · 체험 · 수업 · 과제 · 피드백' },
            { label: '역할', title: '대표 · 강사' }
          ]
        },
        supportingImages: [
          {
            src: '/portfolio/images/portfolio-evidence/one-to-one-consultation-form.png',
            alt: '원투원 프로그래밍 과외 계획서',
            caption: '상담 내용을 기준으로 수업 범위와 계획을 확정'
          },
          {
            src: '/portfolio/images/portfolio-evidence/one-to-one-lecture-materials.png',
            alt: '원투원 프로그래밍 강의 자료 모음',
            caption: '기초 문법부터 예제까지 미리 제작한 강의 자료'
          }
        ],
        primaryItems: [
          { label: '01', title: '상담부터 수업까지의 학습 경로', entries: ['상담으로 목표와 제약 조건 확인', '체험 강의 후 수업 범위와 속도 조정'] },
          { label: '02', title: '개별 과제와 피드백 운영', entries: ['수업 후 구현 과제와 보조 자료 제공', '질문과 결과를 다음 수업에 반영'] }
        ]
      },
      {
        eyebrow: '수강생 후기',
        title: '강의 이후에 남은 변화',
        message: '김과외·숨고에서 받은 강의 후기와 이후의 개발 교류를 통해 수업 준비, 맞춤형 진행, 학습의 지속을 확인했습니다.',
        variant: 'feedback',
        supportingImages: [
          {
            src: '/portfolio/images/portfolio-evidence/one-to-one-service-reviews.png',
            alt: '수업 준비와 반복 설명을 언급한 김과외 및 숨고 강의 후기',
            caption: '김과외 · 숨고 강의 후기',
            crop: 'service-1'
          },
          {
            src: '/portfolio/images/portfolio-evidence/one-to-one-service-reviews.png',
            alt: '맞춤형 진도와 적절한 난이도를 언급한 김과외 및 숨고 강의 후기',
            caption: '맞춤형 진도와 학습 자료',
            crop: 'service-2'
          },
          {
            src: '/portfolio/images/portfolio-evidence/one-to-one-personal-reviews.png',
            alt: '강의 수강 이후 이어진 개발 관련 연락',
            caption: '수강 이후 이어진 개발 관련 연락',
            crop: 'personal-2'
          }
        ],
        primaryItems: [
          { label: '강의 후기 01', title: '준비된 설명과 반복 확인', description: '수업 전 준비와 이해되지 않는 부분을 반복해서 설명한 경험이 후기에서 확인됩니다.' },
          { label: '강의 후기 02', title: '학습자에 맞춘 진도와 자료', description: '개인의 수준에 맞춘 진도, 적절한 난이도의 문제와 보조 자료가 언급되었습니다.' },
          { label: '개발 교류', title: '수강 이후 이어진 개발 교류', description: '수강을 마친 뒤에도 개발 학습과 진로에 관한 연락을 꾸준히 이어가고 있습니다.' }
        ]
      },
      {
        eyebrow: '강의 기준',
        title: '현직 개발을 교육으로 이어가는 이유',
        message: '설명하는 과정에서 개발 지식과 판단 기준을 다시 정리합니다. 직접 경험하고 충분히 구조화해 명확히 전달할 수 있는 주제만 강의합니다.',
        variant: 'teaching-principles',
        foundation: {
          label: '핵심 목표',
          value: '자신에게 맞는 학습·커리어 방향을 정하고 스스로 다음 단계로 나아가도록 돕습니다.'
        },
        primaryItems: [
          { label: '강의 주제', title: '경험하고 정리한 주제만', description: '요청에 맞춰 새롭게 익힌 내용보다 현업과 학습 과정에서 직접 경험하고 충분히 정리한 주제를 전달합니다.' },
          { label: '교육 목표', title: '경험은 정답이 아닌 참고 기준', description: '제 시행착오와 선택 기준을 바탕으로 학습자가 자신에게 맞는 학습 방법과 커리어 방향을 찾도록 돕습니다.' },
          { label: '교육 나눔', title: '교육 기회가 적은 곳을 우선', description: '비영리기관·학교·학생의 요청에 가능한 범위에서 참여하며, 일정이 겹치면 정보 접근성이 낮은 학습자를 우선합니다.' }
        ],
        secondaryItems: [
          {
            label: '제안 안내',
            title: '기술 강의 · 커리어 특강 · 멘토링',
            description: '현재 제공하는 주제 범위 안에서 제안을 받으며, 비영리기관·학교·학생을 위한 교육 나눔 문의도 환영합니다.'
          }
        ]
      }
    ];
  }

  return [
    {
      eyebrow: 'Cover',
      title: 'A backend instructor connecting development, education, and business',
      message: 'I combine hands-on development and the One-to-One Programming business,\nthen coach learners from concepts to implementation and outcomes.',
      variant: 'cover',
      image: { src: '/portfolio/images/portfolio-evidence/instructor-profile.png', alt: 'Instructor profile image of Dang Hyeona' },
      primaryItems: [
        { label: 'Area', title: 'Backend · Project Coaching', description: 'Coaching backend learning and project execution flow' },
        { label: 'Experience', title: 'Production Backend', description: 'Explaining from hands-on server development and operations experience' },
        { label: 'Mentoring', title: 'Resume · Portfolio', description: 'Reviewing project experience into documents and artifacts' }
      ],
      tags: ['Backend teaching', 'Data structures & algorithms', '1:1 programming', 'Project practice coaching', 'Git collaboration & PR review', 'Career document mentoring']
    },
      {
      eyebrow: 'Instructor Experience',
        title: 'Representative Instructor Experience',
        message: 'Review the overall activity scale first, then the representative roles, organizations, and audiences below.',
        variant: 'representative-career',
        careerStats: [
          { label: 'Teaching activity', value: 'About 6 years', description: 'Based on active periods, excluding gaps and overlaps' },
          { label: 'Public teaching · mentoring records', value: '14', description: 'Publicly documented teaching and mentoring activities' },
          { label: 'Teaching formats', value: '6', description: 'Distinct delivery formats' }
        ],
        careerFormats: [
          { label: '1:1', description: 'Personalized sessions based on each learner’s goals and level' },
          { label: 'Projects', description: 'Hands-on work covering team implementation and collaboration' },
          { label: 'Lectures', description: 'Live and recorded lectures combining concepts and code practice' },
          { label: 'Talks', description: 'Short, focused sessions that distill a single topic' },
          { label: 'Mentoring', description: 'Ongoing conversations about growth and career direction' },
          { label: 'Coaching', description: 'Feedback that guides progress toward a complete outcome' }
        ],
      primaryItems: [
        { label: '01', title: 'ICT CoC Expert Mentor', description: 'ICT CoC expert mentor pool | Public mentoring', period: '2025.09–2027.08', employmentType: 'Expert mentor', role: 'Software development · Developer career coaching', scope: 'Developers · Aspiring/founding teams · Students' },
        { label: '02', title: 'ZeroBase Backend Part Instructor', description: 'Day1Company (ZeroBase) | Backend School', period: '2025.03–2028.02', employmentType: 'Part instructor', role: 'Data structures · Algorithms lectures', scope: 'Approx. 12 lectures · Java examples · Problem solving' },
        { label: '03', title: 'SSAFY Project Practice Coach', description: 'Multicampus · Samsung SW Academy for Youth | Cohorts 6–7', period: '2021.12–2022.11', employmentType: 'Contract freelancer', role: 'Common · SSDC · Autonomous project support', scope: '66 teams · 6 cycles · About 15 live sessions' },
        { label: '04', title: 'One-to-One Programming', description: 'Personal business | Online 1:1 programming education', period: '2020.04–2020.10', employmentType: 'Business owner', role: 'Education operations · Curriculum · Lectures', scope: 'Consultation · Trial lesson · Classes · Assignments/feedback' }
      ],
      secondaryItems: [
        { label: 'Special lecture', title: 'Dongyang Mirae University Dasom', description: 'Practitioner lecture · Designing my career' },
        { label: 'Open course', title: 'SW-Centered University', description: 'Planned, taught, and produced a 7-part developer growth course' },
        { label: 'Mentoring', title: 'Inje University SW-Centered University', description: 'Project · resume · portfolio · Git collaboration feedback' }
      ]
      },
    {
      eyebrow: 'Teaching Areas',
      title: 'Topics across my teaching and coaching',
      message: 'This page summarizes recurring teaching topics from 1:1 instruction, lectures, project coaching, and mentoring.',
      variant: 'teaching-areas',
      primaryItems: [
        {
          label: '01',
          title: 'Programming fundamentals',
          description: 'Cover syntax and problem-solving fundamentals at each learner’s goal and current level.',
          entries: ['Set the lesson scope around the learner’s goal and current level', 'Reinforce syntax and problem solving through assignments and feedback']
        },
        {
          label: '02',
          title: 'Data structures and algorithms',
          description: 'Connect data-structure choices with Java implementations and problem solving.',
          entries: ['Explain structure characteristics and selection criteria on a whiteboard', 'Review implementation and solution flow with code examples']
        },
        {
          label: '03',
          title: 'Team projects and collaboration',
          description: 'Help teams complete features, collaborate effectively, and present their outcomes.',
          entries: ['Organize requirements into feature units and project artifacts', 'Give step-by-step feedback on Git, deployment, and presentations']
        },
        {
          label: '04',
          title: 'Project records and career documents',
          description: 'Help learners turn project experience into records they can explain in application materials.',
          entries: ['Structure resumes and portfolios around career goals', 'Review Git records and how feedback was applied']
        }
      ]
    },
      {
      eyebrow: 'Teaching Cycle',
      title: 'How I design and run a course',
      message: 'From the initial request to feedback, I design, run, and improve each course around learners and outcomes.',
      variant: 'teaching-cycle',
      foundation: {
        label: 'Ongoing preparation',
        value: 'Independent study · reusable examples and practice materials'
      },
      phaseLabels: ['Design', 'Delivery and improvement'],
      primaryItems: [
        { label: '01', title: 'Confirm the request', description: 'Confirm the topic, schedule, and delivery constraints.' },
        { label: '02', title: 'Set audience and outcomes', description: 'Define learner level and the expected result.' },
        { label: '03', title: 'Survey learners when needed', description: 'Use questions and demand to calibrate examples and difficulty.' },
        { label: '04', title: 'Prepare materials and practice', description: 'Build examples, exercises, assignments, and supporting material.' },
        { label: '05', title: 'Run the course', description: 'Check understanding through explanation, practice, and Q&A.' },
        { label: '06', title: 'Collect feedback and improve', description: 'Use feedback to refine materials and the next course.' }
      ]
      },
    {
      eyebrow: 'Case 01',
      title: 'Connecting backend concepts to implementation',
      message: 'At ZeroBase Backend School, I teach data structures and foundational algorithms through recorded Java lessons and problem solving.',
      variant: 'teaching-case',
      compactProjectLayout: true,
      projectRail: { title: 'ZeroBase Backend School', period: '2025.03–Ongoing', message: 'A recorded backend course that connects conceptual understanding with coding and problem-solving processes.', items: [{ label: 'Audience', title: 'Backend learners' }, { label: 'Scope', title: 'Data structures · Foundational algorithms' }, { label: 'Role', title: 'Part instructor · Recorded' }] },
      supportingImages: [
        {
          src: '/portfolio/images/portfolio-evidence/zerobase-mentor-network.jpeg',
          alt: 'ZeroBase Backend School industry mentor and employment network material',
          caption: 'Participation as an industry instructor in a backend employment school'
        },
        {
          src: '/portfolio/images/portfolio-evidence/zerobase-lecture-materials.jpeg',
          alt: 'ZeroBase Backend School lecture materials and curriculum',
          caption: 'Lecture materials with handwritten data structures and algorithm notes'
        }
      ],
      primaryItems: [
        { label: '01', title: 'Structure data structures and algorithms step by step', entries: ['Organize the learning sequence from setup to core concepts', 'Build recorded lessons with handwritten notes and Java examples'] },
        { label: '02', title: 'Connect problem solving to implementation', entries: ['Explain the input, state, and output flow of each problem', 'Compare solution flow and complexity to clarify when to apply it'] }
      ]
    },
    {
      eyebrow: 'Case 02',
      title: 'An online course expanded through public content',
      message: 'I planned, taught, and produced an SW-Centered University open course on developer growth and learning methods.',
      variant: 'teaching-case',
      compactProjectLayout: true,
      projectRail: { title: 'SW-Centered University Open Course', periodLabel: 'Format', period: '7-part open course', message: 'A self-paced online course that organizes developer growth and learning methods into a repeatable learning flow.', items: [{ label: 'Audience', title: 'Developers · Learners' }, { label: 'Scope', title: 'Growth · Learning methods' }, { label: 'Role', title: 'Planning · Teaching · Production' }] },
      supportingImages: [
        { src: '/portfolio/images/portfolio-evidence/sw-centered-course-list.jpeg', alt: 'SW-Centered University open course list', caption: 'Seven lessons on developer growth and learning methods' },
        { src: '/portfolio/images/portfolio-evidence/sw-centered-youtube-playlist.jpeg', alt: 'SW-Centered University open course YouTube playlist', caption: 'A public seven-part playlist with lesson runtimes' }
      ],
      primaryItems: [
        { label: '01', title: 'A seven-part roadmap for developer growth', entries: ['Sequence topics from coding and code management to time management and troubleshooting', 'Structure each lesson as an independently viewable 30 to 40-minute video'] },
        { label: '02', title: 'Produce for a public learning channel', entries: ['Standardize lesson titles, thumbnails, and playlist order for browsing and review', 'Own planning, teaching, and video production across seven public lessons'] }
      ]
    },
    {
      eyebrow: 'Case 03',
      title: 'Designing a goal-aligned 1:1 education service',
      message: 'At One-to-One Programming, I designed the education experience from consultation and trial lessons to classes, assignments, and feedback.',
      variant: 'teaching-case',
      compactProjectLayout: true,
      projectRail: { title: 'One-to-One Programming', period: '2020.04–2020.10', message: 'An online 1:1 programming education service designed around learning goals and current skill level.', items: [{ label: 'Audience', title: 'Individual learners' }, { label: 'Scope', title: 'Consultation · Trial · Classes · Assignments · Feedback' }, { label: 'Role', title: 'Founder · Instructor' }] },
      supportingImages: [
        { src: '/portfolio/images/portfolio-evidence/one-to-one-consultation-form.png', alt: 'One-to-One Programming lesson plan', caption: 'Confirming scope and plan from the consultation' },
        { src: '/portfolio/images/portfolio-evidence/one-to-one-lecture-materials.png', alt: 'One-to-One Programming lecture materials', caption: 'Prepared materials from fundamentals to examples' }
      ],
      primaryItems: [
        { label: '01', title: 'A learning path from consultation to class', entries: ['Confirm goals and constraints through consultation', 'Adjust scope and pace after the trial lesson'] },
        { label: '02', title: 'Individual assignments and feedback', entries: ['Provide implementation assignments and supporting material', 'Reflect questions and outcomes in the next class'] }
      ]
    },
    {
      eyebrow: 'Course Reviews',
      title: 'Changes that remain after learning',
      message: 'Course reviews from KimGwaoe and Soomgo, together with later developer conversations, show prepared instruction, individualized pacing, and continued learning.',
      variant: 'feedback',
      supportingImages: [
        {
          src: '/portfolio/images/portfolio-evidence/one-to-one-service-reviews.png',
          alt: 'KimGwaoe and Soomgo reviews mentioning lesson preparation and repeated explanations',
          caption: 'KimGwaoe · Soomgo learner reviews',
          crop: 'service-1'
        },
        {
          src: '/portfolio/images/portfolio-evidence/one-to-one-service-reviews.png',
          alt: 'A KimGwaoe and Soomgo course review mentioning individualized pacing and suitable difficulty',
          caption: 'Individualized pacing and materials',
          crop: 'service-2'
        },
        {
          src: '/portfolio/images/portfolio-evidence/one-to-one-personal-reviews.png',
          alt: 'Ongoing conversations about development after completing a course',
          caption: 'Development conversations after the course',
          crop: 'personal-2'
        }
      ],
      primaryItems: [
        { label: 'Course review 01', title: 'Prepared explanations and repeated checks', description: 'The review confirms lesson preparation and repeated explanations for points that were not yet understood.' },
        { label: 'Course review 02', title: 'Pacing and materials tailored to the learner', description: 'The review mentions individualized pacing, appropriately difficult problems, and supporting materials.' },
        { label: 'Developer connection', title: 'Development conversations after the course', description: 'I continue to exchange messages about development learning and career direction after the course.' }
      ]
    },
    {
      eyebrow: 'Teaching Principles',
      title: 'Why I continue teaching alongside development',
      message: 'Teaching helps me reorganize my technical knowledge and decision criteria. I teach only topics I have directly experienced, structured, and can explain with clarity.',
      variant: 'teaching-principles',
      foundation: {
        label: 'Core goal',
        value: 'Help learners choose a learning and career direction that fits them and take the next step independently.'
      },
      primaryItems: [
        { label: 'Course topics', title: 'Teach only experienced, structured topics', description: 'Rather than learning a new topic solely for a request, I teach subjects grounded in my work and learning experience and organized in advance.' },
        { label: 'Teaching goal', title: 'Experience as a reference, not an answer', description: 'I share decisions and mistakes so learners can find a learning method and career direction that fits them.' },
        { label: 'Education access', title: 'Prioritize learners with fewer opportunities', description: 'I support nonprofit, school, and student requests when possible and prioritize learners with less access when schedules overlap.' }
      ],
      secondaryItems: [
        {
          label: 'Open to proposals',
          title: 'Technical courses · Career talks · Mentoring',
          description: 'I welcome proposals within my current teaching topics, including education-sharing requests from nonprofits, schools, and students.'
        }
      ]
    }
  ];
};

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
            description: 'AI 영상 프레임 편집 UI·배경 제거 실험 구현',
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
    ko: instructorSlides('ko'),
    en: instructorSlides('en')
  }
} as const satisfies Record<PortfolioTrack, Record<PortfolioLanguage, readonly PortfolioSlide[]>>;
