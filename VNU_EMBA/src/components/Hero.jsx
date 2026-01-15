import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <section style={{
            minHeight: '100vh',
            height: 'auto',
            paddingTop: '100px', // Header protection
            paddingBottom: '80px',
            backgroundColor: 'var(--primary)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            position: 'relative'
        }}>
            {/* Background Image - Parallax */}
            <motion.div
                style={{
                    position: 'absolute',
                    inset: '-5%',
                    backgroundImage: 'url(/hero-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    y: y1,
                    filter: 'brightness(0.25) saturate(1.1)',
                    zIndex: 0
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ width: '100%', maxWidth: '900px' }}
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '60px' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            style={{ height: '2px', backgroundColor: 'var(--accent)', margin: '0 auto 2rem' }}
                        />
                        <span style={{ color: 'var(--accent)', letterSpacing: '0.4em', fontWeight: 'bold', fontSize: '0.75rem', textTransform: 'uppercase' }}>VANUNG UNIVERSITY EMBA</span>

                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 10vw, 5.5rem)',
                            color: 'white',
                            marginTop: '1.5rem',
                            lineHeight: '1.1',
                            fontWeight: '900',
                            wordBreak: 'keep-all'
                        }}>
                            坐擁航空城<br />
                            <span className="gold-gradient-text" style={{ display: 'block', padding: '0.5rem 0' }}>領航企業巔峰</span>
                        </h1>

                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                            marginTop: '2rem',
                            maxWidth: '650px',
                            lineHeight: '1.8',
                            marginRight: 'auto',
                            marginLeft: 'auto'
                        }}>
                            我們在地處國門關鍵樞紐，結合跨界戰略與真實產值，<br className="md\:flex" />
                            為領航者重新定義成功的維度。
                        </p>

                        <div style={{ marginTop: '4rem' }}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    backgroundColor: 'var(--accent)',
                                    color: 'var(--primary)',
                                    padding: '1.25rem 3.5rem',
                                    borderRadius: '0',
                                    fontWeight: '900',
                                    fontSize: '1rem',
                                    letterSpacing: '0.1em'
                                }}
                            >
                                立即申請諮詢
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Numeric Badge - Desktop only */}
                    <motion.div
                        style={{
                            marginTop: '6rem',
                            border: '1px solid rgba(197, 160, 89, 0.4)',
                            padding: '1.5rem 3rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                        className="md\:flex animate-float"
                    >
                        <div style={{ fontSize: '4rem', color: 'var(--accent)', fontWeight: '900', lineHeight: '1' }}>115</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.2em', marginTop: '0.5rem' }}>ANNUAL ADMISSION</div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="md\:flex" style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, var(--accent), transparent)' }}></div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .md\\:flex { display: none !important; }
                }
            ` }} />
        </section>
    );
};

export default Hero;
