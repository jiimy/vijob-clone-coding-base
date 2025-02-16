'use client';
// pages/job/[id].tsx
// import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';

const JobDetail = () => {
  const params = useParams();
  // const router = useRouter();
  // const { id } = router.query;
  console.log('job detail: ', params);

  return (
    <div>
      {/* <h1>{lang === 'ko' ? '직업 상세 정보' : 'Job Details'}</h1> */}
      {/* <p>{lang === 'ko' ? `ID: ${id}의 직업 정보` : `Job information for ID: ${id}`}</p> */}
      <button>지원하러 가기</button>
    </div>
  );
};

export default JobDetail;
