# Vijob 클론 코딩 과제

## 실행
```node
> npm i
> npm run dev
```

## 참고사항
### 카드 리스트
- ListMockup.tsx 는 Mockup 데이터로 인피니티 스크롤.
<br/>
- ListInfiniteQuery.tsx 는 InfiniteQuery 를 이용한 인피니티 스크롤
=> supabase 디비 연결, next server api 사용. (검색, index 데이터 가져오기 등의 기능들을 제외하고 단순 목록 가져오기만 작업)
=> app/[lng]/(isFooter)/job/page.tsx 에서 60, 61번째 라인으로 교체하며 사용가능.

### 폴더 구조
- 다국어를 위해 app바로 아래에 [lng] 폴더부터 시작, 디테일페이지에는 bottomMenu가 없으니 (isFooter) 그룹으로 job 폴더의 구분.

### ui
- Storybook은 직접 관리중인 snow-white-ui 사용 https://www.npmjs.com/package/snow-white-ui
=> 기존 버튼에서 vijob 테마 추가, carditem 추가 해서 2개 사용했습니다. 
<br/>
- 메인의 logo는 publick/logo/logo-vijob.black.svg와 publick/logo/logo-vijob.black.svg 가 있지만 단순히 색상만 변경되는 것이기에 components/icon 에서 컴포넌트로 분리하여 기본값을 white를 가지고 색변경이 용이하게 수정.
<br/>
- ui 작업은 노가다여서 메인까지만 작업했습니다. 메인의 왼쪽 부분의 vijob AI 부분의 배경은 로티가 사용되었습니다. (lottie 컴포넌트 위치 : components/lottie/LottieContainer.tsx)



### style
- main은 module을 쓰고 작성할 css 속성이 3개 이하인것들만 tailwind를 쓰고 있습니다.
tailwind.config.js에는 tailwind의 기본 rem단위를 px로 바꿔서 사용중입니다. 

## 세부 요구사항
### 1. 홈 페이지
- 카드 목록에 **Infinite Scroll** 기능 적용 [ ○ ]
  - ListMockup.tsx 는 목업 데이터로 인피니티 스크롤, ListInfiniteQuery.tsx 는 InfiniteQuery 를 이용한 인피니티 스크롤. 2가지 경우를 만들어봤습니다. 
- 상세 페이지로 이동 후 돌아왔을 때, **목록 상태 유지** [ ○ ]
- **Mock 데이터**를 사용하여 API 요청을 대체 [ ○ ]

### 2. 다국어 지원

- **기본 언어**: 한국어 [ ○ ]
- **Context API**를 활용하여, 언어 선택 기능 (번역본은 번역기나, **AI**를 활용하여 데이터를 만들어 사용하세요) [ ○ ]

## 3. 테스트 코드

- **Storybook**을 사용하여 UI 컴포넌트 작성 (가능한 선에서 2개 정도) [ ○ ]
  
- **Jest**를 이용하여 **테스트 코드** 작성 (Given-When-Then 패턴) (가능한 선에서 2개 정도) [ ○ ]

## 추가 요청 사항

- 제공된 **디자인**에 최대한 근접한 UI 구현 [ ○ ]
- 프로젝트 실행 방법이 포함된 **README 파일** [ ○ ]

## 제공 사항

- 일부 아이콘 및 이미지 (/public/images, /public/icons, ...)
- 폰트 (/public/fonts)
- 일부 문구 (/src/data/strings.json)
- 광역시도 및 시군구 데이터 (/src/data/provinces.json, /src/data/cities.json)
- 일자리 카테고리 데이터 (/src/data/job-categories.json)
- 일자리 데이터 참고용 샘플 (/src/data/job.sample.json)
- 과제 수행 중에 필요한 수정은 얼마든지 하셔도 좋습니다 ദ്ദിㆁᴗㆁ✿)

## 제출물

- **GitHub 저장소 링크**를 **service@vijob.net** 으로 보내주세요

## 기한

- 별도 안내 (사정이 있으신 경우 회신 부탁드려요)
