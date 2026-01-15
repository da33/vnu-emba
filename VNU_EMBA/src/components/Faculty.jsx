import React from 'react';
import { motion } from 'framer-motion';

const Faculty = () => {
    const professors = [
        {
            name: "李粵強",
            title: "教授級專技人員",
            role: "核心管理大師",
            image: "/fac-1.png",
            specialty: "企業戰略、組織行為"
        },
        {
            name: "歐陽炳昌",
            title: "副教授",
            role: "財務金融專家",
            image: "/fac-2.png",
            specialty: "資本市場、公司理財"
        },
        {
            name: "林建勳",
            title: "特聘導師",
            role: "AI 數位轉型顧問",
            image: "/fac-3.png",
            specialty: "生成式 AI、數位決策"
        },
        {
            name: "張雅婷",
            title: "特聘導師",
            role: "永續經營專家",
            image: "/fac-4.png",
            specialty: "ESG 策略、綠色財務"
        },
        {
            name: "陳永盛",
            title: "教授",
            role: "航空物流標竿",
            image: "/fac-5.png",
            specialty: "航空城經營、冷鏈管理"
        }
    ];

    return (
        <section id="faculty" style={{ backgroundColor: 'var(--primary)', padding: '12rem 0' }}>
            <div className="container">
                <div style={{ marginBottom: '8rem', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <span style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '0.5em' }}>WORLD-CLASS ELITE</span>
                        <h2 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'white', marginTop: '1.5rem', lineHeight: '1.1' }}>
                            精英<span className="gold-gradient-text" style={{ fontStyle: 'italic' }}>師資</span>
                        </h2>
                    </motion.div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '4rem',
                    justifyContent: 'center'
                }}>
                    {professors.map((prof, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ textAlign: 'center' }}
                            className="interactive"
                        >
                            <div style={{
                                width: '240px',
                                height: '240px',
                                margin: '0 auto 2.5rem',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '2px solid var(--accent)',
                                padding: '8px',
                                backgroundColor: 'transparent'
                            }}>
                                <motion.img
                                    src={prof.image}
                                    alt={prof.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '50%'
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                />
                            </div>
                            <h3 style={{ fontSize: '1.75rem', color: 'white', marginBottom: '0.5rem' }}>{prof.name}</h3>
                            <div style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>{prof.title}</div>
                            <div style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: '500', marginBottom: '0.5rem' }}>{prof.role}</div>
                            <div style={{
                                padding: '0.5rem 1rem',
                                border: '1px solid rgba(197, 160, 89, 0.2)',
                                display: 'inline-block',
                                borderRadius: '20px',
                                fontSize: '0.75rem',
                                color: 'var(--text-secondary)'
                            }}>
                                {prof.specialty}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faculty;
