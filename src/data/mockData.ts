// mockData.ts
export const mockDataTest = Array.from({ length: 100 }).map((_, index) => ({
  id: index + 1,
  title: `Item ${index + 1}`,
  description: `Description for item ${index + 1}`,
}));

export type MockDataType = {
  title: string;
  content: {
    ko: string;
    en: string;
  };
  schedule: {
    ko: string;
    en: string;
  };
  pay: {
    ko: string;
    en: string;
  };
  recruit: {
    ko: string;
    en: string;
  };
};


export const mockData = [
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
  {
    title: "sk매직 은행지국",
    content: {
      ko: "제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축",
      en: "Promoting products and services, providing regular product management and consultation services, providing regular visitation services, coordinating appointments with customers, and establishing a stable income system",
    },
    schedule: {
      ko: "협의 가능",
      en: "Consultation is possible",
    },
    pay: {
      ko: "월급 2,000,000원",
      en: "Monthly 2,000,000 KRW",
    },
    recruit: {
      ko: "상시채용",
      en: "regular employment",
    },
  },
  {
    title: "롯데리아 여수중앙점",
    content: {
      ko: "햄버거 조립 및 판매",
      en: "Assembling and selling hamburgers",
    },
    schedule: {
      ko: "일/금/토 <br/> 10:00 ~ 22:00",
      en: "Sun/Fri/Sat <br/> 10:00 to 22:00",
    },
    pay: {
      ko: "시급 9,860원",
      en: "Hourly 9,860 KRW",
    },
    recruit: {
      ko: "채용시 마감",
      en: "Deadline for recruitment",
    },
  },
  {
    title: "성호반점",
    content: {
      ko: "주방 실장 업무",
      en: "a kitchen manager's job",
    },
    schedule: {
      ko: "일/월/화/수/금/토 <br/> 09:00 ~ 20:30",
      en: "Sun/Mon/Tue/Wed/Fri/Sat <br/> 09:00-20:30",
    },
    pay: {
      ko: "월급 4,000,000원",
      en: "Monthly 4,000,000 KRW",
    },
    recruit: {
      ko: "상시 채용",
      en: "regular employment",
    },
  },
];