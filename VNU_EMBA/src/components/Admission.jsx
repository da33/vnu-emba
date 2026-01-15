import React from 'react';
import { motion } from 'framer-motion';

const Admission = () => {
    const timeline = [
        { date: "2024.11", event: "招生簡章公告", desc: "發布年度招募計畫與甄試細項" },
        { date: "2025.01", event: "第一階段報名開始", desc: "開放線上報名系統與書面資料上傳" },
        { date: "2025.03", event: "專家面試審查", desc: "由系所教授與業界專家進行深度訪談" },
        { date: "2025.05", event: "正式錄取公告", desc: "發布錄取名單與寄發入學通知" },
        { date: "2025.09", event: "卓越領袖開訓", desc: "正式展開 EMBA 精英學習旅程" },
    ];

    return (
        <section id="admission" style={{ backgroundColor: 'var(--secondary)', padding: '10rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.875rem', letterSpacing: '0.4em' }}>ADMISSION</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', marginTop: '1.5rem' }}>報名<span className="gold-gradient-text">時程</span></h2>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', padding: '0 1rem' }}>
                    {/* Central Line - Only on larger screens */}
                    <div className="md\:flex" style={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        bottom: 0,
                        width: '1px',
                        backgroundColor: 'rgba(197, 160, 89, 0.3)',
                        transform: 'translateX(-50%)'
                    }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    position: 'relative',
                                    zIndex: 1
                                }}
                            >
                                <div style={{
                                    backgroundColor: 'var(--accent)',
                                    color: 'var(--primary)',
                                    padding: '0.5rem 1.5rem',
                                    fontWeight: '900',
                                    fontSize: '0.875rem',
                                    marginBottom: '1rem',
                                    borderRadius: '2px'
                                }}>
                                    {item.date}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '0.5rem' }}>{item.event}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '300px' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admission;
