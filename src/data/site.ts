export const siteMeta = {
  title: 'Portfolio',
  brand: '당현아 포트폴리오',
  subtitle: '독립 포트폴리오 사이트',
  tagline: '문제 정의와 해결 과정을 보여주는 프로젝트 아카이브',
  description:
    '대표 프로젝트와 핵심 결과를 빠르게 훑어볼 수 있도록 정리한 당현아의 싱글 페이지 포트폴리오 사이트입니다.',
  siteUrl: 'https://hadevyi.github.io/portfolio/',
  rootPath: '/portfolio/',
  repoUrl: 'https://github.com/hadevyi/portfolio'
} as const;

export const mainNav = [
  {
    href: '/portfolio/',
    label: '홈',
    description: '포트폴리오 메인 페이지'
  },
  {
    href: 'https://hadevyi.github.io/',
    label: '공식 홈페이지',
    description: '공식 홈페이지로 돌아가기',
    external: true
  },
  {
    href: 'https://github.com/hadevyi/portfolio',
    label: '저장소',
    description: '이 사이트 저장소 보기',
    external: true
  }
] as const;

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/hadevyi'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hadevyi/'
  }
] as const;
