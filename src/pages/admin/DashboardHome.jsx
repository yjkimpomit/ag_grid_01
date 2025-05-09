import React from 'react';
import { Link } from 'react-router-dom';

// 머티리얼 아이콘
import PeopleIcon from '@mui/icons-material/People';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShowChartIcon from '@mui/icons-material/ShowChart';

import StatisticsSummary from '../../components/StatisticsSummary';
import '../../assets/styles/pages/dashboard.css';

const DashboardHome = () => {
	// 예시로 아이콘에 이모지 사용
	const adminStats = [
		{ metric: '총 회원 수', value: 12345, icon: <PeopleIcon fontSize="large" /> },
		{ metric: '신규 가입자', value: 234, icon: <PersonAddIcon fontSize="large" /> },
		{ metric: '월간 매출', value: '₩12,345,678', icon: <AttachMoneyIcon fontSize="large" /> },
		{ metric: '주간 방문자', value: 5678, icon: <ShowChartIcon fontSize="large" /> },
	];

	return (
		<div className="dashboard-container">

			{/* 콘텐츠 영역 (우측) */}
			<h1>통계요약</h1>
			<p>여기에 통계요약 콘텐츠가 표시됩니다.</p>
			{/* 추가적인 콘텐츠를 여기에 추가할 수 있습니다. */}

			<StatisticsSummary stats={adminStats} title="관리자 통계 요약" />
			
			<Link to="/admin/dashboard" className="btn btn-primary">대시보드</Link>
		</div>
	);
};

export default DashboardHome;
