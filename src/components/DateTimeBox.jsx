import { useState, useEffect } from 'react';
import '../assets/styles/components/datetime.css';

function DateTimeBox() {
	const [now, setNow] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => setNow(new Date()), 1000);
		return () => clearInterval(timer); // 언마운트 시 정리
	}, []);

	// 날짜 포맷: YYYY-MM-DD
	const formattedDate = now
		.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
		.replace(/\. /g, '-')
		.replace('.', '');

	// 요일 포맷: 월, 화, 수, ...
	const weekdayKorean = ['일', '월', '화', '수', '목', '금', '토'][now.getDay()];

	// 시간: HH:MM:SS (항상 2자리로)
	const pad = (n) => n.toString().padStart(2, '0');
	const formattedTime = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

	return (
		<div className="datetime">
			<strong>TODAY</strong>
			<span className="date">{formattedDate}</span>
			<span className="day">{weekdayKorean}</span>
			<span className="time">{formattedTime}</span>
		</div>
	);
}

export default DateTimeBox;
