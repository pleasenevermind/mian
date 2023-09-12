import React from 'react'
import './index.css'
import PhoneIcon from '../../Assets/phone.png'
import LocationIcon from '../../Assets/locationIcon.png'
export default function Footer() {
  return (
    <div className='footer'>
      <div className="lp-spacing">
        <div className="footer-container">
          <div className="footer-item">
            <p style={{
              fontSize: '20px',
              fontWeight: '600'
            }}>Our Contacts</p>
            <p className='footer-item-nmbr'><img src={PhoneIcon} style={{ height: '20px', marginRight: '10px', width: '20px' }}></img>+92 321 5150638</p>
            <p className='footer-item-email'><i className="fas fa-envelope"></i>hr@miantravelandtours.com</p>
          </div>
          <div className="footer-item">
            <p style={{
              fontSize: '20px',
              fontWeight: '600'
            }}>Our Branches</p>
            <div style={{
              margin:'10px 0px'
            }}><img src={LocationIcon} style={{height:'20px', width:'20px', marginRight:'10px'}}/><span className='footer-item-adress'>Office No. 304, 3rd Floor Al Safa Heights-1, F-11 Markaz, Islamabad</span></div>
            <div style={{
              margin:'10px 0px'
            }}><img src={LocationIcon} style={{height:'20px', width:'20px', marginRight:'10px'}}/><span className='footer-item-adress'>Main Road No.2, Office No.7 Khyber 4, 1st Floor G-15 Markaz, Islamabad</span></div>
          </div>
          <div className="footer-item-last">
            <p style={{
              fontSize: '20px',
              fontWeight: '600'
            }}>Our Social Profiles</p>
            <a href="https://www.instagram.com/miantravelandtour/">
              <i className="fab fa-instagram"></i><p className='icon-text'>Instagram</p><br className='rowBreak'/>
            </a>
            <a href="https://www.facebook.com/miantravelandtours61/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0e">
              <i className="fab fa-facebook"></i><p className='icon-text'>Facebook</p><br className='rowBreak'/>
            </a>
            <a href="https://www.youtube.com/@MianTravelandTours-qt9le">
              <i className="fab fa-youtube"></i><p className='icon-text'>Youtube</p><br className='rowBreak'/>
            </a>
            <a href="https://www.tiktok.com/@miantravelandtours111?_t=8bZH7FocvWE&_r=1">
              <i className="fab fa-tiktok"></i><p className='icon-text'>Tiktok</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
