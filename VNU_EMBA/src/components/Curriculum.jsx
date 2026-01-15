import React from 'react';
import { motion } from 'framer-motion';

const Curriculum = () => {
    const courses = [
        {
            id: "01",
            tag: "STRATEGY",
            title: "國門航空城大戰略",
            desc: "剖析全球空運樞紐商業模式，掌握地緣政治下的跨境商務佈局與區域經濟優勢。",
            image: "/cur-strategy.png"
        },
        {
            id: "02",
            tag: "AI TRANSFORMATION",
            title: "AI 賦能決策系統",
            desc: "導入生成式 AI 輔助企業營運，從財務預測到行銷自動化，全面升級管理效能。",
            image: "/cur-ai.png"
        },
        {
            id: "03",
            tag: "ESG SUSTAINABILITY",
            title: "零碳排放與永續商模",
            desc: "應對全球淨零挑戰，引導企業建立綠色供應鏈，提升品牌在國際碳稅環境下的生存力。",
            image: "/cur-esg.png"
        }
    ];

    return (
        <section id="curriculum" style={{ backgroundColor: 'var(--primary)', padding: '12rem 0' }}>
            <div className="container">
                <div style={{ marginBottom: '8rem', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '0.5em' }}>PREMIUM MODULES</span>
                        <h2 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'white', marginTop: '1.5rem', lineHeight: '1.1' }}>
                            核心學程<span className="gold-gradient-text">核心體系</span>
                        </h2>
                        <div style={{ width: '80px', height: '2px', backgroundColor: 'var(--accent)', margin: '3rem auto' }}></div>
                    </motion.div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="interactive"
                            style={{
                                position: 'relative',
                                width: '100%',
                                minHeight: '600px',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                border: '1px solid rgba(197, 160, 89, 0.4)', // 加強邊框
                                borderRadius: '4px',
                                cursor: 'none' // 確保自定義游標接管
                            }}
                        >
                            {/* Background Image - BRIGHTER & MORE VIBRANT */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    zIndex: 0
                                }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.8 }}
                            >
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'brightness(0.6) contrast(1.1) saturate(1.2)' // 大幅調亮亮度 (0.25 -> 0.6)
                                    }}
                                />
                                {/* Brighter Gradient - Only Darken where text is */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%)'
                                }}></div>
                            </motion.div>

                            {/* Content Over Background */}
                            <div style={{
                                position: 'relative',
                                zIndex: 2,
                                padding: '4rem',
                                maxWidth: '750px',
                                pointerEvents: 'none'
                            }}>
                                <motion.div
                                    style={{
                                        fontSize: '12rem', // ID 更大家
                                        fontWeight: '900',
                                        color: 'var(--accent)',
                                        opacity: 0.15,
                                        fontFamily: 'Playfair Display',
                                        lineHeight: 1,
                                        position: 'absolute',
                                        top: '-2rem',
                                        left: '0',
                                        zIndex: -1
                                    }}
                                >{course.id}</motion.div>

                                <div style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '1.1rem', letterSpacing: '0.4em', marginBottom: '1.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{course.tag}</div>
                                <h3 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'white', marginBottom: '2rem', fontWeight: '900', textShadow: '0 4px 10px rgba(0,0,0,0.8)' }}>{course.title}</h3>
                                <p style={{ fontSize: '1.4rem', color: '#F8FAFC', lineHeight: '1.8', fontWeight: '500', maxWidth: '600px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{course.desc}</p>

                                <div style={{
                                    marginTop: '4rem',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '1.5rem',
                                    padding: '1.2rem 2.5rem',
                                    border: '2px solid var(--accent)',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    letterSpacing: '0.2em',
                                    backgroundColor: 'rgba(197, 160, 89, 0.2)',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                                }}>
                                    LEARN MORE <span style={{ fontSize: '1.5rem' }}>→</span>
                                </div>
                            </div>

                            {/* Accent line with GLOW */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '6px',
                                height: '100%',
                                backgroundColor: 'var(--accent)',
                                boxShadow: '0 0 30px var(--accent)'
                            }}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Curriculum;
