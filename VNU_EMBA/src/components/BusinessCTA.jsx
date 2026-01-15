import React from 'react';
import { motion } from 'framer-motion';

const BusinessCTA = () => {
    return (
        <section style={{
            position: 'relative',
            padding: '12rem 0',
            backgroundColor: '#050A14',
            overflow: 'hidden'
        }}>
            {/* Background Aesthetic - Using Gradients & Patterns as Image Tool is exhausted */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 70% 30%, rgba(197, 160, 89, 0.15) 0%, transparent 60%)',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '6rem',
                    alignItems: 'center'
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{
                            color: 'var(--accent)',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            letterSpacing: '0.5em',
                            display: 'block',
                            marginBottom: '2rem'
                        }}>FOR DECISION MAKERS</span>

                        <h2 style={{
                            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                            color: 'white',
                            lineHeight: '1.1',
                            fontWeight: '900',
                            marginBottom: '2.5rem'
                        }}>
                            領袖視野<br />
                            <span className="gold-gradient-text">重構企業基因</span>
                        </h2>

                        <p style={{
                            fontSize: '1.35rem',
                            color: '#94A3B8',
                            lineHeight: '1.8',
                            marginBottom: '4rem',
                            maxWidth: '600px'
                        }}>
                            萬能大學 EMBA 不僅是學術殿堂，更是深耕「國門航空城」戰略佈局的核心節點。
                            我們為企業主提供專屬的策略轉型路徑，對接頂級產學資源，助您在變動時代中穩舵航行。
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                            <motion.button
                                className="interactive"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '1.5rem 3rem',
                                    backgroundColor: 'var(--accent)',
                                    color: 'black',
                                    border: 'none',
                                    fontWeight: '900',
                                    fontSize: '1.1rem',
                                    letterSpacing: '0.1em',
                                    boxShadow: '0 10px 30px rgba(197, 160, 89, 0.3)'
                                }}
                            >
                                預約專屬諮詢
                            </motion.button>

                            <motion.button
                                className="interactive"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '1.5rem 3rem',
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    fontWeight: '900',
                                    fontSize: '1.1rem',
                                    letterSpacing: '0.1em'
                                }}
                            >
                                企業合作專案
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        style={{ position: 'relative' }}
                    >
                        {/* Decorative Element */}
                        <div style={{
                            width: '100%',
                            aspectRatio: '1',
                            border: '1px solid rgba(197, 160, 89, 0.2)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}>
                            <div style={{
                                width: '80%',
                                aspectRatio: '1',
                                border: '1px solid rgba(197, 160, 89, 0.4)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{
                                    width: '60%',
                                    aspectRatio: '1',
                                    backgroundColor: 'rgba(197, 160, 89, 0.05)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid var(--accent)',
                                    boxShadow: '0 0 50px rgba(197, 160, 89, 0.2)'
                                }}>
                                    <div style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--accent)' }}>VNU</div>
                                    <div style={{ color: 'white', fontWeight: 'bold', letterSpacing: '0.2em', fontSize: '1rem' }}>EMBA ELITE</div>
                                </div>
                            </div>

                            {/* Orbiting Elements */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '50%',
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: 'var(--accent)',
                                    borderRadius: '50%',
                                    transform: 'translateX(-50%)',
                                    boxShadow: '0 0 20px var(--accent)'
                                }}></div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom accent line */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, var(--accent), transparent)'
            }}></div>
        </section>
    );
};

export default BusinessCTA;
