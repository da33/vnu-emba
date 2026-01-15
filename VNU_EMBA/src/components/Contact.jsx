import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact" style={{ backgroundColor: 'var(--secondary)', padding: '6rem 0' }}>
            <div className="container">
                <div style={{
                    backgroundColor: 'var(--primary)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: 'var(--radius-lg, 2rem)',
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
                }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>

                        {/* Info Side */}
                        <div style={{ flex: '1 1 350px', padding: 'clamp(2rem, 5vw, 4rem)', backgroundColor: 'var(--accent)', color: 'var(--primary)' }}>
                            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1.5rem', lineHeight: '1.2' }}>開始您的<br />卓越旅程</h2>
                            <p style={{ marginBottom: '3rem', opacity: 0.9, fontWeight: '500', fontSize: '1rem', lineHeight: '1.6' }}>
                                填寫表單，我們的專業顧問將於 24 小時內與您聯繫。
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ backgroundColor: 'rgba(10,25,47,0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', opacity: 0.7 }}>諮詢專線</div>
                                        <div style={{ fontWeight: '900', fontSize: '1.1rem' }}>(03) 451-5811</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ backgroundColor: 'rgba(10,25,47,0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', opacity: 0.7 }}>電子郵件</div>
                                        <div style={{ fontWeight: '900', fontSize: '1.1rem' }}>emba@vnu.edu.tw</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ backgroundColor: 'rgba(10,25,47,0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', opacity: 0.7 }}>校區地址</div>
                                        <div style={{ fontWeight: '900', fontSize: '1rem' }}>桃園市中壢區萬能路 1 號</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div style={{ flex: '1.5 1 450px', padding: 'clamp(2rem, 5vw, 4rem)', position: 'relative' }}>
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
                                >
                                    <CheckCircle size={64} color="var(--accent)" style={{ marginBottom: '2rem' }} />
                                    <h3 style={{ fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>諮詢已申請</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>感謝您的感興趣，顧問將盡快與您聯繫。</p>
                                </motion.div>
                            ) : (
                                <form style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }} onSubmit={handleSubmit}>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                            <label style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>您的姓名</label>
                                            <input required type="text" placeholder="王大明" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 0', color: 'white', outline: 'none', fontSize: '1rem' }} className="form-input" />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                            <label style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>聯絡電話</label>
                                            <input required type="tel" placeholder="0912-345-678" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 0', color: 'white', outline: 'none', fontSize: '1rem' }} className="form-input" />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        <label style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>公司名稱 / 職稱</label>
                                        <input required type="text" placeholder="OO 科技 總經理" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 0', color: 'white', outline: 'none', fontSize: '1rem' }} className="form-input" />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        <label style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>諮詢內容</label>
                                        <textarea rows="3" placeholder="請簡單描述您的需求..." style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 0', color: 'white', outline: 'none', fontSize: '1rem', resize: 'none' }} className="form-input"></textarea>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        style={{
                                            backgroundColor: 'var(--accent)',
                                            color: 'var(--primary)',
                                            padding: '1.25rem 3.5rem',
                                            borderRadius: '2px',
                                            fontWeight: '900',
                                            fontSize: '1rem',
                                            width: 'fit-content',
                                            marginTop: '1rem',
                                            boxShadow: '0 10px 30px rgba(197, 160, 89, 0.2)'
                                        }}
                                    >
                                        送出諮詢申請
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .form-input:focus {
                    border-bottom: 1px solid var(--accent) !important;
                }
                @media (max-width: 768px) {
                    #contact .container { padding: 0 !important; }
                    #contact > .container > div { border-radius: 0 !important; border: none !important; }
                }
            ` }} />
        </section>
    );
};

export default Contact;
