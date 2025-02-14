// pages/job/[id].tsx
import { useLang } from '@/context/LanguageContext';
// import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';

const JobDetail = () => {
  const params = useParams<{ id: string }>();
  const { lang } = useLang();
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <div>
      {/* <h1>{lang === 'ko' ? '직업 상세 정보' : 'Job Details'}</h1> */}
      {/* <p>{lang === 'ko' ? `ID: ${id}의 직업 정보` : `Job information for ID: ${id}`}</p> */}
    </div>
  );
};

export default JobDetail;
