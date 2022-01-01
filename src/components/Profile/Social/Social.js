import React from 'react'
import IcTwitter from '../../../images/icons/twitter.svg'
import IcFacebook from '../../../images/icons/facebook.svg'
import IcInstagram from '../../../images/icons/instagram.svg'
import IcLinkedin from '../../../images/icons/linkedin.svg'
import './Social.scss'

const socialMedia = [
    {
        icon: <IcTwitter />,
        link: "https://twitter.com/"
    },
    {
        icon: <IcFacebook />,
        link: "https://www.facebook.com//"
    },
    {
        icon: <IcInstagram />,
        link: "https://www.instagram.com/"
    },
    {
        icon: <IcLinkedin />,
        link: "https://www.instagram.com/"
    },
]

export default function Social() {
    return (
        <div className="social">            
            {socialMedia.map((social, index) => (
                <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                {social.icon}
                </a>
            ))}
        </div>
    )
}
