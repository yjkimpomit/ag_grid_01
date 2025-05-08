import React from 'react';
import '../../assets/styles/pages/about.css';

const About = () => {
  return (
    <div className="dashboard-container" style={{ padding: '2rem' }}>
      <h2>회사 소개</h2>
      <p>
        저희 웹사이트는 사용자에게 최고의 경험을 제공하기 위해 만들어졌습니다.  
        최신 기술을 바탕으로 빠르고 안전하며 직관적인 서비스를 제공하고 있습니다.
      </p>

      <section style={{ marginTop: '2rem' }}>
        <h3>주요 기능</h3>
        <ul>
          <li>반응형 UI 제공</li>
          <li>사용자 맞춤 설정 지원</li>
          <li>안정적인 보안 시스템</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>연락처</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: 02-1234-5678</p>
      </section>
    </div>
  );
};

export default About;
