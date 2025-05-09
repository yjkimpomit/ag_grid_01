/* components/StatisticsSummary.jsx */
/**
 * 재사용 가능한 통계 요약 카드 컴포넌트
 * @param {Array} stats - [{ metric: '지표명', value: '값', icon?: <IconComponent /> }]
 * @param {string} title - 상단 제목
 */
function StatisticsSummary({ stats, title = '통계 요약' }) {
  return (
    <div style={{marginBottom: 20}}>
      <h2>{title}</h2>
      <div className="statistics-summary" style={{ display: 'flex', gap: 20 }}>
        {stats.map(({ metric, value, icon }, idx) => (
          <div key={metric + idx} style={{
            flex: 1,
            padding: 20,
            border: '1px solid #ccc',
            borderRadius: 8,
            backgroundColor: '#f9f9f9',
            textAlign: 'center',
            minWidth: 120,
          }}>
            {icon && <div style={{ marginBottom: 8 }}>{icon}</div>}
            <h3 style={{ margin: 0, fontSize: 18 }}>{metric}</h3>
            <p style={{ margin: '10px 0 0', fontSize: 24, fontWeight: 'bold' }}>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatisticsSummary;
