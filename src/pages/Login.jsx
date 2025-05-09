import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/pages/login.css';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		// 간단한 로그인 검증 (실제 로그인 로직은 서버와 연동 필요)
		if (username === 'admin' && password === '!@#qwe') {
			navigate('/admin/dashboard'); // 로그인 성공 시 대시보드로 리디렉션
		} else {
			setError('잘못된 사용자 이름 또는 비밀번호입니다.');
		}
	};
	
	return (
		<div className="login-container">

			<div className="login-box">
				<h1 className="logo">
					<span className="visually-hidden">포미트</span>
					<span>로그인</span>
				</h1>
				{error && <p style={{ color: 'red' }}>{error}</p>}
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="username">사용자 이름</label>
						<input
							type="text"
							id="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
							autoComplete="username"  // 현재 비밀번호에 대한 자동 완성
						/>
					</div>
					<div>
						<label htmlFor="password">비밀번호</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							autoComplete="current-password"  // 현재 비밀번호에 대한 자동 완성
						/>
					</div>
					<button type="submit">로그인</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
