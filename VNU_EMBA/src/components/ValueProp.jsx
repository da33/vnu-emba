import React from 'react';
import { motion } from 'framer-motion';

const ValueProp = () => {
    const values = [
        {
            title: "全球國門視野",
            subtitle: "Global Hub Perspective",
            desc: "立足桃園航空城，連接全球經貿動脈。透過跨境戰略分析與產業考察，讓您在變局中精準掌握全球商情。",
            image: "/value-global.png"
        },
        {
            title: "終身精英脈絡",
            subtitle: "Alumni Network for Life",
            desc: "萬能校友圈匯聚數千位企業主與高階經理人。透過師徒制傳承與定期商會運作，建立最具含金量的人脈資產。",
            image: "/value-network.png"
        },
        {
            title: "實戰價值轉換",
            subtitle: "Actionable Results",
            desc: "捨棄純理論教學。我們專注於「問題解決型」課程，引導學員將企業經營痛點轉化為營運增長動能。",
            image: "/value-practical.png"
        }
    ];

    return (
        <section id="about" style={{ backgroundColor: 'var(--primary)', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15rem' }}>
                    {values.map((item, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '8rem'
                        }}>
                            {/* Image Side - Floating with Deep Shadow */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                style={{ flex: '1 1 500px', position: 'relative' }}
                            >
                                <div style={{
                                    width: '100%',
                                    aspectRatio: '16/10',
                                    overflow: 'hidden',
                                    boxShadow: '0 50px 100px rgba(0,0,0,0.6)',
                                    border: '1px solid var(--glass-border)'
                                }}>
                                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                {/* Decorative Element */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-2rem',
                                    [index % 2 === 0 ? 'left' : 'right']: '-2rem',
                                    width: '150px',
                                    height: '150px',
                                    border: '1px solid var(--accent)',
                                    zIndex: -1,
                                    opacity: 0.3
                                }} className="md\:flex"></div>
                            </motion.div>

                            {/* Content Side */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                style={{ flex: '1 1 400px' }}
                            >
                                <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 'bold', letterSpacing: '0.4em', marginBottom: '1.5rem', textTransform: 'uppercase' }}>{item.subtitle}</div>
                                <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'white', marginBottom: '2.5rem', lineHeight: '1.1' }}>
                                    {item.title.split('')[0]}<span className="gold-gradient-text">{item.title.slice(1)}</span>
                                </h2>
                                <p style={{ fontSize: '1.125rem', lineHeight: '2', color: 'var(--text-secondary)' }}>
                                    {item.desc}
                                </p>

                                <motion.div
                                    style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', gap: '1.5rem', cursor: 'pointer' }}
                                    whileHover={{ x: 10 }}
                                >
                                    <div style={{ width: '50px', height: '1px', backgroundColor: 'var(--accent)' }}></div>
                                    <span style={{ fontSize: '0.875rem', fontWeight: 'bold', color: 'white', letterSpacing: '0.2em' }}>EXPLORE DEPTH</span>
                                </motion.div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProp;
