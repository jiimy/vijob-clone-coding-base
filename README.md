# Vijob 클론 코딩 과제

## 실행
```node
> npm i
> npm run dev
```

## 참고사항 (임시)
- ListMockup.tsx 는 목업 데이터로 인피니티 스크롤
- ListInfiniteQuery.tsx 는 InfiniteQuery 를 이용한 인피니티 스크롤
=> supabase 디비 연결, next server api 사용.
=> supabase 디비 공유 - 패스워드 1234
- Storybook은 직접 관리중인 snow-white-ui 사용 https://www.npmjs.com/package/snow-white-ui

### style
main은 module을 쓰고 작성할 css 속성이 3개 이하인것들만 tailwind를 쓰고 있습니다.
tailwind.config.js에는 tailwind의 기본 rem단위를 px로 바꿔서 사용중입니다. 

## 세부 요구사항

### 1. 홈 페이지

- 카드 목록에 **Infinite Scroll** 기능 적용 [o]
  - ListMockup.tsx 는 목업 데이터로 인피니티 스크롤, ListInfiniteQuery.tsx 는 InfiniteQuery 를 이용한 인피니티 스크롤. 2가지 경우를 만들어봤습니다. 
- 상세 페이지로 이동 후 돌아왔을 때, **목록 상태 유지** [o]
- **Mock 데이터**를 사용하여 API 요청을 대체

### 2. 다국어 지원

- **기본 언어**: 한국어
- **Context API**를 활용하여, 언어 선택 기능 (번역본은 번역기나, **AI**를 활용하여 데이터를 만들어 사용하세요)

## 3. 테스트 코드

- **Storybook**을 사용하여 UI 컴포넌트 작성 (가능한 선에서 2개 정도) 
  
- **Jest**를 이용하여 **테스트 코드** 작성 (Given-When-Then 패턴) (가능한 선에서 2개 정도)

## 추가 요청 사항

- 제공된 **디자인**에 최대한 근접한 UI 구현
- 프로젝트 실행 방법이 포함된 **README 파일**

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
