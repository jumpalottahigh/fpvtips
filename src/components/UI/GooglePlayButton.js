import React from 'react'

import googlePlayBadge from '../../assets/google-play-badge.png'

const GooglePlayButton = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <a
      style={{ marginTop: '1rem', display: 'flex' }}
      href="https://play.google.com/store/apps/details?id=com.fpvtips"
      target="_blank"
      rel="noopener noreferrer"
      title="Link to FPVTIPS on GooglePlay"
    >
      <img
        style={{ maxWidth: '11rem' }}
        src={googlePlayBadge}
        alt="GooglePlay badge"
      />
    </a>
  </div>
)

export default GooglePlayButton
