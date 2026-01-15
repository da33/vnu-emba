import React from 'react';
import { motion } from 'framer-motion';

const Alumni = () => {
    const alumniList = [
        {
            name: "徐常榆",
            role: "博雅科技股份有限公司 總經理 / 創辦人",
            quote: "在萬能 EMBA，我不僅獲得了前瞻的管理知識，更建立了一個能夠支撐企業擴張的戰略人脈網。",
            tag: "資訊科技領域"
        },
        {
            name: "彭艷婷",
            role: "賽搏大樹未來工作室 執行長",
            quote: "跨領域的學習環境，讓我能以商業視角重新審視技術開發，讓創業之路走得更穩健。",
            tag: "文創數位領域"
        },
        {
            name: "覃櫟芳",
            role: "立煌企管顧問股份有限公司 負責人",
            quote: "這裡的實戰學程讓我學會如何轉化經營痛點為增長動能，回饋給我的諮詢客戶。",
            tag: "專業服務領域"
        }
    ];

    return (
        <section id="alumni" style={{ backgroundColor: 'var(--secondary)', padding: '10rem 0' }}>
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>

                    {/* Visual Side */}
                    <div style={{ flex: '1 1 500px' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            style={{ position: 'relative' }}
                        >
                            <div style={{
                                width: '100%',
                                aspectRatio: '4/5',
                                overflow: 'hidden',
                                border: '1px solid var(--accent)',
                                padding: '1rem',
                                backgroundColor: 'var(--primary)'
                            }}>
                                <img
                                    src="/alumni-1.png"
                                    alt="Successful Alumni"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div className="md\:flex" style={{
                                position: 'absolute',
                                bottom: '-2rem',
                                right: '-2rem',
                                width: '200px',
                                height: '200px',
                                backgroundColor: 'var(--accent)',
                                zIndex: -1,
                                opacity: 0.1
                            }}></div>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div style={{ flex: '1.2 1 400px' }}>
                        <span style={{ color: 'var(--accent)', fontWeight: 'bold', letterSpacing: '0.2em', fontSize: '0.9rem' }}>ALUMNI SUCCESS</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', marginTop: '1rem', marginBottom: '4rem' }}>
                            畢業<span className="gold-gradient-text">校友證言</span>
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            {alumniList.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '2rem' }}
                                >
                                    <div style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.tag}</div>
                                    <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.5rem' }}>{item.name} <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '400' }}>/ {item.role}</span></h3>
                                    <p style={{ fontStyle: 'italic', fontSize: '1rem', lineHeight: '1.8' }}>「{item.quote}」</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Alumni;
